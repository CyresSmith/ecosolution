import ArrowDown from 'assets/svg/arrow_down.svg?react';
import Menu from 'assets/svg/menu.svg?react';
import Logo from 'components/Logo/Logo';
import { Container } from 'components/shared/Shared.styled';
import IconButton from 'components/ui/IconButton';
import StyledLink from 'components/ui/StyledLink';
import { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import { ActionBox, HeaderBox, Wrapper } from './Header.styled';

const Header = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScroll(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Element name="top">
      <HeaderBox scrollValue={scroll}>
        <Container>
          <Wrapper>
            <nav>
              <Logo />
            </nav>

            <ActionBox>
              <IconButton size="s" variant="light" Icon={Menu} />

              <StyledLink Icon={ArrowDown} href="contacts">
                Get in touch
              </StyledLink>
            </ActionBox>
          </Wrapper>
        </Container>
      </HeaderBox>
    </Element>
  );
};

export default Header;
