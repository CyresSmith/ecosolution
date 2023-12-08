import heroImg from 'assets/img/wind-turbine-clean-energy.jpg';
import ArrowRight from 'assets/svg/arrow_right.svg?react';
import Container from 'components/shared/Container';
import ImageBox from 'components/shared/ImageBox';
import { StyledHr } from 'components/shared/StyledHr.styled';
import StyledLink from 'components/ui/StyledLink';
import {
  HeroSection,
  Info,
  InfoBox,
  RightSide,
  Text,
  Title,
} from './Hero.styled';

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <InfoBox>
          <Info mb={24} variant="column">
            <Title>RENEWABLE ENERGY For any task</Title>

            <RightSide>
              <Text>
                Development and implementation of renewable non-polluting energy
                sources, generating power generation using energy wind, sun,
                water, biomass
              </Text>

              <StyledLink
                href="#contacts"
                variant="transparent"
                iconSize="l"
                Icon={ArrowRight}
              >
                Learn more
              </StyledLink>
            </RightSide>
          </Info>

          <StyledHr />

          <Info mt={12} variant="row">
            <p>79005, Ukraine, Lviv, street. Shota Rustaveli, 7</p>

            <RightSide variant="flex">
              <a href="mailto:info@devstudio.com">office@ecosolution.com</a>
              <p>ecosolution © 2023</p>
            </RightSide>
          </Info>
        </InfoBox>
        <ImageBox width="100%" src={heroImg} />
      </Container>
    </HeroSection>
  );
};

export default Hero;
