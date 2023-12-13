import { GoogleMapsLink } from 'App';
import heroImg from 'assets/img/wind-turbine-clean-energy.jpg';
import ArrowRight from 'assets/svg/arrow_right.svg?react';
import ImageBox from 'components/shared/ImageBox';
import { Container } from 'components/shared/Shared.styled';
import StyledLink from 'components/ui/StyledLink';
import useMediaHook from 'hooks/useMediaHook';
import { Element } from 'react-scroll';
import {
  Address,
  Contacts,
  HeroSection,
  HeroTitle,
  Info,
  InfoBox,
  Mail,
  RightSide,
  Text,
} from './Hero.styled';

const Hero = () => {
  const { MediaType } = useMediaHook();

  return (
    <Element name="top">
      <HeroSection>
        <Container>
          <InfoBox>
            <Info>
              <HeroTitle>RENEWABLE ENERGY For any task</HeroTitle>

              <RightSide>
                <Text>
                  Development and implementation of renewable non-polluting
                  energy sources, generating power generation using energy wind,
                  sun, water, biomass
                </Text>

                <StyledLink
                  href="cases"
                  variant="transparent"
                  iconSize="l"
                  Icon={ArrowRight}
                >
                  Learn more
                </StyledLink>
              </RightSide>
            </Info>

            <Contacts>
              <Address>
                <a href={GoogleMapsLink}>
                  79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
                </a>
              </Address>

              <Mail>
                <a href="mailto:office@ecosolution.com">
                  office@ecosolution.com
                </a>
              </Mail>

              {MediaType !== 'mobile' && (
                <li>
                  <p>ecosolution © 2023</p>
                </li>
              )}
            </Contacts>
          </InfoBox>

          <ImageBox
            width="100%"
            height={
              MediaType === 'desktop'
                ? '524px'
                : MediaType === 'tablet'
                ? '348px'
                : '200px'
            }
            src={heroImg}
          />
        </Container>
      </HeroSection>
    </Element>
  );
};

export default Hero;
