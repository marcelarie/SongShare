import styled from 'styled-components';
import hexToRgba from 'hex-to-rgba';

const SongListItem = styled.div`
    .selected {
        background-color: ${({ theme }) => hexToRgba(theme.text, '0.3')};
    }
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

SongListItem.defaultProps = {
    image: 'https://picsum.photos/seed/picsum/500',
};

export default SongListItem;
