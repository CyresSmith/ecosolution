import styled from '@emotion/styled';
import theme from 'theme';

export const Title = styled.h3`
  width: 286px;
  text-align: center;
  font-family: ${theme.fonts.heading};
  font-weight: ${theme.fontWeights.regular};
  font-size: 28px;
  text-transform: uppercase;
  line-height: 1;
  margin: 0 auto 24px;

  @media ${theme.mediaBreakpoints.tablet.media} {
    width: 368px;
    font-size: 36px;
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    font-size: 48px;
    width: 491px;
    margin-bottom: 16px;
  }
`;

export const CounterBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  margin-top: 24px;

  > span {
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.m};
    font-weight: ${theme.fontWeights.regular};
    line-height: 1;

    @media ${theme.mediaBreakpoints.tablet.media} {
      font-size: 28px;
    }

    @media ${theme.mediaBreakpoints.desktop.media} {
      font-size: ${theme.fontSizes.xl};
    }
  }

  @media screen and (${theme.mediaBreakpoints.tablet.width} <= width) {
    gap: 24px;
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    margin-top: 16px;
  }
`;

export const Counter = styled.p`
  color: ${theme.colors.accent.regular};
  font-family: ${theme.fonts.heading};
  font-weight: ${theme.fontWeights.bold};
  line-height: 1;
  text-transform: uppercase;
  font-size: 48px;

  @media screen and (${theme.mediaBreakpoints.tablet.width} <= width) {
  }

  @media ${theme.mediaBreakpoints.tablet.media} {
    font-size: 100px;
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    font-size: ${theme.fontSizes.max};
  }
`;
