`INTEROP-010`

## API Path, Headers, Query Parameters Naming Convention and Sensitive Information in URL and Headers

_Severity: **Error**_

### Description

This rule mandates the definition of API path and headers follow standard lower kebab case definitions and query parameters follow lower camel case standards.  This rule also ensures that sensitive information is not defined in the API path and query parameters.

### Why this rule is important

- **Consistency**: Defining standard naming conventions allow for consistency across APIs.
- **Testing**: This rule enables predictability among path, headers and parameters and boundaries for testing for API consumers.
- **Compliance**: Following this rule ensures compliance with API best practices, omitting sensitive information from being retained in browsers and network devices.

### How to apply this rule

1. OpenAPI Specification:
   This rule is applied to the path, query parameters and headers.

2. Validation:
   The rule checks each standardization for path, headers and query parameters and and these parameters do not ask for input of sensitive information.

3. Correct Format:
   The path and header names should be in kebab-case format, while the query parameter names be in lowerCamelCase. All these types of parameters should not hold any sensitive information such as NRIC.

### Example of a valid responses configuration

```yaml
paths:
  /my-api-endpoint:
    get:
      summary: Fetch data from my API endpoint
      parameters:
        - name: myQueryParam
          in: query
          required: false
          description: A query parameter in lowerCamelCase
          schema:
            type: string
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
                properties:
                  data:
                    type: string
                  message:
                    type: string
              
      headers:
        x-custom-header:
          description: A custom header in kebab-case
          required: false
          schema:
            type: string
```

### Example of an invalid path, query parameters and header names, as well as sensitive information

```yaml
paths:
  # Path with mixed case and underscore
  /My_Api_Endpoint/{nric}:
    get:
      summary: Fetch data from my API endpoint
      parameters:
        - name: my_nric
          in: query
          required: false
          description: A query parameter in invalid format with sensitive information
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
                properties:
                  data:
                    type: string
                  message:
                    type: string
              
      headers:
        x_custom_header:
          description: A custom header NOT in kebab-case
          required: false
          schema:
            type: string
```

### Error Message

If the rule detects

- "Standardized Naming Conventions should be used and sensitive information should not be present in API Specification"

### Conclusion

Adhering to this rule ensures that your API provides comprehensive and consistent naming conventions, improving the overall user experience and reliability of the API. Sensitive information should generally be in the payload, and not be in path or query parameters.
