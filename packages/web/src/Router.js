import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as ROUTES from './routes';
import Home from './pages/Home';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import SignUp from './pages/SignUp';
import UserProfile from './pages/UserProfile';
import ProtectedRoute from './routes/protectedRoutes';
import MyMusic from './pages/MyMusic/MyMusic';
import MyPlaylists from './pages/MyPlaylists';
import CreatePlaylist from './pages/CreatePlaylist';
import AddSongs from './pages/AddSongs';
import Playlist from './pages/PlaylistView';
import Search from './pages/Search';

// import templates from './pages/UserInfo/UserProfileTemplates';
// import UploadSong from './components/UploadSong';
// import ChangePassword from './pages/ChangePassword';

function MainRouter() {
    return (
        <Switch>
            <Route path={ROUTES.SIGN_UP} component={SignUp} />
            <Route path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.RESET_PASSWORD} component={ResetPassword} />
            <Route path={ROUTES.HOME} component={Home} exact />
            <ProtectedRoute path={ROUTES.MY_MUSIC} component={MyMusic} />
            <ProtectedRoute
                path={ROUTES.MY_PLAYLISTS}
                component={MyPlaylists}
            />
            <ProtectedRoute
                path={ROUTES.NEW_PLAYLIST}
                component={CreatePlaylist}
            />
            <ProtectedRoute path={ROUTES.PLAYLIST_VIEW} component={Playlist} />
            <ProtectedRoute path={ROUTES.ADD_SONGS} component={AddSongs} />
            <ProtectedRoute path={ROUTES.SEARCH} component={Search} />
            <ProtectedRoute
                path={ROUTES.HOME_USER}
                component={UserProfile}
                // exact
            />
            {/* <ProtectedRoute
                path={ROUTES.HOME_USER_EDIT}
                component={templates.CurrentUserProfileEdit}
                exact
            /> */}
            {/* <ProtectedRoute
                path={ROUTES.HOME_USER_EDIT_CHANGEPASSWORD}
                component={ChangePassword}
                exact
            /> */}
        </Switch>
    );
}

export default MainRouter;
