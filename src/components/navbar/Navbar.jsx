import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { GoSettings } from 'react-icons/go';
import { RiEdit2Fill } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';
import { IoIosCloseCircle } from 'react-icons/io';
import {
  CheckIcon,
  CheckInput,
  CloseFilter,
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
import { Button } from '../commonComponents/CommonComponents.jsx';

const Navbar = () => {
  const schema = yup.object({
    filtros: yup.array().ensure().max('4', 'Elija 4  como máximo'),
  });

  const [showFilter, setShowFilter] = useState(false);

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = data => console.log(data);
  return (
      <WrapperHeader>
        <WrapperNavbar>
          <ItemNavbarIcon>
            <GoSettings onClick={() => setShowFilter(!showFilter)}/>
          </ItemNavbarIcon>
          <ItemNavbar>Soñé que...</ItemNavbar>
          <ItemNavbarIcon>
            <RiEdit2Fill/>
          </ItemNavbarIcon>
          <ItemNavbarIcon>
            <FaUserCircle/>
          </ItemNavbarIcon>
        </WrapperNavbar>
        <WrapperFilter show={showFilter}>
          <HeaderFilter>
              <TitleFilter>Soñé...</TitleFilter>
              <CloseFilter>
                <IoIosCloseCircle onClick={() => setShowFilter(false)}/>
              </CloseFilter>
          </HeaderFilter>
          <Divisor/>
          <WrapperFiltrList onSubmit={handleSubmit(onSubmit)}>
              <FiltrList>
                {
                  filters.dreams.map((item, index) => {
                    return <FiltrItem key={index}>
                        <WrapperFilterInput>
                        <CheckInput
                        value={item}
                        {...register('filtros')}
                        />
                          <CheckIcon/>
                          <FilterText>...{item}</FilterText>
                        </WrapperFilterInput>
                      </FiltrItem>;
                  })
                }
              </FiltrList>
              <WrapperButton>
                  <Button type='submit' onClick={() => setShowFilter(false)} text='Filtrar'/>
              </WrapperButton>
          </WrapperFiltrList>
        </WrapperFilter>
      </WrapperHeader>
  );
};

export default Navbar;
