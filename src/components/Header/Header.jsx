import ArrowDown from 'assets/svg/arrow_down.svg?react';
import Menu from 'assets/svg/menu.svg?react';
import Logo from 'components/Logo/Logo';
import { Container } from 'components/shared/Shared.styled';
import IconButton from 'components/ui/IconButton';
import StyledLink from 'components/ui/StyledLink';
import { ActionBox, HeaderBox, Wrapper } from './Header.styled';

const Header = () => {
  return (
    <HeaderBox>
      <Container>
        <Wrapper>
          <nav>
            <Logo />
          </nav>

          <ActionBox>
            <IconButton size="s" variant="light" Icon={Menu} />

            <StyledLink Icon={ArrowDown} href="#contacts">
              Get in touch
            </StyledLink>
          </ActionBox>
        </Wrapper>
      </Container>
    </HeaderBox>
  );
};

export default Header;
