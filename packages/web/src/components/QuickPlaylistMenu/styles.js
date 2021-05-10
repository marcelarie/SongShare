import styled from 'styled-components';

export default styled.div`
    position: absolute;
    background-color: ${({ theme }) => theme.background};
    padding: 1rem;
    border-radius: 5px;
    width: '100px';
    height: '100px';
    font-size: '0.8em';
    z-index: 99999;
    top: ${props => props.y};
    left: ${props => props.x};
    bottom: auto;
    right: auto;
    button {
        all: unset;
    }
`;
