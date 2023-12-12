import ArrowRight from 'assets/svg/arrow_right.svg?react';
import ImageBox from 'components/shared/ImageBox';
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

const Slide = ({ place, name, text, date, img, href = '/' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <SlideBox
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={href}>
        <SlideFigure>
          <ImageBox src={img} height="296px" />
          <Caption>
            <TitleBox>
              <Title>
                <span>{place}</span>
                <span>{name}</span>
              </Title>

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
