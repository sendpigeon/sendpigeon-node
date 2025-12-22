import type { components } from "./generated/schema.js";

const DEFAULT_BASE_URL = "https://api.sendpigeon.dev";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

// Re-export generated types with friendly names
export type SendEmailRequest = components["schemas"]["SendEmailRequest"];
export type SendEmailResponse = components["schemas"]["SendEmailResponse"];
export type Template = components["schemas"]["Template"];
export type CreateTemplateRequest = components["schemas"]["CreateTemplateRequest"];
export type UpdateTemplateRequest = components["schemas"]["UpdateTemplateRequest"];
export type AttachmentInput = components["schemas"]["AttachmentInput"];

// Domain types
export type Domain = components["schemas"]["Domain"];
export type DomainListItem = components["schemas"]["DomainListItem"];
export type DomainWithDnsRecords = components["schemas"]["DomainWithDnsRecords"];
export type DomainVerificationResult =
	components["schemas"]["DomainVerificationResult"];
export type DnsRecord = components["schemas"]["DnsRecord"];

/** Options for creating a new domain */
export type CreateDomainOptions = {
	/** Domain name (e.g. "mail.example.com") */
	name: string;
};

// API Key types
export type ApiKey = components["schemas"]["ApiKey"];
export type ApiKeyWithSecret = components["schemas"]["ApiKeyWithSecret"];

/** Options for creating a new API key */
export type CreateApiKeyOptions = {
	/** Human-readable name for this key */
	name: string;
	/** live = production emails, test = sandbox (default: live) */
	mode?: "live" | "test";
	/** full_access = all endpoints, sending = only /v1/emails (default: full_access) */
	permission?: "full_access" | "sending";
	/** ISO datetime when key expires (optional) */
	expiresAt?: string;
	/** Restrict key to send only from this domain (optional) */
	domainId?: string;
};

// Batch email types
export type BatchEmail = {
	from: string;
	to: string | string[];
	cc?: string | string[];
	bcc?: string | string[];
	subject?: string;
	html?: string;
	text?: string;
	replyTo?: string;
	templateId?: string;
	variables?: Record<string, string>;
	attachments?: AttachmentInput[];
	idempotencyKey?: string;
	/** ISO 8601 datetime to schedule send. Max 30 days ahead. */
	scheduled_at?: string;
};

export type BatchEmailResult =
	| { index: number; status: "sent"; id: string; suppressed?: string[] }
	| { index: number; status: "error"; error: { code: string; message: string } };

export type SendBatchResponse = {
	data: BatchEmailResult[];
	summary: { total: number; sent: number; failed: number };
};

// SDK-specific types
export type SendEmailOptions = {
	idempotencyKey?: string;
};

export type SendPigeonOptions = {
	baseUrl?: string;
};

export type SendPigeonError = {
	message: string;
	code: "network_error" | "api_error";
	status?: number;
};

export type Result<T> =
	| { data: T; error: null }
	| { data: null; error: SendPigeonError };

async function parseErrorMessage(response: Response): Promise<string> {
	try {
		const body = await response.json();
		return body?.message ?? `Request failed: ${response.status}`;
	} catch {
		return `Request failed: ${response.status}`;
	}
}

async function request<T>(
	baseUrl: string,
	apiKey: string,
	method: HttpMethod,
	path: string,
	body?: unknown,
	headers?: Record<string, string>,
): Promise<Result<T>> {
	try {
		const response = await fetch(`${baseUrl}${path}`, {
			method,
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${apiKey}`,
				...headers,
			},
			body: body ? JSON.stringify(body) : undefined,
		});

		if (!response.ok) {
			const message = await parseErrorMessage(response);
			return {
				data: null,
				error: { message, code: "api_error", status: response.status },
			};
		}

		if (response.status === 204) {
			return { data: undefined as T, error: null };
		}

		const data = (await response.json()) as T;
		return { data, error: null };
	} catch (err) {
		return {
			data: null,
			error: {
				message: err instanceof Error ? err.message : "Unknown error",
				code: "network_error",
			},
		};
	}
}

export class SendPigeon {
	private readonly apiKey: string;
	private readonly baseUrl: string;

	readonly templates: {
		list: () => Promise<Result<Template[]>>;
		create: (data: CreateTemplateRequest) => Promise<Result<Template>>;
		get: (id: string) => Promise<Result<Template>>;
		update: (
			id: string,
			data: UpdateTemplateRequest,
		) => Promise<Result<Template>>;
		delete: (id: string) => Promise<Result<void>>;
	};

	readonly domains: {
		list: () => Promise<Result<DomainListItem[]>>;
		create: (options: CreateDomainOptions) => Promise<Result<DomainWithDnsRecords>>;
		get: (id: string) => Promise<Result<DomainWithDnsRecords>>;
		verify: (id: string) => Promise<Result<DomainVerificationResult>>;
		delete: (id: string) => Promise<Result<void>>;
	};

	readonly apiKeys: {
		list: () => Promise<Result<ApiKey[]>>;
		create: (options: CreateApiKeyOptions) => Promise<Result<ApiKeyWithSecret>>;
		delete: (id: string) => Promise<Result<void>>;
	};

	readonly emails: {
		/** Cancel a scheduled email before it is sent */
		cancel: (id: string) => Promise<Result<void>>;
	};

	constructor(apiKey: string, options?: SendPigeonOptions) {
		this.apiKey = apiKey;
		this.baseUrl = options?.baseUrl ?? DEFAULT_BASE_URL;

		this.templates = {
			list: () =>
				request<Template[]>(this.baseUrl, this.apiKey, "GET", "/v1/templates"),
			create: (data) =>
				request<Template>(
					this.baseUrl,
					this.apiKey,
					"POST",
					"/v1/templates",
					data,
				),
			get: (id) =>
				request<Template>(
					this.baseUrl,
					this.apiKey,
					"GET",
					`/v1/templates/${id}`,
				),
			update: (id, data) =>
				request<Template>(
					this.baseUrl,
					this.apiKey,
					"PATCH",
					`/v1/templates/${id}`,
					data,
				),
			delete: (id) =>
				request<void>(this.baseUrl, this.apiKey, "DELETE", `/v1/templates/${id}`),
		};

		this.domains = {
			list: () =>
				request<DomainListItem[]>(this.baseUrl, this.apiKey, "GET", "/v1/domains"),
			create: (options) =>
				request<DomainWithDnsRecords>(
					this.baseUrl,
					this.apiKey,
					"POST",
					"/v1/domains",
					options,
				),
			get: (id) =>
				request<DomainWithDnsRecords>(
					this.baseUrl,
					this.apiKey,
					"GET",
					`/v1/domains/${id}`,
				),
			verify: (id) =>
				request<DomainVerificationResult>(
					this.baseUrl,
					this.apiKey,
					"POST",
					`/v1/domains/${id}/verify`,
				),
			delete: (id) =>
				request<void>(this.baseUrl, this.apiKey, "DELETE", `/v1/domains/${id}`),
		};

		this.apiKeys = {
			list: () =>
				request<ApiKey[]>(this.baseUrl, this.apiKey, "GET", "/v1/api-keys"),
			create: (options) =>
				request<ApiKeyWithSecret>(
					this.baseUrl,
					this.apiKey,
					"POST",
					"/v1/api-keys",
					options,
				),
			delete: (id) =>
				request<void>(this.baseUrl, this.apiKey, "DELETE", `/v1/api-keys/${id}`),
		};

		this.emails = {
			cancel: (id) =>
				request<void>(
					this.baseUrl,
					this.apiKey,
					"DELETE",
					`/v1/emails/${id}/schedule`,
				),
		};
	}

	send(
		email: SendEmailRequest,
		options?: SendEmailOptions,
	): Promise<Result<SendEmailResponse>> {
		return request<SendEmailResponse>(
			this.baseUrl,
			this.apiKey,
			"POST",
			"/v1/emails",
			email,
			{
				...(options?.idempotencyKey && {
					"idempotency-key": options.idempotencyKey,
				}),
			},
		);
	}

	/**
	 * Send up to 100 emails in a single request.
	 * Returns per-email status - some may succeed while others fail.
	 */
	sendBatch(emails: BatchEmail[]): Promise<Result<SendBatchResponse>> {
		return request<SendBatchResponse>(
			this.baseUrl,
			this.apiKey,
			"POST",
			"/v1/emails/batch",
			{ emails },
		);
	}
}
