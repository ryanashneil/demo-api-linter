`INTEROP-006`

## Define Parameter Limits

_Severity: **Error**_

### Description

This rule mandates the definition of specific common response codes for all API endpoints. The rule requires each endpoint to define responses for success (2XX) and common client and server error scenarios, including 400 (Bad Request), 401 (Unauthorized), 403 (Forbidden), and 429 (Too Many Requests). Properly defining these responses ensures that APIs handle and communicate errors and successes consistently.

### Why this rule is important

- **Consistency**: Defining standard responses across all endpoints helps maintain consistency in the limits of strings and integers.
- **Error Handling**: Ensuring that well-defined parameter limits helps developers understand and handle these situations effectively.
- **Compliance**: Following this rule ensures compliance with OWASP and ensures that the backend server is protected from related attack vectors.

### How to apply this rule

1. OpenAPI Specification:
   This rule is applied to the reqeust object within each endpoint defined in the OpenAPI specification.

2. Validation:
   The rule checks each endpoint to ensure the inclusion of maxLength or maximum for string and integer parameters respectively.
   Missing any of these response codes will trigger an error.

3. Correct Format:
   Each endpoint should include the specified response codes with appropriate schema definitions for each response.

### Example of a valid responses configuration

```yaml
paths:
  /users/{username}:
    get:
      summary: Retrieve user information
      parameters:
        - name: username
          in: path
          required: true
          description: The username of the user
          schema:
            type: string
            maxLength: 20 # Maximum length of the username
```

### Example of an invalid responses configuration

```yaml
paths:
  /users/{username}:
    get:
      summary: Retrieve user information
      parameters:
        - name: username
          in: path
          required: true
          description: The username of the user
          schema:
            type: string # Missing maxLength
```

### Error Message

If the rule detects missing required maxLength or maximum for path parameters, it will generate an error message as follows:

- "maxLength should only be defined for string properties and Maximum must be defined for all integer properties."

### Conclusion

Adhering to this rule ensures that your API does not provide an unlimited string or integer length, which may be cause application errors or compromise to the backend server.
