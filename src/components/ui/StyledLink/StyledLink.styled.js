import styled from '@emotion/styled';
import theme from 'theme';

export const Link = styled.a`
  display: inline-flex;
  align-items: center;
  height: 40px;
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
        return `${theme.colors.primary.regular}`;

      default:
        return `none`;
    }
  }};
  border-radius: 20px;
  gap: 12px;
  padding: ${p => {
    switch (p.iconSize) {
      case 's':
        return `10px 16px`;

      case 'l':
        return `4px 4px 4px 16px`;

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
          return `${theme.colors.accent.regular}`;

        default:
          return `${theme.colors.primary.regular}`;
      }
    }};
    border-color: ${p => {
      switch (p.variant) {
        case 'transparent':
          return `${theme.colors.accent.dark}`;

        default:
          return `none`;
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
          return `${theme.colors.accent.dark}`;

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
            return `${theme.colors.accent.regular}`;

          default:
            return `${theme.colors.primary.regular}`;
        }
      }};
    }
  }

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
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
          return `${theme.colors.accent.regular}`;

        default:
          return `${theme.colors.primary.regular}`;
      }
    }};
    fill: inherit;
    transition: ${theme.transition.primary};

    > svg {
      fill: inherit;
    }
  }
`;
