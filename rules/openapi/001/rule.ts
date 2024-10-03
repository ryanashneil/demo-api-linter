import { pattern } from "@stoplight/spectral-functions";

const RULE_TITLE = "interop-001-only-https-server";
const DOC_URL =
  "https://docs.developer.tech.gov.sg/docs/interop-linter/rules/openapi/001/rule";

export const rule001 = {
  [RULE_TITLE]: {
    documentationUrl: DOC_URL,
    description: "Ensure that a description is defined in the info section.",
    message: "The 'description' field must be defined in the info section.",
    severity: "error",
    given: "$.info",
    then: {
      field: "description",
      function: "truthy",
    },
    also: {
      given: "$.paths[*][*]",
      then: {
        field: "description",
        function: "truthy",
      }
    }
  },
}; 
