import React from 'react';
import { useSelector } from 'react-redux';

import SongModal from './pages/SongModal';
import Header from './components/Header';
import SideNav from './components/SideNav';
import SongsPlayer from './components/SongsPlayer';

import MainRouter from './Router';

import useOnAuthStateChanged from './custom-hooks/onAuthStateChanged'

import './styles/main.scss';

function App() {
    const auth = useSelector(store => store.auth);
    useOnAuthStateChanged()
    return (
        <div className="App__container">
            {auth.isAuthenticated && (
                <>
                    <Header />
                    <SongModal />
                </>
            )}
            <main className="main">
                {auth.isAuthenticated && <SideNav className="main__sideNav" />}
                <div className="main__content">
                    <MainRouter />
                </div>
            </main>
            {auth.isAuthenticated && <SongsPlayer />}
        </div>
    );
}

export default App;
