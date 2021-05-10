import styled from 'styled-components';
import hexToRgba from 'hex-to-rgba';
import colors from '../../styles/color-palette';

const UserProfile = styled.div`
    .user__header {
        background-image: url(${props => props.cover});
        background-position: center;
        background-size: cover;
    }
    .user__main__aside__offset {
        border: 1px solid ${({ theme }) => hexToRgba(theme.text, '0.8')};
        border-radius: 10px;
    }
    .user__main__aside__header {
        &__image {
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
                color: ${props => props.theme.background};
                text-shadow: 4px 4px 0px ${props => props.theme.main};
                transition: 0.2s;
                cursor: pointer;
            }
        }
    }
`;

export default UserProfile;
