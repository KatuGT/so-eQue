import React from 'react';
import { Button } from '../../components/commonComponents/button/button.jsx';
import {
  CenteredButton,
  DataUser,
  GroupButtons,
  ImgAndData,
  ImgUser,
  OtherData,
  UserName,
  WrapperPerfil,
} from './userProfile.styled';

const UserProfile = () => {
  return (
    <WrapperPerfil>
      <ImgAndData>
        <ImgUser src="https://imgs.search.brave.com/-ujznuk6JG__TtAtxZHfJ00KrxUz0uncmtz9YiJyJVU/rs:fit:600:600:1/g:ce/aHR0cHM6Ly9zdDQu/ZGVwb3NpdHBob3Rv/cy5jb20vNDMyOTAw/OS8xOTk1Ni92LzQ1/MC9kZXBvc2l0cGhv/dG9zXzE5OTU2NTA3/Mi1zdG9jay1pbGx1/c3RyYXRpb24tY3Jl/YXRpdmUtdmVjdG9y/LWlsbHVzdHJhdGlv/bi1kZWZhdWx0LWF2/YXRhci5qcGc" />
        <DataUser>
          <UserName>Katu</UserName>
          <OtherData>93katu@gmail.com</OtherData>
          <OtherData>Argentina</OtherData>
          <OtherData>Mujer</OtherData>
        </DataUser>
      </ImgAndData>
      <GroupButtons>
        <CenteredButton>Editar</CenteredButton>
        <CenteredButton>Deshabilitar</CenteredButton>
        <CenteredButton danger={true}>Eliminar permanentemente</CenteredButton>
      </GroupButtons>
    </WrapperPerfil>
  );
};

export default UserProfile;
