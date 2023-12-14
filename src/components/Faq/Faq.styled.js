import styled from '@emotion/styled';
import theme from 'theme';

export const FaqBox = styled.div`
  @media screen and (${theme.mediaBreakpoints.tablet.width} <= width) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    gap: 48px;
  }
`;

export const Title = styled.h3`
  width: 320px;
  font-family: ${theme.fonts.heading};
  font-weight: ${theme.fontWeights.regular};
  font-size: 28px;
  line-height: 1;
  text-transform: uppercase;
  margin-bottom: 24px;

  @media screen and (${theme.mediaBreakpoints.tablet.width} <= width) {
    grid-column: 2/3;
    width: 100%;
    margin-bottom: 0px;
  }

  @media ${theme.mediaBreakpoints.tablet.media} {
    font-size: 36px;
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    font-size: ${theme.fontSizes.xl};
    width: 398px;
    margin: 0 auto;
  }
`;

export const QuestionBox = styled.ul`
  @media screen and (${theme.mediaBreakpoints.tablet.width} <= width) {
    grid-column: 1/2;
    grid-row: 1/3;
  }

  @media screen and (${theme.mediaBreakpoints.tablet.width} <= width) {
    padding-top: 7px;
  }
`;

export const AskQuestion = styled.p`
  font-size: 18px;
  letter-spacing: -0.72px;
  margin-bottom: 12px;

  @media ${theme.mediaBreakpoints.desktop.media} {
    font-size: ${theme.fontSizes.m};
  }
`;

export const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 36px;

  @media screen and (${theme.mediaBreakpoints.tablet.width} <= width) {
    grid-column: 2/3;
    grid-row: 2/3;
    align-self: self-end;
    margin-top: 0;
  }
`;
