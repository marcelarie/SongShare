import styled from 'styled-components';
import hexToRgba from 'hex-to-rgba';

const SongListTable = styled.div`
    .songsList__container {
        &__header {
            border-bottom: 2px solid
                ${({ theme }) => hexToRgba(theme.text, '0.9')};
        }
        &__row {
            border-bottom: 1px solid
                ${({ theme }) => hexToRgba(theme.text, '0.6')};
        }
    }
`;

SongListTable.defaultProps = {
    image: 'https://picsum.photos/500',
};
export default SongListTable;
