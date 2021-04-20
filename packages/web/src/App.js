import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import SignUp from './pages/SignUp';
import UserInfo from './pages/UserInfo/UserInfo';
import templates from './pages/UserInfo/UserProfileTemplates';
import { signOut, syncSignIn } from './redux/auth/auth-actions';
import * as ROUTES from './routes';
import ProtectedRoute from './routes/protectedRoutes';
import { onAuthStateChanged } from './services/auth';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        let unsubscribeFromAuth = null;
        unsubscribeFromAuth = onAuthStateChanged(user => {
            if (user) {
                dispatch(syncSignIn());
            } else {
                dispatch(signOut());
            }
        });

        return () => {
            if (unsubscribeFromAuth) {
                unsubscribeFromAuth();
            }
        };
    }, [dispatch]);

    return (
        <div className="App__container">
            <Switch>
                <Route path={ROUTES.SIGN_UP} component={SignUp} />
                <Route path={ROUTES.LOGIN} component={Login} />
                <Route path={ROUTES.RESET_PASSWORD} component={ResetPassword} />
                <Route path={ROUTES.HOME} component={Home} exact />
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
            </Switch>
        </div>
    );
}

export default App;
