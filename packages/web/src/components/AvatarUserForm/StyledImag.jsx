import styled from 'styled-components';

const StyledImg = styled.div`
    margin-bottom: 14px;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    background-image: url(${props => props.urlImg});
    background-position: center;
    background-size: cover;
    border-radius: 50%;
    .avatar {
        width: 120px;
        height: 120px;
        opacity: 0%;
    }
`;

export default StyledImg;
