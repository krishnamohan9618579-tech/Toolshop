
import { test, expect } from "../../../fixtures/apiFixtures";

import {
    assertStatusCode,
    assertResponseBodyNotEmpty
} from "../../../utils/assertUtils";

import { getRequest } from "../../../utils/apiUtils";

test("Retrieve specific user information", async ({ authenticatedApiContext }) => {

    // Step 1: Get the authenticated user's information
    const currentUserResponse = await getRequest(
        authenticatedApiContext,
        "/users/me"
    );

    await assertStatusCode(currentUserResponse, 200);

    const currentUser = await currentUserResponse.json();

    // Step 2: Validate that the user ID exists
    expect(currentUser.id).toBeTruthy();

    // Step 3: Build the specific-user endpoint using the real ID
    const userEndpoint = `/users/${currentUser.id}`;

    // Step 4: Retrieve that specific user
    const response = await getRequest(
        authenticatedApiContext,
        userEndpoint
    );

    // Step 5: Validate status code and response body
    await assertStatusCode(response, 200);
    await assertResponseBodyNotEmpty(response);

    // Step 6: Validate user details
    const user = await response.json();

    expect(user.id).toBe(currentUser.id);
    expect(user.email).toBeTruthy();
    expect(user.first_name).toBeTruthy();

    console.log("Specific user information retrieved successfully");
});
