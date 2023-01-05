import React from 'react';
import { RedesContainer, RedesIcon, RedesLink } from './redes.styled';
import FacebookIcon from '../../../assets/redesLogos/facebookLogo.webp';
import InstaLogo from '../../../assets/redesLogos/instagramLogo.webp';
import TwitterLogo from '../../../assets/redesLogos/twitterLogo.webp';

const Redes = ({ enlaceFB = '/', enlaceIN = '/', inlaceTW = '/' }) => {
  return (
    <RedesContainer>
      <RedesLink href={enlaceFB}>
        <RedesIcon src={FacebookIcon} />
      </RedesLink>
      <RedesLink href={enlaceIN}>
        <RedesIcon src={InstaLogo} />
      </RedesLink>
      <RedesLink href={inlaceTW}>
        <RedesIcon src={TwitterLogo} />
      </RedesLink>
    </RedesContainer>
  );
};

export default Redes;
