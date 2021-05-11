import styled from 'styled-components';

const StyledCoverImg = styled.div`
    margin-bottom: 14px;
    .cover {
        width: 350px;
        height: 120px;
        background-image: url(${props => props.urlImg});
        background-position: center;
        background-size: cover;
    }
    .flex-column {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export default StyledCoverImg;
