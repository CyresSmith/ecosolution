import Arrow from 'assets/svg/arrow_right.svg?react';
import Facebook from 'assets/svg/facebook.svg?react';
import Instagram from 'assets/svg/instagram.svg?react';
import Logo from 'components/Logo';
import { Container } from 'components/shared/Shared.styled';
import {
  FirsColumn,
  FooterBox,
  FooterWrapper,
  IconLink,
  SecondColumn,
  SocialBox,
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
              <a href="https://maps.app.goo.gl/ahouFchHAyZCnA6G9">
                79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
              </a>
            </li>
          </FirsColumn>

          <SecondColumn>
            <SocialBox>
              <a href="https://www.facebook.com/">
                <Facebook />
              </a>
              <a href="https://www.instagram.com/">
                <Instagram />
              </a>
            </SocialBox>

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
