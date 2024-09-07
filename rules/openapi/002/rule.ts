import { pattern } from "@stoplight/spectral-functions";
import { oas2, oas3 } from "@stoplight/spectral-formats";

const RULE_TITLE = "interop-002-no-path-versioning";
const DOC_URL =
  "https://docs.developer.tech.gov.sg/docs/interop-linter/rules/openapi/002";

export const rule002 = {
  [RULE_TITLE]: {
    documentationUrl: DOC_URL,
    message:
      "API path contains a version. Versioning SHOULD be in the server URL and NOT in the path(s).",
    description: `Versioning in the path can lead to confusion that is best avoided. Perhaps multiple global versions are in the same document, but they ref shared schemas which change over time and break backwards compatibility unintentionally. Perhaps people are trying to implement method-level URL versioning which SHOULD NOT be used.`,
    severity: "error",
    // Supports both OpenAPI 2 and 3 formats
    formats: [oas2, oas3],
    // Selects paths from the OpenAPI document
    given: ["$.paths[*]~"],
    then: {
      function: pattern,
      functionOptions: {
        // Regular expression for matching version in the path
        notMatch: "/((?:/)(v|version|\\{version\\})(?:/)?)/i",
      },
    },
  },
};
