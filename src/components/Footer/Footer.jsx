import { GoogleMapsLink } from 'App';
import Arrow from 'assets/svg/arrow_right.svg?react';
import Logo from 'components/Logo';
import { Container } from 'components/shared/Shared.styled';
import SocialLinks from 'components/shared/SocialLinks';
import { Link } from 'react-scroll';
import {
  Address,
  Ecosolution,
  Email,
  FooterBox,
  FooterWrapper,
  IconLink,
  LogoBox,
  Social,
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterBox>
      <Container>
        <FooterWrapper>
          <LogoBox>
            <Logo />
          </LogoBox>

          <IconLink>
            <Link
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              to="top"
            >
              <Arrow />
            </Link>
          </IconLink>

          <Social>
            <SocialLinks />
          </Social>

          <Address>
            <a href={GoogleMapsLink}>
              79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
            </a>
          </Address>

          <Email>
            <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
          </Email>

          <Ecosolution>
            <p>ecosolution © 2023</p>
          </Ecosolution>
        </FooterWrapper>
      </Container>
    </FooterBox>
  );
};

export default Footer;
