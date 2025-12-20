import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { createSendPigeon, SendPigeonError } from "./index.js";

describe("createSendPigeon", () => {
	it("returns client with send method", () => {
		const client = createSendPigeon("test-api-key");
		expect(client.send).toBeDefined();
		expect(typeof client.send).toBe("function");
	});

	it("accepts string config", () => {
		const client = createSendPigeon("test-api-key");
		expect(client).toBeDefined();
	});

	it("accepts object config", () => {
		const client = createSendPigeon({
			apiKey: "test-api-key",
			baseUrl: "https://custom.api.com",
		});
		expect(client).toBeDefined();
	});
});

describe("send", () => {
	const mockFetch = vi.fn();

	beforeEach(() => {
		vi.stubGlobal("fetch", mockFetch);
	});

	afterEach(() => {
		vi.unstubAllGlobals();
		mockFetch.mockReset();
	});

	it("makes POST to /v1/emails", async () => {
		mockFetch.mockResolvedValueOnce({
			ok: true,
			json: () => Promise.resolve({ id: "email-123", status: "pending" }),
		});

		const client = createSendPigeon("test-key");
		await client.send({
			from: "test@example.com",
			to: "recipient@example.com",
			subject: "Test",
			html: "<p>Hello</p>",
		});

		expect(mockFetch).toHaveBeenCalledWith(
			"https://api.sendpigeon.dev/v1/emails",
			expect.objectContaining({
				method: "POST",
			}),
		);
	});

	it("includes Authorization header", async () => {
		mockFetch.mockResolvedValueOnce({
			ok: true,
			json: () => Promise.resolve({ id: "email-123", status: "pending" }),
		});

		const client = createSendPigeon("my-secret-key");
		await client.send({
			from: "test@example.com",
			to: "recipient@example.com",
			subject: "Test",
			html: "<p>Hello</p>",
		});

		expect(mockFetch).toHaveBeenCalledWith(
			expect.any(String),
			expect.objectContaining({
				headers: expect.objectContaining({
					Authorization: "Bearer my-secret-key",
				}),
			}),
		);
	});

	it("sets idempotency-key header when provided", async () => {
		mockFetch.mockResolvedValueOnce({
			ok: true,
			json: () => Promise.resolve({ id: "email-123", status: "pending" }),
		});

		const client = createSendPigeon("test-key");
		await client.send(
			{
				from: "test@example.com",
				to: "recipient@example.com",
				subject: "Test",
				html: "<p>Hello</p>",
			},
			{ idempotencyKey: "unique-key-123" },
		);

		expect(mockFetch).toHaveBeenCalledWith(
			expect.any(String),
			expect.objectContaining({
				headers: expect.objectContaining({
					"idempotency-key": "unique-key-123",
				}),
			}),
		);
	});

	it("uses custom baseUrl", async () => {
		mockFetch.mockResolvedValueOnce({
			ok: true,
			json: () => Promise.resolve({ id: "email-123", status: "pending" }),
		});

		const client = createSendPigeon({
			apiKey: "test-key",
			baseUrl: "https://custom.api.com",
		});
		await client.send({
			from: "test@example.com",
			to: "recipient@example.com",
			subject: "Test",
			html: "<p>Hello</p>",
		});

		expect(mockFetch).toHaveBeenCalledWith(
			"https://custom.api.com/v1/emails",
			expect.any(Object),
		);
	});

	it("returns email response", async () => {
		mockFetch.mockResolvedValueOnce({
			ok: true,
			json: () =>
				Promise.resolve({
					id: "email-123",
					status: "pending",
					suppressed: ["blocked@example.com"],
				}),
		});

		const client = createSendPigeon("test-key");
		const result = await client.send({
			from: "test@example.com",
			to: "recipient@example.com",
			subject: "Test",
			html: "<p>Hello</p>",
		});

		expect(result).toEqual({
			id: "email-123",
			status: "pending",
			suppressed: ["blocked@example.com"],
		});
	});
});

describe("SendPigeonError", () => {
	it("has status property", () => {
		const error = new SendPigeonError("Not found", 404);
		expect(error.status).toBe(404);
		expect(error.message).toBe("Not found");
		expect(error.name).toBe("SendPigeonError");
	});
});

describe("error handling", () => {
	const mockFetch = vi.fn();

	beforeEach(() => {
		vi.stubGlobal("fetch", mockFetch);
	});

	afterEach(() => {
		vi.unstubAllGlobals();
		mockFetch.mockReset();
	});

	it("throws SendPigeonError for non-2xx responses", async () => {
		mockFetch.mockResolvedValueOnce({
			ok: false,
			status: 401,
			json: () => Promise.resolve({ message: "Invalid API key" }),
		});

		const client = createSendPigeon("bad-key");

		await expect(
			client.send({
				from: "test@example.com",
				to: "recipient@example.com",
				subject: "Test",
				html: "<p>Hello</p>",
			}),
		).rejects.toThrow(SendPigeonError);
	});

	it("includes error message from response", async () => {
		mockFetch.mockResolvedValueOnce({
			ok: false,
			status: 400,
			json: () => Promise.resolve({ message: "Invalid email format" }),
		});

		const client = createSendPigeon("test-key");

		try {
			await client.send({
				from: "test@example.com",
				to: "recipient@example.com",
				subject: "Test",
				html: "<p>Hello</p>",
			});
		} catch (e) {
			expect(e).toBeInstanceOf(SendPigeonError);
			expect((e as SendPigeonError).message).toBe("Invalid email format");
			expect((e as SendPigeonError).status).toBe(400);
		}
	});

	it("handles json parse failure", async () => {
		mockFetch.mockResolvedValueOnce({
			ok: false,
			status: 500,
			json: () => Promise.reject(new Error("Invalid JSON")),
		});

		const client = createSendPigeon("test-key");

		try {
			await client.send({
				from: "test@example.com",
				to: "recipient@example.com",
				subject: "Test",
				html: "<p>Hello</p>",
			});
		} catch (e) {
			expect(e).toBeInstanceOf(SendPigeonError);
			expect((e as SendPigeonError).message).toBe("Request failed: 500");
			expect((e as SendPigeonError).status).toBe(500);
		}
	});
});
