// const logger = require("loglevel")
import logger from 'loglevel';

logger.enableAll();

export default {
    warn: logger.warn,
    info: logger.info,
    error: logger.error,
    trace: logger.trace,
    debug: logger.debug,
};
// module.exports = {
//     warn: logger.warn,
//     info: logger.info,
//     error: logger.error,
//     trace: logger.trace,
//     debug: logger.debug,
// }
