import { schema } from "@stoplight/spectral-functions";

const RULE_TITLE = "interop-006-define-parameter-maximum-limits";
const DOC_URL =
  "https://docs.developer.tech.gov.sg/docs/interop-linter/rules/openapi/006/rule";

export const rule006 = {
  [RULE_TITLE]: {
    documentationUrl: DOC_URL,
    description: "Ensure that maxLength is only defined for string properties and all integer parameters have a maximum defined.",
    message: "maxLength should only be defined for string properties and Maximum must be defined for all integer properties.",
    severity: "error",
    given: "$..properties[?(@.type == 'string')]",
    then:{
      field: "maxLength",
      function: "truthy",
    },
    also: {
      given: "$..properties[?(@.type == 'integer')]",
      then:
      {
        field: "maximum",
        function: "truthy"
      }
    }
  },
};
