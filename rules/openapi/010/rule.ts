import { schema } from "@stoplight/spectral-functions";

const RULE_TITLE = "interop-010-standardized-naming-conventions-sensitive-information";
const DOC_URL =
  "https://docs.developer.tech.gov.sg/docs/interop-linter/rules/openapi/010/rule";

export const rule010a = {
  [RULE_TITLE]: {
    documentationUrl: DOC_URL,
    message:
    "Standardized Naming Conventions should be used and sensitive information should not be present in API Specification",      
    description: "API paths must be in kebab-case.",
    severity: "warning",
    given: "$.paths.*",
    then:
    {
        field: "",
        function: "pattern",
        functionOptions:
        {
          match: '^[a-z0-9]+(-[a-z0-9]+)*$'
        },
    },
    also:
    {
        given: "$.headers.*",
        then:
        {
            field: "",
            function: "pattern",
            functionOptions:
            {
              match: '^[a-z0-9]+(-[a-z0-9]+)*$',
            },       
      },
    },
  },
}

export const rule010b = {
  [RULE_TITLE]: {
    documentationUrl: DOC_URL,
    message:
    "Standardized Naming Conventions should be used and sensitive information should not be present in API Specification",      
    description: "Query parameters must be in lowerCamelCase.",
    severity: "error",
    given: "$.paths.*.parameters[?(@.in == 'query')]",
    then:
    {
      field: "name",
      function: "pattern",
      functionOptions:
      {
        match: '^[a-z][A-Za-z0-9]*$',
      },
    },
  },
}

export const rule010c = {
  [RULE_TITLE]: {
    documentationUrl: DOC_URL,
    message:
    "Standardized Naming Conventions should be used and sensitive information should not be present in API Specification",      
    description: "Query parameters must not have a case-insensitive name of NRIC.",
    severity: "error",
    given: "$.paths.*.parameters[?(@.in == 'query')]",
    then:
    {
      field: "name",
      function: "pattern",
      functionOptions:
      {
        match: '^(?!.*[nN][rR][iI][cC]).*$'
      },
    },
  },
}

export const rule010d= {
  [RULE_TITLE]: {
    documentationUrl: DOC_URL,
    message:
    "Standardized Naming Conventions should be used and sensitive information should not be present in API Specification",      
    description: "Path parameters must not have a case-insensitive name of NRIC.",
    severity: "error",
    given: "$.paths.*.parameters[?(@.in == 'path')]",
    then:
    {
      field: "name",
      function: "pattern",
      functionOptions:
      {
        match: '^(?!.*[nN][rR][iI][cC]).*$'
      },
    },
  },
}