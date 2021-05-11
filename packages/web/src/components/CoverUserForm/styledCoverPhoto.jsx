import styled from 'styled-components';

const StyledCoverImg = styled.div`
    .cover {
        width: 350px;
        height: 120px;
        background-image: url(${props => props.urlImg});
        background-position: center;
        background-size: cover;
        margin-bottom: 14px;
    }
    .flex-column {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export default StyledCoverImg;
