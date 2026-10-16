
import { test, expect, request } from "@playwright/test";

test("Login Customer", async () => {

    // Step 1: Create API request context
    const requestApi = await request.newContext({
        proxy: {
            server: "http://rb-proxy-in.bosch.com:8080"
        }
    });

    // Step 2: Send POST request to login API
    const response = await requestApi.post(
        "https://api.practicesoftwaretesting.com/users/login",
        {
            headers: {
                Accept: "application/json"
            },
            data: {
                email: "customer@practicesoftwaretesting.com",
                password: "welcome01"
            }
        }
    );

    // Step 3: Get and print status code
    const statuscode = response.status();
    console.log("Status code:", statuscode);

    // Step 4: Get response body
    const responsebody = await response.json();

    // Step 5: Validate login response
    expect(statuscode).toBe(200);
    expect(responsebody.access_token).toBeTruthy();

    // Step 6: Extract and print access token
    const Token = responsebody.access_token;
    console.log("Access token:", Token);

    // Step 7: Close API request context
    await requestApi.dispose();

});
