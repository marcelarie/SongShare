import styled from 'styled-components';
// import * as main from '../../color-palette';

const ImageButton = styled.button`
    all: unset;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
`;

ImageButton.defaultProps = {};

export default ImageButton;
