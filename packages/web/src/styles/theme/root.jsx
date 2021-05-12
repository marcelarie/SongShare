import styled from 'styled-components';

export const GlobalStyles = styled.div`
    transition: 0.3s;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    body {
        background-color: ${({ theme }) => theme.background};
    }
    a {
        color: ${({ theme }) => theme.text};
    }
`;
