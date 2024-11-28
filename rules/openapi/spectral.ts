import { rule001 } from "./001/rule";
import { rule002 } from "./002/rule";
import { rule003a } from "./003/rule";
import { rule003b } from "./003/rule";
import { rule004 } from "./004/rule";
import { rule005 } from "./005/rule";
import { rule006a } from "./006/rule";
import { rule006b } from "./006/rule";
import { rule007 } from "./007/rule";
import { rule008 } from "./008/rule";
import { rule009a } from "./009/rule";
import { rule009b } from "./009/rule";
import { rule010a } from "./010/rule";
import { rule010b } from "./010/rule";
import { rule010c } from "./010/rule";

const BASE_DOC_URL = "https://docs.developer.tech.gov.sg/docs/data-provisioning-standards-dps-linter";

const spectral = {
  documentationUrl: BASE_DOC_URL,
  rules: {
    ...rule001,
    ...rule002,
    ...rule003a,
    ...rule003b,
    ...rule004,
    ...rule005,
    ...rule006a,
    ...rule006b,
    ...rule007,
    ...rule008,
    ...rule009a,
    ...rule009b,
    ...rule010a,
    ...rule010b,
    ...rule010c,
  },
};

export default spectral;
