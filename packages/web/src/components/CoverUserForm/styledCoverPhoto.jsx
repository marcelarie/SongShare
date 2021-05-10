import styled from 'styled-components';

const StyledCoverImg = styled.div`
    .cover {
        width: 350px;
        height: 120px;
        background-image: url(${props => props.urlImg});
        background-position: center;
        background-size: cover;
    }
`;

export default StyledCoverImg;
