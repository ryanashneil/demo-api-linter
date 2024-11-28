`DPS-009`

## API Content-Type, API Header and Query Parameter Validation

_Severity: **Warn**_

### Description

This rule mandates the definition of specific Content-Type in its specification. This rule is also complimented with the need for the backend server (or API Gateway) to do this validation as well as any existing query and header parameters.

### Why this rule is important

- **Consistency**: Defining standard responses across all endpoints helps maintain consistency in how this API is consumed.
- **Testing**: This rule enables parameters and boundaries for testing for API consumers.
- **Compliance**: Following this rule ensures compliance with API OWASP, preventing vulnerabilities linked with intentional wrong definitions.

### How to apply this rule

1. OpenAPI Specification:
   This rule is applied to the requests and response object within each endpoint defined in the OpenAPI specification.

2. Validation:
   The rule checks each endpoint to ensure the inclusion of Content-Type, definition.

3. Correct Format:
   Each endpoint should include at least the Content-Type and Header definition.

### Example of a valid headers/content-type configuration

```yaml
servers:
paths:
  /users:
    get:
      summary: "Retrieve a list of users"
      parameters:
        - in: header
          name: Content-Type
          schema:
            type: string
      responses:
        "200": # Response
          description: OK
          content: # Response body```

### Example of an invalid headers/content-type configuration

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
        # Missing header and missing content-type.
```

### Error Message

If the rule detects missing required responses, it will generate an error message as follows:

- "Content-Type required for Request and Response definition."

### Conclusion

Adhering to this rule ensures that your API provides sufficient content-type specification to the Users, improving the overall user experience and reliability of the API. Always define the necessary content-type, headers and query parameters to ensure clarity and effective communication of success and error states to API consumers.
