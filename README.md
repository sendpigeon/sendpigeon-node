# sendpigeon

Official Node.js SDK for [SendPigeon](https://sendpigeon.dev) - transactional email API.

## Install

```bash
npm install sendpigeon
```

## Quick Start

```typescript
import { SendPigeon } from "sendpigeon";

const pigeon = new SendPigeon("sp_live_your_api_key");

const { data, error } = await pigeon.send({
  from: "hello@yourdomain.com",
  to: "user@example.com",
  subject: "Hello!",
  html: "<p>Welcome aboard.</p>",
});

if (error) {
  console.error(error.message);
  // error.code: "api_error" | "network_error" | "timeout_error"
  // error.apiCode: "QUOTA_EXCEEDED" | "DOMAIN_NOT_VERIFIED" | ...
  // error.status: 402
} else {
  console.log(data.id); // "em_abc123"
}
```

## React Email

Use [React Email](https://react.email) components directly:

```tsx
import { SendPigeon } from "sendpigeon";
import { WelcomeEmail } from "./emails/welcome";

const { data, error } = await pigeon.send({
  from: "hello@yourdomain.com",
  to: "user@example.com",
  subject: "Welcome!",
  react: <WelcomeEmail name="John" />,
});
```

Requires `@react-email/render` as peer dependency:

```bash
npm install @react-email/render
```

## Configuration

```typescript
const pigeon = new SendPigeon("sp_live_your_api_key", {
  timeout: 30000,   // request timeout in ms (default: 30s)
  maxRetries: 2,    // retry on 429/5xx (default: 2, max: 5, 0 to disable)
  debug: true,      // log requests/responses to console
});
```

Retries use exponential backoff and respect `Retry-After` headers.

## Local Development

Use [@sendpigeon-sdk/cli](https://www.npmjs.com/package/@sendpigeon-sdk/cli) to catch emails locally:

```bash
# Terminal 1: Start local server
npx @sendpigeon-sdk/cli dev

# Terminal 2: Run your app with dev mode
SENDPIGEON_DEV=true npm run dev
```

When `SENDPIGEON_DEV=true`, the SDK routes requests to `localhost:4100` instead of production.

## Tracking

Enable open/click tracking per email (opt-in):

```typescript
const { data } = await pigeon.send({
  from: "hello@yourdomain.com",
  to: "user@example.com",
  subject: "Welcome!",
  html: "<p>Check out our <a href='https://example.com'>site</a>!</p>",
  tracking: {
    opens: true,   // Track opens via invisible pixel
    clicks: true,  // Track link clicks
  },
});

// Response may include warnings if tracking is disabled at org level
if (data.warnings) {
  console.log("Warnings:", data.warnings);
}
```

Configure organization defaults in Settings → Tracking.

## Contacts

Manage your audience for broadcasts:

```typescript
// Add a contact (e.g. on signup)
await pigeon.contacts.create({
  email: "user@example.com",
  firstName: "John",
  tags: ["newsletter"],
});

// Batch import
await pigeon.contacts.batch([
  { email: "a@example.com", tags: ["newsletter"] },
  { email: "b@example.com", tags: ["newsletter"] },
]);

// List, filter, search
await pigeon.contacts.list({ tag: "newsletter", status: "active" });
```

## Broadcasts

Send emails to your contacts with tag-based targeting. Requires a paid plan.

```typescript
// 1. Create a broadcast (draft)
const { data: broadcast } = await pigeon.broadcasts.create({
  name: "March Newsletter",
  subject: "What's new",
  htmlContent: "<h1>Hello!</h1>",
  fromEmail: "newsletter@yourdomain.com",
  fromName: "Your Company",
});

// 2. Send a test
await pigeon.broadcasts.test(broadcast.id, { email: "you@company.com" });

// 3. Send to contacts with tag targeting
await pigeon.broadcasts.send(broadcast.id, {
  includeTags: ["newsletter"],
  excludeTags: ["uninterested"],
});

// Or schedule for later
await pigeon.broadcasts.schedule(broadcast.id, {
  scheduledAt: "2026-03-10T09:00:00Z",
  includeTags: ["newsletter"],
});

// Get analytics (opens, clicks)
await pigeon.broadcasts.analytics(broadcast.id);
```

## Available Methods

```typescript
// Send emails
pigeon.send(email)
pigeon.sendBatch(emails)

// Email status
pigeon.emails.get(id)
pigeon.emails.cancel(id)

// Contacts
pigeon.contacts.list(opts?)
pigeon.contacts.create(data)
pigeon.contacts.batch(contacts)
pigeon.contacts.get(id)
pigeon.contacts.update(id, data)
pigeon.contacts.delete(id)
pigeon.contacts.unsubscribe(id)
pigeon.contacts.resubscribe(id)
pigeon.contacts.stats()
pigeon.contacts.tags()

// Broadcasts
pigeon.broadcasts.list(opts?)
pigeon.broadcasts.create(data)
pigeon.broadcasts.get(id)
pigeon.broadcasts.update(id, data)
pigeon.broadcasts.delete(id)
pigeon.broadcasts.duplicate(id)
pigeon.broadcasts.send(id, targeting?)
pigeon.broadcasts.schedule(id, data)
pigeon.broadcasts.cancel(id)
pigeon.broadcasts.test(id, data)
pigeon.broadcasts.recipients(id, opts?)
pigeon.broadcasts.analytics(id)

// Templates
pigeon.templates.list()
pigeon.templates.create(data)
pigeon.templates.get(id)
pigeon.templates.update(id, data)
pigeon.templates.delete(id)
pigeon.templates.publish(id)
pigeon.templates.unpublish(id)
pigeon.templates.test(id, data)

// Domains
pigeon.domains.list()
pigeon.domains.create({ name })
pigeon.domains.get(id)
pigeon.domains.verify(id)
pigeon.domains.delete(id)

// API Keys
pigeon.apiKeys.list()
pigeon.apiKeys.create({ name, mode?, permission? })
pigeon.apiKeys.delete(id)

// Suppressions
pigeon.suppressions.list(opts?)
pigeon.suppressions.delete(email)

// Tracking
pigeon.tracking.getDefaults()
pigeon.tracking.updateDefaults(data)

// Webhooks
pigeon.webhooks.getConfig()
pigeon.webhooks.enable(data)
pigeon.webhooks.update(data)
pigeon.webhooks.disable()
pigeon.webhooks.delete()
pigeon.webhooks.regenerateSecret()
pigeon.webhooks.test()
pigeon.webhooks.listDeliveries()
```

## Webhook Verification

```typescript
import { verifyWebhook, verifyInboundWebhook } from "sendpigeon";

// Outbound events (delivered, bounced, complained)
const result = await verifyWebhook({ payload, signature, timestamp, secret });

// Inbound emails
const result = await verifyInboundWebhook({ payload, signature, timestamp, secret });
```

## Documentation

Full documentation with examples: **[sendpigeon.dev/docs](https://sendpigeon.dev/docs)**

## License

MIT
