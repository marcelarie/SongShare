import styled from 'styled-components';
import hexToRgba from 'hex-to-rgba';

const Nav = styled.nav`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
    font-family: 'Bebas Neue', cursive;
    all: unset;
    transition: 0.6s;
    z-index: 2;
    background-color: ${({ theme }) => theme.background};
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    justify-content: space-between;
    padding: 0 5rem;
    padding-top: 3rem;
    a {
        text-decoration: none;
    }
    h1 {
        font-size: 2rem;
        transition: 0.6s;
        &:hover {
            color: ${({ theme }) => theme.main};
            transition: 0.5s;
        }
    }
    .nav-logo {
        flex: 0.5;
    }
    .nav-menu {
        display: flex;
        justify-content: center;
        a {
            padding: 0 2rem;
            font-size: 0.8rem;
        }

        padding-bottom: 2rem;
        border-bottom: 1px solid ${({ theme }) => hexToRgba(theme.text, '0.2')};
        flex: 3;
    }
    .nav-user {
        display: flex;
        flex: 0.5;
        justify-content: center;
        align-items: center;
        &__username {
            all: unset;
            cursor: pointer;
        }
        &__image {
            cursor: pointer;
            width: 30px;
            height: 30px;
            margin: auto 0.5rem;
            border-radius: 50%;
            &:active {
                opacity: 0.7;
            }
        }
    }
`;

export default Nav;
