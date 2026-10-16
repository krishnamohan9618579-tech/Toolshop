
import { test, expect } from "../../../fixtures/apiFixtures";

import {
    assertStatusCode,
    assertResponseBodyNotEmpty
} from "../../../utils/assertUtils";

import { getRequest } from "../../../utils/apiUtils";

test("Retrieve current customer information", async ({ authenticatedApiContext }) => {

    // Step 1: Send GET request to retrieve the current customer
    const response = await getRequest(
        authenticatedApiContext,
        "/users/me"
    );

    // Step 2: Validate status code
    await assertStatusCode(response, 200);

    // Step 3: Validate response body is not empty
    await assertResponseBodyNotEmpty(response);

    // Step 4: Validate customer information
    const customer = await response.json();

    expect(customer.id).toBeTruthy();
    expect(customer.email).toBeTruthy();
    expect(customer.first_name).toBeTruthy();

    console.log("Current customer information retrieved successfully");
});
