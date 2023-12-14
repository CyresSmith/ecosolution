import ArrowRight from 'assets/svg/arrow_right.svg?react';
import Close from 'assets/svg/close.svg?react';
import { Backdrop } from 'components/shared/Shared.styled';
import SocialLinks from 'components/shared/SocialLinks';
import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import theme from 'theme';
import {
  Header,
  LinksWrapper,
  List,
  MenuBox,
  MenuBtn,
  MenuLink,
} from './Menu.styled';

const links = [
  { title: 'Main', to: 'top', offset: 0 },
  { title: 'About', to: 'about', offset: -110 },
  { title: 'Cases', to: 'cases', offset: -110 },
  { title: 'Contact Us', to: 'contacts', offset: -110 },
];

const modalRoot = document.querySelector('#modal-root');

const Menu = ({ isMenuOpen, toggleMenu }) => {
  const closeMenu = useCallback(
    ({ code, target, currentTarget }) => {
      if (target === currentTarget || code === 'Escape') {
        toggleMenu();
      }
    },
    [toggleMenu]
  );

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    document.addEventListener('keydown', closeMenu);

    return () => document.removeEventListener('keydown', closeMenu);
  }, [closeMenu, toggleMenu]);

  return createPortal(
    <Backdrop isMenuOpen={isMenuOpen} onClick={closeMenu}>
      <MenuBox>
        <Header>
          <MenuBtn onClick={toggleMenu}>
            <Close />
            <span>close</span>
          </MenuBtn>
        </Header>

        <LinksWrapper>
          <List>
            {links.map((item, i) => (
              <li key={i}>
                <MenuLink
                  activeStyle={{
                    color: `${theme.colors.accent.regular}`,
                    fill: `${theme.colors.accent.regular}`,
                  }}
                  spy={true}
                  smooth={true}
                  offset={item.offset}
                  duration={1000}
                  to={item.to}
                >
                  <span>{item.title}</span>
                  <ArrowRight />
                </MenuLink>
              </li>
            ))}
          </List>

          <SocialLinks white />
        </LinksWrapper>
      </MenuBox>
    </Backdrop>,
    modalRoot
  );
};

export default Menu;
