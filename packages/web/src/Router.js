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
import CreatePlaylist from './pages/CreatePlaylist';
import AddSongs from './pages/AddSongs';
import RemoveSongs from './pages/RemoveSongs';
import Playlist from './pages/PlaylistView';
import PlaylistEdit from './pages/PlaylistEditView';
import Search from './pages/Search';
import MyLibrary from './pages/MyLibrary';

// import templates from './pages/UserProfile/UserProfileContent/UserProfileEdit';
// import UploadSong from './components/UploadSong';
// import ChangePassword from './pages/ChangePassword';

function MainRouter() {
    return (
        <Switch>
            {/*  LOGIN & USER */}
            <Route path={ROUTES.SIGN_UP} component={SignUp} exact />
            <Route path={ROUTES.LOGIN} component={Login} exact />
            <Route
                path={ROUTES.RESET_PASSWORD}
                component={ResetPassword}
                exact
            />
            <Route path={ROUTES.HOME} component={Home} exact />
            <ProtectedRoute path={ROUTES.SEARCH} component={Search} exact />

            {/*  MUSIC */}
            <ProtectedRoute path={ROUTES.MY_MUSIC} component={MyMusic} />

            {/* <ProtectedRoute
                path={ROUTES.MY_PLAYLISTS}
                component={MyLibrary}
                exact
            /> */}
            <ProtectedRoute
                path={ROUTES.NEW_PLAYLIST}
                component={CreatePlaylist}
                exact
            />
            <ProtectedRoute
                path={ROUTES.ADD_SONGS}
                component={AddSongs}
                exact
            />
            <ProtectedRoute
                path={ROUTES.PLAYLIST_VIEW_EDIT}
                component={PlaylistEdit}
                exact
            />
            <ProtectedRoute
                path={ROUTES.PLAYLIST_VIEW}
                component={Playlist}
                exact
            />
            <ProtectedRoute path={ROUTES.SEARCH} component={Search} />
            <ProtectedRoute
                path={ROUTES.REMOVE_SONGS}
                component={RemoveSongs}
                exact
            />

            <ProtectedRoute path={ROUTES.HOME_USER} component={UserProfile} />
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
