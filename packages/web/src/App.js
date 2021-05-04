import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import SongModal from './pages/SongModal';
import Header from './components/Header';
import QuickMenu from './components/QuickMenu';
import MainRouter from './Router';
import AudioPlayer from './components/AudioPlayer';

import { dark, light } from './styles/theme';
import { GlobalStyles } from './styles/theme/root';
import './styles/fonts.scss';
import './styles/reset.scss';

import useOnAuthStateChanged from './custom-hooks/onAuthStateChanged';

// old styles + SideNav still WIP
// import './styles/main.scss';
// import SideNav from './components/SideNav';

function App() {
    const auth = useSelector(store => store.auth);
    useOnAuthStateChanged();
    const currentTheme = useSelector(({ changeTheme }) => changeTheme.theme);
    const { open } = useSelector(({ quickMenu }) => quickMenu);

    return (
        <ThemeProvider theme={currentTheme ? dark : light}>
            <GlobalStyles>
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
                    {open && <QuickMenu />}
                </main>
                {auth.isAuthenticated && <AudioPlayer />}
            </GlobalStyles>
        </ThemeProvider>
    );
}

export default App;

// {auth.isAuthenticated && <SideNav className="main__sideNav" />}
