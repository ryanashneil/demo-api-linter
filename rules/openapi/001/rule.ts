import { truthy } from "@stoplight/spectral-functions";

const RULE_TITLE = "interop-001-api-descriptions";
const DOC_URL =
  "https://docs.developer.tech.gov.sg/docs/interop-linter/rules/openapi/001/rule";

export const rule001 = {
  [RULE_TITLE]: {
    documentationUrl: DOC_URL,
    description: "Ensure that a description is defined in the info section.",
    message: "The 'description' field must be defined in the info section.",
    severity: "error",
    given: ["$.info", "$.paths[*][*]"],
    then: {
      function: truthy,
      field: "description",
    },
  },
};
