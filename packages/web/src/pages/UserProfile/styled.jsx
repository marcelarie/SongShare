import styled from 'styled-components';
import colors from '../../styles/color-palette';

const UserProfile = styled.div`
    .user__header {
        background-image: url(${props => props.cover});
        background-position: center;
        background-size: cover;
    }
    .user__main__aside__offset {
        box-shadow: ${colors.darkGrayOpacity7} 0px 10px 40px 4px,
            ${colors.darkGrayOpacity7} 0px -10px 40px 4px;
    }
`;

export default UserProfile;
