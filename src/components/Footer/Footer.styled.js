import styled from '@emotion/styled';

import theme from 'theme';

export const FooterBox = styled.footer`
  padding: 36px 0 24px 0;

  @media ${theme.mediaBreakpoints.desktop.media} {
    padding: 120px 0 40px 0;
  }
`;

export const FooterWrapper = styled.ul`
  padding-top: 24px;
  border-top: ${theme.borders.normal};
  border-color: ${theme.colors.accent.regular};
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (${theme.mediaBreakpoints.tablet.width} <= width) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 16px;
  }

  @media ${theme.mediaBreakpoints.tablet.media} {
    grid-column-gap: 24px;
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    grid-column-gap: 48px;
  }
`;

export const LogoBox = styled.li`
  display: flex;
  grid-column: 1/2;
  margin-bottom: 12px;

  @media screen and (${theme.mediaBreakpoints.tablet.width} <= width) {
    margin-bottom: 0;
  }
`;

export const Social = styled.li`
  grid-column: 1/3;
  justify-self: center;
  margin-bottom: 12px;

  @media screen and (${theme.mediaBreakpoints.tablet.width} <= width) {
    grid-column: 2/3;
    grid-row: 1/2;
    margin-bottom: 0;
    justify-self: self-start;
    align-self: center;
  }
`;

export const Address = styled.li`
  grid-column: 1/3;
  justify-self: center;
  margin-bottom: 16px;

  @media screen and (${theme.mediaBreakpoints.tablet.width} <= width) {
    margin-bottom: 0;
    grid-column: 1/2;
    justify-self: self-start;
  }
`;

export const Email = styled.li`
  grid-column: 1/3;
  justify-self: center;
  margin-bottom: 16px;

  @media screen and (${theme.mediaBreakpoints.tablet.width} <= width) {
    grid-column: 2/3;
    grid-row: 2/3;
    margin-bottom: 0;
    justify-self: self-start;
  }
`;

export const IconLink = styled.li`
  grid-column: 2/3;
  justify-self: end;

  @media screen and (${theme.mediaBreakpoints.tablet.width} <= width) {
    grid-column: 2/3;
    grid-row: 1/2;
    align-self: center;
  }

  > a {
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
  }
`;

export const Ecosolution = styled.div`
  grid-column: 1/3;
  justify-self: center;

  @media screen and (${theme.mediaBreakpoints.tablet.width} <= width) {
    grid-column: 2/3;
    grid-row: 2/3;
    justify-self: self-end;
  }
`;
