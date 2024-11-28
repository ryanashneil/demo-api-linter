`DPS-008`

## Define Common Response Codes

_Severity: **Warn**_

### Description

This rule mandates the definition of specific common response codes for all API endpoints. The rule requires each endpoint to define responses for success (2XX) and common client and server error scenarios, including 400 (Bad Request), 401 (Unauthorized), 403 (Forbidden). Properly defining these responses ensures that APIs handle and communicate errors and successes consistently.

### Why this rule is important

- **Consistency**: Defining standard responses across all endpoints helps maintain consistency in how errors and successes are communicated to API consumers.
- **Error Handling**: Ensuring that common error scenarios (like unauthorized access, bad requests, and server error) are covered helps developers understand and handle these situations effectively.
- **Compliance**: Following this rule ensures compliance with API design best practices, promoting a reliable and predictable API behavior.

### How to apply this rule

1. OpenAPI Specification:
   This rule is applied to the responses object within each endpoint defined in the OpenAPI specification.

2. Validation:
   The rule checks each endpoint to ensure the inclusion of responses for the following status codes: 2XX, 400, 401, and 5xx.
   Missing any of these response codes will trigger an error.

3. Correct Format:
   Each endpoint should include the specified response codes with appropriate schema definitions for each response.

### Example of a valid responses configuration

```yaml
servers:
paths:
  /users:
    get:
      summary: "Retrieve a list of users"
      responses:
        "200":
          description: "A list of users."
        "400":
          description: "Bad Request."
        "401":
          description: "Unauthorized."
        "500":
          description: "Server failure."
```

### Example of an invalid responses configuration

```yaml
paths:
  /users:
    get:
      summary: "Retrieve a list of users"
      responses:
        "200":
          description: "A list of users."
        "404":
          description: "Not Found."
        # Missing required responses such as 400, 401, and 5XX.
```

### Error Message

If the rule detects missing required responses, it will generate an error message as follows:

- "Missing one or more of the responses: 2XX, 400, 401, and 5XX."

### Conclusion

Adhering to this rule ensures that your API provides comprehensive and consistent response handling across different scenarios, improving the overall user experience and reliability of the API. Always define the necessary response codes to ensure clarity and effective communication of success and error states to API consumers.
