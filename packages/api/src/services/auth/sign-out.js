/**
 * Sets the request.user object to null
 * Sets the request.signOut function to noop
 *
 * @param {Request} req Request object
 *
 * req.user = null
 * req.signOut = null
 */
function signOut(req = {}) {
    req.user = null
    req.signOut = function noop() {}
}

export default signOut

//
// module.exports = {
//     signOut: signOut,
// }
//
