
import { APIRequestContext, APIResponse } from "@playwright/test";

// GET request
export async function getRequest(
    apiContext: APIRequestContext,
    endpoint: string
): Promise<APIResponse> {
    return await apiContext.get(endpoint);
}

// POST request
export async function postRequest(
    apiContext: APIRequestContext,
    endpoint: string,
    requestBody: object
): Promise<APIResponse> {
    return await apiContext.post(endpoint, {
        data: requestBody
    });
}

// PUT request
export async function putRequest(
    apiContext: APIRequestContext,
    endpoint: string,
    requestBody: object
): Promise<APIResponse> {
    return await apiContext.put(endpoint, {
        data: requestBody
    });
}

// PATCH request
export async function patchRequest(
    apiContext: APIRequestContext,
    endpoint: string,
    requestBody: object
): Promise<APIResponse> {
    return await apiContext.patch(endpoint, {
        data: requestBody
    });
}

// DELETE request
export async function deleteRequest(
    apiContext: APIRequestContext,
    endpoint: string
): Promise<APIResponse> {
    return await apiContext.delete(endpoint);
}
