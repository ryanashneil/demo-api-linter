import { schema } from "@stoplight/spectral-functions";

const RULE_TITLE = "dps-008-define-common-responses";
const DOC_URL =
  "https://docs.developer.tech.gov.sg/docs/interop-linter/rules/openapi/008/rule";

export const rule008 = {
  [RULE_TITLE]: {
    documentationUrl: DOC_URL,
    message:
      "Missing one or more of the common responses: 2XX, 400, 401, 403, and 500, 502",
    description:
      "Carefully define schemas for all the API responses to include at least one of [200, 201, 204], all of [400, 401, 403] and at least one of [500, 502]",
    severity: "warn",
    given: "$.paths[*][*]",
    then: {
      field: "responses",
      function: schema,
      functionOptions: {
        schema: {
          type: "object",
          required: ["400", "401", "403"],
          allOf: [
            {
              anyOf: [
                { required: ["200"] },
                { required: ["201"] },
                { required: ["204"] },
              ],
            },
            {
              anyOf: [{ required: ["500"] }, { required: ["502"] }],
            },
          ],
        },
      },
    },
  },
};
