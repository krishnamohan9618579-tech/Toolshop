
import { APIRequestContext, request } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";

// Step 1: Select the environment
const env = process.env.ENVIRONMENT || "ppd";

// Step 2: Load the environment file (.env.ppd or .env.prd)
dotenv.config({
    path: path.resolve(process.cwd(), `.env.${env}`),
    override: true
});

// Step 3: Read the base URL from the environment file
const baseURL = process.env.BASE_URL;

// Step 4: Validate the base URL
if (!baseURL) {
    throw new Error(`BASE_URL is missing in .env.${env}`);
}

// Step 5: Create a reusable API request context
export async function createApiRequestContext(
    token?: string
): Promise<APIRequestContext> {

    console.log("Environment:", env);
    console.log("Base URL:", baseURL);
    console.log("Proxy:", process.env.PROXY_URL);

    const apiContext = await request.newContext({
        // Application API base URL
        baseURL,

        // Corporate proxy configuration
        proxy: process.env.PROXY_URL
            ? { server: process.env.PROXY_URL }
            : undefined,

        // Ignore certificate errors if required by the corporate network
        ignoreHTTPSErrors: true,

        // Default headers and optional authentication
        extraHTTPHeaders: {
            Accept: "application/json",
            "Content-Type": "application/json",

            // Add Bearer token only when provided
            ...(token
                ? { Authorization: `Bearer ${token}` }
                : {})
        },

        // Request timeout: 30 seconds
        timeout: 30000
    });

    return apiContext;
}
