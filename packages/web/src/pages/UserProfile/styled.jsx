import styled from 'styled-components';
import hexToRgba from 'hex-to-rgba';
// import colors from '../../styles/color-palette';

const UserProfile = styled.div`
    .user__header {
        background-image: url(${props => props.cover});
        background-size: cover;
        &__title {
            background-color: ${({ theme }) => hexToRgba(theme.text, '0.2')};
            color: ${({ theme }) => theme.background};
        }
        &__stats {
            background-color: ${({ theme }) => hexToRgba(theme.text, '0.2')};
            p,
            svg {
                color: ${({ theme }) => theme.background};
                fill: ${({ theme }) => theme.background};
                &:hover {
                    fill: ${({ theme }) => hexToRgba(theme.background, '0.7')};
                }
            }
        }
    }
    .user__nav {
        ul {
            border-radius: 5px;
            padding: 0.4rem 0;
            li {
                color: ${props => props.theme.text};
                text-decoration-color: ${props => props.theme.main};
                text-underline-offset: 5px;
                text-decoration-thickness: 2px;
                &:hover {
                    text-decoration-color: ${props => props.theme.main};
                    text-decoration: underline;
                    text-decoration-thickness: 2px;
                }
            }
        }
    }
    .user__main__aside__offset {
        border: 1px solid ${({ theme }) => hexToRgba(theme.text, '0.1')};
        border-radius: 5px;
    }
    .user__main__aside__header {
        &__image {
            border-radius: 5px;
            background-image: url(${props => props.image});
            min-height: 300px;
            min-width: 300px;
            background-position: center;
            background-size: cover;
            position: relative;
        }
    }
    .user__main__aside__content {
        h1 {
            font-size: 2rem;
            color: ${props => props.theme.text};
            text-shadow: 4px 4px 0px ${props => props.theme.background};
            &:hover {
                color: ${props => props.theme.text};
                text-shadow: 4px 4px 0px ${props => props.theme.main};
                transition: 0.2s;
                cursor: pointer;
            }
        }
    }
    .user__main__content {
        span {
            color: ${props => props.theme.main};
            border: 2px solid ${props => props.theme.main};
            font-weight: 400;
            margin: 0 0.5rem;
        }
        &__playlist {
            h2 {
                color: ${props => props.theme.text};
            }
        }
        &__music {
            h2 {
                color: ${props => props.theme.text};
            }
            &__carousel {
                border-radius: 5px;
            }
        }
    }
    .selectedNav {
        transition: 0.4s;
        text-decoration: underline;
    }
`;

export default UserProfile;
