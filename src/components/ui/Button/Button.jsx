import { StyledButton } from './Button.styled';

const Button = ({
  children,
  iconSize = 's',
  variant = 'primary',
  Icon,
  type = 'button',
  disabled = false,
}) => {
  return (
    <StyledButton
      iconSize={iconSize}
      variant={variant}
      type={type}
      disabled={disabled}
    >
      {children} <span>{Icon && <Icon />}</span>
    </StyledButton>
  );
};

export default Button;
