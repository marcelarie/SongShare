import { Router } from 'express';

import { authMiddleware } from '../../middlewares/index.js';

import joi from '../../middlewares/joi-middleware.js';
import schema from './schemas.js';
import {
    signUp,
    signOut,
    getUserInfoByUsername,
    patchUserInfoByUsername,
    deleteUser,
} from '../../controllers/user-controller.js';

const userRouter = Router();

userRouter.use(authMiddleware);
userRouter.post('/sign-up', joi(schema.signUp), signUp);
userRouter.post('/sign-out', signOut);

userRouter.get('/user/:username', getUserInfoByUsername);
userRouter.patch('/user/edit', patchUserInfoByUsername);
userRouter.delete('/user/delete', deleteUser);

export default userRouter;
