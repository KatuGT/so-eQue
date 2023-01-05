import React from 'react';
import { BiImageAdd } from 'react-icons/bi';
import NickNameAndTime from '../../components/commonComponents/nickNameAndTime/NickNameAndTime.jsx';
import Redes from '../../components/commonComponents/redes/Redes.jsx';
import {
  DreamText,
  HeaderPost,
  WrapperImages,
  WrapperDreamPost,
  WrapperPost,
  GroupImages,
  TitleSection,
  WrapperPreview,
  Images,
  UploadImages,
  TextUploadImage,
} from './dreamPost.styled';

const DreamPost = () => {
  return (
    <WrapperDreamPost>
      <WrapperPost>
        <HeaderPost>
          <NickNameAndTime image="https://imgs.search.brave.com/-ujznuk6JG__TtAtxZHfJ00KrxUz0uncmtz9YiJyJVU/rs:fit:600:600:1/g:ce/aHR0cHM6Ly9zdDQu/ZGVwb3NpdHBob3Rv/cy5jb20vNDMyOTAw/OS8xOTk1Ni92LzQ1/MC9kZXBvc2l0cGhv/dG9zXzE5OTU2NTA3/Mi1zdG9jay1pbGx1/c3RyYXRpb24tY3Jl/YXRpdmUtdmVjdG9y/LWlsbHVzdHJhdGlv/bi1kZWZhdWx0LWF2/YXRhci5qcGc" nickName='LucasLeps' time='4'/>
          <Redes/>
        </HeaderPost>
        <DreamText>
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Impedit ipsum aperiam labore vero adipisci?
          Aliquam dolore laborum maxime accusamus mollitia nobis
          assumenda, nesciunt amet, illum nostrum distinctio
          corrupti ex. Repellendus. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Impedit ipsum aperiam labore vero adipisci?
          Aliquam dolore laborum maxime accusamus mollitia nobis
          assumenda, nesciunt amet, illum nostrum distinctio corrupti ex. Repellendus.
        </DreamText>
      </WrapperPost>
      <WrapperImages>
        <GroupImages>
          <TitleSection>Ilustraciones subidas por el autor:</TitleSection>
          <WrapperPreview>
            <Images src='https://3.bp.blogspot.com/-sOSk1GwrHSg/Uc3MjJUcF_I/AAAAAAAAAMQ/f9XgHSCbSgE/s1024/unicornio.jpg'/>
            <Images src='https://3.bp.blogspot.com/-sOSk1GwrHSg/Uc3MjJUcF_I/AAAAAAAAAMQ/f9XgHSCbSgE/s1024/unicornio.jpg'/>
          </WrapperPreview>
        </GroupImages>
        <GroupImages>
          <TitleSection>Ilustraciones subidas de otros usuarios:</TitleSection>
          <WrapperPreview>
            <UploadImages>
              <BiImageAdd className='icono'/>
              <TextUploadImage>Sube tu imagen</TextUploadImage>
            </UploadImages>
            <Images src='https://3.bp.blogspot.com/-sOSk1GwrHSg/Uc3MjJUcF_I/AAAAAAAAAMQ/f9XgHSCbSgE/s1024/unicornio.jpg'/>
          </WrapperPreview>
        </GroupImages>
      </WrapperImages>
    </WrapperDreamPost>
  );
};

export default DreamPost;
