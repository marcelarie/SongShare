import styled from 'styled-components';
// import * as main from '../../color-palette';

const GenericButton = styled.button`
        font-weight: 600;
        font-size: 1em;
        color: ${({ theme }) => theme.text};
        padding: 0.4rem 0;
        margin: 1rem 0;
        border: none;
        cursor: pointer;
        border-radius: 3px;
        width: ${({ width }) => width};
        border: 1px solid ${({ theme }) => theme.text};
        background-color: ${({ theme }) => theme.background};
        transition: 0.4s;
        &:hover {
            background-color: ${({ theme }) => theme.mainDark} ;
                transition: 0.1s;
        color: ${({ theme }) => theme.background};
        box-shadow: 5px 5px 1px ${({ theme }) => theme.main};
        transition: 0.3s;
        }
        &:active {
            transition: 0.1s;
        box-shadow: 0px 0px 1px ${({ theme }) => theme.main};
        }
    }
`;

GenericButton.defaultProps = {
    width: '120px',
};

// background: ${({ theme }) =>
//     `linear-gradient(87.74deg, ${theme.mainDark} 5.63%, ${theme.main} 98.31%)`} ;
export default GenericButton;
