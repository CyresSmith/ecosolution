import styled from '@emotion/styled';
import theme from 'theme';

const maxWidth = parseInt(theme.mediaBreakpoints.desktop.width) - 1;

export const SocialBox = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;

  > li {
    display: flex;
    align-items: center;
    justify-content: center;

    > a {
      display: flex;
      align-items: center;
      justify-content: center;
      fill: ${p => (p.white ? theme.colors.white : theme.colors.accent.dark)};

      :hover {
        fill: ${theme.colors.accent.regular};
      }

      @media screen and (width <= ${maxWidth}px) {
        padding: 12px;
      }
    }

    svg {
      transition: ${theme.transition.primary};
      fill: inherit;
      width: 24px;
      height: 24px;
    }
  }
`;
