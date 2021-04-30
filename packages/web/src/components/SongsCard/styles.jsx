import styled from 'styled-components';

const SongCard = styled.div`
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
`;

SongCard.defaultProps = {
    image: 'https://picsum.photos/seed/picsum/500',
};

export default SongCard;
