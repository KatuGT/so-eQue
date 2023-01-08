import React from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { FiEdit2 } from 'react-icons/fi';
import { MdOutlineOpenInNew } from 'react-icons/md';
import {
  ActionButton,
  ActionButtonsGroup,
  ButtonText,
  DreamText,
  FooterWrapper,
  Image,
  PreviewImageWrapper,
  TextDate,
  WrapperDate,
  WrapperSecondaryCard,
} from './secondaryCard.styled';

const SecondaryCard = () => {
  return (
    <WrapperSecondaryCard>
      <WrapperDate>
        <BiTimeFive />
        <TextDate>12/12/2023</TextDate>
      </WrapperDate>
      <DreamText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        consequatur, molestias vero inventore illum ab minus doloremque natus
        sunt cumque. Laborum laboriosam asperiores voluptatem quasi veritatis
        dolore numquam distinctio nulla.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
        consequatur, molestias vero inventore illum ab minus doloremque natus
        sunt cumque. Laborum laboriosam asperiores voluptatem quasi veritatis
        dolore numquam distinctio nulla.
      </DreamText>
      <FooterWrapper>
        <PreviewImageWrapper>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/800px-FullMoon2010.jpg" />
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/800px-FullMoon2010.jpg" />
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/800px-FullMoon2010.jpg" />
        </PreviewImageWrapper>
        <ActionButtonsGroup>
          <ActionButton>
            <ButtonText>Editar</ButtonText>
            <FiEdit2 className='icon'/>
          </ActionButton>
          <ActionButton>
            <ButtonText>Ver</ButtonText>
            <MdOutlineOpenInNew className='icon'/>
          </ActionButton>
        </ActionButtonsGroup>
      </FooterWrapper>
    </WrapperSecondaryCard>
  );
};

export default SecondaryCard;
