import styled from 'styled-components';
import hexToRgba from 'hex-to-rgba';
import colors from '../../styles/color-palette';

const UserProfile = styled.div`
    .user__header {
        background-image: url(${props => props.cover});
        background-position: center;
        background-size: cover;
    }
    .user__main__aside__offset {
        box-shadow: ${hexToRgba(colors.darkGray, '0.7')} 0px 10px 40px 4px,
            ${hexToRgba(colors.darkGray, '0.7')} 0px -10px 40px 4px;
    }
`;

export default UserProfile;
