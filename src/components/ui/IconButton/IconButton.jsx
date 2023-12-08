import { Button } from './IconButton.styled';

const IconButton = ({ Icon, size = 's', variant = 'primary' }) => {
  return (
    <Button size={size} variant={variant}>
      <Icon />
    </Button>
  );
};

export default IconButton;
