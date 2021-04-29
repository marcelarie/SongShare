import styled from 'styled-components';
import * as main from '../../color-palette';

const GenericNavButton = styled.a`
    all: unset;
    color: ${props => props.color};
    font-size: 1.3em;
    margin: 0 2rem;
    &:hover {
        color: ${props => props.colorHover};
        transition: 0.8ms;
    }
    &:active {
        transition: 0.1s;
        // something cool here
    }
`;

GenericNavButton.defaultProps = {
    color: main.lightGray,
    colorHover: main.white,
    width: '200px',
};
export default GenericNavButton;
