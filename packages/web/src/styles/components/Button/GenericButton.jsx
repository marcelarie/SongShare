import styled from 'styled-components';
// import * as main from '../../color-palette';

const GenericButton = styled.button`
        font-weight: 600;
        font-size: 1em;
        background: ${({ theme }) =>
            `linear-gradient(87.74deg, ${theme.mainDark} 5.63%, ${theme.main} 98.31%)`} ;
        color: ${({ theme }) => theme.background};
        padding: 0.4rem 0;
        margin: 1rem 0;
        border: none;
        cursor: pointer;
        border-radius: 3px;
        width: ${({ width }) => width};
        &:hover {
        background-color: ${({ theme }) => theme.mainDark} ;
            transition: 0.1s;
        }
        &:active {
            transition: 0.1s;
            // something cool here
        }
    }
`;

GenericButton.defaultProps = {
    width: '120px',
};

export default GenericButton;
