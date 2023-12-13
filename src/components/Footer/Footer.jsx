import { GoogleMapsLink } from 'App';
import Arrow from 'assets/svg/arrow_right.svg?react';
import Logo from 'components/Logo';
import { Container } from 'components/shared/Shared.styled';
import SocialLinks from 'components/shared/SocialLinks';
import {
  FirsColumn,
  FooterBox,
  FooterWrapper,
  IconLink,
  SecondColumn,
  ThirdColumn,
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterBox>
      <Container>
        <FooterWrapper>
          <FirsColumn>
            <li>
              <Logo />
            </li>
            <li>
              <a href={GoogleMapsLink}>
                79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
              </a>
            </li>
          </FirsColumn>

          <SecondColumn>
            <SocialLinks />

            <li>
              <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
            </li>
          </SecondColumn>

          <ThirdColumn>
            <IconLink
              to="top"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              <Arrow />
            </IconLink>

            <p>ecosolution © 2023</p>
          </ThirdColumn>
        </FooterWrapper>
      </Container>
    </FooterBox>
  );
};

export default Footer;
