import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as ROUTES from './routes';
import Home from './pages/Home';
import ChangePassword from './pages/ChangePassword';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import SignUp from './pages/SignUp';
// import UploadSong from './components/UploadSong';
import UserInfo from './pages/UserInfo/UserInfo';
import ProtectedRoute from './routes/protectedRoutes';
import templates from './pages/UserInfo/UserProfileTemplates';
import MyMusic from './pages/MyMusic/MyMusic';

function MainRouter() {
    return (
        <Switch>
            <Route path={ROUTES.SIGN_UP} component={SignUp} />
            <Route path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.RESET_PASSWORD} component={ResetPassword} />
            <Route path={ROUTES.HOME} component={Home} exact />
            <ProtectedRoute path={ROUTES.MY_MUSIC} component={MyMusic} />
            <ProtectedRoute
                path={ROUTES.HOME_USER}
                component={UserInfo}
                exact
            />
            <ProtectedRoute
                path={ROUTES.HOME_USER_EDIT}
                component={templates.CurrentUserProfileEdit}
                exact
            />
            <ProtectedRoute
                path={ROUTES.HOME_USER_EDIT_CHANGEPASSWORD}
                component={ChangePassword}
                exact
            />
        </Switch>
    );
}

export default MainRouter;

