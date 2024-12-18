import { schema } from "@stoplight/spectral-functions";

const RULE_TITLE = "dps-005-define-time-limits";
const DOC_URL =
  "https://docs.developer.tech.gov.sg/docs/data-provisioning-standards-dps-linter/rules/openapi/005/rule";

export const rule005 = {
  [RULE_TITLE]: {
    documentationUrl: DOC_URL,
    message: "Missing response code: 504",
    description: "API must define a 504 error response",
    given: "$.paths[*][*]",
    severity: "warn",
    then: {
      field: "responses",
      function: schema,
      functionOptions: {
        schema: {
          type: "object",
          required: ["504"],
        },
      },
    },
  },
};
