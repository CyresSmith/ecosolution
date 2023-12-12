import ArrowRight from 'assets/svg/arrow_right.svg?react';
import {
  Container,
  Section,
  Title,
  TwoHalvesBox,
  VerticalHr,
} from 'components/shared/Shared.styled';
import IconButton from 'components/ui/IconButton';
import { useCallback, useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import {
  ActionBox,
  BtnBox,
  SlideList,
  SlidesBox,
  SlidesCount,
} from './Cases.styled';

import kherson from 'assets/img/kherson.jpg';
import lviv from 'assets/img/lviv.jpg';
import rivne from 'assets/img/rivne.jpg';
import zaporizhia from 'assets/img/zaporizhia.jpg';
import zhytomyr from 'assets/img/zhytomyr.jpg';
import Slide from './Slide';

const STEP = 596 + 48;
const TRANSITION_DURATION = 300;

const slidesData = [
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

const Cases = ({ children, slidesCount }) => {
  const [slide, setSlide] = useState(1);
  const [slides, setSlides] = useState([]);
  const [clonesCount, setClonesCount] = useState({
    head: 1,
    tail: 2,
  });
  const [offset, setOffset] = useState(-clonesCount.head * STEP);
  const [transition, setTransition] = useState(TRANSITION_DURATION);
  const [disabled, setDisabled] = useState(false);

  const handleLeftClick = useCallback(() => {
    setOffset(prev => {
      const newOffset = prev + STEP;
      return Math.min(newOffset, 0);
    });

    setSlide(prev => {
      if (prev === 1) {
        return slidesData.length;
      }

      return prev - 1;
    });
  }, [STEP, slidesData.length]);

  const handleRightClick = useCallback(() => {
    setOffset(prev => {
      const newOffset = prev - STEP;
      const maxOffset = -(STEP * (slides.length - 1));
      return Math.max(newOffset, maxOffset);
    });

    setSlide(prev => {
      if (prev === slidesData.length) {
        return 1;
      }

      return prev + 1;
    });
  }, [STEP, slides.length, slidesData.length]);

  useEffect(() => {
    setSlides([
      slidesData[slidesData.length - 1],
      ...slidesData,
      slidesData[0],
      slidesData[1],
    ]);

    setClonesCount({ head: 1, tail: 2 });
    setOffset(-clonesCount.head * STEP);
  }, [clonesCount.head]);

  useEffect(() => {
    if (offset === 0) {
      setDisabled(true);
      setTransition(0);
      setTimeout(() => {
        setOffset(-(STEP * (slides.length - 1 - clonesCount.tail)));
      }, TRANSITION_DURATION);

      return;
    }

    if (offset === -(STEP * (slides.length - 2))) {
      setDisabled(true);
      setTransition(0);
      setTimeout(() => {
        setOffset(-(clonesCount.head * STEP));
      }, TRANSITION_DURATION);

      return;
    }
  }, [clonesCount, offset, slides]);

  useEffect(() => {
    if (transition === 0) {
      setTimeout(() => {
        setTransition(TRANSITION_DURATION);
        setDisabled(false);
      }, TRANSITION_DURATION);
    }
  }, [transition]);

  return (
    <Element name="cases">
      <Section>
        <Container>
          <TwoHalvesBox>
            <Title width={398}>Successful cases of our company</Title>
            <VerticalHr />

            <ActionBox>
              <SlidesCount>
                {slide}
                <span>/{slidesData.length}</span>
              </SlidesCount>

              <BtnBox>
                <IconButton
                  size="xl"
                  variant="transparent"
                  Icon={ArrowRight}
                  flip
                  onClick={handleLeftClick}
                  disabled={disabled}
                />

                <IconButton
                  size="xl"
                  variant="transparent"
                  Icon={ArrowRight}
                  onClick={handleRightClick}
                  disabled={disabled}
                />
              </BtnBox>
            </ActionBox>
          </TwoHalvesBox>

          <SlidesBox>
            <SlideList
              style={{
                transform: `translateX(${offset}px)`,
                transitionDuration: `${transition}ms`,
              }}
            >
              {slides.map((item, i) => (
                <Slide key={i} {...item} />
              ))}
            </SlideList>
          </SlidesBox>
        </Container>
      </Section>
    </Element>
  );
};

export default Cases;
