import styled from 'styled-components';

const GenericButton = styled.button`
        font-weight: 600;
        color: white;
        font-size: 1.5em;
        background-color: ${props => props.color} ;
        padding: 1.5rem;
        margin: 10px 0;
        border: none;
        cursor: pointer;
        font-size: 20px;
        border-radius: 5px;
        width: ${props => props.width};
        &:hover {
        background-color: ${props => props.colorHover} ;
            transition: 0.1s;
        }
        &:active {
            transition: 0.1s;
            // something cool here
        }
    }
`;

GenericButton.defaultProps = {
    color: '#c3352e',
    colorHover: '#ac362e',
    width: '200px',
};

export default GenericButton;
