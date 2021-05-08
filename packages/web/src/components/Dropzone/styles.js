import styled from 'styled-components';
import colors from '../../styles/color-palette';

const handleBackgroundColor = ({ songState }) => {
    return songState.error ? colors.mainDarkGray : colors.greenSuccess;
};

const handleBackgroundColorTransparent = ({ songState }) => {
    return songState.error ? colors.mainBlackTransparent : colors.greenSuccess;
};

const handleTextColor = ({ songState }) => {
    return songState.error ? 'white' : 'black';
};

const DropzoneStyle = styled.div`
    margin: 2rem auto;
    width: 100%;
    border-radius: 10px;
    .dropzone_area {
        p {
            color: ${handleTextColor};
            font-weight: 500;
            font-size: 1.1rem;
        }
        div {
            padding: 1.5rem;
            border-radius: 10px;
            border: 4px solid ${colors.mainBlack};
            background-color: ${handleBackgroundColor};
            transition: 1s;
            &:hover {
                background-color: ${handleBackgroundColorTransparent};
                transition: 0.5s;
            }
        }
    }
    .dropzone_controls {
        text-align: center;
        text-decoration: none;
    }
`;

DropzoneStyle.defaultProps = {
    backColor: colors.mainDarkGray,
};

export default DropzoneStyle;
