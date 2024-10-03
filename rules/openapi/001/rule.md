`INTEROP-001`

## API Description

_Severity: **Error**_

### Description

The API should be designed and documented with openAPI specifications as much as possible. The description fields in info, and methods should be furnished.

### Why this rule is important

HTTP communication is inherently insecure as it transmits data in plaintext, which can be intercepted and read by unauthorized parties. HTTPS, on the other hand, encrypts the data before transmission, providing a secure communication channel. This rule helps to enforce the use of HTTPS to safeguard data and maintain user trust.

### How to apply this rule

1. OpenAPI Specification:
   This rule is applied to the servers, info object and the paths field in the OpenAPI specification.

2. Validation:
   Developers can predict how API endpoints behave, leading to predictable and reliable integrations.

3. Error Prevention:
   Clarity on Functionality: A detailed description can help clarify the functionality of an endpoint, reducing the likelihood of erroneous usage that may arise from misunderstanding the endpoint's purpose.
   Reducing Support Queries: Well-documented endpoints with clear descriptions often lead to fewer support requests, as users have the information they need at their disposal.


### Example of a valid server configuration

```yaml
openapi: 3.0.0
info:
  title: Sample API
  version: 1.0.0
  description: This is a sample API description.  # Required description
paths:
  /example:
    get:
      summary: Get example data
      description: This endpoint retrieves example data.  # Required description
      responses:
        '200':
          description: Success
```

### Example of an invalid server configuration

```yaml
openapi: 3.0.0
info:
  title: Sample API
  version: 1.0.0
paths:
  /example:
    get:
      summary: Get example data
      responses:
        '200':
          description: Success
```

### Error Message

If the rule detects decription is missing in the `info.description` field or `path.method` it will throw the respective error as follows:

- "The 'description' field must be defined in the info section."
- "Each path method should have a 'description' field defined."

### Conclusion

Following this rule helps ensure documentation for the API as well as the methods. However, the quality of the description is not vetted and this is the responsibility of the API author.
