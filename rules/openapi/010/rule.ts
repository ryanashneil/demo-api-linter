import { pattern } from "@stoplight/spectral-functions";

const RULE_TITLE_A = "interop-010a-naming-convention-path-kebab-case";
const RULE_TITLE_B = "interop-010b-naming-convention-params-lower-camel-or-kebab-case";
const RULE_TITLE_C = "interop-010c-no-sensitive-information-in-params";

const DOC_URL =
  "https://docs.developer.tech.gov.sg/docs/interop-linter/rules/openapi/010/rule";

export const rule010a = {
  [RULE_TITLE_A]: {
    documentationUrl: DOC_URL,
    message: "API paths must be in kebab-case.",
    description: "API paths must be in kebab-case.",
    severity: "warning",
    given: "$.paths[*]~",
    then: {
      function: pattern,
      functionOptions:
      {
        match: "^(\/|[a-z0-9-.]+|{[a-zA-Z0-9]+})+$"
      },
    },
  }
};

export const rule010b = {
  [RULE_TITLE_B]: {
    documentationUrl: DOC_URL,
    message: "Query names, path parameters, header names must be in lowerCamelCase or kebab-case.",
    description: "Query names and header names must be in lowerCamelCase or kebab-case.",
    severity: "warning",
    given: "$.paths.*.*.parameters[*].name",
    then:{
      function: pattern,
      functionOptions:{
        match: "^(\/|[a-z0-9-.]+|{[a-zA-Z0-9]+})+$|^[a-z][A-Za-z0-9]*$"},
    }
  },
};

export const rule010c = {
  [RULE_TITLE_C]: {
    documentationUrl: DOC_URL,
    message: "Query names, path parameters, header names must not contain sensitive information such as NRIC.",
    description: "Query names and header names must not contain sensitive information such as NRIC.",
    severity: "warning",
    given: "$.paths.*.*.parameters[*].name",
    then:{
      function: pattern,
      functionOptions:{
        match: "^(\/|[a-z0-9-.]+|{[a-zA-Z0-9]+})+$|^[a-z][A-Za-z0-9]*$"},
    }
  },
};