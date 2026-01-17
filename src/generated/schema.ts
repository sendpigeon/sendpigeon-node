export interface paths {
    "/v1/admin/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get admin status */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Admin status */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            isAdmin: boolean;
                            requiresVerification: boolean;
                            email: string;
                        };
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/request-code": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Request admin access verification code */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Code sent */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            success: boolean;
                        };
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
                /** @description Not an admin */
                403: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/verify-code": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Verify admin access code */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        code: string;
                    };
                };
            };
            responses: {
                /** @description Code verified */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            valid: boolean;
                        };
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
                /** @description Not an admin or invalid code */
                403: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/organizations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List all organizations */
        get: {
            parameters: {
                query?: {
                    search?: string;
                    plan?: string;
                    disabled?: "true" | "false";
                    cursor?: string;
                    limit?: number;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description List of organizations */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            organizations: {
                                id: string;
                                name: string;
                                slug: string;
                                createdAt: string;
                                disabled: boolean;
                                disabledAt: string | null;
                                disabledReason: string | null;
                                plan: string;
                                memberCount: number;
                                emailCount: number;
                                domainCount: number;
                                apiKeyCount: number;
                                templateCount: number;
                                lastApiKeyUsedAt: string | null;
                            }[];
                            nextCursor: string | null;
                            total: number;
                        };
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
                /** @description Forbidden */
                403: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/organizations/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get organization details */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Organization details */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            id: string;
                            name: string;
                            slug: string;
                            createdAt: string;
                            disabled: boolean;
                            disabledAt: string | null;
                            disabledReason: string | null;
                            plan: string;
                            memberCount: number;
                            emailCount: number;
                            domainCount: number;
                            apiKeyCount: number;
                            templateCount: number;
                            lastApiKeyUsedAt: string | null;
                            members: {
                                id: string;
                                userId: string;
                                email: string;
                                name: string;
                                role: string;
                                createdAt: string;
                            }[];
                            domains: {
                                id: string;
                                name: string;
                                status: string;
                                createdAt: string;
                            }[];
                            apiKeys: {
                                id: string;
                                name: string;
                                keyPrefix: string;
                                mode: string;
                                lastUsedAt: string | null;
                                createdAt: string;
                            }[];
                            templates: {
                                id: string;
                                templateId: string;
                                name: string | null;
                                status: string;
                                updatedAt: string;
                            }[];
                            usage: {
                                periodStart: string;
                                periodEnd: string;
                                emailCount: number;
                                inboundEmailCount: number;
                            };
                            subscription: {
                                plan: string;
                                status: string | null;
                                lemonSqueezyCustomerId: string | null;
                                currentPeriodStart: string | null;
                                currentPeriodEnd: string | null;
                            };
                        };
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
                /** @description Forbidden */
                403: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
                /** @description Not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Update organization (disable/enable, change plan) */
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        disabled?: boolean;
                        disabledReason?: string;
                        /** @enum {string} */
                        plan?: "FREE" | "STARTER" | "GROWTH" | "PRO" | "STAFF";
                    };
                };
            };
            responses: {
                /** @description Organization updated */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            id: string;
                            name: string;
                            slug: string;
                            createdAt: string;
                            disabled: boolean;
                            disabledAt: string | null;
                            disabledReason: string | null;
                            plan: string;
                            memberCount: number;
                            emailCount: number;
                            domainCount: number;
                            apiKeyCount: number;
                            templateCount: number;
                            lastApiKeyUsedAt: string | null;
                            members: {
                                id: string;
                                userId: string;
                                email: string;
                                name: string;
                                role: string;
                                createdAt: string;
                            }[];
                            domains: {
                                id: string;
                                name: string;
                                status: string;
                                createdAt: string;
                            }[];
                            apiKeys: {
                                id: string;
                                name: string;
                                keyPrefix: string;
                                mode: string;
                                lastUsedAt: string | null;
                                createdAt: string;
                            }[];
                            templates: {
                                id: string;
                                templateId: string;
                                name: string | null;
                                status: string;
                                updatedAt: string;
                            }[];
                            usage: {
                                periodStart: string;
                                periodEnd: string;
                                emailCount: number;
                                inboundEmailCount: number;
                            };
                            subscription: {
                                plan: string;
                                status: string | null;
                                lemonSqueezyCustomerId: string | null;
                                currentPeriodStart: string | null;
                                currentPeriodEnd: string | null;
                            };
                        };
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
                /** @description Forbidden */
                403: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
                /** @description Not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        trace?: never;
    };
    "/v1/admin/users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List all users */
        get: {
            parameters: {
                query?: {
                    search?: string;
                    cursor?: string;
                    limit?: number;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description List of users */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            users: {
                                id: string;
                                email: string;
                                name: string;
                                emailVerified: boolean;
                                createdAt: string;
                                lastLoginAt: string | null;
                                organizationCount: number;
                            }[];
                            nextCursor: string | null;
                            total: number;
                        };
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
                /** @description Forbidden */
                403: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/users/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get user details */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description User details */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            id: string;
                            email: string;
                            name: string;
                            emailVerified: boolean;
                            createdAt: string;
                            lastLoginAt: string | null;
                            organizationCount: number;
                            memberships: {
                                organizationId: string;
                                organizationName: string;
                                role: string;
                                createdAt: string;
                            }[];
                        };
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
                /** @description Forbidden */
                403: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
                /** @description Not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/ai-costs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get AI costs summary and trends */
        get: {
            parameters: {
                query?: {
                    days?: number;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description AI costs data */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            summary: {
                                totalCost: number;
                                totalRequests: number;
                                totalInputTokens: number;
                                totalOutputTokens: number;
                                totalCacheReadTokens: number;
                                totalCacheWriteTokens: number;
                                uniqueUsers: number;
                                generateCount: number;
                                improveCount: number;
                            };
                            dailyCosts: {
                                date: string;
                                cost: number;
                                requests: number;
                            }[];
                            recentUsage: {
                                id: string;
                                ipHash: string;
                                type: string;
                                prompt: string;
                                inputTokens: number;
                                outputTokens: number;
                                cost: number;
                                model: string;
                                createdAt: string;
                            }[];
                        };
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
                /** @description Forbidden */
                403: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/alerts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["listAlerts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/alerts/unread-count": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getUnreadAlertCount"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/alerts/{id}/read": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["markAlertAsRead"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/alerts/batch/read": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["markAllAlertsAsRead"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/alerts/settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getAlertSettings"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["updateAlertSettings"];
        trace?: never;
    };
    "/analytics/time-series": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    range?: "7d" | "30d" | "90d";
                    domainId?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Time series data */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            range: string;
                            data: {
                                date: string;
                                total: number;
                                delivered: number;
                                bounced: number;
                                complained: number;
                                opens: number;
                                clicks: number;
                            }[];
                        };
                    };
                };
                /** @description Analytics not available on current plan */
                403: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            code: string;
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/analytics/breakdown": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    range?: "7d" | "30d" | "90d";
                    domainId?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Status breakdown */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            statuses: {
                                status: string;
                                count: number;
                            }[];
                            bounceTypes: {
                                bounceType: string;
                                count: number;
                            }[];
                            complaintTypes: {
                                complaintType: string;
                                count: number;
                            }[];
                            tracking: {
                                totalDelivered: number;
                                totalOpens: number;
                                totalClicks: number;
                                uniqueOpens: number;
                                uniqueClicks: number;
                                openRate: number;
                                clickRate: number;
                            };
                        };
                    };
                };
                /** @description Analytics not available on current plan */
                403: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            code: string;
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/analytics/domains": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    range?: "7d" | "30d" | "90d";
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Per-domain analytics */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            domains: {
                                domainId: string;
                                domainName: string;
                                sent: number;
                                delivered: number;
                                bounced: number;
                                complained: number;
                                deliveryRate: number;
                                healthScore: number;
                            }[];
                        };
                    };
                };
                /** @description Analytics not available on current plan */
                403: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            code: string;
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/analytics/quick-stats": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    range?: "7d" | "30d" | "90d";
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Quick stats */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            topDomain: {
                                name: string;
                                count: number;
                            } | null;
                            busiestDay: {
                                day: string;
                                count: number;
                            } | null;
                            avgEmailsPerDay: number;
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/analytics/latency": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    range?: "7d" | "30d" | "90d";
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Latency percentiles */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            p50: number | null;
                            p95: number | null;
                            min: number | null;
                            max: number | null;
                            count: number;
                        };
                    };
                };
                /** @description Analytics not available on current plan */
                403: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            code: string;
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/analytics/links": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    range?: "7d" | "30d" | "90d";
                    domainId?: string;
                    emailId?: string;
                    limit?: number;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Link performance analytics */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            links: {
                                url: string;
                                clicks: number;
                                uniqueClicks: number;
                            }[];
                            totalClicks: number;
                            totalUniqueClicks: number;
                        };
                    };
                };
                /** @description Analytics not available on current plan */
                403: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            code: string;
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/analytics/engagement": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    range?: "7d" | "30d" | "90d";
                    domainId?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Engagement summary */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            delivered: number;
                            opens: number;
                            uniqueOpens: number;
                            clicks: number;
                            uniqueClicks: number;
                            openRate: number;
                            clickRate: number;
                            clickToOpenRate: number;
                            emailClients: {
                                client: string;
                                count: number;
                            }[];
                            devices: {
                                device: string;
                                count: number;
                            }[];
                        };
                    };
                };
                /** @description Analytics not available on current plan */
                403: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            code: string;
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/health": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Health check response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** @enum {string} */
                            status: "ok" | "error";
                            timestamp: string;
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/billing": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Current billing info */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            subscription: {
                                /** @enum {string} */
                                plan: "FREE" | "STARTER" | "GROWTH" | "PRO" | "STAFF";
                                status: string | null;
                                currentPeriodStart: string | null;
                                currentPeriodEnd: string | null;
                            };
                            usage: {
                                periodStart: string;
                                periodEnd: string;
                                emailCount: number;
                                emailLimit: number | null;
                                percentUsed: number;
                                domainCount: number;
                                domainLimit: number | null;
                                contactCount: number;
                                contactLimit: number | null;
                            };
                            limits: {
                                emailLimit: number | null;
                                domainLimit: number | null;
                                templateLimit: number | null;
                                formLimit: number | null;
                                teamMemberLimit: number | null;
                                contactLimit: number | null;
                                inboundEmailLimit: number | null;
                                logRetentionDays: number;
                            };
                            features: {
                                analyticsEnabled: boolean;
                                trackingEnabled: boolean;
                                inboundEnabled: boolean;
                                webhooksEnabled: boolean;
                                alertsEnabled: boolean;
                                richTrackingAnalytics: boolean;
                                broadcastsEnabled: boolean;
                            };
                            canUpgrade: boolean;
                            canManageSubscription: boolean;
                        };
                    };
                };
                /** @description Organization not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/billing/checkout": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /** @enum {string} */
                        plan: "STARTER" | "GROWTH" | "PRO";
                        /** Format: uri */
                        successUrl: string;
                    };
                };
            };
            responses: {
                /** @description Checkout session URL */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            url: string;
                        };
                    };
                };
                /** @description Invalid request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/billing/portal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": Record<string, never>;
                };
            };
            responses: {
                /** @description Portal session URL */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            url: string;
                        };
                    };
                };
                /** @description No subscription to manage */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/inbound/emails": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    cursor?: string;
                    limit?: number;
                    domainId?: string;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description List of inbound emails */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            emails: {
                                id: string;
                                fromAddress: string;
                                toAddress: string;
                                subject: string;
                                textBody: string | null;
                                attachmentCount: number;
                                processedAt: string;
                                forwardedAt: string | null;
                                webhookSentAt: string | null;
                                slackSentAt: string | null;
                            }[];
                            nextCursor: string | null;
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/inbound/emails/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Inbound email detail */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            id: string;
                            fromAddress: string;
                            toAddress: string;
                            subject: string;
                            textBody: string | null;
                            attachmentCount: number;
                            processedAt: string;
                            forwardedAt: string | null;
                            webhookSentAt: string | null;
                            slackSentAt: string | null;
                            rawUrl: string | null;
                        };
                    };
                };
                /** @description Not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/inbound/emails/{id}/reply": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reply to inbound email
         * @description Send a reply to an inbound email. Automatically sets threading headers (In-Reply-To, References) and quotes the original message.
         */
        post: operations["replyToInbound"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/logs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    status?: "scheduled" | "cancelled" | "pending" | "sent" | "delivered" | "bounced" | "complained" | "failed";
                    domainId?: string;
                    recipient?: string;
                    cursor?: string;
                    limit?: number;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Paginated list of email logs */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            data: {
                                id: string;
                                fromAddress: string;
                                toAddress: string;
                                ccAddress: string | null;
                                bccAddress: string | null;
                                subject: string;
                                /** @enum {string} */
                                status: "scheduled" | "cancelled" | "pending" | "sent" | "delivered" | "bounced" | "complained" | "failed";
                                isTest: boolean;
                                createdAt: string;
                                sentAt: string | null;
                                deliveredAt: string | null;
                                bouncedAt: string | null;
                                latencyMs: number | null;
                            }[];
                            nextCursor: string | null;
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/logs/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Email log detail */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            id: string;
                            fromAddress: string;
                            toAddress: string;
                            ccAddress: string | null;
                            bccAddress: string | null;
                            subject: string;
                            /** @enum {string} */
                            status: "scheduled" | "cancelled" | "pending" | "sent" | "delivered" | "bounced" | "complained" | "failed";
                            createdAt: string;
                            sentAt: string | null;
                            deliveredAt: string | null;
                            bouncedAt: string | null;
                            complainedAt: string | null;
                            bounceType: string | null;
                            complaintType: string | null;
                            attachments: components["schemas"]["AttachmentMeta"][] | null;
                            hasBody: boolean;
                            trackingEnabled: boolean;
                            openedAt: string | null;
                            openCount: number;
                            clickedAt: string | null;
                            clickCount: number;
                        };
                    };
                };
                /** @description Email not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/logs/{id}/body": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Email body content */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            html: string | null;
                            text: string | null;
                        };
                    };
                };
                /** @description Email or body not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/logs/{id}/engagement": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    opensCursor?: string;
                    clicksCursor?: string;
                    limit?: number;
                };
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Email engagement data (opens and clicks) */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            opens: {
                                id: string;
                                openedAt: string;
                                device: string | null;
                                country: string | null;
                                city: string | null;
                            }[];
                            clicks: {
                                id: string;
                                clickedAt: string;
                                linkUrl: string;
                                linkIndex: number;
                                device: string | null;
                                browser: string | null;
                                country: string | null;
                                city: string | null;
                            }[];
                            nextOpensCursor: string | null;
                            nextClicksCursor: string | null;
                            hasRichData: boolean;
                        };
                    };
                };
                /** @description Email not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/stats": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Dashboard statistics */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            sent: number;
                            delivered: number;
                            bounced: number;
                            complained: number;
                            pending: number;
                            deliveryRate: number;
                            bounceRate: number;
                            complaintRate: number;
                            trends: {
                                sent: {
                                    value: number;
                                    /** @enum {string} */
                                    direction: "up" | "down" | "flat" | "new";
                                };
                                deliveryRate: {
                                    value: number;
                                    /** @enum {string} */
                                    direction: "up" | "down" | "flat" | "new";
                                };
                                bounceRate: {
                                    value: number;
                                    /** @enum {string} */
                                    direction: "up" | "down" | "flat" | "new";
                                };
                                complaintRate: {
                                    value: number;
                                    /** @enum {string} */
                                    direction: "up" | "down" | "flat" | "new";
                                };
                            };
                            recentEmails: {
                                id: string;
                                toAddress: string;
                                subject: string;
                                /** @enum {string} */
                                status: "pending" | "sent" | "delivered" | "bounced" | "complained" | "failed";
                                domain: string | null;
                                createdAt: string;
                            }[];
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/suppressions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    limit?: number;
                    offset?: number | null;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description List of suppressed emails */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["SuppressionListResponse"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/suppressions/{email}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    email: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Removed from suppression list */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/api-keys": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description List of API keys */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ApiKey"][];
                    };
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["CreateApiKeyRequest"];
                };
            };
            responses: {
                /** @description Created API key with secret */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ApiKeyWithSecret"];
                    };
                };
                /** @description Domain not found */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/api-keys/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Deleted */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domains": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description List of domains */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["DomainListItem"][];
                    };
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["CreateDomainRequest"];
                };
            };
            responses: {
                /** @description Created domain with DNS records */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["DomainWithDnsRecords"];
                    };
                };
                /** @description Domain already exists or invalid */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domains/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Domain with DNS records */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["DomainWithDnsRecords"];
                    };
                };
                /** @description Not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Deleted */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        options?: never;
        head?: never;
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["UpdateDomainRequest"];
                };
            };
            responses: {
                /** @description Updated domain */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Domain"];
                    };
                };
                /** @description Not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        trace?: never;
    };
    "/v1/domains/{id}/verify": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Verification result */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["DomainVerificationResult"];
                    };
                };
                /** @description Not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
                /** @description Domain already verified by another account */
                409: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
                /** @description Email provider setup failed */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domains/{id}/health": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Domain health score and factors */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["DomainHealth"];
                    };
                };
                /** @description Analytics not available on current plan */
                403: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
                /** @description Not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domains/{id}/warmup": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Domain warmup status */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["DomainWarmup"];
                    };
                };
                /** @description Not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domains/{id}/tracking": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Tracking domain configuration for domain */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["TrackingDomainConfig"];
                    };
                };
                /** @description Not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domains/{id}/tracking/domain": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["SetTrackingDomainRequest"];
                };
            };
            responses: {
                /** @description Updated tracking domain */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["TrackingDomainConfig"];
                    };
                };
                /** @description Invalid tracking domain format */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
                /** @description Not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domains/{id}/tracking/domain/verify": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Tracking domain verification result */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["VerifyTrackingDomainResponse"];
                    };
                };
                /** @description No tracking domain configured */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
                /** @description Not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domains/{id}/inbound": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Inbound config with MX instructions */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            forwardEnabled: boolean;
                            webhookEnabled: boolean;
                            slackEnabled: boolean;
                            forwardTo: string | null;
                            webhookUrl: string | null;
                            hasSecret: boolean;
                            slackWebhookUrl: string | null;
                            mxRecords: {
                                priority: number;
                                host: string;
                            }[];
                            mxConfigured: boolean;
                        };
                    };
                };
                /** @description Domain not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        forwardEnabled?: boolean;
                        webhookEnabled?: boolean;
                        slackEnabled?: boolean;
                        /** Format: email */
                        forwardTo?: string | null;
                        /** Format: uri */
                        webhookUrl?: string | null;
                        /** Format: uri */
                        slackWebhookUrl?: string | null;
                    };
                };
            };
            responses: {
                /** @description Updated inbound config */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            forwardEnabled: boolean;
                            webhookEnabled: boolean;
                            slackEnabled: boolean;
                            forwardTo: string | null;
                            webhookUrl: string | null;
                            hasSecret: boolean;
                            slackWebhookUrl: string | null;
                            mxRecords: {
                                priority: number;
                                host: string;
                            }[];
                            mxConfigured: boolean;
                        };
                    };
                };
                /** @description Invalid request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
                /** @description Inbound not available on current plan */
                403: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
                /** @description Domain not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
                /** @description Inbound email infrastructure not configured */
                503: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domains/{id}/inbound/secret": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description New webhook secret */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            secret: string;
                        };
                    };
                };
                /** @description Domain not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domains/{id}/inbound/test-webhook": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Test webhook result */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            success: boolean;
                            statusCode: number | null;
                            error: string | null;
                        };
                    };
                };
                /** @description Webhook not configured */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
                /** @description Domain not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/domains/{id}/inbound/test-slack": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Test Slack result */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            success: boolean;
                            statusCode: number | null;
                            error: string | null;
                        };
                    };
                };
                /** @description Slack not configured */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
                /** @description Domain not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/templates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List all templates */
        get: operations["listTemplates"];
        put?: never;
        /**
         * Create a template
         * @description Create a reusable email template with {{variable}} placeholders.
         */
        post: operations["createTemplate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/templates/{templateId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a template */
        get: operations["getTemplate"];
        put?: never;
        post?: never;
        /** Delete a template */
        delete: operations["deleteTemplate"];
        options?: never;
        head?: never;
        /** Update a template */
        patch: operations["updateTemplate"];
        trace?: never;
    };
    "/v1/templates/{templateId}/publish": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Publish a template
         * @description Mark template as published. Required before sending emails.
         */
        post: operations["publishTemplate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/templates/{templateId}/unpublish": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Unpublish a template
         * @description Revert template to draft status.
         */
        post: operations["unpublishTemplate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/templates/{templateId}/test": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Send a test email
         * @description Send a test email using the template with provided variables.
         */
        post: operations["testTemplate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/templates/{templateId}/render": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Render a template
         * @description Render template content to email-safe HTML using react-email. Used for preview and sending.
         */
        post: operations["renderTemplate"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/templates/{templateId}/versions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List template versions
         * @description Get version history for a template (max 20 versions kept).
         */
        get: operations["listTemplateVersions"];
        put?: never;
        /**
         * Create a version snapshot
         * @description Creates a version snapshot of the current template state. Throttled to max one version per 30 minutes.
         */
        post: operations["createTemplateVersion"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/templates/{templateId}/versions/{versionId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get version details
         * @description Get full content of a specific version.
         */
        get: operations["getTemplateVersion"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/templates/{templateId}/versions/{versionId}/restore": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Restore a version
         * @description Restore template to a previous version. Current state is saved as a new version first.
         */
        post: operations["restoreTemplateVersion"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/modules": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List modules */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description List of modules */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            id: string;
                            name: string;
                            content: unknown[];
                            createdAt: string;
                        }[];
                    };
                };
            };
        };
        put?: never;
        /** Create a module */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        name: string;
                        content: unknown[];
                    };
                };
            };
            responses: {
                /** @description Module created */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            id: string;
                            name: string;
                            content: unknown[];
                            createdAt: string;
                        };
                    };
                };
                /** @description Limit exceeded */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            code: string;
                        };
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/modules/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a module */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Module */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            id: string;
                            name: string;
                            content: unknown[];
                            createdAt: string;
                        };
                    };
                };
                /** @description Not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            code: string;
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        /** Delete a module */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Module deleted */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            code: string;
                        };
                    };
                };
            };
        };
        options?: never;
        head?: never;
        /** Update a module */
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        name?: string;
                        content?: unknown[];
                    };
                };
            };
            responses: {
                /** @description Module updated */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            id: string;
                            name: string;
                            content: unknown[];
                            createdAt: string;
                        };
                    };
                };
                /** @description Not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            error: string;
                            code: string;
                        };
                    };
                };
            };
        };
        trace?: never;
    };
    "/v1/emails": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Send an email
         * @description Send a transactional email. Requires a verified domain. Supports templates with variable substitution.
         */
        post: operations["sendEmail"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/emails/batch": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Send batch emails
         * @description Send up to 100 emails in a single request. Returns per-email status.
         */
        post: operations["sendBatchEmails"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/emails/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get email details
         * @description Get the details and delivery status of an email by ID.
         */
        get: operations["getEmail"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/emails/{id}/schedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Cancel scheduled email
         * @description Cancel a scheduled email before it is sent.
         */
        delete: operations["cancelScheduledEmail"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/logs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: {
                    status?: "scheduled" | "cancelled" | "pending" | "sent" | "delivered" | "bounced" | "complained" | "failed";
                    domainId?: string;
                    recipient?: string;
                    cursor?: string;
                    limit?: number;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Paginated list of email logs */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            data: {
                                id: string;
                                fromAddress: string;
                                toAddress: string;
                                ccAddress: string | null;
                                bccAddress: string | null;
                                subject: string;
                                /** @enum {string} */
                                status: "scheduled" | "cancelled" | "pending" | "sent" | "delivered" | "bounced" | "complained" | "failed";
                                isTest: boolean;
                                createdAt: string;
                                sentAt: string | null;
                                deliveredAt: string | null;
                                bouncedAt: string | null;
                                latencyMs: number | null;
                            }[];
                            nextCursor: string | null;
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/logs/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Email log detail */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            id: string;
                            fromAddress: string;
                            toAddress: string;
                            ccAddress: string | null;
                            bccAddress: string | null;
                            subject: string;
                            /** @enum {string} */
                            status: "scheduled" | "cancelled" | "pending" | "sent" | "delivered" | "bounced" | "complained" | "failed";
                            createdAt: string;
                            sentAt: string | null;
                            deliveredAt: string | null;
                            bouncedAt: string | null;
                            complainedAt: string | null;
                            bounceType: string | null;
                            complaintType: string | null;
                            attachments: components["schemas"]["AttachmentMeta"][] | null;
                            hasBody: boolean;
                            trackingEnabled: boolean;
                            openedAt: string | null;
                            openCount: number;
                            clickedAt: string | null;
                            clickCount: number;
                        };
                    };
                };
                /** @description Email not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/logs/{id}/body": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Email body content */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            html: string | null;
                            text: string | null;
                        };
                    };
                };
                /** @description Email or body not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get account status
         * @description Returns organization info, plan, usage, and API key details.
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Account status */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["StatusResponse"];
                    };
                };
                /** @description Invalid or missing API key */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/forms": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description List of forms */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Form"][];
                    };
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["CreateFormRequest"];
                };
            };
            responses: {
                /** @description Created form */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Form"];
                    };
                };
                /** @description Validation error or domain not verified */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
                /** @description Form limit reached */
                403: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/forms/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Form details */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Form"];
                    };
                };
                /** @description Not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Deleted */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        options?: never;
        head?: never;
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["UpdateFormRequest"];
                };
            };
            responses: {
                /** @description Updated form */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Form"];
                    };
                };
                /** @description Not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        trace?: never;
    };
    "/v1/invitations/pending": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description List of pending invitations for the authenticated user */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            invitations: {
                                id: string;
                                organizationId: string;
                                organizationName: string;
                                role: string;
                                expiresAt: string;
                            }[];
                        };
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/onboarding/banner": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Whether to show the onboarding banner */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            showBanner: boolean;
                        };
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/organization": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getOrganization"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["updateOrganization"];
        trace?: never;
    };
    "/v1/profile": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getProfile"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["updateProfile"];
        trace?: never;
    };
    "/v1/profile/sessions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["listSessions"];
        put?: never;
        post?: never;
        delete: operations["revokeAllOtherSessions"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/profile/sessions/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["revokeSession"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/profile/delete-preview": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["deleteAccountPreview"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/profile/delete-request": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["deleteAccountRequest"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/profile/confirm-delete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete: operations["confirmDeleteAccount"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/support/contact": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /** @enum {string} */
                        category: "bug" | "feature" | "billing" | "general";
                        message: string;
                    };
                };
            };
            responses: {
                /** @description Message sent successfully */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            success: boolean;
                        };
                    };
                };
                /** @description Unauthorized */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Failed to send message */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/two-factor/disable": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["disableTwoFactor"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/form/{formId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    formId: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["SubmitFormRequest"];
                };
            };
            responses: {
                /** @description Submission received */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Invalid submission */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
                /** @description Form not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
                /** @description Rate limited */
                429: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/webhooks/incoming/sns": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Webhook processed */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Invalid request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Invalid signature */
                403: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/webhooks/incoming/sns-inbound": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": unknown;
                    "text/plain": unknown;
                };
            };
            responses: {
                /** @description Processed */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Invalid request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                        };
                    };
                };
                /** @description Invalid signature or topic */
                403: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                        };
                    };
                };
                /** @description Inbound not configured */
                503: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                        };
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/webhooks/incoming/lemonsqueezy": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Webhook processed */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Invalid webhook */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/webhooks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Webhook configuration */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            url: string | null;
                            enabled: boolean;
                            hasSecret: boolean;
                            events: string[];
                        };
                    };
                };
            };
        };
        put: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /** Format: uri */
                        url: string;
                        events: ("email.delivered" | "email.bounced" | "email.complained")[];
                    };
                };
            };
            responses: {
                /** @description Webhook updated */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Webhook not configured */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        post?: never;
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Webhook deleted */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/webhooks/enable": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        /** Format: uri */
                        url: string;
                        events: ("email.delivered" | "email.bounced" | "email.complained")[];
                    };
                };
            };
            responses: {
                /** @description Webhook enabled, secret returned */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            secret: string;
                        };
                    };
                };
                /** @description Invalid URL */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
                /** @description Webhooks not available on FREE tier */
                403: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/webhooks/disable": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Webhook disabled */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/webhooks/regenerate-secret": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description New secret generated */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            secret: string;
                        };
                    };
                };
                /** @description Webhook not configured */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/webhooks/test": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Test result */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            success: boolean;
                            statusCode?: number;
                            error?: string;
                        };
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/webhooks/deliveries": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description List of webhook deliveries */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            deliveries: {
                                id: string;
                                emailId: string | null;
                                event: string;
                                url: string;
                                status: string;
                                statusCode: number | null;
                                attempts: number;
                                lastAttemptAt: string | null;
                                error: string | null;
                                createdAt: string;
                            }[];
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/webhooks/verify": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "text/plain": string;
                };
            };
            responses: {
                /** @description Signature verification result */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            valid: boolean;
                            error?: string;
                        };
                    };
                };
                /** @description Missing headers or webhook not configured */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/contacts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List contacts */
        get: {
            parameters: {
                query?: {
                    status?: "ACTIVE" | "UNSUBSCRIBED" | "BOUNCED" | "COMPLAINED";
                    tag?: string;
                    search?: string;
                    limit?: number;
                    offset?: number | null;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description List of contacts */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ContactListResponse"];
                    };
                };
            };
        };
        put?: never;
        /** Create a contact */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["CreateContactRequest"];
                };
            };
            responses: {
                /** @description Created contact */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Contact"];
                    };
                };
                /** @description Invalid email format */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
                /** @description Contact already exists */
                409: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/contacts/stats": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get audience statistics */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Audience statistics */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["AudienceStats"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/contacts/tags": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List unique tags
         * @description Returns all unique tags used across contacts in your audience
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description List of unique tags */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["TagsResponse"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/contacts/batch": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create or update contacts in batch */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["BatchCreateContactsRequest"];
                };
            };
            responses: {
                /** @description Batch result */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["BatchResult"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/contacts/import": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Import contacts from CSV
         * @description Upload a CSV file to import contacts. Max 1000 rows, 5MB file size. First row must be headers. Required column: email. Optional columns: firstName, lastName, company, tags (comma-separated), timezone.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "multipart/form-data": {
                        /** Format: binary */
                        file?: string;
                    };
                };
            };
            responses: {
                /** @description Import result */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ImportResult"];
                    };
                };
                /** @description Invalid CSV or file too large */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/contacts/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a contact */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Contact details */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Contact"];
                    };
                };
                /** @description Contact not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        /** Delete a contact */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Contact deleted */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Contact not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        options?: never;
        head?: never;
        /** Update a contact */
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["UpdateContactRequest"];
                };
            };
            responses: {
                /** @description Updated contact */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Contact"];
                    };
                };
                /** @description Contact not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        trace?: never;
    };
    "/v1/contacts/{id}/unsubscribe": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Unsubscribe a contact */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Unsubscribed contact */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Contact"];
                    };
                };
                /** @description Contact is already unsubscribed */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
                /** @description Contact not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/contacts/{id}/resubscribe": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Resubscribe a contact */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Resubscribed contact */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Contact"];
                    };
                };
                /** @description Contact is already active or cannot be resubscribed */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
                /** @description Contact not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/broadcasts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List broadcasts */
        get: {
            parameters: {
                query?: {
                    status?: "DRAFT" | "SCHEDULED" | "SENDING" | "SENT" | "CANCELLED" | "FAILED";
                    limit?: number;
                    offset?: number | null;
                };
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description List of broadcasts */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["BroadcastListResponse"];
                    };
                };
            };
        };
        put?: never;
        /** Create a broadcast */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["CreateBroadcastRequest"];
                };
            };
            responses: {
                /** @description Created broadcast */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Broadcast"];
                    };
                };
                /** @description Invalid request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
                /** @description Domain not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/broadcasts/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a broadcast */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Broadcast details */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Broadcast"];
                    };
                };
                /** @description Broadcast not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        /**
         * Delete a broadcast
         * @description Only draft broadcasts can be deleted
         */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Broadcast deleted */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Broadcast not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        options?: never;
        head?: never;
        /**
         * Update a broadcast
         * @description Only draft broadcasts can be edited
         */
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["UpdateBroadcastRequest"];
                };
            };
            responses: {
                /** @description Updated broadcast */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Broadcast"];
                    };
                };
                /** @description Broadcast is not editable */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
                /** @description Broadcast not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        trace?: never;
    };
    "/v1/broadcasts/{id}/duplicate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Duplicate a broadcast */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Duplicated broadcast */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Broadcast"];
                    };
                };
                /** @description Broadcast not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/broadcasts/{id}/recipients": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List broadcast recipients */
        get: {
            parameters: {
                query?: {
                    status?: "pending" | "sent" | "delivered" | "bounced" | "complained" | "failed";
                    limit?: number;
                    offset?: number | null;
                };
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description List of recipients */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["RecipientListResponse"];
                    };
                };
                /** @description Broadcast not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/broadcasts/{id}/send": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Send a broadcast immediately */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Broadcast queued for sending */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Broadcast"];
                    };
                };
                /** @description Broadcast cannot be sent */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
                /** @description Broadcast not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/broadcasts/{id}/schedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Schedule a broadcast */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["ScheduleBroadcastRequest"];
                };
            };
            responses: {
                /** @description Broadcast scheduled */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Broadcast"];
                    };
                };
                /** @description Broadcast cannot be scheduled */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
                /** @description Broadcast not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/broadcasts/{id}/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Cancel a scheduled broadcast */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Broadcast cancelled */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Broadcast"];
                    };
                };
                /** @description Broadcast cannot be cancelled */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
                /** @description Broadcast not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/broadcasts/{id}/test": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Send a test email
         * @description Send a test email to a single address. Does not count against quota.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["TestBroadcastRequest"];
                };
            };
            responses: {
                /** @description Test email sent */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["TestBroadcastResponse"];
                    };
                };
                /** @description Cannot send test */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
                /** @description Broadcast not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/broadcasts/{id}/analytics": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get broadcast analytics
         * @description Get opens over time and link click performance for a broadcast
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Analytics data */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["BroadcastAnalytics"];
                    };
                };
                /** @description Broadcast not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/broadcast-templates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List broadcast templates */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description List of broadcast templates */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["BroadcastTemplateListResponse"];
                    };
                };
            };
        };
        put?: never;
        /** Create a broadcast template */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["CreateBroadcastTemplateRequest"];
                };
            };
            responses: {
                /** @description Created broadcast template */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["BroadcastTemplate"];
                    };
                };
                /** @description Invalid request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
                /** @description Template with this ID already exists */
                409: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/broadcast-templates/{templateId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a broadcast template */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    templateId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Broadcast template details */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["BroadcastTemplate"];
                    };
                };
                /** @description Broadcast template not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        /** Delete a broadcast template */
        delete: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    templateId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Broadcast template deleted */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Broadcast template not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        options?: never;
        head?: never;
        /** Update a broadcast template */
        patch: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    templateId: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["UpdateBroadcastTemplateRequest"];
                };
            };
            responses: {
                /** @description Updated broadcast template */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["BroadcastTemplate"];
                    };
                };
                /** @description Broadcast template not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        trace?: never;
    };
    "/v1/broadcast-templates/{templateId}/render": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Render a broadcast template
         * @description Preview template with variables substituted
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    templateId: string;
                };
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["RenderTemplateRequest"] & {
                        /**
                         * @description Variables to render in the template
                         * @example {
                         *       "company_name": "Acme Inc",
                         *       "user_name": "Johan"
                         *     }
                         */
                        variables: {
                            [key: string]: string;
                        };
                    };
                };
            };
            responses: {
                /** @description Rendered template */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["RenderTemplateResponse"] & {
                            /** @example Welcome to Acme Inc! */
                            subject: string;
                            /** @example <html>...</html> */
                            htmlContent: string;
                            /** @example Plain text version... */
                            textContent: string | null;
                        };
                    };
                };
                /** @description Broadcast template not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Error"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/tracking/defaults": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getTrackingDefaults"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["updateTrackingDefaults"];
        trace?: never;
    };
    "/o/{trackingId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    trackingId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Tracking pixel */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/c/{trackingId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    trackingId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Redirect to original URL */
                302: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Link not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/contact": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["ContactRequest"];
                };
            };
            responses: {
                /** @description Message sent */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Invalid request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            code: string;
                        };
                    };
                };
                /** @description Rate limited */
                429: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            code: string;
                        };
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/dkim-check": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["CreateDkimCheckSessionRequest"];
                };
            };
            responses: {
                /** @description Session created */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["DkimCheckSessionResponse"];
                    };
                };
                /** @description Invalid request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            code: string;
                        };
                    };
                };
                /** @description Rate limited */
                429: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            code: string;
                        };
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/dkim-check/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    id: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Session found */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["DkimCheckSessionResponse"];
                    };
                };
                /** @description Session not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            code: string;
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/editor/test-send": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["PublicTestSendRequest"];
                };
            };
            responses: {
                /** @description Email sent successfully */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["PublicTestSendResponse"];
                    };
                };
                /** @description Invalid request */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            message: string;
                            code: string;
                        };
                    };
                };
                /** @description Rate limited */
                429: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["RateLimitError"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/editor/ai/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get AI feature status
         * @description Returns whether AI features are enabled and rate limits.
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description AI feature status */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["AiStatusResponse"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/editor/ai/generate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Generate email with AI
         * @description Generate a complete email template from a natural language prompt.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["GenerateEmailRequest"];
                };
            };
            responses: {
                /** @description Generated email */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["GenerateEmailResponse"];
                    };
                };
                /** @description Rate limit exceeded */
                429: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["GenerateEmailError"];
                    };
                };
                /** @description AI generation failed */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["GenerateEmailError"];
                    };
                };
                /** @description AI service unavailable */
                503: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["GenerateEmailError"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/public/editor/ai/improve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Improve text with AI
         * @description Improve selected text according to the specified instruction.
         */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["ImproveTextRequest"];
                };
            };
            responses: {
                /** @description Improved text */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ImproveTextResponse"];
                    };
                };
                /** @description Rate limit exceeded */
                429: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ImproveTextError"];
                    };
                };
                /** @description AI improvement failed */
                500: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ImproveTextError"];
                    };
                };
                /** @description AI service unavailable */
                503: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["ImproveTextError"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        Error: {
            /** @example Invalid request */
            message: string;
            /** @example VALIDATION_ERROR */
            code?: string;
        };
        Alert: {
            id: string;
            domainId: string | null;
            domainName: string | null;
            /** @enum {string} */
            type: "bounce_rate" | "complaint_rate" | "dns_temp_failure" | "dns_failed" | "dns_recovered" | "inbound_mx_failure" | "inbound_mx_recovered" | "tracking_cname_failure" | "tracking_cname_recovered";
            /** @enum {string} */
            severity: "info" | "warning" | "critical";
            title: string;
            message: string;
            data?: unknown;
            readAt: string | null;
            createdAt: string;
        };
        AlertListResponse: {
            alerts: components["schemas"]["Alert"][];
            unreadCount: number;
        };
        UnreadCountResponse: {
            count: number;
        };
        MarkAllAsReadResponse: {
            count: number;
        };
        AlertSettings: {
            bounceThreshold: number;
            complaintThreshold: number;
            emailsEnabled: boolean;
        };
        UpdateAlertSettingsRequest: {
            bounceThreshold?: number;
            complaintThreshold?: number;
            emailsEnabled?: boolean;
        };
        ReplyToInboundResponse: {
            /** @description Inbound email ID */
            id: string;
            /** @description Created reply email ID */
            emailId: string;
        };
        AttachmentInput: {
            /** @example invoice.pdf */
            filename: string;
            /**
             * @description MIME type (inferred from filename if omitted)
             * @example application/pdf
             */
            contentType?: string;
            /** @description Base64-encoded file content */
            content?: string;
            /**
             * Format: uri
             * @description URL to fetch attachment from (HTTPS only)
             * @example https://example.com/invoice.pdf
             */
            path?: string;
        };
        ReplyToInboundRequest: {
            /** @description HTML body for the reply */
            html: string;
            /** @description Plain text body (optional, auto-generated from HTML if omitted) */
            text?: string;
            /** @description Subject line. Defaults to 'Re: [original subject]' */
            subject?: string;
            /**
             * @description Include original CC recipients in reply
             * @default false
             */
            includeOriginalCc: boolean;
            /** @description Additional CC recipients */
            additionalCc?: string[];
            /** @description Additional BCC recipients */
            additionalBcc?: string[];
            /** @description File attachments */
            attachments?: components["schemas"]["AttachmentInput"][];
            /** @description Custom email headers */
            headers?: {
                [key: string]: string;
            };
        };
        AttachmentMeta: {
            /** @example invoice.pdf */
            filename: string;
            /** @example 102400 */
            size: number;
            /** @example application/pdf */
            contentType: string;
        };
        Suppression: {
            id: string;
            email: string;
            reason: string;
            sourceEmailId: string | null;
            createdAt: string;
        };
        SuppressionListResponse: {
            data: components["schemas"]["Suppression"][];
            total: number;
        };
        ApiKeyDomainRef: {
            id: string;
            name: string;
        } | null;
        ApiKey: {
            id: string;
            name: string;
            keyPrefix: string;
            /** @enum {string} */
            mode: "live" | "test";
            /** @enum {string} */
            permission: "full_access" | "sending";
            lastUsedAt: string | null;
            expiresAt: string | null;
            createdAt: string;
            domain: components["schemas"]["ApiKeyDomainRef"];
        };
        ApiKeyWithSecret: components["schemas"]["ApiKey"] & {
            key: string;
        };
        CreateApiKeyRequest: {
            name: string;
            /**
             * @default live
             * @enum {string}
             */
            mode: "live" | "test";
            /**
             * @default full_access
             * @enum {string}
             */
            permission: "full_access" | "sending";
            /** Format: date-time */
            expiresAt?: string;
            domainId?: string;
        };
        Domain: {
            id: string;
            name: string;
            /** @enum {string} */
            status: "pending" | "verified" | "temporary_failure" | "failed";
            /** @enum {string} */
            type: "TRANSACTIONAL" | "BROADCAST" | "BOTH";
            verifiedAt: string | null;
            lastCheckedAt: string | null;
            failingSince: string | null;
            createdAt: string;
        };
        DomainListItem: components["schemas"]["Domain"] & {
            inboundEnabled: boolean;
            inboundReady: boolean;
        };
        DnsRecord: {
            /** @enum {string} */
            key: "dkim" | "mx" | "spf" | "dmarc";
            /** @enum {string} */
            type: "CNAME" | "TXT" | "MX";
            name: string;
            value: string;
            priority?: number;
        };
        DomainWithDnsRecords: components["schemas"]["Domain"] & {
            dnsRecords: components["schemas"]["DnsRecord"][];
        };
        CreateDomainRequest: {
            name: string;
            /** Format: email */
            testEmailAddress?: string;
        };
        RecordStatus: {
            found: boolean;
            valid: boolean;
        };
        VerificationStatus: {
            verified: boolean;
            dkim: components["schemas"]["RecordStatus"];
            mx: components["schemas"]["RecordStatus"];
            spf: components["schemas"]["RecordStatus"];
            dmarc: components["schemas"]["RecordStatus"];
        };
        DomainVerificationResult: {
            domain: components["schemas"]["Domain"];
            verification: components["schemas"]["VerificationStatus"];
        };
        UpdateDomainRequest: {
            /** @enum {string} */
            type: "TRANSACTIONAL" | "BROADCAST" | "BOTH";
        };
        DomainHealth: {
            score: number;
            factors: {
                name: string;
                score: number;
                maxScore: number;
                description: string;
            }[];
            recommendations: string[];
        };
        DomainWarmup: {
            domainAgeDays: number;
            warmupDays: number;
            progress: number;
            recommendedDailyMax?: number;
            currentDailyRate: number;
            isWarmedUp: boolean;
            /** @enum {string} */
            status: "on_track" | "too_fast" | "warmed_up";
            message: string;
        };
        TrackingDomainConfig: {
            /**
             * @description Custom tracking domain (CNAME)
             * @example track.yourdomain.com
             */
            trackingDomain: string | null;
            /** @description Whether the tracking domain CNAME is verified */
            trackingDomainVerified: boolean;
        };
        SetTrackingDomainRequest: {
            /**
             * @description Custom tracking domain to set, or null to remove
             * @example track.yourdomain.com
             */
            trackingDomain: string | null;
        };
        VerifyTrackingDomainResponse: {
            verified: boolean;
            actualCname: string | null;
            config: components["schemas"]["TrackingDomainConfig"];
        };
        TemplateContent: {
            /**
             * @example doc
             * @enum {string}
             */
            type: "doc";
            content?: {
                [key: string]: unknown;
            }[];
        } | null;
        TemplateVariable: {
            /** @example name */
            key: string;
            /**
             * @example string
             * @enum {string}
             */
            type: "string" | "number" | "boolean";
            /** @example there */
            fallbackValue?: string;
        };
        Template: {
            /** @example cuid123 */
            id: string;
            /** @example welcome-email */
            templateId: string;
            /** @example Welcome Email */
            name: string | null;
            /** @example Welcome to {{company}}, {{name}}! */
            subject: string;
            /** @description Email HTML with inline styles */
            html: string | null;
            content: components["schemas"]["TemplateContent"];
            /** @description Plain text template with {{variable}} placeholders */
            text: string | null;
            /**
             * @description Typed variables with optional fallback values
             * @example [
             *       {
             *         "key": "name",
             *         "type": "string",
             *         "fallbackValue": "there"
             *       },
             *       {
             *         "key": "company",
             *         "type": "string"
             *       }
             *     ]
             */
            variables: components["schemas"]["TemplateVariable"][];
            /**
             * @example draft
             * @enum {string}
             */
            status: "draft" | "published";
            /** @example 2024-01-15T10:30:00Z */
            createdAt: string;
            /** @example 2024-01-15T10:30:00Z */
            updatedAt: string;
        };
        CreateTemplateRequest: {
            /**
             * @description Unique template identifier (lowercase, dashes allowed)
             * @example welcome-email
             */
            templateId: string;
            /**
             * @description Human-readable template name
             * @example Welcome Email
             */
            name?: string;
            /**
             * @description Email subject with optional {{variables}}
             * @example Welcome to {{company}}!
             */
            subject: string;
            /** @description Email HTML with inline styles */
            html?: string;
            content?: components["schemas"]["TemplateContent"] & unknown;
            /** @description Plain text body with {{variable}} placeholders */
            text?: string;
            /** @description Typed variables (auto-detected from content if not provided) */
            variables?: components["schemas"]["TemplateVariable"][];
        };
        UpdateTemplateRequest: {
            name?: string | null;
            subject?: string;
            html?: string | null;
            content?: components["schemas"]["TemplateContent"];
            text?: string | null;
            /** @description Typed variables (auto-detected from content if not provided) */
            variables?: components["schemas"]["TemplateVariable"][];
        };
        TestTemplateRequest: {
            /**
             * Format: email
             * @example test@example.com
             */
            to: string;
            /**
             * @description Domain ID to send from, or 'sendpigeon' for shared domain
             * @example dom_abc123
             */
            domainId: string;
            /**
             * @description Variable values to substitute
             * @example {
             *       "name": "John",
             *       "company": "Acme"
             *     }
             */
            variables?: {
                [key: string]: string;
            };
        };
        RenderTemplateResponse: {
            /** @example Welcome to Acme, John! */
            subject: string;
            /** @description Rendered HTML email */
            html: string;
            /** @description Plain text version */
            text: string;
        };
        RenderTemplateRequest: {
            /**
             * @description Variable values to substitute
             * @example {
             *       "name": "John",
             *       "company": "Acme"
             *     }
             */
            variables?: {
                [key: string]: string;
            };
        };
        TemplateVersion: {
            /** @example ver_abc123 */
            id: string;
            /** @example Welcome to {{company}}! */
            subject: string;
            /** @example 2024-01-15T10:30:00Z */
            createdAt: string;
        };
        TemplateVersionDetail: {
            /** @example ver_abc123 */
            id: string;
            /** @example Welcome to {{company}}! */
            subject: string;
            content: components["schemas"]["TemplateContent"];
            html: string | null;
            /** @example 2024-01-15T10:30:00Z */
            createdAt: string;
        };
        SendEmailResponse: {
            /**
             * @description Unique email ID
             * @example em_abc123
             */
            id: string;
            /**
             * @description Current email status
             * @example sent
             * @enum {string}
             */
            status: "scheduled" | "cancelled" | "pending" | "sent" | "delivered" | "bounced" | "complained" | "failed";
            /**
             * Format: date-time
             * @description Scheduled send time (only if scheduled)
             * @example 2024-01-15T10:00:00Z
             */
            scheduled_at?: string;
            /** @description List of suppressed recipient addresses (bounced/complained previously) */
            suppressed?: string[];
            /**
             * @description Non-fatal warnings about the request. Email was sent successfully but some options may have been ignored.
             * @example [
             *       "tracking_disabled: Tracking options ignored - disabled at organization level"
             *     ]
             */
            warnings?: string[];
        };
        SendEmailRequest: {
            /**
             * @description Sender email address. Accepts 'email@domain.com' or 'Name <email@domain.com>'. Domain must be verified.
             * @example Acme <hello@yourdomain.com>
             */
            from: string;
            /**
             * @description Recipient email address(es). Can be a single email or array.
             * @example user@example.com
             */
            to: string | string[];
            /** @description CC recipients */
            cc?: string | string[];
            /** @description BCC recipients */
            bcc?: string | string[];
            /**
             * @description Email subject. Required unless using templateId.
             * @example Welcome to Acme!
             */
            subject?: string;
            /** @description HTML body content (max 10MB) */
            html?: string;
            /** @description Plain text body content (max 10MB) */
            text?: string;
            /** @description Reply-to address */
            replyTo?: string;
            /** @description Template ID to use instead of subject/body */
            templateId?: string;
            /**
             * @description Variables to substitute in template
             * @example {
             *       "name": "John",
             *       "company": "Acme"
             *     }
             */
            variables?: {
                [key: string]: string;
            };
            /** @description File attachments. Provide content (base64) or path (URL). */
            attachments?: components["schemas"]["AttachmentInput"][];
            /**
             * @description Tags for filtering and analytics. Max 5 tags, 50 chars each.
             * @example [
             *       "order",
             *       "confirmation"
             *     ]
             */
            tags?: string[];
            /**
             * @description Custom key-value pairs. Returned in webhooks and logs. Max 500 chars per value.
             * @example {
             *       "orderId": "12345",
             *       "userId": "abc"
             *     }
             */
            metadata?: {
                [key: string]: string;
            };
            /**
             * @description Custom email headers. Allowed: X-* headers, List-* headers. Max 20 headers, 2000 chars each.
             * @example {
             *       "X-Priority": "1",
             *       "List-Unsubscribe": "<mailto:unsub@example.com>"
             *     }
             */
            headers?: {
                [key: string]: string;
            };
            /**
             * Format: date-time
             * @description ISO 8601 datetime to send email. Max 30 days ahead. Omit to send immediately.
             * @example 2024-01-15T10:00:00Z
             */
            scheduled_at?: string;
            /**
             * @description Opt-in to tracking for this email. Disabled by default. Requires tracking to be enabled at organization level.
             * @example {
             *       "opens": true,
             *       "clicks": true
             *     }
             */
            tracking?: {
                /**
                 * @description Enable open tracking for this email
                 * @example true
                 */
                opens?: boolean;
                /**
                 * @description Enable click tracking for this email
                 * @example true
                 */
                clicks?: boolean;
            };
        };
        BatchEmailResult: {
            /** @description Index in request array */
            index: number;
            /** @enum {string} */
            status: "sent";
            /** @example em_abc123 */
            id: string;
            suppressed?: string[];
            warnings?: string[];
        } | {
            /** @description Index in request array */
            index: number;
            /** @enum {string} */
            status: "error";
            error: {
                /** @example DOMAIN_NOT_VERIFIED */
                code: string;
                /** @example Domain not verified */
                message: string;
            };
        };
        SendBatchEmailResponse: {
            data: components["schemas"]["BatchEmailResult"][];
            summary: {
                total: number;
                sent: number;
                failed: number;
            };
        };
        BatchEmailEntry: {
            /**
             * @description Sender email address. Domain must be verified.
             * @example Acme <hello@yourdomain.com>
             */
            from: string;
            /**
             * @description Recipient email address(es).
             * @example user@example.com
             */
            to: string | string[];
            cc?: string | string[];
            bcc?: string | string[];
            /**
             * @description Required unless using templateId.
             * @example Welcome!
             */
            subject?: string;
            html?: string;
            text?: string;
            replyTo?: string;
            templateId?: string;
            variables?: {
                [key: string]: string;
            };
            attachments?: components["schemas"]["AttachmentInput"][];
            tags?: string[];
            metadata?: {
                [key: string]: string;
            };
            headers?: {
                [key: string]: string;
            };
            /** @description Unique key to prevent duplicate sends for this email. */
            idempotencyKey?: string;
            /**
             * Format: date-time
             * @description ISO 8601 datetime to send. Max 30 days ahead.
             * @example 2024-01-15T10:00:00Z
             */
            scheduled_at?: string;
            /**
             * @description Opt-in to tracking for this email. Disabled by default.
             * @example {
             *       "opens": true,
             *       "clicks": true
             *     }
             */
            tracking?: {
                opens?: boolean;
                clicks?: boolean;
            };
        };
        SendBatchEmailRequest: {
            /** @description Array of emails to send (1-100) */
            emails: components["schemas"]["BatchEmailEntry"][];
        };
        EmailDetailResponse: {
            /** @example em_abc123 */
            id: string;
            /** @example hello@yourdomain.com */
            fromAddress: string;
            /** @example user@example.com */
            toAddress: string;
            ccAddress: string | null;
            bccAddress: string | null;
            /** @example Welcome to Acme! */
            subject: string;
            /** @enum {string} */
            status: "scheduled" | "cancelled" | "pending" | "sent" | "delivered" | "bounced" | "complained" | "failed";
            tags: string[];
            metadata: {
                [key: string]: string;
            } | null;
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            sentAt: string | null;
            /** Format: date-time */
            deliveredAt: string | null;
            /** Format: date-time */
            bouncedAt: string | null;
            /** Format: date-time */
            complainedAt: string | null;
            bounceType: string | null;
            complaintType: string | null;
            attachments: components["schemas"]["AttachmentMeta"][] | null;
            hasBody: boolean;
        };
        StatusResponse: {
            organization: {
                id: string;
                name: string;
            };
            plan: string;
            usage: {
                emailsSent: number;
                emailLimit: number;
                percentUsed: number;
                periodStart: string;
                periodEnd: string;
            };
            apiKey: {
                id: string;
                /** @enum {string} */
                mode: "live" | "test";
                /** @enum {string} */
                permission: "full_access" | "sending";
            };
        };
        Form: {
            id: string;
            domainId: string;
            domainName: string;
            name: string;
            toAddresses: string[];
            subject: string | null;
            replyToSubmitter: boolean;
            redirectUrl: string | null;
            allowedOrigins: string[];
            isActive: boolean;
            createdAt: string;
            updatedAt: string;
        };
        CreateFormRequest: {
            /** @description Domain ID to use */
            domainId: string;
            /** @example contact */
            name: string;
            /** @description Recipients (max 5) */
            toAddresses: string[];
            /**
             * @description Email subject (default: 'New submission from {name}')
             * @example New contact form submission
             */
            subject?: string;
            /**
             * @description Set Reply-To to submitter's email
             * @default true
             */
            replyToSubmitter: boolean;
            /**
             * Format: uri
             * @description Redirect URL after submission
             */
            redirectUrl?: string;
            /**
             * @description Allowed CORS origins (empty = domain only, HTTPS only)
             * @default []
             */
            allowedOrigins: string[];
        };
        UpdateFormRequest: {
            name?: string;
            toAddresses?: string[];
            subject?: string | null;
            replyToSubmitter?: boolean;
            /** Format: uri */
            redirectUrl?: string | null;
            allowedOrigins?: string[];
            isActive?: boolean;
        };
        OrganizationResponse: {
            id: string;
            name: string;
            slug: string;
        };
        UpdateOrganizationRequest: {
            name: string;
        };
        ProfileResponse: {
            id: string;
            name: string;
            email: string;
            twoFactorEnabled: boolean;
        };
        UpdateProfileRequest: {
            name: string;
        };
        Session: {
            id: string;
            createdAt: string;
            userAgent: string | null;
            isCurrent: boolean;
        };
        SessionListResponse: {
            sessions: components["schemas"]["Session"][];
        };
        DeleteAccountPreviewResponse: {
            orgsToDelete: {
                id: string;
                name: string;
                emailCount: number;
                templateCount: number;
                domainCount: number;
            }[];
            orgsToLeave: {
                id: string;
                name: string;
            }[];
            blockedByOrgs: {
                id: string;
                name: string;
                memberCount: number;
            }[];
            canDelete: boolean;
        };
        DisableTwoFactorRequest: {
            code: string;
        };
        SubmitFormRequest: {
            /**
             * Format: email
             * @description Submitter email
             */
            email: string;
            /** @description Submitter name */
            name?: string;
            /** @description Spam protection - must be empty */
            _honeypot?: string;
        };
        Contact: {
            /** @example con_abc123 */
            id: string;
            /**
             * Format: email
             * @example johan@example.com
             */
            email: string;
            /**
             * @description Freeform JSON fields for contact data
             * @example {
             *       "firstName": "Johan",
             *       "lastName": "Stenius",
             *       "company": "Acme Corp"
             *     }
             */
            fields: {
                [key: string]: unknown;
            };
            /**
             * @example [
             *       "newsletter",
             *       "vip"
             *     ]
             */
            tags: string[];
            /** @example Europe/Stockholm */
            timezone: string | null;
            /**
             * @example ACTIVE
             * @enum {string}
             */
            status: "ACTIVE" | "UNSUBSCRIBED" | "BOUNCED" | "COMPLAINED";
            /** @example null */
            unsubscribedAt: string | null;
            /** @example null */
            bouncedAt: string | null;
            /** @example null */
            complainedAt: string | null;
            /** @example 2024-01-15T10:30:00Z */
            createdAt: string;
            /** @example 2024-01-15T10:30:00Z */
            updatedAt: string;
        };
        ContactListResponse: {
            data: components["schemas"]["Contact"][];
            /** @example 12500 */
            total: number;
        };
        AudienceStats: {
            /** @example 12500 */
            total: number;
            /** @example 11892 */
            active: number;
            /** @example 500 */
            unsubscribed: number;
            /** @example 80 */
            bounced: number;
            /** @example 28 */
            complained: number;
        };
        TagsResponse: {
            /**
             * @example [
             *       "newsletter",
             *       "vip"
             *     ]
             */
            data: string[];
        };
        CreateContactRequest: {
            /**
             * Format: email
             * @example user@example.com
             */
            email: string;
            /**
             * @description Freeform JSON fields for contact data
             * @example {
             *       "firstName": "Johan",
             *       "lastName": "Stenius",
             *       "company": "Acme Corp"
             *     }
             */
            fields?: {
                [key: string]: unknown;
            };
            /**
             * @example [
             *       "newsletter"
             *     ]
             */
            tags?: string[];
            /** @example America/New_York */
            timezone?: string;
        };
        BatchResult: {
            /** @example 95 */
            created: number;
            /** @example 3 */
            updated: number;
            /**
             * @example [
             *       {
             *         "email": "invalid",
             *         "error": "Invalid email format"
             *       }
             *     ]
             */
            failed: {
                email: string;
                error: string;
            }[];
        };
        BatchContact: {
            /**
             * Format: email
             * @example user@example.com
             */
            email: string;
            /**
             * @description Freeform JSON fields for contact data
             * @example {
             *       "firstName": "Johan",
             *       "lastName": "Stenius",
             *       "company": "Acme Corp"
             *     }
             */
            fields?: {
                [key: string]: unknown;
            };
            tags?: string[];
            timezone?: string;
        };
        BatchCreateContactsRequest: {
            /** @description Up to 1000 contacts per batch */
            contacts: components["schemas"]["BatchContact"][];
        };
        ImportResult: {
            /** @example 890 */
            created: number;
            /** @example 105 */
            updated: number;
            /** @example 5 */
            skipped: number;
            /**
             * @example [
             *       {
             *         "row": 3,
             *         "email": "invalid",
             *         "error": "Invalid email format"
             *       }
             *     ]
             */
            errors: {
                row: number;
                email?: string;
                error: string;
            }[];
        };
        UpdateContactRequest: {
            /**
             * @description Freeform JSON fields for contact data
             * @example {
             *       "firstName": "Johan",
             *       "lastName": "Stenius",
             *       "company": "Acme Corp"
             *     }
             */
            fields?: {
                [key: string]: unknown;
            };
            tags?: string[];
            timezone?: string | null;
        };
        BroadcastStats: {
            /** @example 5000 */
            totalRecipients: number;
            /** @example 4950 */
            sentCount: number;
            /** @example 4900 */
            deliveredCount: number;
            /** @example 2450 */
            openedCount: number;
            /** @example 980 */
            clickedCount: number;
            /** @example 30 */
            bouncedCount: number;
            /** @example 5 */
            complainedCount: number;
            /** @example 15 */
            unsubscribedCount: number;
        };
        Broadcast: {
            /** @example bc_abc123 */
            id: string;
            /** @example December Newsletter */
            name: string;
            /** @example Your December Updates */
            subject: string;
            /** @example Check out what's new this month */
            previewText: string | null;
            /** @example <html>...</html> */
            htmlContent: string | null;
            /**
             * @example {
             *       "type": "doc",
             *       "content": []
             *     }
             */
            content: {
                [key: string]: unknown;
            } | null;
            /** @example Plain text version... */
            textContent: string | null;
            /** @example Acme Inc */
            fromName: string;
            /**
             * Format: email
             * @example news@acme.com
             */
            fromEmail: string;
            /** @example support@acme.com */
            replyTo: string | null;
            /** @example 123 Main St, City, Country */
            physicalAddress: string | null;
            /**
             * @example [
             *       "newsletter",
             *       "monthly"
             *     ]
             */
            tags: string[];
            /**
             * @example DRAFT
             * @enum {string}
             */
            status: "DRAFT" | "SCHEDULED" | "SENDING" | "SENT" | "CANCELLED" | "FAILED";
            /** @example 2024-12-20T10:00:00Z */
            scheduledAt: string | null;
            /** @example null */
            sentAt: string | null;
            /** @example null */
            completedAt: string | null;
            stats: components["schemas"]["BroadcastStats"];
            /** @example 2024-12-15T10:30:00Z */
            createdAt: string;
            /** @example 2024-12-15T10:30:00Z */
            updatedAt: string;
        };
        BroadcastListResponse: {
            data: components["schemas"]["Broadcast"][];
            /** @example 25 */
            total: number;
        };
        CreateBroadcastRequest: {
            /** @example December Newsletter */
            name: string;
            /** @example Your December Updates */
            subject: string;
            /** @example Check out what's new */
            previewText?: string;
            /** @example <html>...</html> */
            htmlContent?: string;
            /**
             * @description Editor JSON content
             * @example {
             *       "type": "doc",
             *       "content": []
             *     }
             */
            content?: {
                [key: string]: unknown;
            };
            /** @example Plain text version... */
            textContent?: string;
            /** @example Acme Inc */
            fromName: string;
            /**
             * Format: email
             * @example news@acme.com
             */
            fromEmail: string;
            /**
             * Format: email
             * @example support@acme.com
             */
            replyTo?: string;
            /** @example dom_xyz789 */
            domainId: string;
            /**
             * @example [
             *       "newsletter"
             *     ]
             */
            tags?: string[];
            /**
             * @description Optional template ID to copy content from
             * @example bt_abc123
             */
            broadcastTemplateId?: string;
        };
        UpdateBroadcastRequest: {
            name?: string;
            subject?: string;
            previewText?: string | null;
            htmlContent?: string | null;
            content?: {
                [key: string]: unknown;
            } | null;
            textContent?: string | null;
            fromName?: string;
            /** Format: email */
            fromEmail?: string;
            /** Format: email */
            replyTo?: string | null;
            tags?: string[];
        };
        BroadcastRecipient: {
            /** @example rec_abc123 */
            id: string;
            /** @example con_xyz789 */
            contactId: string;
            /**
             * Format: email
             * @example user@example.com
             */
            email: string;
            /**
             * @example delivered
             * @enum {string}
             */
            status: "pending" | "sent" | "delivered" | "bounced" | "complained" | "failed";
            /** @example 2024-12-20T10:00:05Z */
            sentAt: string | null;
            /** @example 2024-12-20T10:00:08Z */
            deliveredAt: string | null;
            /** @example 2024-12-20T10:15:00Z */
            openedAt: string | null;
            /** @example null */
            clickedAt: string | null;
            /** @example null */
            bouncedAt: string | null;
            /** @example null */
            complainedAt: string | null;
            /** @example null */
            unsubscribedAt: string | null;
            /** @example 2024-12-20T10:00:00Z */
            createdAt: string;
        };
        RecipientListResponse: {
            data: components["schemas"]["BroadcastRecipient"][];
            /** @example 5000 */
            total: number;
        };
        ScheduleBroadcastRequest: {
            /**
             * Format: date-time
             * @description ISO 8601 datetime
             * @example 2024-12-20T10:00:00Z
             */
            scheduledAt: string;
        };
        TestBroadcastResponse: {
            /** @example true */
            success: boolean;
            /** @example Test email sent */
            message: string;
        };
        TestBroadcastRequest: {
            /**
             * Format: email
             * @example test@example.com
             */
            email: string;
        };
        OpensOverTime: {
            /** @example 2024-12-15T10:00:00Z */
            hour: string;
            /** @example 125 */
            opens: number;
        };
        LinkPerformance: {
            /** @example https://example.com/promo */
            url: string;
            /** @example 450 */
            clicks: number;
            /** @example 320 */
            uniqueClicks: number;
        };
        BroadcastAnalytics: {
            opensOverTime: components["schemas"]["OpensOverTime"][];
            linkPerformance: components["schemas"]["LinkPerformance"][];
        };
        BroadcastTemplate: {
            /** @example bct_abc123 */
            id: string;
            /** @example welcome-email */
            templateId: string;
            /** @example Welcome Email */
            name: string;
            /** @example Welcome to {{company_name}}! */
            subject: string;
            /** @example Thanks for signing up */
            previewText: string | null;
            /** @example <html>...</html> */
            htmlContent: string;
            /** @example <html>...</html> */
            editorHtml: string | null;
            /**
             * @description Editor state JSON
             * @example {
             *       "blocks": []
             *     }
             */
            content: {
                [key: string]: unknown;
            } | null;
            /** @example Plain text version... */
            textContent: string | null;
            /**
             * @example [
             *       "company_name",
             *       "user_name"
             *     ]
             */
            variables: string[];
            /** @example 2024-01-15T10:30:00Z */
            createdAt: string;
            /** @example 2024-01-15T10:30:00Z */
            updatedAt: string;
        };
        BroadcastTemplateListResponse: {
            data: components["schemas"]["BroadcastTemplate"][];
            /** @example 10 */
            total: number;
        };
        CreateBroadcastTemplateRequest: {
            /** @example welcome-email */
            templateId: string;
            /** @example Welcome Email */
            name: string;
            /** @example Welcome to {{company_name}}! */
            subject: string;
            /** @example Thanks for signing up */
            previewText?: string;
            /** @example <html>...</html> */
            htmlContent: string;
            /** @example <html>...</html> */
            editorHtml?: string;
            /**
             * @description Editor state JSON
             * @example {
             *       "blocks": []
             *     }
             */
            content?: {
                [key: string]: unknown;
            };
            /** @example Plain text version... */
            textContent?: string;
            /**
             * @example [
             *       "company_name"
             *     ]
             */
            variables?: string[];
        };
        UpdateBroadcastTemplateRequest: {
            name?: string;
            subject?: string;
            previewText?: string | null;
            htmlContent?: string;
            editorHtml?: string | null;
            content?: {
                [key: string]: unknown;
            } | null;
            textContent?: string | null;
            variables?: string[];
        };
        TrackingDefaults: {
            /** @description Master toggle - if false, tracking is disabled org-wide */
            trackingEnabled: boolean;
            /** @description Anonymize IPs in tracking data */
            privacyMode: boolean;
            /** @description Fire webhook on every open vs first only */
            webhookOnEveryOpen: boolean;
            /** @description Fire webhook on every click vs first only */
            webhookOnEveryClick: boolean;
        };
        UpdateTrackingDefaultsRequest: {
            trackingEnabled?: boolean;
            privacyMode?: boolean;
            webhookOnEveryOpen?: boolean;
            webhookOnEveryClick?: boolean;
        };
        ContactRequest: {
            name: string;
            /** Format: email */
            email: string;
            message: string;
            _honeypot?: string;
        };
        DkimCheckSessionResponse: {
            id: string;
            domain: string;
            verifyEmail: string;
            /** @enum {string} */
            status: "pending" | "completed" | "expired";
            selector: string | null;
            dkimDomain: string | null;
            expiresAt: string;
        };
        CreateDkimCheckSessionRequest: {
            domain: string;
        };
        PublicTestSendResponse: {
            message: string;
            remaining: number;
            recipientRemaining: number;
        };
        RateLimitError: {
            message: string;
            /** @enum {string} */
            code: "RATE_LIMITED";
            retryAfter: number;
        };
        PublicTestSendRequest: {
            /** Format: email */
            to: string;
            subject: string;
            html: string;
            text?: string;
        };
        AiStatusResponse: {
            enabled: boolean;
            limits: {
                generate: number;
                improve: number;
            };
        };
        TipTapNode: {
            type: string;
            attrs?: {
                [key: string]: unknown;
            };
            content?: {
                [key: string]: unknown;
            }[];
            marks?: {
                type: string;
                attrs?: {
                    [key: string]: unknown;
                };
            }[];
            text?: string;
        };
        GenerateEmailResponse: {
            content: {
                /** @enum {string} */
                type: "doc";
                content: components["schemas"]["TipTapNode"][];
            };
            subject: string;
            variables: string[];
            usage: {
                inputTokens: number;
                outputTokens: number;
                cost: number;
            };
            remaining: number;
        };
        GenerateEmailError: {
            /** @enum {string} */
            error: "RATE_LIMITED" | "AI_ERROR" | "AI_UNAVAILABLE" | "INVALID_RESPONSE";
            remaining?: number;
            resetAt?: string;
            upsell?: {
                message: string;
                signupUrl: string;
            };
        };
        GenerateEmailRequest: {
            prompt: string;
            /** @enum {string} */
            tone?: "professional" | "friendly" | "casual" | "urgent";
        };
        ImproveTextResponse: {
            text: string;
            usage: {
                inputTokens: number;
                outputTokens: number;
                cost: number;
            };
            remaining: number;
        };
        ImproveTextError: {
            /** @enum {string} */
            error: "RATE_LIMITED" | "AI_ERROR" | "AI_UNAVAILABLE";
            remaining?: number;
            resetAt?: string;
            upsell?: {
                message: string;
                signupUrl: string;
            };
        };
        ImproveTextRequest: {
            text: string;
            /** @enum {string} */
            instruction: "shorter" | "longer" | "persuasive" | "formal" | "casual";
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    listAlerts: {
        parameters: {
            query?: {
                limit?: number;
                offset?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of alerts */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AlertListResponse"];
                };
            };
            /** @description Alerts not available on current plan */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getUnreadAlertCount: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Number of unread alerts */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UnreadCountResponse"];
                };
            };
        };
    };
    markAlertAsRead: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Alert marked as read */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Alert not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    markAllAlertsAsRead: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Number of alerts marked as read */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MarkAllAsReadResponse"];
                };
            };
        };
    };
    getAlertSettings: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Alert settings */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AlertSettings"];
                };
            };
            /** @description Alerts not available on current plan */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Organization not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    updateAlertSettings: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateAlertSettingsRequest"];
            };
        };
        responses: {
            /** @description Updated alert settings */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AlertSettings"];
                };
            };
            /** @description Alerts not available on current plan */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    replyToInbound: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["ReplyToInboundRequest"];
            };
        };
        responses: {
            /** @description Reply sent successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ReplyToInboundResponse"];
                };
            };
            /** @description Invalid request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Email quota exceeded */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Domain not verified or sending disabled */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Inbound email not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    listTemplates: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of templates */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Template"][];
                };
            };
        };
    };
    createTemplate: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CreateTemplateRequest"];
            };
        };
        responses: {
            /** @description Template created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Template"];
                };
            };
            /** @description Template ID already exists or invalid format */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Template limit reached. Upgrade plan. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getTemplate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                templateId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Template details */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Template"];
                };
            };
            /** @description Template not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    deleteTemplate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                templateId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Template deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Template not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    updateTemplate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                templateId: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateTemplateRequest"];
            };
        };
        responses: {
            /** @description Template updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Template"];
                };
            };
            /** @description Template not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    publishTemplate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                templateId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Template published */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Template"];
                };
            };
            /** @description Template not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    unpublishTemplate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                templateId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Template unpublished */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Template"];
                };
            };
            /** @description Template not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    testTemplate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                templateId: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["TestTemplateRequest"];
            };
        };
        responses: {
            /** @description Test email sent */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example Test email sent */
                        message: string;
                        /** @example email_abc123 */
                        emailId: string;
                    };
                };
            };
            /** @description Missing required variables */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Template not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    renderTemplate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                templateId: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["RenderTemplateRequest"];
            };
        };
        responses: {
            /** @description Rendered template */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RenderTemplateResponse"];
                };
            };
            /** @description Missing required variables or no content */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Template not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    listTemplateVersions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                templateId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of versions */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TemplateVersion"][];
                };
            };
            /** @description Template not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    createTemplateVersion: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                templateId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Version creation attempted */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Whether a new version was created */
                        created: boolean;
                    };
                };
            };
            /** @description Template not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getTemplateVersion: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                templateId: string;
                versionId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Version details */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TemplateVersionDetail"];
                };
            };
            /** @description Template or version not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    restoreTemplateVersion: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                templateId: string;
                versionId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Version restored */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example Version restored */
                        message: string;
                    };
                };
            };
            /** @description Template or version not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    sendEmail: {
        parameters: {
            query?: never;
            header?: {
                "idempotency-key"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["SendEmailRequest"];
            };
        };
        responses: {
            /** @description Email accepted for delivery */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SendEmailResponse"];
                };
            };
            /** @description Invalid request body or missing template variables */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Missing or invalid API key */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Monthly email quota exceeded. Upgrade plan to continue. */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Sender domain not verified. Add DNS records first. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Rate limit exceeded. Slow down requests. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    sendBatchEmails: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["SendBatchEmailRequest"];
            };
        };
        responses: {
            /** @description Batch processed. Check data array for per-email results. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SendBatchEmailResponse"];
                };
            };
            /** @description Invalid request body */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Missing or invalid API key */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Insufficient quota for batch */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Sending disabled for organization */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Rate limit exceeded */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Internal server error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getEmail: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Email details */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EmailDetailResponse"];
                };
            };
            /** @description Missing or invalid API key */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Email not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    cancelScheduledEmail: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Email schedule cancelled */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Missing or invalid API key */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Email not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Email is not scheduled */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getOrganization: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Current organization */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OrganizationResponse"];
                };
            };
            /** @description Organization not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    updateOrganization: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateOrganizationRequest"];
            };
        };
        responses: {
            /** @description Updated organization */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OrganizationResponse"];
                };
            };
            /** @description Insufficient permissions */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Organization not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getProfile: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description User profile */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProfileResponse"];
                };
            };
        };
    };
    updateProfile: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateProfileRequest"];
            };
        };
        responses: {
            /** @description Updated profile */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProfileResponse"];
                };
            };
        };
    };
    listSessions: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description List of sessions */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SessionListResponse"];
                };
            };
        };
    };
    revokeAllOtherSessions: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Number of sessions revoked */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        count: number;
                    };
                };
            };
        };
    };
    revokeSession: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Session revoked */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Cannot revoke current session */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Session not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    deleteAccountPreview: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Preview of what will be deleted */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DeleteAccountPreviewResponse"];
                };
            };
        };
    };
    deleteAccountRequest: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Confirmation email sent */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message: string;
                    };
                };
            };
            /** @description Cannot delete - must transfer ownership first */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    confirmDeleteAccount: {
        parameters: {
            query: {
                token: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Account deleted */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        message: string;
                    };
                };
            };
            /** @description Invalid or expired token */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    disableTwoFactor: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["DisableTwoFactorRequest"];
            };
        };
        responses: {
            /** @description Two-factor authentication disabled */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        success: boolean;
                    };
                };
            };
            /** @description Invalid code or 2FA not enabled */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getTrackingDefaults: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Organization tracking defaults */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TrackingDefaults"];
                };
            };
            /** @description Tracking not available on current plan */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Organization not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    updateTrackingDefaults: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["UpdateTrackingDefaultsRequest"];
            };
        };
        responses: {
            /** @description Updated tracking defaults */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TrackingDefaults"];
                };
            };
            /** @description Tracking not available on current plan */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Organization not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
}
