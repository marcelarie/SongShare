import React from 'react';
import { useSelector } from 'react-redux';

import SongModal from './pages/SongModal';
import Header from './components/Header';
// import SideNav from './components/SideNav';
import SongsPlayer from './components/SongsPlayer';

import MainRouter from './Router';

import useOnAuthStateChanged from './custom-hooks/onAuthStateChanged';

import './styles/fonts.scss';
import './styles/reset.scss';
import './styles/color-palette.scss';

function App() {
    const auth = useSelector(store => store.auth);
    useOnAuthStateChanged();
    return (
        <>
            {auth.isAuthenticated && (
                <>
                    <Header />
                    <SongModal />
                </>
            )}
            <main className="main">
                <div className="main__content">
                    <MainRouter />
                </div>
            </main>
            {auth.isAuthenticated && <SongsPlayer />}
        </>
    );
}

export default App;

// {auth.isAuthenticated && <SideNav className="main__sideNav" />}
