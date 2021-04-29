import styled from 'styled-components';
import * as main from '../../color-palette';

const GenericButton = styled.button`
        font-weight: 600;
        color: white;
        font-size: 1.3em;
        background-color: ${props => props.color} ;
        padding: 1.1rem;
        margin: 1rem 0;
        border: none;
        cursor: pointer;
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
    color: main.color,
    colorHover: main.colorDark,
    width: '200px',
};

export default GenericButton;
