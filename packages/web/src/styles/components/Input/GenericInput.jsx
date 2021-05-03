import styled from 'styled-components';

const GenericInput = styled.input`
    text-align: center;
    width: 100%;
    height: 2rem;
    text-align: center;
    margin: 1.5vh auto;
    padding: 0.8rem 0;

    :disabled {
        all: unset;
        text-align: center;
        margin: 1vh auto;
        padding: 0.8rem 0;
    }
`;

export default GenericInput;
