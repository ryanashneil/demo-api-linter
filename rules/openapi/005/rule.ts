import { schema } from "@stoplight/spectral-functions";

const RULE_TITLE = "interop-005-define-common-responses";
const DOC_URL =
  "https://docs.developer.tech.gov.sg/docs/interop-linter/rules/openapi/005/rule";

export const rule005 = {
  [RULE_TITLE]: {
    documentationUrl: DOC_URL,
    message:
      "Missing response code: 504.",
    description: "API must define a 504 error response.",
    given: "$.paths[*][*].responses",
    then:
    {
      field: "$.responses",
      function: "pattern",
      functionOptions:
      {
        match: ".*504.*"
      },
    },
  },
};
