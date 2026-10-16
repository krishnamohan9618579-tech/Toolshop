
import { test, expect } from "../../../fixtures/apiFixtures";

import {
    assertStatusCode,
    assertResponseBodyNotEmpty
} from "../../../utils/assertUtils";

import { getRequest } from "../../../utils/apiUtils";

test("Retrieve users matching the search query", async ({ authenticatedApiContext }) => {

    // Step 1: Send GET request with search query and page number
    const response = await getRequest(
        authenticatedApiContext,
        "/users/search?q=john&page=1"
    );

    // Step 2: Validate status code
    await assertStatusCode(response, 200);

    // Step 3: Validate response body is not empty
    await assertResponseBodyNotEmpty(response);

    // Step 4: Convert response body to JSON
    const result = await response.json();

    // Step 5: Validate search response structure
    expect(result).toHaveProperty("data");
    expect(Array.isArray(result.data)).toBeTruthy();

    console.log("User search API test passed");
});
