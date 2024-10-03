`INTEROP-004`

## Use of Strong Authentication and Authorization Mechanisms

_Severity: **Error**_

### Description

This rule mandates the definition of security schemas for each path. Properly defining the path security schemas ensure the APIs are configured with security mechanisms.

### Why this rule is important

- **Consistency**: Defining security schemas ensure the APIs are configured with security mechanisms.
- **Error Handling**: Ensuring that error scenarios (like unauthorized access, lack of authorization headers) are covered helps developers understand and handle these situations effectively.
- **Compliance**: Following this rule ensures compliance with API design best practices, promoting reliable and secure APIs.

### How to apply this rule

1. OpenAPI Specification:
   This rule is applied to the responses object within each endpoint defined in the OpenAPI specification.

2. Validation:
   Ensure that security schema is configured on all API paths and does not allow passThrough. Any violation of this will trigger an error.

3. Correct Format:
   Each endpoint should include the appropriate schema definitions for each request.

### Example of a valid security configuration

```yaml
components:
  securitySchemes:
    BearerAuth:
      type: http
      scheme: bearer
      bearerFormat: JWT

security:
  - BearerAuth: []

paths:
  /protected:
    get:
      summary: Access a protected resource
      security:
        - BearerAuth: []
      responses:
        '200':
          description: Successfully accessed protected resource
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
        '401':
          description: Unauthorized
```

### Example of an invalid security configuration

```yaml
paths:
  /protected:
    get:
      summary: Access a protected resource
      # Missing Security Schema
      responses:
        '200':
          description: Successfully accessed protected resource
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
        '401':
          description: Unauthorized
```

### Error Message

If the rule detects missing required security schema, or if passthrough is configured:

- "All API paths must be associated with a defined security schema and none of the schema uses passThrough."

### Conclusion

Adhering to this rule ensures that your API is secure and has at least basic authentication and authorization schemas attached to each of the paths.
