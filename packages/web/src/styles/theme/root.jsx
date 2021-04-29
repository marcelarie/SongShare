import styled from 'styled-components';

export const Body = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    height: 100vh;
    a {
        color: ${({ theme }) => theme.textColor};
    }
`;
