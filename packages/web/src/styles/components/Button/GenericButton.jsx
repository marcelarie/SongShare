import styled from 'styled-components';
// import * as main from '../../color-palette';

const GenericButton = styled.button`
        font-weight: 600;
        font-size: 1.3em;
        background-color: ${({ theme }) => theme.color} ;
        padding: 1.1rem;
        margin: 1rem 0;
        border: none;
        cursor: pointer;
        border-radius: 5px;
        width: ${({ width }) => width};
        &:hover {
        background-color: ${({ theme }) => theme.colorDark} ;
            transition: 0.1s;
        }
        &:active {
            transition: 0.1s;
            // something cool here
        }
    }
`;

GenericButton.defaultProps = {
    width: '200px',
};

export default GenericButton;
