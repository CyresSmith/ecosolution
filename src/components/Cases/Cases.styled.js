import styled from '@emotion/styled';
import theme from 'theme';

export const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (${theme.mediaBreakpoints.tablet.width} <= width) {
    display: grid;
    grid-template-columns: 1fr 1px 1fr;
    gap: 0;
  }

  @media ${theme.mediaBreakpoints.tablet.media} {
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
  }
`;

export const Title = styled.h3`
  width: 264px;
  font-family: ${theme.fonts.heading};
  font-size: 28px;
  font-style: normal;
  font-weight: ${theme.fontWeights.regular};
  line-height: 1;
  text-transform: uppercase;

  @media ${theme.mediaBreakpoints.tablet.media} {
    font-size: 36px;
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    font-size: ${theme.fontSizes.xl};
    width: 398px;
  }
`;

export const ActionBox = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;

  @media screen and (${theme.mediaBreakpoints.tablet.width} <= width) {
    margin-left: 11px;
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    gap: 193px;
    margin-left: auto;
  }
`;

export const BtnBox = styled.div`
  display: flex;
  gap: 12px;

  @media ${theme.mediaBreakpoints.desktop.media} {
    gap: 24px;
  }
`;

export const SlidesCount = styled.span`
  font-size: 28px;
  font-weight: ${theme.fontWeights.light};
  line-height: normal;
  letter-spacing: -1.12px;

  > span {
    color: rgba(23, 61, 51, 0.25);
  }
`;

export const SlidesBox = styled.div`
  height: 318px;
  width: 100%;
  margin: 24px auto 0;
  overflow: hidden;
  position: relative;

  @media screen and (${theme.mediaBreakpoints.tablet.width} <= width) {
    width: 100%;
  }

  @media ${theme.mediaBreakpoints.tablet.media} {
    height: 322px;
    margin-top: 40px;
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    height: 506px;
    margin-top: 120px;
  }
`;

export const SlideList = styled.ul`
  height: 100%;
  display: flex;
  transition-property: transform;
  transition-timing-function: ease-in-out;
  position: absolute;
  top: 0;
  gap: 24px;

  @media ${theme.mediaBreakpoints.tablet.media} {
    gap: 24px;
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    gap: 48px;
  }
`;
