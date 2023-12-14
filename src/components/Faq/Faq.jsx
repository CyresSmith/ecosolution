import ArrowDown from 'assets/svg/arrow_down.svg?react';
import { Container, Section } from 'components/shared/Shared.styled';
import StyledLink from 'components/ui/StyledLink';
import { useEffect, useState } from 'react';
import {
  AskQuestion,
  ContactBox,
  FaqBox,
  QuestionBox,
  Title,
} from './Faq.styled';
import Question from './Question';

const questions = [
  {
    id: 1,
    title:
      'How do wind turbines and solar panels work together in a renewable energy system?',
    text: 'Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.',
  },
  {
    id: 2,
    title:
      "What sets EcoSolution's renewable energy solutions apart from others on the market?",
    text: 'Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.',
  },
  {
    id: 3,
    title:
      'How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?',
    text: 'Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.',
  },
  {
    id: 4,
    title:
      'What measures does EcoSolution take to ensure the environmental sustainability of its products?',
    text: 'Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.',
  },
  {
    id: 5,
    title:
      'How does EcoSolution engage with local communities and support a just transition to renewable energy?',
    text: 'Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.',
  },
];

const Faq = () => {
  const [openQuestionId, setOpenQuestionId] = useState(null);

  const handleQuestionClick = id => {
    setOpenQuestionId(id);
  };

  useEffect(() => {
    if (!questions.length) return;

    setOpenQuestionId(questions[0].id);
  }, []);

  return (
    <Section>
      <Container>
        <FaqBox>
          <Title>Frequently Asked Questions</Title>

          <QuestionBox>
            {questions.map(item => (
              <Question
                key={item.id}
                onClick={() => handleQuestionClick(item.id)}
                isOpen={item.id === openQuestionId}
                {...item}
              />
            ))}
          </QuestionBox>

          <ContactBox>
            <AskQuestion>
              Didn&#39;t find the answer to your question?
            </AskQuestion>

            <StyledLink Icon={ArrowDown} href="contacts" offset={-110}>
              Contact Us
            </StyledLink>
          </ContactBox>
        </FaqBox>
      </Container>
    </Section>
  );
};

export default Faq;
