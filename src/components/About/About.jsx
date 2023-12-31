import InnovationIcon from 'assets/svg/cpu_charge.svg?react';
import ResponsibilityIcon from 'assets/svg/global_edit.svg?react';
import OpennessIcon from 'assets/svg/maximize_circle.svg?react';
import QualityIcon from 'assets/svg/ranking.svg?react';
import {
  Container,
  Section,
  VerticalHr,
} from 'components/shared/Shared.styled';
import useMediaHook from 'hooks/useMediaHook';
import { Element } from 'react-scroll';
import {
  GridWrapper,
  ImagesGrid,
  ListGrid,
  Text,
  TextBox,
  Title,
} from './About.styled';

import img2 from 'assets/img/man-worker-firld-by-solar-panels 1.jpg';
import img1 from 'assets/img/wind-farms-fields 1.jpg';
import ImageBox from 'components/shared/ImageBox';
import Card from './Card';

const values = [
  {
    title: 'Openness',
    text: 'to the world, people, new ideas and projects',
    Icon: OpennessIcon,
    id: 1,
  },
  {
    title: 'Responsibility',
    text: 'we are aware that the results of our work have an impact on our lives and the lives of future generations',
    Icon: ResponsibilityIcon,
    id: 2,
  },
  {
    title: 'Innovation',
    text: 'we use the latest technology to implement non-standard solutions',
    Icon: InnovationIcon,
    id: 3,
  },
  {
    title: 'Quality',
    text: 'we do not strive to be the first among others, but we want to be the best in our business',
    Icon: QualityIcon,
    id: 4,
  },
];

const images = [img1, img2];

const About = () => {
  const { MediaType } = useMediaHook();

  return (
    <Element name="about">
      <Section>
        <Container>
          <TextBox>
            <Title>Main values of our company</Title>

            {MediaType !== 'mobile' && <VerticalHr />}

            <Text>
              EcoSolution envisions a world where sustainable energy solutions
              power a brighter and cleaner future for all. We aspire to be at
              the forefront of the global shift towards renewable energy,
              leading the way in innovative technologies that harness the power
              of nature to meet the world&#39;s energy needs.
            </Text>
          </TextBox>

          <GridWrapper rowsCount={values.length / 2}>
            {MediaType !== 'mobile' && (
              <ImagesGrid rowsCount={values.length / 2}>
                {images.map((src, index) => (
                  <ImageBox
                    width={MediaType === 'tablet' ? '342px' : '596px'}
                    height="100%"
                    key={index}
                    src={src}
                  />
                ))}
              </ImagesGrid>
            )}

            <ListGrid rowsCount={values.length / 2}>
              {values.map((item, index) => (
                <Card key={item.id} index={index} {...item} />
              ))}
            </ListGrid>
          </GridWrapper>
        </Container>
      </Section>
    </Element>
  );
};

export default About;
