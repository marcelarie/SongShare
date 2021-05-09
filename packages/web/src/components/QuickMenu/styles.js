import styled from 'styled-components';

export default styled.div`
    position: absolute;
    background-color: ${({ theme }) => theme.background};
    border: 2px solid ${({ theme }) => theme.text};
    padding: 1rem;
    border-radius: 5px;
    z-index: 9;
    top: ${props => props.y};
    left: ${props => props.x};
    bottom: auto;
    right: auto;
    button {
        all: unset;
    }
`;
