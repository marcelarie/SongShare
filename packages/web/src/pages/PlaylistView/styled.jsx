import styled from 'styled-components';
import * as colors from '../../styles/color-palette';

const PlaylistView = styled.div`
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.bgMain};
    box-shadow: 0px 2px 5px ${({ theme }) => theme.bgColor};

    .PlaylistView__header__container {
        background-color: ${({ theme }) => theme.bgMain};
        color: ${({ theme }) => theme.text};
        border-bottom: 2px solid ${({ theme }) => theme.bgColor};
    }
    .PlaylistView__header__container__info__title {
        color: ${({ theme }) => theme.textColor};
    }
    .PlaylistView__header__container__img {
        background-image: url(${props => props.image});
        background-size: cover;
    }
    .editButton {
        color: ${({ theme }) => theme.textColor};
        border: 1px solid ${({ theme }) => theme.textColor};
        background-color: ${({ theme }) => theme.bgMain};
    }
    .editButton:hover {
        color: ${({ theme }) => theme.textColor};
        border: 1px solid ${({ theme }) => theme.bgColor};
        box-shadow: 0 0 5px ${({ theme }) => theme.bgColor}
        background-color: ${({ theme }) => theme.bg};
    }
`;
PlaylistView.defaultProps = {
    image: 'https://picsum.photos/500',
};
export default PlaylistView;
