import styled from 'styled-components';

const PlaylistView = styled.div`
    color: ${({ theme }) => theme.black};
    background-color: ${({ theme }) => theme.backgroundColor};
    .song-modal__likes {
        color: ${({ theme }) => theme.color};
        p {
            color: ${({ theme }) => theme.textColor};
        }
    }
    .PlaylistView__header__container {
        background-color: ${({ theme }) => theme.mainDarkGray};
        color: ${({ theme }) => theme.black};
    }
    .PlaylistView__header__container__info__title {
        background-color: ${({ theme }) => theme.color};
    }
    .PlaylistView__header__container__img {
        background-image: url(${props => props.image});
        background-size: cover;
    }
`;

export default PlaylistView;
