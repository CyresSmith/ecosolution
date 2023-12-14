import ArrowRight from 'assets/svg/arrow_right.svg?react';
import {
  Container,
  Section,
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
  Title,
  TopBox,
} from './Cases.styled';

import kherson from 'assets/img/kherson.jpg';
import lviv from 'assets/img/lviv.jpg';
import rivne from 'assets/img/rivne.jpg';
import zaporizhia from 'assets/img/zaporizhia.jpg';
import zhytomyr from 'assets/img/zhytomyr.jpg';
import useMediaHook from 'hooks/useMediaHook';
import Slide from './Slide';

const TRANSITION_DURATION = 300;

const slidesData = [
  {
    id: 1,
    title: 'Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”',
    text: 'Wind Power for auto field irrigation',
    date: '2023-07',
    img: lviv,
  },
  {
    id: 2,
    title: 'Zhytomyr city Private Enterprise “Bosch”',
    text: 'Solar Panels for industrial use',
    date: '2023-11',
    img: zhytomyr,
  },
  {
    id: 3,
    title: 'Rivne city Private Enterprise “Biotech”',
    text: 'Thermal modules',
    date: '2023-10',
    img: rivne,
  },
  {
    id: 4,
    title: 'Kherson city Private Enterprise “HealthyFarm”',
    text: 'Wind power',
    date: '2023-9',
    img: kherson,
  },
  {
    id: 5,
    title: 'Zaporizhia city Private Enterprise “Biotech”',
    text: 'Mini nuclear stations',
    date: '2023-5',
    img: zaporizhia,
  },
];

const Cases = () => {
  const { MediaType } = useMediaHook();

  const [slideWidth, setSlideWidth] = useState(440);
  const [slide, setSlide] = useState(1);
  const [step, setStep] = useState(320);
  const [slides, setSlides] = useState([]);
  const [clonesCount, setClonesCount] = useState({
    head: 1,
    tail: 2,
  });
  const [offset, setOffset] = useState(-clonesCount.head * step);
  const [transition, setTransition] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const handleLeftClick = useCallback(() => {
    setOffset(prev => {
      const newOffset = prev + step;
      return Math.min(newOffset, 0);
    });

    setSlide(prev => {
      if (prev === 1) {
        return slidesData.length;
      }

      return prev - 1;
    });
  }, [step]);

  const handleRightClick = useCallback(() => {
    setOffset(prev => {
      const newOffset = prev - step;
      const maxOffset = -(step * (slides.length - 1));
      return Math.max(newOffset, maxOffset);
    });

    setSlide(prev => {
      if (prev === slidesData.length) {
        return 1;
      }

      return prev + 1;
    });
  }, [step, slides.length]);

  useEffect(() => {
    if (MediaType === 'mobile') {
      const handleResize = () => {
        const slideWidth = window.innerWidth - 40;
        setSlideWidth(
          slideWidth > 440 ? 440 : slideWidth < 320 ? 320 : slideWidth
        );
      };

      window.addEventListener('resize', handleResize);

      setSlide(1);
      setStep(slideWidth + 24);
      setClonesCount({ head: 1, tail: 2 });

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    } else {
      const width = MediaType === 'tablet' ? 342 : 596;
      const gap = MediaType === 'tablet' ? 24 : 48;

      setStep(width + gap);
      setClonesCount({ head: 1, tail: 2 });
    }
  }, [MediaType, slideWidth]);

  useEffect(() => {
    setSlide(1);
  }, [MediaType]);

  useEffect(() => {
    setSlides([
      ...slidesData.slice(-clonesCount.head),
      ...slidesData,
      ...slidesData.slice(0, clonesCount.tail),
    ]);

    setOffset(-clonesCount.head * step);
  }, [clonesCount.head, clonesCount.tail, step]);

  useEffect(() => {
    if (offset === 0) {
      setDisabled(true);
      setTransition(0);
      setTimeout(() => {
        setOffset(-(step * (slides.length - 1 - clonesCount.tail)));
      }, TRANSITION_DURATION);

      return;
    }

    if (offset === -(step * (slides.length - 2))) {
      setDisabled(true);
      setTransition(0);
      setTimeout(() => {
        setOffset(-(clonesCount.head * step));
      }, TRANSITION_DURATION);

      return;
    }
  }, [clonesCount, offset, slides, step]);

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
          <TopBox>
            <Title>Successful cases of our company</Title>

            {MediaType !== 'mobile' && <VerticalHr />}

            <ActionBox>
              <SlidesCount>
                {slide}
                <span>/{slidesData.length}</span>
              </SlidesCount>

              <BtnBox>
                <IconButton
                  size={MediaType !== 'desktop' ? 66 : 'xl'}
                  variant="transparent"
                  Icon={ArrowRight}
                  flip
                  onClick={handleLeftClick}
                  disabled={disabled}
                />

                <IconButton
                  size={MediaType !== 'desktop' ? 66 : 'xl'}
                  variant="transparent"
                  Icon={ArrowRight}
                  onClick={handleRightClick}
                  disabled={disabled}
                />
              </BtnBox>
            </ActionBox>
          </TopBox>

          <SlidesBox>
            <SlideList
              style={{
                transform: `translateX(${offset}px)`,
                transitionDuration: `${transition}ms`,
              }}
            >
              {slides.map((item, i) => (
                <Slide slideWidth={slideWidth} key={i} {...item} />
              ))}
            </SlideList>
          </SlidesBox>
        </Container>
      </Section>
    </Element>
  );
};

export default Cases;
