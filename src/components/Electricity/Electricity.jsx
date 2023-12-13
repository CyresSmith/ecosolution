import {
  Container,
  Section,
  VerticalHr,
} from 'components/shared/Shared.styled';
import useMediaHook from 'hooks/useMediaHook';
import { useEffect, useState } from 'react';
import { Counter, CounterBox, Title } from './Electricity.styled';

const START_DATE = 1702063049224;

const Electricity = () => {
  const { MediaType } = useMediaHook();
  const [kwh, setKwh] = useState(1134147814);

  useEffect(() => {
    const kwh = Math.floor((Date.now() - START_DATE) / 1000);
    setKwh(prev => prev + kwh);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setKwh(kwh + 1), 1000);
    return () => clearInterval(interval);
  }, [kwh]);

  return (
    <Section>
      <Container>
        <Title>Electricity we produced for all time</Title>

        <VerticalHr
          height={MediaType === 'mobile' ? '48' : '87'}
          margin="0 auto"
        />

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
