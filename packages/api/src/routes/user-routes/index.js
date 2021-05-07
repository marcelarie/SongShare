import { Router } from 'express';

// import joi from '../../middlewares/joi-middleware.js';
// import schema from './schemas.js';
import {
    signUp,
    signOut,
    getUserInfoByUsername,
    patchUserInfoByUsername,
    deleteUser,
    getAllUserLikes,
    getUserInfo,
} from '../../controllers/user-controller.js';

const userRouter = Router();

userRouter.post('/sign-up', signUp);
userRouter.post('/sign-out', signOut);

userRouter.get('/username/:username', getUserInfoByUsername);
userRouter.patch('/user/edit', patchUserInfoByUsername);
userRouter.delete('/user/delete', deleteUser);

//  all likes from a user by id, only array ids
userRouter.get('/user/all-likes/:id', getAllUserLikes);

userRouter.get('/user', getUserInfo);

export default userRouter;
