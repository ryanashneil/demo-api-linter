import { schema } from "@stoplight/spectral-functions";

const RULE_TITLE = "interop-009-define-content-type-and-headers";
const DOC_URL =
  "https://docs.developer.tech.gov.sg/docs/interop-linter/rules/openapi/009/rule";

export const rule009a = {
  [RULE_TITLE]: {
    documentationUrl: DOC_URL,
    message:
      "Content-Type and Headers required for Request and Response definition.",
    description: "Ensure that Headers and Content-Type header is present in request and response",
    severity: "error",
    // For requests
    given: "$..request.headers",
    then:
    {
      field: "Content-Type",
      function: "exists",
    },
    // For responses as well
    also:
    {
      given: "$..responses[*].headers",
      then:
      {
        field: "Content-Type",
        function: "exists",
      }
    }
  },
};

export const rule009b = {
  [RULE_TITLE]: {
      documentationUrl: DOC_URL,
      message:
        "Content-Type and Headers required for Request and Response definition.",
      description: "Ensure that Headers and Content-Type header is present in request and response",
      severity: "error",
      given: "$..paths[*].*",
      then:
      {
        field: "parameters[?(@.in == 'header')]",
        function: "truthy",
      }
    },
  },
};
