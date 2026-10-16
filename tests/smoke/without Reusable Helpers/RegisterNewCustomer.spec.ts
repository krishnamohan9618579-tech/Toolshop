
import { test, expect, request } from "@playwright/test";

test("POST - Register New Customer", async () => {

    // Step 1: Create API request context
    const requestApi = await request.newContext({
        proxy: {
            server: "http://rb-proxy-in.bosch.com:8080"
        }
    });

    // Step 2: Generate unique email
    const email = `krishna${Date.now()}@example.com`;

    // Step 3: Send POST request to register a new user
    const response = await requestApi.post(
        "https://api.practicesoftwaretesting.com/users/register",
        {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            data: {
                first_name: "Krishna",
                last_name: "Mohan",
                address: {
                    street: "Street 1",
                    house_number: "12",
                    city: "City",
                    state: "State",
                    country: "Country",
                    postal_code: "1234AA"
                },
                phone: "0987654321",
                dob: "1998-01-01",
                password: "Krishna!Test2026#Q7",
                email: email
            }
        }
    );

    // Step 4: Print status code
    const statuscode = response.status();
    console.log("Status code:", statuscode);

    // Step 5: Read response body
    const responsebody = await response.json();
    console.log("Response body:", responsebody);

    // Step 6: Validate registration
    expect(statuscode).toBe(201);
    expect(responsebody.email).toBe(email);
    expect(responsebody.first_name).toBe("Krishna");
    expect(responsebody.last_name).toBe("Mohan");
    expect(responsebody.id).toBeTruthy();

    // Step 7: Store created user details in variables
    const userId = responsebody.id;
    const registeredEmail = responsebody.email;

    console.log("Created User ID:", userId);
    console.log("Registered Email:", registeredEmail);

    // Step 8: Close API request context
    await requestApi.dispose();

});
