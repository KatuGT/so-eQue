import classNames from 'classnames';
import { useRef, useState } from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { FcLikePlaceholder } from 'react-icons/fc';
import { MdOutlineOpenInNew } from 'react-icons/md';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import {
  CardHeader,
  CardText,
  CheckboxVerMas,
  Like,
  LikeAndOpen,
  Nickname,
  NicknameAndTime,
  Open,
  ProfilePic,
  Text,
  TextContainer,
  Time,
  UserProfilePic,
  UserWrapper,
  VerMarText,
  VerMas,
  VerMasIcon,
  WrapperCard,
} from './card.styled';

const Card = () => {
  const [collapseText, setCollapseText] = useState(false);

  const suenioCorto = 'Depending on the size of a container element, when applying fit-content  to a box element within the container to a box element within the container to a box element within the container to a box element within the container r to a box element within the box. Depending on the size of a container element, when applying fit-content  to a box element within the container to a box element within the container to a box element within the container to a box element within the container r to a box element within the boxDepending on the size of a container element, when applying fit-content  to a box element within the container to a box element within the container to a box element within the container to a box element within the container r to a box element within the box container r to a box element within the box. Depending on the size of a container element, when applying fit-content  to a box element within the container to a box element within the container to a box element within the container to a box element within the container r to a box element within the boxDepending on the size of a container element, when applying fit-content  to a box element within the container to a box element within the container to a box element within the container to a box element within the container r to a box element within the boxcontainer r to a box element within the box. Depending on the size of a container element, when applying fit-content  to a box element within the container to a box element within the container to a box element within the container to a box element within the container r to a box element within the boxDepending on the size of a container element, when applying fit-content  to a box element within the container to a box element within the container to a box element within the container to a box element within the container r to a box element within the box';

  const isLong = classNames(null, { longText: collapseText });
  const refSuenio = useRef(null);
  const dreamLenght = refSuenio?.current?.offsetHeight;

  return (
    <WrapperCard>
      <CardHeader>
        <UserWrapper>
          <UserProfilePic>
            <ProfilePic src="https://imgs.search.brave.com/-ujznuk6JG__TtAtxZHfJ00KrxUz0uncmtz9YiJyJVU/rs:fit:600:600:1/g:ce/aHR0cHM6Ly9zdDQu/ZGVwb3NpdHBob3Rv/cy5jb20vNDMyOTAw/OS8xOTk1Ni92LzQ1/MC9kZXBvc2l0cGhv/dG9zXzE5OTU2NTA3/Mi1zdG9jay1pbGx1/c3RyYXRpb24tY3Jl/YXRpdmUtdmVjdG9y/LWlsbHVzdHJhdGlv/bi1kZWZhdWx0LWF2/YXRhci5qcGc" />
          </UserProfilePic>
          <NicknameAndTime>
            <Nickname href="/">LepsLucas</Nickname>
            <Time>
              <BiTimeFive />
              Hace 4hs
            </Time>
          </NicknameAndTime>
        </UserWrapper>
        <LikeAndOpen>
          <Like>
            <FcLikePlaceholder />
          </Like>
          <Open href="/">
            <MdOutlineOpenInNew />
          </Open>
        </LikeAndOpen>
      </CardHeader>
      <CardText dreamLenght={dreamLenght}>
        <TextContainer className={isLong}>
          <Text ref={refSuenio}>{suenioCorto}</Text>
        </TextContainer>
        {suenioCorto.length > 240 && (
          <VerMas>
            <CheckboxVerMas onClick={() => setCollapseText(!collapseText)} />
            <VerMarText> {!collapseText ? 'Ver más' : 'Ver menos'}</VerMarText>
            <VerMasIcon>
              {!collapseText ? <TiArrowSortedDown /> : <TiArrowSortedUp />}
            </VerMasIcon>
          </VerMas>
        )}
      </CardText>
    </WrapperCard>
  );
};

export default Card;
