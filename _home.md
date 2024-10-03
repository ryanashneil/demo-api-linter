# Interoperability Linter

## Introduction

In today's digital landscape, Application Programming Interfaces (APIs) play a crucial role in facilitating seamless communication and integration between diverse systems, applications, and services.

As products and services increasingly rely on APIs to drive innovation, streamline operations, and enhance user experiences, the need for effective governance becomes paramount.

From defining objectives and standards to implementing best practices and fostering collaboration, the Interoperability Linter serves as a comprehensive resource for organizations looking to establish robust API products and management strategies.

## Spectral rule set

```yaml
# .spectral.yaml
extends: ["https://unpkg.com/interop-spectral-linter"]
```

## Spectral linter UI

Try out the linter via a UI [here](https://go.gov.sg/demo-linter-ui)

## Chapters

### OpenAPI

#### [interop-001-api-description](rules/openapi/001/rule)

The API should be designed and documented with openAPI specifications as much as possible. The description fields in info, and methods should be furnished.


#### [interop-002-no-path-versioning](rules/openapi/002/rule)

Versioning SHOULD be in the server URL and NOT in the path(s)

#### [interop-003-only-https-server](rules/openapi/003/rule)

Only HTTPS servers are allowed

#### [interop-004-define-security-schema](rules/openapi/004/rule.md)

This rule mandates the definition of security schemas for each path. Properly defining the path security schemas ensure the APIs are configured with security mechanisms.

#### [interop-005-define-api-timeout](rules/openapi/005/rule.md)

Carefully define schemas for all the API responses to include  504.

#### [interop-006-define-parameter-maximum-limits](rules/openapi/006/rule.md)

This rule mandates the definition of parameter limits of strings and integers.

#### [interop-007-define-rate-limits](rules/openapi/007/rule.md)

This rule mandates the definition of error code 429 when the transmission rate is exceeded.

#### [interop-008-define-common-responses](rules/openapi/008/rule.md)

Carefully define schemas for all the API responses to include 2XX, 400, 401, 403, and 5xx.

#### [interop-009-define-content-type-and-headers](rules/openapi/009/rule.md)

This rule mandates the definition of specific Content-Type, and Headers in its specification.

#### [interop-010-standardized-naming-conventions-sensitive-information](rules/openapi/010/rule.md)

This rule mandates the definition of API path and headers follow standard lower kebab case definitions and query parameters follow lower camel case standards.  This rule also ensures that sensitive information is not defined in the API path and query parameters.
