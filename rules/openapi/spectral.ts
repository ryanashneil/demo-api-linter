import { rule001 } from "./001/rule";
import { rule002 } from "./002/rule";
import { rule003 } from "./003/rule";

const BASE_DOC_URL = "https://docs.developer.tech.gov.sg/docs/interop-linter";

export default {
  documentationUrl: BASE_DOC_URL,
  rules: {
    ...rule001,
    ...rule002,
    ...rule003,
  },
};
