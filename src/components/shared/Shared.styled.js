import styled from '@emotion/styled';
import theme from 'theme';

export const Container = styled.div`
  width: ${theme.mediaBreakpoints.mobile.width};
  margin: 0 auto;
  padding: 0 20px;

  @media ${theme.mediaBreakpoints.desktop.media} {
    width: ${theme.mediaBreakpoints.desktop.width};
  }
`;

export const HeroSection = styled.section`
  width: 100%;
  padding: 264px 0 0 0;
`;

export const Section = styled.section`
  width: 100%;
  padding: 120px 0 0 0;

  :last-of-type {
    padding: 120px 0 120px 0;
  }
`;

export const Hr = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid ${theme.colors.primary.regular};
  margin: 0;
`;

export const TwoHalvesBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  height: ${p => (p.height ? `${p.height}px` : '100%;')};
  margin: ${p => (p.margin ? `${p.margin}` : '0')};
`;

export const VerticalHr = styled.div`
  width: 1px;
  height: ${p => (p.height ? `${p.height}px` : '100%;')};
  margin: ${p => (p.margin ? `${p.margin}` : '0')};
  border-left: 1px solid ${theme.colors.primary.regular};
`;

export const Title = styled.h3`
  width: ${p => (p.width ? `${p.width}px` : 'auto')};
  margin: ${p => (p.margin ? `${p.margin}` : '0')};
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.regular};
  text-transform: uppercase;
  text-align: ${p => (p.align ? p.align : 'left')};
  line-height: 1;
`;
