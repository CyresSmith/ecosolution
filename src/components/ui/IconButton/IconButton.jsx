import { Button } from './IconButton.styled';

const IconButton = ({
  Icon,
  size = 's',
  variant = 'primary',
  flip = false,
  onClick,
  disabled,
}) => {
  return (
    <Button
      onClick={onClick}
      size={size}
      variant={variant}
      flip={flip}
      disabled={disabled}
    >
      <Icon />
    </Button>
  );
};

export default IconButton;
