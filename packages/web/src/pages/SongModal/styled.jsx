import styled from 'styled-components';

const SongModal = styled.div`
    color: ${({ theme }) => theme.textColor};
    background-color: ${({ theme }) => theme.backgroundColor};
    border: 1px solid ${({ theme }) => theme.mainDarkGrayTransparent};
    .song-modal__likes {
        color: ${({ theme }) => theme.color};
        p {
            color: ${({ theme }) => theme.textColor};
        }
    }
`;

export default SongModal;
