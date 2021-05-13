import styled from 'styled-components';
import hexToRgba from 'hex-to-rgba';

const PlaylistViewHeader = styled.div`
    .mega-playlist {
        &__card {
            background-image: url('${props => props.image}');
            background-size: cover;
            background-position: center;
            border: 1vw solid ${({ theme }) => hexToRgba(theme.text, '0.9')};
            &__play {
                fill: ${({ theme }) => theme.background};
                &:hover {
                    fill: ${({ theme }) => theme.main};
                }
            }
        }
    }
    .PlaylistView__header__buttons__3point {
        border: 1px solid ${({ theme }) => hexToRgba(theme.text, '0.9')};
        fill: ${({ theme }) => hexToRgba(theme.text, '0.9')};
    }
    .type,
    .access,
    .author {
        color: transparent;
        text-shadow: 0px 0px 1px ${({ theme }) => hexToRgba(theme.text, '0.9')};
    }
`;

PlaylistViewHeader.defaultProps = {
    image: 'https://picsum.photos/700',
};

export default PlaylistViewHeader;
