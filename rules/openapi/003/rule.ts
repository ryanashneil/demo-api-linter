import { schema } from "@stoplight/spectral-functions";

const RULE_TITLE = "interop-003-define-common-responses";
const DOC_URL =
  "https://docs.developer.tech.gov.sg/docs/interop-linter/rules/openapi/003";

export const rule003 = {
  [RULE_TITLE]: {
    documentationUrl: DOC_URL,
    message:
      "Missing one or more of the responses: 2XX, 400, 401, 403, and 429.",
    description:
      "Carefully define schemas for all the API responses to include 2XX, 400, 401, 403, and 429.",
    severity: "error",
    given: "$.paths[*][*].responses",
    then: {
      function: schema,
      functionOptions: {
        schema: {
          type: "object",
          required: ["400", "401", "403", "429"],
          anyOf: [
            { required: ["200"] },
            { required: ["201"] },
            { required: ["204"] },
          ],
        },
      },
    },
  },
};
