import styled from 'styled-components';

const StyledImg = styled.div`
    margin-bottom: 14px;
    width: 150px;
    height: 150px;
    background-image: url(${props => props.urlImg});
    background-position: center;
    background-size: cover;
    .songpic {
        width: 150px;
        height: 150px;
        opacity: 0%;
    }
`;

export default StyledImg;
