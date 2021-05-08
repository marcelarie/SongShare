import styled from 'styled-components';
import hexToRgba from 'hex-to-rgba';

const SongListItem = styled.div`
    color: ${({ theme }) => theme.text};
    .songListItem__content__info__playButton {
        fill: ${({ theme }) => theme.mainBlack};
    }
    .songListItem__content__info__playIcon {
        background-color: ${({ theme }) => theme.main};
    }
    .songListItem {
        border-bottom: 1px solid ${({ theme }) => theme.main};
    }
    .selected {
        background-color: ${({ theme }) => hexToRgba(theme.mainDark, '0.7')};
        box-shadow: 0px 0px 10px ${({ theme }) => theme.main};
    }
`;

SongListItem.defaultProps = {
    image: 'https://picsum.photos/seed/picsum/500',
};

export default SongListItem;
