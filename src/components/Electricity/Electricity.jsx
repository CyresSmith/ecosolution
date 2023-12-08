import {
  Container,
  Section,
  Title,
  VerticalHr,
} from 'components/shared/Shared.styled';
import { useEffect, useState } from 'react';
import { Counter, CounterBox } from './Electricity.styled';

const START_DATE = 1702063049224;

const Electricity = () => {
  const [kwh, setKwh] = useState(
    1134147814 + Math.floor(((Date.now() - START_DATE) / 1000) % 60)
  );

  useEffect(() => {
    const interval = setInterval(() => setKwh(kwh + 1), 1000);

    return () => clearInterval(interval);
  }, [kwh]);

  return (
    <Section>
      <Container>
        <Title width={491} align="center" margin="auto">
          Electricity we produced for all time
        </Title>

        <VerticalHr height={87} margin="16px auto" />

        <CounterBox>
          <Counter>
            {kwh.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
          </Counter>
          <span>kwh</span>
        </CounterBox>
      </Container>
    </Section>
  );
};

export default Electricity;
