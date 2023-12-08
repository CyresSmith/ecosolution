import styled from '@emotion/styled';
import theme from 'theme';

export const Button = styled.button`
  width: ${p => {
    switch (p.size) {
      case 's':
        return '32px';

      case 'm':
        return '40px';

      case 'l':
        return '66px';

      default:
        return '32px';
    }
  }};
  height: ${p => {
    switch (p.size) {
      case 's':
        return '32px';

      case 'm':
        return '40px';

      case 'l':
        return '66px';

      default:
        return '32px';
    }
  }};
  padding: ${p => {
    switch (p.size) {
      case 's':
        return '8px';

      case 'm':
        return '12px';

      case 'l':
        return '15px';

      default:
        return '8px';
    }
  }};
  color: ${theme.colors.accent.dark};
  fill: ${theme.colors.accent.dark};
  background-color: ${p => {
    switch (p.variant) {
      case 'primary':
        return `${theme.colors.accent.regular}`;

      case 'secondary':
        return `${theme.colors.accent.dark}`;

      case 'light':
        return `${theme.colors.accent.light}`;

      case 'transparent':
        return `transparent`;

      default:
        return `${theme.colors.primary.regular}`;
    }
  }};
  outline: none;
  border: none;
  transition: ${theme.transition.primary};
  cursor: pointer;
  border-radius: 50%;

  :hover {
    background-color: ${p => {
      switch (p.variant) {
        case 'primary':
          return `${theme.colors.accent.regular}`;

        case 'secondary':
          return `${theme.colors.accent.dark}`;

        case 'light':
          return `${theme.colors.accent.regular}`;

        case 'transparent':
          return `transparent`;

        default:
          return `${theme.colors.primary.regular}`;
      }
    }};
  }

  > svg {
    fill: inherit;
  }
`;
