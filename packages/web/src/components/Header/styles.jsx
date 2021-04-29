import styled from 'styled-components';

const Nav = styled.nav`
    all: unset;
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
    }
    .nav-menu {
        display: flex;
        justify-content: space-between;
    }
    .nav-user {
        display: flex;
        flex-direction: column;
        justify-content: center;
        button {
            width: 30px;
            height: 30px;
            margin: 0 auto;
            border-radius: 50%;
            &:active {
                opacity: 0.7;
            }
        }
    }
`;

export default Nav;
