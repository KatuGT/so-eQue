import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { FaCommentDots } from 'react-icons/fa';
import { BsSuitHeartFill } from 'react-icons/bs';
import { MdOutlineOpenInNew } from 'react-icons/md';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import { IoMdImage } from 'react-icons/io';

import {
  CardFooter,
  CardHeader,
  CardText,
  CheckboxVerMas,
  FooterComentsAndImage,
  FooterIcon,
  FooterIconCount,
  HeartLabel,
  IconsContainer,
  Like,
  LikeAndOpen,
  LikeInput,
  Open,
  Text,
  TextContainer,
  VerMarText,
  VerMas,
  VerMasIcon,
  WrapperCard,
} from './card.styled';
import NickNameAndTime from '../commonComponents/nickNameAndTime/NickNameAndTime.jsx';
import Redes from '../commonComponents/redes/Redes.jsx';

const Card = () => {
  const [collapseText, setCollapseText] = useState(false);

  const suenioCorto = 'Depending on the size of a container element, when applying fit-content  to a box element within the container to a box element within the container to a box element e element, when applying fit-content  to a box element within the container to a box element within the container to a box element e element, when applying fit-content  to a box element within the container to a box element within the container to a box element e element, when applying fit-content  to a box element within the container to a box element within the container to a box element e';

  const refSuenio = useRef(null);
  const dreamLenght = refSuenio?.current?.offsetHeight;

  return (
    <WrapperCard dreamLenght={dreamLenght}>
      <CardHeader>
        <NickNameAndTime
          image="https://imgs.search.brave.com/-ujznuk6JG__TtAtxZHfJ00KrxUz0uncmtz9YiJyJVU/rs:fit:600:600:1/g:ce/aHR0cHM6Ly9zdDQu/ZGVwb3NpdHBob3Rv/cy5jb20vNDMyOTAw/OS8xOTk1Ni92LzQ1/MC9kZXBvc2l0cGhv/dG9zXzE5OTU2NTA3/Mi1zdG9jay1pbGx1/c3RyYXRpb24tY3Jl/YXRpdmUtdmVjdG9y/LWlsbHVzdHJhdGlv/bi1kZWZhdWx0LWF2/YXRhci5qcGc"
          nickName="LucasLeps"
          time="4"
        />
        <LikeAndOpen>
          <Like>
            <LikeInput />
            <HeartLabel>
              <BsSuitHeartFill />
            </HeartLabel>
          </Like>
          <Link to="dream">
            <Open>
              <MdOutlineOpenInNew />
            </Open>
          </Link>
        </LikeAndOpen>
      </CardHeader>
      <CardText>
        <TextContainer>
          <Text ref={refSuenio}>{suenioCorto}</Text>
        </TextContainer>
      </CardText>
      <CardFooter>
        <FooterComentsAndImage>
          <IconsContainer>
            <FooterIcon hasComment={true}>
              <FaCommentDots />
            </FooterIcon>
            <FooterIconCount hasComment={true}>3</FooterIconCount>
          </IconsContainer>
          <IconsContainer>
            <FooterIcon hasComment={false}>
              <IoMdImage />
            </FooterIcon>
            <FooterIconCount hasComment={false}>2</FooterIconCount>
          </IconsContainer>
        </FooterComentsAndImage>
        {suenioCorto.length > 240 && (
          <VerMas>
            <CheckboxVerMas onClick={() => setCollapseText(!collapseText)} />
            <VerMarText> {!collapseText ? 'Ver más' : 'Ver menos'}</VerMarText>
            <VerMasIcon>
              {!collapseText ? <TiArrowSortedDown /> : <TiArrowSortedUp />}
            </VerMasIcon>
          </VerMas>
        )}
        <Redes enlaceFB="/" enlaceIN="/" enlaceTW="/" />
      </CardFooter>
    </WrapperCard>
  );
};

export default Card;
