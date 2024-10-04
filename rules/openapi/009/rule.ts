const RULE_TITLE_A = "interop-009a-request-response-define-content-type";
const RULE_TITLE_B = "interop-009b-request-response-define-headers";

const DOC_URL =
  "https://docs.developer.tech.gov.sg/docs/interop-linter/rules/openapi/009/rule";

export const rule009a = {
  [RULE_TITLE_A]: {
    documentationUrl: DOC_URL,
    message: "Content-Type required for Request and Response definition.",
    description:
      "Ensure that Content-Type header is present in request and response",
    severity: "error",
    // For requests
    given: "$..request.headers",
    then: {
      field: "Content-Type",
      function: "exists",
    },
    // For responses as well
    also: {
      given: "$..responses[*].headers",
      then: {
        field: "Content-Type",
        function: "exists",
      },
    },
  },
};

export const rule009b = {
  [RULE_TITLE_B]: {
    documentationUrl: DOC_URL,
    message: "Headers required for Request and Response definition.",
    description: "Ensure that Headers are present in request and response",
    severity: "error",
    given: "$..paths[*].*",
    then: {
      field: "parameters[?(@.in == 'header')]",
      function: "truthy",
    },
  },
};
