import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { GoSettings } from 'react-icons/go';
import { RiEdit2Fill } from 'react-icons/ri';
import {
  CheckIcon,
  CheckInput,
  CloseCheckbox,
  CloseFilter,
  CloseIcon,
  Divisor,
  FilterText,
  FiltrItem,
  FiltrList,
  HeaderFilter,
  IconUser,
  ItemNavbar,
  ItemNavbarIcon,
  TitleFilter,
  WrapperButton,
  WrapperFilter,
  WrapperFilterInput,
  WrapperFiltrList,
  WrapperHeader,
  WrapperNavbar,
  WrapperUserOptions,
} from './navbar.styled';
import { filters } from '../../helpers/filters.jsx';
import { Button } from '../commonComponents/button/button.jsx';

const Navbar = () => {
  const schema = yup.object({
    filtros: yup.array().ensure().max('4', 'Elija 4  como máximo'),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  const [shrinkFilter, setShrinkFilter] = useState(false);
  const [showUserOption, setShowUserOption] = useState(false);

  const userIcon = useRef();

  useEffect(() => {
    const closeMenu = (e) => {
      if (e.composedPath()[0] !== userIcon.current) {
        setShowUserOption(false);
      }
    };
    document.body.addEventListener('click', closeMenu);
    return () => document.body.removeEventListener('click', closeMenu);
  }, []);

  return (
    <>
      <WrapperHeader>
        <WrapperNavbar>
          <ItemNavbarIcon className="filterIcon">
            <GoSettings onClick={() => setShrinkFilter(!shrinkFilter)} />
          </ItemNavbarIcon>
          <ItemNavbar>
            <Link to="/">Soñé que...</Link>
          </ItemNavbar>
          <ItemNavbarIcon>
            <Link to="post-dream">
              <RiEdit2Fill />
            </Link>
          </ItemNavbarIcon>
          <ItemNavbarIcon
            onClick={() => setShowUserOption(!showUserOption)}
          >
            <IconUser ref={userIcon}/>
            {showUserOption && (
              <WrapperUserOptions>
                <p>Cerrar sesión</p>
                <NavLink to="user-profile/">Mi cuenta</NavLink>
              </WrapperUserOptions>
            )}
          </ItemNavbarIcon>
        </WrapperNavbar>
      </WrapperHeader>
      <WrapperFilter shrink={shrinkFilter}>
        <HeaderFilter>
          <TitleFilter>Soñé...</TitleFilter>
          <CloseFilter>
            <CloseCheckbox />
            <CloseIcon onClick={() => setShrinkFilter(!shrinkFilter)} />
          </CloseFilter>
        </HeaderFilter>
        <Divisor />
        <WrapperFiltrList onSubmit={handleSubmit(onSubmit)}>
          <FiltrList shrink={shrinkFilter}>
            {filters.dreams.map((item, index) => {
              return (
                <FiltrItem key={index}>
                  <WrapperFilterInput>
                    <CheckInput value={item} {...register('filtros')} />
                    <CheckIcon />
                    <FilterText>...{item}</FilterText>
                  </WrapperFilterInput>
                </FiltrItem>
              );
            })}
          </FiltrList>
          <WrapperButton shrink={shrinkFilter}>
            <Button
              type="submit"
              onClick={() => setShrinkFilter(false)}
              text="Filtrar"
            />
          </WrapperButton>
        </WrapperFiltrList>
      </WrapperFilter>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
