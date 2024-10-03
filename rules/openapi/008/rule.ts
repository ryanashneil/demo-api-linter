import { schema } from "@stoplight/spectral-functions";

const RULE_TITLE = "interop-009-define-common-responses";
const DOC_URL =
  "https://docs.developer.tech.gov.sg/docs/interop-linter/rules/openapi/008/rule";

export const rule008 = {
  [RULE_TITLE]: {
    documentationUrl: DOC_URL,
    message:
      "Missing one or more of the responses: 2XX, 400, 401, and 5xx.",
    description:
      "Carefully define schemas for all the API responses to include 2XX, 400, 401, and 5xx.",
    severity: "error",
    given: "$.paths[*][*].responses",
    then: {
      function: schema,
      functionOptions: {
        schema: {
          type: "object",
          required: ["400", "401",],
          anyOf: [
            { required: ["200"] },
            { required: ["201"] },
            { required: ["204"] },
          ],
          also:
          {
            anyOf: [
              { required: ["500"] },
              { required: ["502"] },
              { required: ["504"] },
            ],
          }
        },
      },
    },
  },
};
