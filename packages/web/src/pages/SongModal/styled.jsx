import styled from 'styled-components';

const SongModal = styled.div`
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.background};
    border: 1px solid ${({ theme }) => theme.darkGrayOpacity7};
    .song-modal__likes {
        color: ${({ theme }) => theme.main};
        p {
            color: ${({ theme }) => theme.text};
        }
    }
`;

export default SongModal;
