import { Router } from 'express';

// import joi from '../../middlewares/joi-middleware.js';
// import schema from './schemas.js';
import {
    signUp,
    signOut,
    getUserInfoByUsername,
    patchUserInfoByUsername,
    deleteUser,
} from '../../controllers/user-controller.js';

const userRouter = Router();

userRouter.post('/sign-up', signUp);
userRouter.post('/sign-out', signOut);

userRouter.get('/user/:username', getUserInfoByUsername);
userRouter.patch('/user/edit', patchUserInfoByUsername);
userRouter.delete('/user/delete', deleteUser);

export default userRouter;
