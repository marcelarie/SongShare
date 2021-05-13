import styled from 'styled-components';
import hexToRgba from 'hex-to-rgba';

const SongListHeader = styled.div`
    .songListHeader__container__input {
        border: 1px solid ${({ theme }) => hexToRgba(theme.text, '0.6')};
    }
`;

export default SongListHeader;
