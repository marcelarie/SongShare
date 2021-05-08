import styled from 'styled-components';

const Nav = styled.nav`
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
        font-size: 1.7rem;
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
        }

        padding-bottom: 2rem;
        border-bottom: 1px solid ${({ theme }) => theme.text};
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
