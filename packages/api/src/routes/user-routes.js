const Router = require("express").Router

const { authMiddleware } = require("../middlewares")
const { userController } = require("../controllers")

const userRouter = Router()

userRouter.get("/:id", userController.getUserInfoById)

userRouter.use(authMiddleware)
userRouter.post("/sign-up", userController.signUp)
userRouter.post("/sign-out", userController.signOut)

module.exports = {
    userRouter: userRouter,
}
