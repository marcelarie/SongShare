import styled from 'styled-components';

const Carousel = styled.div`
    &::-webkit-scrollbar {
        width: 20px;
        height: 6px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.mainDarkGrayTransparent};
        border-radius: 5px;
    }
    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.color};
        border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme.colorDark};
        transition: 0.5s;
    }
`;

export default Carousel;
