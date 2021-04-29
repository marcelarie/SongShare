import styled from 'styled-components';
import * as colors from '../../styles/color-palette';

const handleBackgroundColor = ({ songState }) => {
    return songState.success ? colors.greenSuccess : colors.mainDarkGray;
};

const DropzoneStyle = styled.div`
    background-color: ${handleBackgroundColor};
    margin: 2rem auto;
    width: 50vw;
    border-radius: 10px;
    .dropzone_area {
        padding: 2rem;
        border-radius: 10px;
        border: 4px solid ${colors.mainBlack};
        &:hover {
            opacity: 0.6;
            transition: 50ms;
        }
    }
    .dropzone_controls {
        background-color: ${colors.mainBlack};
        text-align: center;
        text-decoration: none;
    }
`;

DropzoneStyle.defaultProps = {
    backColor: colors.mainDarkGray,
};

export default DropzoneStyle;
