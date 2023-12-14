import ArrowRight from 'assets/svg/arrow_right.svg?react';
import ImageBox from 'components/shared/ImageBox';
import useMediaHook from 'hooks/useMediaHook';
import { useState } from 'react';
import {
  Caption,
  DotWithArrow,
  SlideBox,
  SlideFigure,
  Text,
  Title,
  TitleBox,
} from './Slide.styled';

const Slide = ({ slideWidth, place, title, text, date, img, href = '/' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { MediaType } = useMediaHook();

  return (
    <SlideBox
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      slideWidth={slideWidth}
    >
      <a href={href}>
        <SlideFigure>
          <ImageBox
            src={img}
            height={MediaType !== 'desktop' ? '168px' : '296px'}
          />
          <Caption
            height={MediaType !== 'desktop' ? '100% - 168px' : '100% - 296px'}
          >
            <TitleBox>
              <Title>{title}</Title>

              <DotWithArrow isHovered={isHovered}>
                <ArrowRight />
              </DotWithArrow>
            </TitleBox>

            <Text>
              <span>{text}</span>
              <span>
                {new Date(date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                })}
              </span>
            </Text>
          </Caption>
        </SlideFigure>
      </a>
    </SlideBox>
  );
};

export default Slide;
