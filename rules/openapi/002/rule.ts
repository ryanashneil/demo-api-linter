import { pattern } from "@stoplight/spectral-functions";

const RULE_TITLE = "interop-002-only-https-server";
const DOC_URL =
  "https://docs.developer.tech.gov.sg/docs/interop-linter/rules/openapi/002/rule";

export const rule002 = {
  [RULE_TITLE]: {
    documentationUrl: DOC_URL,
    description:
      "This rule ensures that all server URLs in the OpenAPI specification use the HTTPS protocol to comply with security best practices, ensuring encrypted communication and protecting sensitive data.",
    message: "Only HTTPS servers are allowed.",
    severity: "error",
    given: ["$.servers[*].url", "$.schemes[*]"],
    then: {
      function: pattern,
      functionOptions: {
        match: "^https$|^https://",
      },
    },
  },
};
