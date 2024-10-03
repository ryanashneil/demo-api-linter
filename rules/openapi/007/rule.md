`INTEROP-007`

## Describe Maximum Transmission Size and Speed

_Severity: **Error**_

### Description

This rule mandates the definition of error code 429 when the transmission rate is exceeded. This also recommends for the specfication of specific maximum transaction rate and size in description and headers x-ratelimit-* as warning whenever this is exceeded, however this is not checked. It is also recommended to put in the description the maximum size of payload (eg. 10MB for AWS API Gateway)

### Why this rule is important

- **Consistency**: Defining standard responses across all endpoints helps maintain consistency in how errors and successes are communicated to API consumers.
- **Error Handling**: Ensuring that common error scenarios (like unauthorized access, bad requests, and rate limiting) are covered helps developers understand and handle these situations effectively and allows tests to be written for this.
- **Compliance**: Following this rule ensures compliance with API design best practices, promoting a reliable and predictable API behavior.

### How to apply this rule

1. OpenAPI Specification:
   This rule is applied to the responses object within each endpoint defined in the OpenAPI specification.

2. Validation:
   The rule checks each endpoint to ensure the inclusion of responses for the following status code: 429. Missing any of these response codes will trigger an error. The header x-ratelimit-* is also checked for.

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
        "429":
          description: "Too Many Requests."
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
        # Missing required responses such as 429.

### Error Message

If the rule detects missing required responses, it will generate an error message as follows:

- "Missing the responses: 429."

### Conclusion

Adhering to this rule ensures that your API provides comprehensive and consistent response handling across different scenarios, improving the overall user experience and reliability of the API. Always define the necessary response codes to ensure clarity and effective communication of success and error states to API consumers.
