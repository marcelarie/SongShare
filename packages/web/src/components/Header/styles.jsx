import styled from 'styled-components';

const Nav = styled.nav`
    all: unset;
    transition: 0.6s;
    z-index: 2;
    background-color: ${({ theme }) => theme.backgroundColor};
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    justify-content: space-between;
    padding: 0.8rem 1rem;
    a {
        text-decoration: none;
    }
    h1 {
        font-size: 1.7rem;
        transition: 0.6s;
        &:hover {
            color: ${({ theme }) => theme.color};
            transition: 0.5s;
        }
    }
    .nav-menu {
        display: flex;
        justify-content: space-between;
    }
    .nav-user {
        display: flex;
        justify-content: center;
        align-items: center;
        button {
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
