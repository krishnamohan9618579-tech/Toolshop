
import {
    test as base,
    APIRequestContext,
    expect
} from "@playwright/test";

import { createApiRequestContext } from "../utils/apicontext";
import { getAuthToken } from "../utils/auth";

type ApiFixtures = {
    authenticatedApiContext: APIRequestContext;
};

export const test = base.extend<ApiFixtures>({
    authenticatedApiContext: async ({}, use) => {

        // Step 1: Get the authentication token
        const token = await getAuthToken();

        // Step 2: Create an authenticated API context
        const apiContext = await createApiRequestContext(token);

        try {
            // Step 3: Provide the context to the test
            await use(apiContext);
        } finally {
            // Step 4: Dispose of the API context
            await apiContext.dispose();
        }
    }
});

export { expect };
