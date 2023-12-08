import heroImg from 'assets/img/wind-turbine-clean-energy.jpg';
import ArrowRight from 'assets/svg/arrow_right.svg?react';
import ImageBox from 'components/shared/ImageBox';
import { Container, HeroSection, Hr } from 'components/shared/Shared.styled';
import StyledLink from 'components/ui/StyledLink';
import { HeroTitle, Info, InfoBox, RightSide, Text } from './Hero.styled';

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <InfoBox>
          <Info mb={24} variant="column">
            <HeroTitle>RENEWABLE ENERGY For any task</HeroTitle>

            <RightSide>
              <Text>
                Development and implementation of renewable non-polluting energy
                sources, generating power generation using energy wind, sun,
                water, biomass
              </Text>

              <StyledLink
                href="#cases"
                variant="transparent"
                iconSize="l"
                Icon={ArrowRight}
              >
                Learn more
              </StyledLink>
            </RightSide>
          </Info>

          <Hr />

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
