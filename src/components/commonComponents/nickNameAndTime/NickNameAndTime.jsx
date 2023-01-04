import { BiTimeFive } from 'react-icons/bi';
import {
  Nickname,
  NicknameAndTime,
  ProfilePic,
  Time,
  UserProfilePic,
  UserWrapper,
} from './nicknameAndTime.stylied';

const NickNameAndTime = ({ image, nickName, time }) => {
  return (
    <UserWrapper>
    <UserProfilePic>
      <ProfilePic src={image} />
    </UserProfilePic>
    <NicknameAndTime>
      <Nickname href="/">{nickName}</Nickname>
      <Time>
        <BiTimeFive />
        Hace {time}hs
      </Time>
    </NicknameAndTime>
  </UserWrapper>
  );
};

export default NickNameAndTime;
