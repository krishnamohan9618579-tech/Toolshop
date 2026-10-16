
import { test, expect, request } from "@playwright/test";

test("Verify current customer using GET API", async () => {

    // Step 1: Create API request context
    const requestApi = await request.newContext({
        proxy: {
            server: "http://rb-proxy-in.bosch.com:8080"
        }
    });

    // Step 2: Set a valid access token
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5wcmFjdGljZXNvZnR3YXJldGVzdGluZy5jb20vdXNlcnMvbG9naW4iLCJpYXQiOjE3OTIwMDI3MjksImV4cCI6MTc5MjAwMzAyOSwibmJmIjoxNzkyMDAyNzI5LCJqdGkiOiJGWVBGNE5QYW1NUDFCblAwIiwic3ViIjoiMDFNNFhTNTRZNjVUOVExRVAyU0NBU0ZUWTciLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3Iiwicm9sZSI6InVzZXIifQ.KDLP7oIQka3sOffU6hp4JXGLQVckPiH5EQQXWMwT1MY";

    // Step 3: Send GET request
    const response = await requestApi.get(
        "https://api.practicesoftwaretesting.com/users/me",
        {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            }
        }
    );

    // Step 4: Verify status code
    console.log("Status code:", response.status());
    expect(response.status()).toBe(200);

    // Step 5: Read response body
    const responseBody = await response.json();
    console.log("Response body:", responseBody);

    // Step 6: Validate customer details
    expect(responseBody.id).toBeTruthy();
    expect(responseBody.email).toBeTruthy();
    expect(responseBody.first_name).toBeTruthy();
    expect(responseBody.last_name).toBeTruthy();

    // Step 7: Close API context
    await requestApi.dispose();
});
