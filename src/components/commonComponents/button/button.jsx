import { ButtonComp } from './button.styled';

export const Button = ({ text, onClick }) => {
  return (
    <ButtonComp onClick={onClick}>{text}</ButtonComp>
  );
};
