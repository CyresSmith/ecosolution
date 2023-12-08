import { Button } from './IconButton.styled';

const IconButton = ({
  Icon,
  size = 's',
  variant = 'primary',
  flip = false,
  onClick,
}) => {
  return (
    <Button onClick={onClick} size={size} variant={variant} flip={flip}>
      <Icon />
    </Button>
  );
};

export default IconButton;
