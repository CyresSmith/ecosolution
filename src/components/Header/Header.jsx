import ArrowDown from 'assets/svg/arrow_down.svg?react';
import MenuIcon from 'assets/svg/menu.svg?react';
import Logo from 'components/Logo/Logo';
import { Container } from 'components/shared/Shared.styled';
import IconButton from 'components/ui/IconButton';
import Menu from 'components/ui/Menu';
import StyledLink from 'components/ui/StyledLink';
import { useEffect, useState } from 'react';

import { ActionBox, HeaderBox, Wrapper } from './Header.styled';

const Header = () => {
  const [scroll, setScroll] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <>
      <HeaderBox scrollValue={scroll}>
        <Container>
          <Wrapper>
            <Logo />

            <ActionBox>
              <IconButton
                size="s"
                variant="light"
                Icon={MenuIcon}
                onClick={() => setIsMenuOpen(true)}
              />

              <StyledLink Icon={ArrowDown} href="contacts" offset={-110}>
                Get in touch
              </StyledLink>
            </ActionBox>
          </Wrapper>
        </Container>
      </HeaderBox>

      <Menu isMenuOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
