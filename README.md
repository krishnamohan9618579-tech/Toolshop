# Toolshop – Playwright API Automation Framework

## Project Overview

Toolshop is an API automation framework developed using Playwright and TypeScript to test REST APIs. It follows a reusable framework design with separate utilities for API requests, authentication, response validation, test data, and fixtures.

The framework currently focuses on API smoke testing and is designed to support regression testing and Web UI automation in future enhancements.

## Tech Stack

- **Automation Tool:** Playwright Test
- **Programming Language:** TypeScript
- **Runtime:** Node.js
- **API Testing:** REST APIs
- **Test Data:** JSON
- **Assertions:** Playwright Expect
- **Version Control:** Git and GitHub
- **Test Reporting:** Playwright HTML Report
- **CI/CD:** GitHub Actions (planned)

## Application Under Test

**Practice Software Testing API**

Base URL: https://api.practicesoftwaretesting.com

## Framework Features

- Reusable API request context
- Support for GET, POST, PUT, PATCH, and DELETE requests
- Authentication and access-token handling
- Reusable API request utilities
- Common response assertion utilities
- Environment-based configuration
- JSON-based test data management
- API smoke testing
- TypeScript type checking
- HTML test reporting

## Project Structure

```text
Toolshop/
├── fixtures/
│   └── apiFixtures.ts
├── test-data/
│   └── loginData.json
├── tests/
│   └── smoke/
│       ├── UsersApi/
│       └── without Reusable Helpers/
├── utils/
│   ├── apicontext.ts
│   ├── apiUtils.ts
│   ├── assertUtils.ts
│   └── auth.ts
├── check-env.ts
├── playwright.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
├── .gitignore
└── README.md
```

## API Smoke Test Coverage

The current smoke test suite covers the following user APIs:

1. Retrieve all users
2. Retrieve a refreshed token
3. Retrieve current customer information
4. Retrieve specific user information
5. Search users using a query

The five API smoke tests have passed in the local development environment.

## Installation and Setup

### Prerequisites

- Node.js
- npm
- Git
- Visual Studio Code (recommended)

### Clone the Repository

```bash
git clone https://github.com/krishnamohan9618579-tech/Toolshop.git
cd Toolshop
```

### Install Dependencies

```bash
npm ci
```

