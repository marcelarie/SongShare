import styled from 'styled-components';

export default styled.div`
    position: absolute;
    background-color: gray;
    width: '100px';
    height: '100px';
    font-size: '0.8em';
    z-index: 99999;
    top: ${props => props.y};
    left: ${props => props.x};
    bottom: auto;
    right: auto;
`;
