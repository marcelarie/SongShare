import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import SongModal from './pages/SongModal';
import Header from './components/Header';
// import SideNav from './components/SideNav';
import SongsPlayer from './components/SongsPlayer';

import MainRouter from './Router';

import useOnAuthStateChanged from './custom-hooks/onAuthStateChanged';

import { dark, light } from './styles/theme';
import { Body } from './styles/theme/root';
import './styles/fonts.scss';
import './styles/reset.scss';
import './styles/color-palette.scss';

function App() {
    const auth = useSelector(store => store.auth);
    useOnAuthStateChanged();
    const currentTheme = useSelector(({ changeTheme }) => changeTheme.theme);

    return (
        <ThemeProvider theme={currentTheme ? dark : light}>
            <Body>
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
            </Body>
        </ThemeProvider>
    );
}

export default App;

// {auth.isAuthenticated && <SideNav className="main__sideNav" />}
