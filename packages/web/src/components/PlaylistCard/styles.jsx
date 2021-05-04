import styled from 'styled-components';

const PlaylistCard = styled.div`
    color: ${({ theme }) => theme.textColor};
    .songsCard__container {
        background-image: url(${props => props.image});
    }
    .songsCard__description {
        color: #b4b4b4;
        &:hover {
            color: ${({ theme }) => theme.textColor};
            transition: 0.3s;
        }
    }
    .songsCard__playButton {
        fill: ${({ theme }) => theme.backgroundColor};
    }
`;

export default PlaylistCard;
