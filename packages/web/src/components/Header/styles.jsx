import styled from 'styled-components';
import hexToRgba from 'hex-to-rgba';

const Nav = styled.nav`
    all: unset;
    transition: 0.3s;
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
    .nav-logo {
        flex: 0.2;
        padding-bottom: 1rem;
        h1 {
            font-size: 2rem;
            transition: 0.3s;
            text-align: center;
            line-height: 1.8rem;
            &:hover {
                span {
                    color: ${({ theme }) => theme.main};
                    transition: 0.5s;
                }
            }
        }
    }
    .nav-menu {
        display: flex;
        justify-content: center;
        margin: 0 2rem;
        flex: 3;
        padding-bottom: 0.8rem;
        border-bottom: 1px solid ${({ theme }) => hexToRgba(theme.text, '0.2')};
        a {
            padding: 0 1%;
            font-size: 0.7rem;
            button {
                padding: 0.5rem 1rem;
                &:hover {
                    color: ${({ theme }) => theme.main};
                }
            }
        }
    }
    .nav-user {
        display: flex;
        flex: 0.5;
        justify-content: center;
        align-items: center;
        button {
            transition: 0.2s;
        }

        &__menu {
            align-items: flex-end;
            background-color: ${({ theme }) => theme.background};
            border: 1px solid ${({ theme }) => hexToRgba(theme.text, '0.4')};
            transition: 0.3s;
            &:after {
                transition: 0.3s;
                border-color: ${({ theme }) => theme.background} transparent;
            }
            &:before {
                transition: 0.3s;
                border-color: ${({ theme }) => hexToRgba(theme.text, '0.4')}
                    transparent;
            }
            button {
                all: unset;
                text-align: right;
                font-size: 0.9em;
                cursor: pointer;
                margin: 0.5rem 0;
                transition: 0.3s;
                padding: 0.2rem 0.2rem;
                color: ${({ theme }) => theme.text};
                border-bottom: 1px solid
                    ${({ theme }) => hexToRgba(theme.text, '0.2')};
                &:hover {
                    color: ${({ theme }) => theme.main};
                }
                transition: 0.2s !important;
            }
        }
        &__username {
            all: unset;
            cursor: pointer;
            letter-spacing: 0.2rem;
            transition: 0;
        }
        span {
            font-size: 1.7rem;
        }
        &__image {
            cursor: pointer;
            width: 35px;
            height: 35px;
            margin: auto 0.5rem;
            border-radius: 50%;
            &:active {
                opacity: 0.7;
            }
            margin: 0 1rem;
        }
    }
    .navfocus {
        border: 1px solid ${({ theme }) => hexToRgba(theme.text, '0.3')} !important;
        color: ${({ theme }) => theme.main} !important;

        box-shadow: 5px 4px ${({ theme }) => hexToRgba(theme.text, '0.2')} !important;
        font-weight: 600 !important;
        transition: 0.2s !important;
    }

`;

export default Nav;
