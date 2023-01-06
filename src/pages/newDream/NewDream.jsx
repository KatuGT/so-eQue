import React from 'react';
import { Button } from '../../components/commonComponents/button/button.jsx';
import UploadImg from '../../components/commonComponents/buttonUploadImg/UploadImg.jsx';
import { filters } from '../../helpers/filters.jsx';
import {
  Check,
  CheckText,
  FilterInput,
  FilterLabel,
  Filters,
  FilterText,
  FormNewDream,
  LabelCheck,
  MinimunCharacters,
  NewCheckIcon,
  TextArea,
  TitleFilter,
  Underline,
  WrapperFilters,
  WrapperImages,
  WrapperNewDream,
} from './newDream.styled';

const NewDream = () => {
  return (
    <WrapperNewDream>
      <FormNewDream>
        <div>
          <LabelCheck>
            <Check />
            <NewCheckIcon></NewCheckIcon>
            <CheckText>Publicar de forma anónima</CheckText>
          </LabelCheck>
          <TextArea />
          <MinimunCharacters>- Minimo 120 caracteres.</MinimunCharacters>
        </div>
        <WrapperFilters>
          <TitleFilter>Elegí los filtros que correspondan</TitleFilter>
          <Underline />
          <p>Soñe...</p>
          <Filters>
            {filters?.dreams?.map((filter, index) => {
              return (
                <FilterLabel key={index}>
                  <FilterInput />
                  <FilterText>{filter}</FilterText>
                </FilterLabel>
              );
            })}
          </Filters>
        </WrapperFilters>
        <WrapperImages>
          <TitleFilter>Subí hasta 5 ilustraciones de tu sueño</TitleFilter>
          <UploadImg />
        </WrapperImages>
        <LabelCheck>
          <Check />
          <NewCheckIcon></NewCheckIcon>
          <CheckText>No permitir que otros suban sus imagenes</CheckText>
        </LabelCheck>
        <Button text="Enviar" />
      </FormNewDream>
    </WrapperNewDream>
  );
};

export default NewDream;
