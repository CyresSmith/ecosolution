import kherson from 'assets/img/kherson.jpg';
import lviv from 'assets/img/lviv.jpg';
import rivne from 'assets/img/rivne.jpg';
import zaporizhia from 'assets/img/zaporizhia.jpg';
import zhytomyr from 'assets/img/zhytomyr.jpg';

import ArrowRight from 'assets/svg/arrow_right.svg?react';
import {
  Container,
  Section,
  Title,
  TwoHalvesBox,
  VerticalHr,
} from 'components/shared/Shared.styled';
import IconButton from 'components/ui/IconButton';
import { useEffect, useState } from 'react';
import { ActionBox, BtnBox, SlidesBox, SlidesCount } from './Cases.styled';
import Slide from './Slide';

const slides = [
  {
    id: 1,
    place: 'Lviv Region, Radekhiv town',
    name: 'Private Enterprise “ZAKHIDNYI BUH”',
    text: 'Wind Power for auto field irrigation',
    date: '2023-07',
    img: lviv,
  },
  {
    id: 2,
    place: 'Zhytomyr city',
    name: 'Private Enterprise “Bosch”',
    text: 'Solar Panels for industrial use',
    date: '2023-11',
    img: zhytomyr,
  },
  {
    id: 3,
    place: 'Rivne city',
    name: 'Private Enterprise “Biotech”',
    text: 'Thermal modules',
    date: '2023-10',
    img: rivne,
  },
  {
    id: 4,
    place: 'Kherson city',
    name: 'Private Enterprise “HealthyFarm”',
    text: 'Wind power',
    date: '2023-9',
    img: kherson,
  },
  {
    id: 5,
    place: 'Zaporizhia city',
    name: 'Private Enterprise “Biotech”',
    text: 'Mini nuclear stations',
    date: '2023-5',
    img: zaporizhia,
  },
];

const Cases = () => {
  const [slide, setSlide] = useState(1);
  const [slidesCount, setSlidesCount] = useState(0);

  const slideIncrement = () => {
    setSlide(prev => {
      if (prev === slidesCount) {
        return 1;
      }

      return prev + 1;
    });
  };

  const slideDecrement = () => {
    setSlide(prev => {
      if (prev === 1) {
        return slidesCount;
      }

      return prev - 1;
    });
  };

  useEffect(() => {
    if (!slides.length) {
      return;
    }

    setSlidesCount(slides.length);
  }, []);

  return (
    <Section>
      <Container>
        <TwoHalvesBox>
          <Title width={398}>Successful cases of our company</Title>
          <VerticalHr />

          <ActionBox>
            <SlidesCount>
              {slide}
              <span>/{slidesCount}</span>
            </SlidesCount>

            <BtnBox>
              <IconButton
                size="xl"
                variant="transparent"
                Icon={ArrowRight}
                flip
                onClick={slideDecrement}
              />
              <IconButton
                size="xl"
                variant="transparent"
                Icon={ArrowRight}
                onClick={slideIncrement}
              />
            </BtnBox>
          </ActionBox>
        </TwoHalvesBox>

        <SlidesBox>
          <Slide key={slide.id} {...slides[slide - 1]} />
          <Slide
            key={slide.id}
            {...slides[slide === slidesCount ? 0 : slide]}
          />
        </SlidesBox>
      </Container>
    </Section>
  );
};

export default Cases;
