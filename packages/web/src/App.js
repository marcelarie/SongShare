import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import * as ROUTES from './routes';
import Home from './pages/Home';
import ChangePassword from './pages/ChangePassword';
import Login from './pages/Login';
import SongModal from './pages/SongModal';
import ResetPassword from './pages/ResetPassword';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import SideNav from './components/SideNav';
import UploadSong from './components/UploadSong';

import UserInfo from './pages/UserInfo/UserInfo';
import templates from './pages/UserInfo/UserProfileTemplates';
import { signOut, syncSignIn } from './redux/auth/auth-actions';
import { onAuthStateChanged } from './services/auth';
import ProtectedRoute from './routes/protectedRoutes';
// import SongsPlayer from './components/SongsPlayer';

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
            {auth.isAuthenticated && (
                <>
                    <Header /> <SideNav /> <SongModal />
                </>
            )}
            <Switch>
                <Route path={ROUTES.SIGN_UP} component={SignUp} />
                <Route path={ROUTES.LOGIN} component={Login} />
                <Route path={ROUTES.RESET_PASSWORD} component={ResetPassword} />
                <Route path={ROUTES.HOME} component={Home} exact />
                <ProtectedRoute path={ROUTES.MY_MUSIC} component={UploadSong} />
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
            {/* {auth.isAuthenticated && (
                <>
                    <SongsPlayer />
                </>
            )} */}
        </div>
    );
}

export default App;
