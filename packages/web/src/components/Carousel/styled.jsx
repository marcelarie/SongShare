import styled from 'styled-components';
import hexToRgba from 'hex-to-rgba';

const Carousel = styled.div`
    &::-webkit-scrollbar {
        width: 20px;
        height: 8px;
        transition: 0.3s;
    }

    /* Track */
    &::-webkit-scrollbar-track {
        background: none;
        margin: 0 1rem;
        cursor: pointer;
    }
    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => hexToRgba(theme.mainDark, '0.2')};
        border-radius: 2px;
    }
    &:hover::-webkit-scrollbar-thumb {
        height: 8px;
        background: ${({ theme }) => hexToRgba(theme.mainDark, '0.6')};
        transition: 0.2s;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme.mainDark};
        transition: 0.3s;
    }
`;

export default Carousel;
