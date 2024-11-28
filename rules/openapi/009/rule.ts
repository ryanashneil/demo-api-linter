import { truthy } from "@stoplight/spectral-functions";

const RULE_TITLE_A = "dps-009a-request-define-content-type";
const RULE_TITLE_B = "dps-009b-response-define-content-type";

const DOC_URL =
  "https://docs.developer.tech.gov.sg/docs/interop-linter/rules/openapi/009/rule";

export const rule009a = {
  [RULE_TITLE_A]: {
    documentationUrl: DOC_URL,
    message: "Content-Type required for Request definition.",
    description: "Ensure that Content-Type is present in the request",
    severity: "warn",
    given: "$.paths[*].post, $.paths[*].put, $.paths[*].patch",
    then: { field: "requestBody.content", function: truthy },
  },
};

export const rule009b = {
  [RULE_TITLE_B]: {
    documentationUrl: DOC_URL,
    message: "Content-Type required for Response definition.",
    description: "Ensure that Content-Type is present in the response",
    severity: "warn",
    given: "$.paths[*][*].responses[*]",
    then: { field: "content", function: truthy },
  },
};
