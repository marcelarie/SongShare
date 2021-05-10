import styled from 'styled-components';

const SongListItem = styled.div`
    color: ${({ theme }) => theme.text};
    .SongListItem__playButton {
        fill: ${({ theme }) => theme.background};
    }
`;

SongListItem.defaultProps = {
    image: 'https://picsum.photos/seed/picsum/500',
};

export default SongListItem;
