import styled from 'styled-components';
import hexToRgba from 'hex-to-rgba';

const MegaSongCard = styled.div`
    .mega-song {
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
`;

MegaSongCard.defaultProps = {
    image: 'https://picsum.photos/700',
};

export default MegaSongCard;
