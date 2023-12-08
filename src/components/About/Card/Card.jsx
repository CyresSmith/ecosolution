import { Hr } from 'components/shared/Shared.styled';
import { Item, Text, Title, TitleBox } from './Card.styled';

const Card = ({ Icon, title, text }) => {
  return (
    <Item>
      <TitleBox>
        <Icon />
        <Title>{title}</Title>
      </TitleBox>

      <Hr />

      <Text>{text}</Text>
    </Item>
  );
};

export default Card;
