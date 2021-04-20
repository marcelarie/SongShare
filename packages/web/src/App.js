import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ProtectedRoute from './routes/protectedRoutes';

import * as ROUTES from './routes';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import Header from './components/Header';

import { onAuthStateChanged } from './services/auth';
import { syncSignIn, signOut } from './redux/auth/auth-actions';
import UserInfo from './pages/UserInfo/UserInfo';
import templates from './pages/UserInfo/UserProfileTemplates';

function App() {
    const dispatch = useDispatch();

    const auth = useSelector(store => store.auth);
    

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
            {
                auth.isAuthenticated && <><Header/> <sideNav/></>
                
            }
            <Switch>
                <Route path={ROUTES.SIGN_UP} component={SignUp} />
                <Route path={ROUTES.LOGIN} component={Login} />
                <Route path={ROUTES.RESET_PASSWORD} component={ResetPassword} />
                <Route path={ROUTES.HOME} component={Home} exact/>
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
