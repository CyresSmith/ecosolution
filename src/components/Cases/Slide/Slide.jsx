import ArrowRight from 'assets/svg/arrow_right.svg?react';
import ImageBox from 'components/shared/ImageBox';
import IconButton from 'components/ui/IconButton';
import { Caption, SlideBox, Text, Title, TitleBox } from './Slide.styled';

const Slide = ({ place, name, text, date, img }) => {
  return (
    <SlideBox>
      <ImageBox src={img} height="296px" />
      <Caption>
        <TitleBox>
          <Title>
            <span>{place}</span>
            <span>{name}</span>
          </Title>
          <IconButton Icon={ArrowRight} />
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
    </SlideBox>
  );
};

export default Slide;
