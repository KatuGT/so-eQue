import { GoSettings } from 'react-icons/go';
import { RiEdit2Fill } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';
import {
  ItemNavbar,
  ItemNavbarIcon,
  WrapperHeader,
  WrapperNavbar,
} from './navbar.styled';

const Navbar = () => {
  return (
      <WrapperHeader>
        <WrapperNavbar>
          <ItemNavbarIcon>
            <GoSettings/>
          </ItemNavbarIcon>
          <ItemNavbar>Soñé que...</ItemNavbar>
          <ItemNavbarIcon>
            <RiEdit2Fill/>
          </ItemNavbarIcon>
          <ItemNavbarIcon>
            <FaUserCircle/>
          </ItemNavbarIcon>
        </WrapperNavbar>
      </WrapperHeader>
  );
};

export default Navbar;
