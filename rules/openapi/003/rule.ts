import { pattern } from "@stoplight/spectral-functions";

const RULE_TITLE_A = "interop-003a-valid-openapi-version";
const RULE_TITLE_B = "interop-003b-no-path-versioning";

const DOC_URL =
  "https://docs.developer.tech.gov.sg/docs/interop-linter/rules/openapi/003/rule";

export const rule003a = {
  [RULE_TITLE_A]: {
    documentationUrl: DOC_URL,
    message:
      "OpenAPI version must match the semantic versioning pattern (e.g., '3.0.0')",
    severity: "error",
    given: ["$"],
    then: {
      field: "openapi",
      function: pattern,
      functionOptions: {
        // Regular Expression to match semantic versioning
        match: "^(\\d+\\.\\d+\\.\\d+)$",
      },
    },
  },
};

export const rule003b = {
  [RULE_TITLE_B]: {
    documentationUrl: DOC_URL,
    message:
      "API path contains a version. Versioning SHOULD be in the server URL and NOT in the path(s).",
    severity: "error",
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
