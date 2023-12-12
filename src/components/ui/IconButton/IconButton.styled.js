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

      case 'xl':
        return '84px';

      default:
        return `${!isNaN(Number(p.size)) ? p.size : 32}px`;
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

      case 'xl':
        return '84px';

      default:
        return `${!isNaN(Number(p.size)) ? p.size : 32}px`;
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
  border: ${p => {
    switch (p.variant) {
      case 'transparent':
        return `${theme.borders.normal}`;

      default:
        return `none`;
    }
  }};
  border-color: ${p => {
    switch (p.variant) {
      case 'transparent':
        return `${theme.colors.accent.dark}`;

      default:
        return `unset`;
    }
  }};
  transition: ${theme.transition.primary};
  cursor: pointer;
  border-radius: 50%;

  :hover {
    background-color: ${p => {
      switch (p.variant) {
        case 'primary':
          return `${theme.colors.accent.dark}`;

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
    border-color: ${p => {
      switch (p.variant) {
        case 'transparent':
          return `${theme.colors.accent.regular}`;

        default:
          return `unset`;
      }
    }};

    > svg {
      fill: ${p => {
        switch (p.variant) {
          case 'transparent':
            return `${theme.colors.accent.regular}`;

          default:
            return `unset`;
        }
      }};
    }
  }

  > svg {
    transition: ${theme.transition.primary};
    transform: ${p => (p.flip ? 'scaleX(-1)' : 'scaleX(1)')};
    fill: inherit;
    width: ${p => {
      switch (p.size) {
        case 's':
          return '16px';

        case 'm':
          return '16px';

        case 'l':
          return '66px';

        case 'xl':
          return '36px';

        default:
          return '32px';
      }
    }};
    height: ${p => {
      switch (p.size) {
        case 's':
          return '16px';

        case 'm':
          return '16px';

        case 'l':
          return '66px';

        case 'xl':
          return '36px';

        default:
          return '32px';
      }
    }};
  }
`;
