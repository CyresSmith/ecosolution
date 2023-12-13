import styled from '@emotion/styled';
import { Link } from 'react-scroll';
import theme from 'theme';

export const MenuBox = styled.div`
  position: fixed;
  top: 36px;
  width: calc(100vw - 40px);
  max-width: 365px;
  padding: 24px 19px;
  height: calc(100vh - 72px);
  border-radius: 25px;
  background: rgba(23, 61, 51, 0.75);
  backdrop-filter: blur(12.5px);
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${theme.mediaBreakpoints.mobile.media} {
    right: 50%;
    transform: translateX(50%);
  }

  @media screen and (768px <= width) {
    right: calc(((100vw - 768px) / 2) + 20px);
    padding: 24px;
    gap: 16px;
  }
`;

export const Header = styled.div`
  padding-bottom: 5.5px;
  border-bottom: ${theme.borders.normal};
  border-color: ${theme.colors.white};
`;

export const MenuBtn = styled.button`
  display: flex;
  align-items: center;
  color: ${theme.colors.white};
  fill: ${theme.colors.white};
  background-color: transparent;
  outline: none;
  border: none;
  transition: ${theme.transition.primary};
  cursor: pointer;
  padding: 0;
  margin: 0;
  font-size: ${theme.fontSizes.s};
  letter-spacing: -0.64px;

  :hover {
    color: ${theme.colors.accent.regular};
    fill: ${theme.colors.accent.regular};
  }

  > svg {
    fill: inherit;
    width: 20px;
    height: 20px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

export const MenuLink = styled(Link)`
  display: flex;
  gap: 8px;
  align-items: center;
  color: rgba(255, 255, 255, 0.25);
  fill: rgba(255, 255, 255, 0.25);
  transition: ${theme.transition.primary};
  cursor: pointer;
  padding: 0;
  margin: 0;
  font-size: ${theme.fontSizes.m};
  letter-spacing: -0.96px;

  :hover {
    color: ${theme.colors.white};
    fill: ${theme.colors.white};
  }

  > svg {
    fill: inherit;
    width: ${p => `${p.iconSize || 20}px`};
    height: ${p => `${p.iconSize || 20}px`};
    rotate: -45deg;
  }
`;
