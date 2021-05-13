import styled from 'styled-components';
import colors from '../../color-palette';

const GenericNavButton = styled.button`
    all: unset;
    color: ${colors.lightGray};
        fill: ${({ theme }) => theme.text};
    svg {
        min-width: 1.3rem;
        max-width: 1.3rem;
    }
    font-size: 1.3em;
    margin: 0 2rem;
    &:hover {
        color: ${({ theme }) => theme.text};
        fill: ${({ theme }) => theme.text};
        transition: 0.8ms;
    }
    &:active {
        transition: 0.1s;
        // something cool here
    }
`;

GenericNavButton.defaultProps = {};
export default GenericNavButton;
