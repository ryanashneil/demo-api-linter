# Interoperability API Linter

## Introduction

In today's digital landscape, Application Programming Interfaces (APIs) play a crucial role in facilitating seamless communication and integration between diverse systems, applications, and services.

As products and services increasingly rely on APIs to drive innovation, streamline operations, and enhance user experiences, the need for effective governance becomes paramount.

From defining objectives and standards to implementing best practices and fostering collaboration, the Interoperability API Linter serves as a comprehensive resource for organizations looking to establish robust API products and management strategies.

## Spectral rule set

```yaml
# .spectral.yaml
extends:
  [
    "https://docs.developer.tech.gov.sg/docs/interop-linter/openapi/v0.9/base.yaml",
  ]
```

## Chapters

| _S/No_                                               | _Description_                                                                                                                                                                                                                                                                                                                    |
| ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [interop-001-only-https-server](rules/openapi/001.md)        | This rule ensures that all server URLs in the OpenAPI specification use the HTTPS protocol to comply with security best practices, ensuring encrypted communication and protecting sensitive data.                                                                                                                               |
| [interop-002-no-path-versioning](rules/openapi/002.md)       | Versioning in the path can lead to confusion that is best avoided. Perhaps multiple global versions are in the same document, but they ref shared schemas which change over time and break backwards compatibility unintentionally. Perhaps people are trying to implement method-level URL versioning which SHOULD NOT be used. |
| [interop-003-define-common-responses](rules/openapi/003.md)  | Carefully define schemas for all the API responses to include 2XX, 400, 401, 403, and 429.                                                                                                                                                                                                                                       |
