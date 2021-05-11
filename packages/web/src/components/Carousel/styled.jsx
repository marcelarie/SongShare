import styled from 'styled-components';
import hexToRgba from 'hex-to-rgba';

const Carousel = styled.div`
    &::-webkit-scrollbar {
        width: 20px;
        height: 6px;
        transition: 0.6s;
    }
    &:hover::-webkit-scrollbar {
        height: 10px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
        background: none;
    }
    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => hexToRgba(theme.mainDark, '0.6')};
        border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme.mainDark};
        transition: 0.5s;
    }
`;

export default Carousel;
