
import { test, expect } from "../../../fixtures/apiFixtures";

import {
    assertStatusCode,
    assertResponseBodyNotEmpty
} from "../../../utils/assertUtils";

import { getRequest } from "../../../utils/apiUtils";

test("Retrieve a refreshed token", async ({ authenticatedApiContext }) => {

    // Step 1: Send GET request to refresh the authentication token
    const response = await getRequest(
        authenticatedApiContext,
        "/users/refresh"
    );

    // Step 2: Validate status code
    await assertStatusCode(response, 200);

    // Step 3: Validate response body is not empty
    await assertResponseBodyNotEmpty(response);

    // Step 4: Convert response body to JSON
    const tokenResponse = await response.json();

    // Step 5: Validate refreshed token
    expect(tokenResponse.access_token).toBeTruthy();

    console.log("Refresh token API test passed");
});
