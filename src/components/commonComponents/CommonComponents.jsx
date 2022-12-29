import { ButtonComp } from './commonComp.styled';

export const Button = ({ text, onClick }) => {
  return (
    <ButtonComp onClick={onClick}>{text}</ButtonComp>
  );
};
