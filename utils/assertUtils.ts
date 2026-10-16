
import { expect, APIResponse } from "@playwright/test";

// Validate HTTP status code
export async function assertStatusCode(
    response: APIResponse,
    expectedStatusCode: number
): Promise<void> {
    expect(response.status()).toBe(expectedStatusCode);
}

// Validate response body is not empty
export async function assertResponseBodyNotEmpty(
    response: APIResponse
): Promise<void> {
    const responseBody = await response.json();
    expect(responseBody).toBeTruthy();
}

// Validate response body contains expected data
export async function assertResponseBodyContains(
    response: APIResponse,
    expectedData: Record<string, unknown>
): Promise<void> {
    const responseBody: unknown = await response.json();
    expect(responseBody).toMatchObject(expectedData);
}

// Validate response header
export async function assertContentType(
    response: APIResponse,
    expectedContentType: string
): Promise<void> {
    const contentType = response.headers()["content-type"];
    expect(contentType).toContain(expectedContentType);
}
