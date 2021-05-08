import styled from 'styled-components';
import hexToRgba from 'hex-to-rgba';
import colors from '../../styles/color-palette';

const SongModal = styled.div`
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.background};
    border: 1px solid ${hexToRgba(colors.darkGray, '0.7')};
    .song-modal__likes {
        color: ${({ theme }) => theme.main};
        p {
            color: ${({ theme }) => theme.text};
        }
    }
`;

export default SongModal;
