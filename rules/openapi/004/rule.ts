import { schema } from "@stoplight/spectral-functions";

const RULE_TITLE = "interop-004-define-security-schema";
const DOC_URL =
  "https://docs.developer.tech.gov.sg/docs/interop-linter/rules/openapi/004/rule";

export const rule004 = {
  [RULE_TITLE]: {
    documentationUrl: DOC_URL,
    description: "Ensure that security schema is configured on all API paths and does not allow passThrough.",
    message: "All API paths must be associated with a defined security schema and none of the schema uses passThrough.",
    severity: "error",
    given: "$.paths.*",  // Applies to all paths
    then:
    {
      field: "security",
      function: "required",
    },
    also: {
      given: "$.components.securitySchemes.*",  // Iterates over all security schemes
      then:{
        field: "$.type",  // Check the type of the security schema
        function: "not",
        functionOptions:
        {
          match: "passThrough"
        },
      },
    },
  },
};
