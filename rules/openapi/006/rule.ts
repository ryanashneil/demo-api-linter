import { truthy } from "@stoplight/spectral-functions";

const RULE_TITLE_A = "oss-006a-define-string-max-length-limits";
const RULE_TITLE_B = "oss-006b-define-integer-number-maximum-limits";

const DOC_URL =
  "https://docs.developer.tech.gov.sg/docs/interop-linter/rules/openapi/006/rule";

export const rule006a = {
  [RULE_TITLE_A]: {
    documentationUrl: DOC_URL,
    description:
      "Ensure that maxLength is defined for string properties",
    message:
      "maxLength should only be defined for string properties",
    severity: "warn",
    given: "$..[?(@.type === 'string')]",
    then: {
      field: "maxLength",
      function: truthy,
    },
  },
};

export const rule006b = {
  [RULE_TITLE_B]: {
    documentationUrl: DOC_URL,
    description:
      "Ensure that maximum is defined for integer/number properties",
    message:
      "Maximum must be defined for all integer properties.",
    severity: "warn",
    given: "$..[?(@.type === 'integer' || @.type === 'number')]",
    then: {
      field: "maximum",
      function: truthy,
    },
  },
};
