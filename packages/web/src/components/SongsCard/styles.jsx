import styled from 'styled-components';

const SongCard = styled.div`
    color: ${({ theme }) => theme.textColor};
    .songsCard__description {
        color: #b4b4b4;
        &:hover {
            color: ${({ theme }) => theme.textColor};
            transition: 0.3s;
        }
    }
`;

export default SongCard;
