import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { GoSettings } from 'react-icons/go';
import { RiEdit2Fill } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';
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
  ItemNavbar,
  ItemNavbarIcon,
  TitleFilter,
  WrapperButton,
  WrapperFilter,
  WrapperFilterInput,
  WrapperFiltrList,
  WrapperHeader,
  WrapperNavbar,
} from './navbar.styled';
import { filters } from '../../helpers/filters.jsx';
import { Button } from '../commonComponents/button/button.jsx';

const Navbar = () => {
  const schema = yup.object({
    filtros: yup.array().ensure().max('4', 'Elija 4  como máximo'),
  });

  const [shrinkFilter, setShrinkFilter] = useState(false);
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <WrapperHeader>
        <WrapperNavbar>
          <ItemNavbarIcon className="filterIcon">
            <GoSettings onClick={() => setShrinkFilter(!shrinkFilter)} />
          </ItemNavbarIcon>
          <ItemNavbar>
            <Link to='/'>
            Soñé que...
            </Link>
            </ItemNavbar>
          <ItemNavbarIcon>
            <RiEdit2Fill />
          </ItemNavbarIcon>
          <ItemNavbarIcon>
            <FaUserCircle />
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
