import Plus from 'assets/svg/add.svg?react';
import Minus from 'assets/svg/minus.svg?react';
import { Box, Text, TextBox, Title } from './Question.styled';

const Question = ({ title, text, isOpen = false, onClick }) => {
  return (
    <Box isOpen={isOpen} onClick={onClick}>
      {isOpen ? <Minus /> : <Plus />}
      <TextBox isOpen={isOpen}>
        <Title>{title}</Title>
        <Text isOpen={isOpen}>{text}</Text>
      </TextBox>
    </Box>
  );
};

export default Question;
