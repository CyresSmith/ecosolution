import styled from '@emotion/styled';
import theme from 'theme';

export const HeaderBox = styled.header`
  width: 100%;
  height: 112px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${p =>
    p.scrollValue > 125 ? theme.colors.white : theme.colors.background};
  z-index: 1;
  transition: ${theme.transition.primary};
`;

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ActionBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  > a {
    @media screen and (width <= 767px) {
      display: none;
    }
  }
`;
