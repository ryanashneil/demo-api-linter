import { schema } from "@stoplight/spectral-functions";

const RULE_TITLE = "interop-007-define-rate-limits";
const DOC_URL =
  "https://docs.developer.tech.gov.sg/docs/interop-linter/rules/openapi/007/rule";

export const rule007 = {
  [RULE_TITLE]: {
    documentationUrl: DOC_URL,
    message: "Missing response code: 429",
    description:
      "API must define a 429 error response",
    given: "$.paths[*][*]",
    severity: "warn",
    then: {
      field: "responses",
      function: schema,
      functionOptions: {
        schema: {
          type: "object",
          required: ["429"],
        },
      },
    },
  },
};
