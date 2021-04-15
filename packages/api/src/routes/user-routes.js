const Router = require("express").Router;

const { userController } = require("../controllers");
const { authMiddleware } = require("../middlewares");

const userRouter = Router();

userRouter.get("/:id", userController.getUserInfoById);

userRouter.use(authMiddleware)
userRouter.post("/sign-up", userController.signUp);
userRouter.post("/sign-out", userController.signOut);

module.exports = {
    userRouter: userRouter,
};
