// const { verifyIdToken } = require("./auth-provider")
import { verifyIdToken } from './auth-provider.js';

function verifyAuthToken(token) {
    return verifyIdToken(token);
}

export default verifyAuthToken;
//
// module.exports = {
//     verifyAuthToken: verifyAuthToken,
// }
