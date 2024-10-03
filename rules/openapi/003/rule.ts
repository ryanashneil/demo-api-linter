import { pattern } from "@stoplight/spectral-functions";
import { oas2, oas3 } from "@stoplight/spectral-formats";

const RULE_TITLE = "interop-003-no-path-versioning";
const DOC_URL =
  "https://docs.developer.tech.gov.sg/docs/interop-linter/rules/openapi/003/rule";

export const rule003 = {
  [RULE_TITLE]: {
    documentationUrl: DOC_URL,
    message: "OpenAPI version must match the semantic versioning pattern (e.g., '3.0.0'). API path contains a version. Versioning SHOULD be in the server URL and NOT in the path(s).",
    severity: "error",
    given: ["$"],
    then: {
      field: "openapi",
      function: "pattern",
      functionOptions: {
        // Regular Expression to match semantic versioning
        match: "^(\\d+\\.\\d+\\.\\d+)$",
      }
    },
    also: {
      given: ["$.paths[*]~"],
      then: {
        function: pattern,
        functionOptions: {
          // Regular expression for matching version in the path
          notMatch: "/((?:/)(v|version|\\{version\\})(?:/)?)/i",
        },
      },
    }
  },
};
