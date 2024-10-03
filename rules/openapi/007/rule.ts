import { schema } from "@stoplight/spectral-functions";

const RULE_TITLE = "interop-007-define-rate-limits";
const DOC_URL =
  "https://docs.developer.tech.gov.sg/docs/interop-linter/rules/openapi/007/rule";

export const rule007 = {
  [RULE_TITLE]: {
    documentationUrl: DOC_URL,
    message:
      "Missing one or more of the response: 429.",
    description:
      "Carefully define schemas for all the API responses to include 429.",
    severity: "error",
    given: "$.paths[*][*].responses",
    then: {
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
