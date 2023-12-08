import styled from '@emotion/styled';
import theme from 'theme';

export const Link = styled.a`
  display: inline-flex;
  align-items: center;
  border-radius: 19.5px;
  gap: 12px;
  padding: ${p => {
    switch (p.iconSize) {
      case 's':
        return `10px 16px`;

      case 'l':
        return `10px 4px 10px 16px`;

      default:
        return `10px 16px`;
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
  cursor: pointer;
  transition: ${theme.transition.primary};

  :hover {
    color: ${p => {
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
    fill: ${p => {
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

    > span {
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

    > span > svg {
      display: block;
      fill: ${theme.colors.accent.dark};
    }
  }

  > span {
    width: ${p => {
      switch (p.iconSize) {
        case 's':
          return '14px';

        case 'l':
          return '32px';

        default:
          return '14px';
      }
    }};
    height: ${p => {
      switch (p.iconSize) {
        case 's':
          return '14px';

        case 'l':
          return '32px';

        default:
          return '14px';
      }
    }};
    border-radius: 50%;
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
    fill: inherit;
    transition: ${theme.transition.primary};

    > svg {
      display: none;
      fill: inherit;
    }
  }
`;
