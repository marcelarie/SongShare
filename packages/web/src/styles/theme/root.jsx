import styled from 'styled-components';

export const GlobalStyles = styled.div`
    transition: 0.6s;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    body {
        background-color: ${({ theme }) => theme.backgroundColor};
    }
    a {
        color: ${({ theme }) => theme.textColor};
    }
`;
