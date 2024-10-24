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

#### [oss-001-api-description](rules/openapi/001/rule)

The API should be designed and documented with openAPI specifications as much as possible. The description fields in info, and methods should be furnished.

#### [oss-002-only-https-server](rules/openapi/002/rule)

Only HTTPS servers are allowed

#### [oss-003-no-path-versioning](rules/openapi/003/rule)

Versioning SHOULD be in the server URL and NOT in the path(s)

#### [oss-004-define-security-schema](rules/openapi/004/rule.md)

This rule mandates the definition of security schemas for each path. Properly defining the path security schemas ensure the APIs are configured with security mechanisms.

#### [oss-005-define-api-timeout](rules/openapi/005/rule.md)

Carefully define schemas for all the API responses to include 504.

#### [oss-006-define-parameter-maximum-limits](rules/openapi/006/rule.md)

This rule mandates the definition of parameter limits of strings and integers.

#### [oss-007-define-rate-limits](rules/openapi/007/rule.md)

This rule mandates the definition of error code 429 when the transmission rate is exceeded.

#### [oss-008-define-common-responses](rules/openapi/008/rule.md)

Carefully define schemas for all the API responses to include 2XX, 400, 401, 403, and 5xx.

#### [oss-009-define-content-type-query-and-headers](rules/openapi/009/rule.md)

This rule mandates the definition of specific Content-Type in its specification.

#### [oss-010-standardized-naming-conventions-sensitive-information](rules/openapi/010/rule.md)

This rule mandates the definition of API to use comprehensive and consistent naming conventions, improving the overall user experience and reliability of the API. Sensitive information should be in the payload, and not be in any of the parameters.
