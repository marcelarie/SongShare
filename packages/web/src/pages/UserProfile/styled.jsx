import styled from 'styled-components';

const UserProfile = styled.div`
    .user__header {
        background-image: url(${props => props.cover});
        background-position: center;
        background-size: cover;
    }
    .user__main__aside__offset {
        box-shadow: ${({ theme }) => theme.mainDarkGrayTransparent} 0px 10px
                40px 4px,
            ${({ theme }) => theme.mainDarkGrayTransparent} 0px -10px 40px 4px;
    }
`;

export default UserProfile;
