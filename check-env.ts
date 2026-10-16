import dotenv from "dotenv";

// Select the environment
const env = process.env.ENVIRONMENT || "qa";

// Load the selected environment file
dotenv.config({
    path: `.env.${env}`,
    override: true
});

console.log("Environment:", env);
console.log("Base URL:", process.env.BASE_URL);
console.log("Proxy server:", process.env.PROXY_URL);