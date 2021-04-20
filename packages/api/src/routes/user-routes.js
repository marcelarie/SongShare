import { Router } from 'express';

import { authMiddleware } from '../middlewares/index.js';
import {
    signUp,
    signOut,
    getUserInfoByUsername,
    patchUserInfoByUsername,
} from '../controllers/user-controller/index.js';

const userRouter = Router();

userRouter.use(authMiddleware);
userRouter.post('/sign-up', signUp);
userRouter.post('/sign-out', signOut);

userRouter.get('/user/:username', getUserInfoByUsername);
userRouter.patch('/user/edit', patchUserInfoByUsername);

export default userRouter;
