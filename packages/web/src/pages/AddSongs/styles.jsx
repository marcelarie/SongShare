import styled from 'styled-components';

const SongListItem = styled.div`
    color: ${({ theme }) => theme.textColor};
    .SongListItem__playButton {
        fill: ${({ theme }) => theme.backgroundColor};
    }
`;

SongListItem.defaultProps = {
    image: 'https://picsum.photos/seed/picsum/500',
};

export default SongListItem;
