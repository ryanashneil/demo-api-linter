`OSS-002`

## Only HTTPS Server

_Severity: **Error**_

### Description

This rule ensures that all server URLs specified in the OpenAPI specification use the HTTPS protocol. The use of HTTPS is mandatory to comply with security best practices, ensuring encrypted communication and the protection of sensitive data during transmission.

### Why this rule is important

HTTP communication is inherently insecure as it transmits data in plaintext, which can be intercepted and read by unauthorized parties. HTTPS, on the other hand, encrypts the data before transmission, providing a secure communication channel. This rule helps to enforce the use of HTTPS to safeguard data and maintain user trust.

### How to apply this rule

1. OpenAPI Specification:
   This rule is applied to the servers object and the schemes field in the OpenAPI specification.

2. Validation:
   The rule checks each URL specified in the servers list to ensure it begins with https://.
   It also checks that any protocol specified in the schemes list is https.

3. Correct Format:
   All URLs should be formatted as `https://example.com`.
   If using the schemes field, it should only contain the value https.

### Example of a valid server configuration

```yaml
servers:
  - url: "https://api.example.com"
schemes:
  - "https"
```

### Example of an invalid server configuration

```yaml
servers:
  - url: "http://api.example.com" # This will trigger an error because it's not using HTTPS.
schemes:
  - "http" # This will also trigger an error as only 'https' is allowed.
```

### Error Message

If the rule detects a non-HTTPS URL, it will generate an error message as follows:

- "Only HTTPS servers are allowed."

### Conclusion

Following this rule helps maintain secure communication channels within your APIs, protecting data integrity and confidentiality. Always ensure to use HTTPS for all server URLs and protocol specifications to comply with industry standards and best practices.
