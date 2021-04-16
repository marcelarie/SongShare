import { Router } from "express"

import { authMiddleware } from "../middlewares/index.js"
import userController from "../controllers/index.js"

const userRouter = Router()

userRouter.use(authMiddleware)

userRouter.get("/user/:username", userController.getUserInfoByUsername)
userRouter.patch("/user/edit/:username", userController.patchUserInfoByUsername)
userRouter.post("/sign-up", userController.signUp)
userRouter.post("/sign-out", userController.signOut)

export default userRouter
