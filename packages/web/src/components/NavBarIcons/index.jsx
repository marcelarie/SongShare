import Icons from './Icons';

const NavBarIcons = ({ icon }) => {
    return Icons[icon] || 'noIcon';
};

export default NavBarIcons;
