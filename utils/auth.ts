
import { expect } from "@playwright/test";
import { createApiRequestContext } from "./apicontext";
import loginData from "../test-data/loginData.json";

export async function getAuthToken(): Promise<string> {

    // Step 1: Create an API context without a token
    const apiContext = await createApiRequestContext();

    try {
        const baseURL = process.env.BASE_URL;

        if (!baseURL) {
            throw new Error("BASE_URL is missing from the environment file");
        }

        // Step 2: Build the login URL
        const loginUrl = new URL("/users/login", baseURL).toString();

        console.log("Login URL:", loginUrl);

        // Step 3: Send login credentials
        const response = await apiContext.post(loginUrl, {
            data: loginData.validUser
        });

        // Step 4: Read the response body
        const responseText = await response.text();

        let responseBody: any;

        try {
            responseBody = JSON.parse(responseText);
        } catch {
            responseBody = responseText;
        }

        const statusCode = response.status();

        console.log("Login Status Code:", statusCode);

        // Step 5: Log details only when login fails
        if (!response.ok()) {
            console.log("Login Error Response:", responseBody);
        }

        // Step 6: Validate login status
        expect(statusCode).toBe(200);

        // Step 7: Extract the access token
        const token = responseBody.access_token;

        if (!token) {
            throw new Error(
                "Access token was not returned by the login API"
            );
        }

        return token;

    } catch (error) {
        console.error("Login API failed:", error);
        throw error;

    } finally {
        // Step 8: Dispose of the login context
        await apiContext.dispose();
    }
}
