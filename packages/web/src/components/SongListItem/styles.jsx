import styled from 'styled-components';
// import hexToRgba from 'hex-to-rgba';

const SongListItem = styled.div`
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.bg};

    .songListItem__content__info__playButton {
        fill: ${({ theme }) => theme.bgColor};
    }
    .songListItem__content__info__playIcon {
        background-color: ${({ theme }) => theme.bg};
        border: 1px solid ${({ theme }) => theme.bgColor};
        box-shadow: 0 0 5px ${({ theme }) => theme.bgColor};
    }
    .songListItem {
        border-bottom: 1px solid ${({ theme }) => theme.pinkColor};
    }
    .selected {
        background-color: ${({ theme }) => theme.colorDarkTransparent};
        box-shadow: 0px 0px 10px ${({ theme }) => theme.pinkColor};
    }
`;

SongListItem.defaultProps = {
    image: 'https://picsum.photos/seed/picsum/500',
};

export default SongListItem;
