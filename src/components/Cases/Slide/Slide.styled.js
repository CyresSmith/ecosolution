import styled from '@emotion/styled';
import theme from 'theme';

export const SlideBox = styled.li`
  flex-shrink: 0;

  @media ${theme.mediaBreakpoints.mobile.media} {
    flex-basis: ${p => `${p.slideWidth}px`};
    max-width: 440px;
    min-width: 320px;
  }

  @media ${theme.mediaBreakpoints.tablet.media} {
    flex-basis: 342px;
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    flex-basis: 596px;
  }
`;

export const SlideFigure = styled.figure`
  height: 100%;
  margin: 0;
  background-color: ${theme.colors.primary.light};
`;

export const Caption = styled.figcaption`
  padding: 24px 12px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${p => `calc(${p.height})`};

  @media ${theme.mediaBreakpoints.desktop.media} {
    padding: 36px 48px;
  }
`;

export const TitleBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Title = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  line-height: normal;
  letter-spacing: -0.72px;
  width: 175px;
  text-align: justify;

  @media ${theme.mediaBreakpoints.tablet.media} {
    font-size: 20px;
    width: 194px;
    letter-spacing: -0.8px;
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    font-size: ${theme.fontSizes.m};
    letter-spacing: -0.96px;
    width: 357px;
  }
`;

export const Text = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: ${theme.fontSizes.xs};
  position: relative;
  padding-top: 12px;
  letter-spacing: -0.48px;

  :before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.accent.regular};
  }

  @media ${theme.mediaBreakpoints.tablet.media} {
    font-size: 14px;
    letter-spacing: -0.56px;
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    font-size: ${theme.fontSizes.s};
    padding-top: 24px;
    letter-spacing: -0.64px;
  }
`;

export const DotWithArrow = styled.div`
  width: 66px;
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: center;
  fill: ${p =>
    p.isHovered ? theme.colors.accent.regular : theme.colors.accent.dark};
  background-color: ${p =>
    p.isHovered ? theme.colors.accent.dark : theme.colors.accent.regular};
  border-radius: 50%;
  transition: ${theme.transition.primary};

  > svg {
    width: 28px;
    height: 28px;
    transform: rotate(-45deg);
  }
`;
