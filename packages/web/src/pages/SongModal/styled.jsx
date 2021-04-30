import styled from 'styled-components';

const SongModal = styled.div`
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) => theme.backgroundColor};
    border: 1px solid ${({ theme }) => theme.mainBlackTransparent};
    .song-modal__likes {
        color: ${({ theme }) => theme.color};
    }
`;

export default SongModal;
