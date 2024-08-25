# Interoperability Linter

## Introduction

In today's digital landscape, Application Programming Interfaces (APIs) play a crucial role in facilitating seamless communication and integration between diverse systems, applications, and services.

As products and services increasingly rely on APIs to drive innovation, streamline operations, and enhance user experiences, the need for effective governance becomes paramount.

From defining objectives and standards to implementing best practices and fostering collaboration, the Interoperability Linter serves as a comprehensive resource for organizations looking to establish robust API products and management strategies.

## Spectral rule set

```yaml
# .spectral.yaml
extends:
  ["https://docs.developer.tech.gov.sg/docs/interop-linter/openapi/v0.9/base.yaml"]
```

## Chapters

| _Category_ | _Rule_                                                      | _Description_                                                                              |
| ---------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| OpenAPI    | [interop-001-only-https-server](rules/openapi/001.md)       | Only HTTPS servers are allowed                                                             |
| OpenAPI    | [interop-002-no-path-versioning](rules/openapi/002.md)      | Versioning SHOULD be in the server URL and NOT in the path(s)                              |
| OpenAPI    | [interop-003-define-common-responses](rules/openapi/003.md) | Carefully define schemas for all the API responses to include 2XX, 400, 401, 403, and 429. |
