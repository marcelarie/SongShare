import app from './server.js';
import config from './config/index.js';
import connect from './db/connect.js';

if (!config.app.port) {
    throw new Error('App config is invalid');
}

connect().then(() => {
    app.listen(config.app.port, () => {
        console.log(`Server listening on ${config.app.port} :)`);
    });
});
