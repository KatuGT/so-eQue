import React from 'react';
import { BiImageAdd } from 'react-icons/bi';
import { TextUploadImage, UploadImages } from './uploadImg.styled';

const UploadImg = () => {
  return (
    <UploadImages>
      <BiImageAdd className="icono" />
      <TextUploadImage>Sube tu imagen</TextUploadImage>
    </UploadImages>
  );
};

export default UploadImg;
