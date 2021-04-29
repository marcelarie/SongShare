import styled from 'styled-components';

const GenericNavButton = styled.button`
    all: unset;
    color: ${({ theme }) => theme.lightGray};
    font-size: 1.3em;
    margin: 0 2rem;
    &:hover {
        color: ${({ theme }) => theme.white};
        transition: 0.8ms;
    }
    &:active {
        transition: 0.1s;
        // something cool here
    }
`;

GenericNavButton.defaultProps = {};
export default GenericNavButton;
