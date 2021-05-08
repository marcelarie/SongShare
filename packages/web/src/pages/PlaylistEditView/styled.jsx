import styled from 'styled-components';

const PlaylistView = styled.div`
    color: ${({ theme }) => theme.black};
    background-color: ${({ theme }) => theme.background};
    .song-modal__likes {
        color: ${({ theme }) => theme.main};
        p {
            color: ${({ theme }) => theme.text};
        }
    }
    .PlaylistView__header__container {
        background-color: ${({ theme }) => theme.mainDarkGray};
        color: ${({ theme }) => theme.black};
    }
    .PlaylistView__header__container__info__title {
        background-color: ${({ theme }) => theme.main};
    }
    .PlaylistView__header__container__img {
        background-image: url(${props => props.image});
        background-size: cover;
    }
`;

export default PlaylistView;
