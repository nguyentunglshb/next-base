// eslint-disable-next-line import/no-extraneous-dependencies
import LogT from "logt";

import { isProduction } from "@/_configs";

const logger = isProduction ? new LogT("none") : new LogT("info");

export default logger;
