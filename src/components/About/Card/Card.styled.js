import styled from '@emotion/styled';
import theme from 'theme';

export const Item = styled.li`
  width: 100%;
  height: 197px;
  padding: 12px;
  background-color: ${theme.colors.primary.light};

  @media ${theme.mediaBreakpoints.tablet.media} {
    width: 159px;
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    width: 274px;
    height: 339px;
    padding: 48px 24px;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 33px;

  > svg {
    width: 16px;
    height: 16px;
    fill: ${theme.colors.text};

    @media ${theme.mediaBreakpoints.tablet.media} {
    }

    @media ${theme.mediaBreakpoints.desktop.media} {
      width: 24px;
      height: 24px;
    }
  }

  @media ${theme.mediaBreakpoints.tablet.media} {
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    margin-bottom: 94px;
  }
`;

export const Title = styled.h5`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeights.regular};
  line-height: ${theme.lineHeights.l};
  text-transform: uppercase;

  @media ${theme.mediaBreakpoints.tablet.media} {
    font-size: 18px;
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    font-size: ${theme.fontSizes.l};
  }
`;

export const Text = styled.p`
  text-align: justify;
  line-height: normal;
  letter-spacing: -0.64px;
  margin-top: 12px;
  font-size: 14px;

  @media ${theme.mediaBreakpoints.tablet.media} {
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    margin-top: 24px;
    font-size: ${theme.fontSizes.s};
  }
`;
