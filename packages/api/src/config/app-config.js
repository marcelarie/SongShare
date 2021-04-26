import dotenv from 'dotenv';
dotenv.config();

import { logger } from '../services/index.js';

export const {
    NODE_ENV = 'development',
    MONGO_DB_URL_PRODUCTION,
    MONGO_DB_URL_DEVELOPMENT,
    MONGO_DB_URL_TEST,
    PORT = 4000,
} = process.env;

export const baseConfig = {
    app: {
        port: PORT || 4000,
    },
    client: {
        url: process.env.CLIENT_URL || 'http://localhost:3000',
    },
    logger: {
        warn: logger.warn,
        info: logger.info,
        error: logger.error,
        trace: logger.trace,
        debug: logger.debug,
    },
};

export const config = {
    development: {
        ...baseConfig,
        db: {
            url: MONGO_DB_URL_DEVELOPMENT,
        },
    },
    test: {
        ...baseConfig,
        db: {
            url: MONGO_DB_URL_TEST,
        },
    },
    production: {
        ...baseConfig,
        db: {
            url: MONGO_DB_URL_PRODUCTION,
        },
    },
};

export default config[NODE_ENV];
