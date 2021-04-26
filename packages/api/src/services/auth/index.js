// const { verifyAuthToken } = require("./verify-auth-token")
// const { getAuthToken } = require("./get-auth-token")
// const { login } = require("./login")
// const { signOut } = require("./sign-out")

import verifyAuthToken from './verify-auth-token.js';
import getAuthToken from './get-auth-token.js';
import login from './login.js';
import signOut from './sign-out.js';

export default {
    verifyAuthToken,
    getAuthToken,
    login,
    signOut,
};

// module.exports = {
//     verifyAuthToken: verifyAuthToken,
//     getAuthToken: getAuthToken,
//     login: login,
//     signOut: signOut,
// }
