import styled from 'styled-components';

const StyledCoverImg = styled.div`
    margin-bottom: 14px;
    width: 350px;
    height: 120px;
    background-image: url(${props => props.urlImg});
    background-position: center;
    background-size: cover;
    .cover {
        width: 350px;
        height: 120px;
        opacity: 0%;
    }
`;

export default StyledCoverImg;
