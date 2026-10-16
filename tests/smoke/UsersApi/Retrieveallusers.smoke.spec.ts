
import { test } from "../../../fixtures/apiFixtures";
import {
    assertStatusCode,
    assertResponseBodyNotEmpty
} from "../../../utils/assertUtils";
import { getRequest } from "../../../utils/apiUtils";

test("Verify all users API", async ({ authenticatedApiContext }) => {

    // Step 1: Send GET request to retrieve all users
    const response = await getRequest(
        authenticatedApiContext,
        "/users?page=1"
    );

    // Step 2: Validate status code
    await assertStatusCode(response, 200);

    // Step 3: Validate response body
    await assertResponseBodyNotEmpty(response);

    console.log("Get all users API test passed");
});
