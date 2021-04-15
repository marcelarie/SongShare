const Router = require("express").Router

const { authMiddleware } = require("../middlewares")
const { userController } = require("../controllers")

const userRouter = Router()

userRouter.use(authMiddleware)

userRouter.get("/user/:username", userController.getUserInfoByUsername)
userRouter.patch("/user/edit/:username", userController.patchUserInfoByUsername)
userRouter.post("/sign-up", userController.signUp)
userRouter.post("/sign-out", userController.signOut)

module.exports = {
    userRouter: userRouter,
}
