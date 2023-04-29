import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, isValid, onClick }: IButtonProps) => {
  return <ButtonContainer onClick={onClick} disabled={!isValid}>{title}</ButtonContainer>;
};

export default Button;
