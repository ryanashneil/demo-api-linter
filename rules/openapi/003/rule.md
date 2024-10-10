`INTEROP-003`

## API Versioning

_Severity: **Error**_

### Description

This rule enforces the practice of using API version control using server URL. This also should not be done within the path component of URLs. Embedding versioning in the path can lead to confusion, especially when multiple global versions exist in the same document or when shared schemas, which might evolve over time, unintentionally break backward compatibility. Additionally, using method-level URL versioning is discouraged and should not be implemented.

It should be noted that any version changes should have communication to explain the changes. Minor version changes should be backwards compatible while major version should necessitate early communication with the API user for any code changes.

### Why this rule is important

- **Clarity**: Placing versioning in the server URL provides a clear, consistent approach to versioning and avoids confusion.
- **Compatibility**: It prevents unintended breaking changes caused by evolving shared schemas referenced in different versions.
- **Best Practices**: Following this rule aligns with industry standards for API versioning, promoting better organization and maintainability of APIs.

### How to apply this rule

1. OpenAPI Specification:
   This rule applies to the paths object in the OpenAPI specification.

2. Validation:
   The rule checks each path to ensure that versioning (e.g., /v1, /version, /{version}) is not included within the path.
   Any path containing versioning will trigger an error.

3. Correct Format:
   Versioning should be included in the server URL, not in individual paths.
   Example of a valid server URL with versioning: `https://api.example.com/v1`

### Example of a valid security schema configuration

```yaml
servers:
  - url: "https://api.example.com/org/project/v1" # Versioning included in the server URL

paths:
  /users:
    get:
      summary: "Retrieve a list of users"
```

### Example of an invalid security schema configuration

```yaml
paths:
  /v1/users: # This will trigger an error because versioning is included in the path.
    get:
      summary: "Retrieve a list of users"
```

### Error Message

If the rule detects versioning in the path, it will generate an error message as follows:

- "OpenAPI version must match the semantic versioning pattern (e.g., '3.0.0'). API path contains a version. Versioning SHOULD be in the server URL and NOT in the path(s)."

### Conclusion

Following this rule helps maintain a clear and consistent approach to API versioning. By including versioning in the server URL rather than in paths, you reduce complexity, minimize confusion, and maintain better backward compatibility. Always ensure that API paths are version-agnostic to comply with this best practice.
