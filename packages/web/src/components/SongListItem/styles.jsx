import styled from 'styled-components';

const SongListItem = styled.div`
    color: ${({ theme }) => theme.textColor};
    .songListItem__content__info__playButton {
        fill: ${({ theme }) => theme.mainBlack};
    };
    .songListItem__content__info__playIcon{
        background-color: ${({ theme }) => theme.color} ;
    };
    .songListItem {
        border-bottom: 1px solid ${({ theme }) => theme.color};
    };
    .selected {
        background-color: ${({ theme }) => theme.colorDarkTransparent};
        box-shadow: 0px 0px 10px ${({ theme }) => theme.color};
    }
`;

SongListItem.defaultProps = {
    image: 'https://picsum.photos/seed/picsum/500',
};

export default SongListItem;
