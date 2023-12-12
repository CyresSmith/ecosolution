import styled from '@emotion/styled';
import { Link } from 'react-scroll';
import theme from 'theme';

export const FooterBox = styled.footer`
  padding: 0 0 40px 0;
`;

export const FooterWrapper = styled.div`
  padding-top: 40px;
  display: grid;
  border-top: ${theme.borders.normal};
  border-color: ${theme.colors.accent.regular};
  grid-template-columns: 781px repeat(2, 1fr);
`;

export const FirsColumn = styled.ul`
  grid-column: 1 / span 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SecondColumn = styled.ul`
  grid-column: 2 / span 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ThirdColumn = styled.div`
  grid-column: 3 / span 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export const SocialBox = styled.li`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  width: 100%;

  > a {
    fill: ${theme.colors.accent.dark};

    :hover {
      fill: ${theme.colors.accent.regular};
    }
  }

  svg {
    transition: ${theme.transition.primary};
    fill: inherit;
    width: 24px;
    height: 24px;
  }
`;

export const IconLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: ${theme.colors.accent.regular};
  fill: ${theme.colors.accent.dark};
  border-radius: 50%;
  transition: ${theme.transition.primary};
  cursor: pointer;

  > svg {
    fill: inherit;
    width: 16px;
    height: 16px;
    transform: rotate(270deg);
  }

  :hover {
    background-color: ${theme.colors.accent.dark};
    fill: ${theme.colors.accent.regular};
  }
`;
