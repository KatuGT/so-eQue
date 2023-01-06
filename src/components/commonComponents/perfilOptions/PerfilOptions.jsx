import { NavLink, Outlet } from 'react-router-dom';
import { Option, WrapperOptions } from './perfilOptions.styled';

const PerfilOptions = () => {
  return (
    <>
      <WrapperOptions>
        <Option width='49.8%' >
          <NavLink className="navItem" to="/user-profile/">
            Mi perfil
          </NavLink>
        </Option>
        <Option width='49.8%' >
          <NavLink className="navItem" to="/user-profile/my-dreams">
            Mis sueños
          </NavLink>
        </Option>
        <Option width='100%' >
          <NavLink className="navItem" to="/user-profile/dreams-i-like">Sueños que me gustan</NavLink>
        </Option>
      </WrapperOptions>
      <Outlet />
    </>
  );
};

export default PerfilOptions;
