import styled from '@emotion/styled';
import theme from 'theme';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;

  @media ${theme.mediaBreakpoints.mobile.media} {
    min-width: ${theme.mediaBreakpoints.mobile.width};
    max-width: 480px;
    width: 100%;
  }

  @media ${theme.mediaBreakpoints.tablet.media} {
    width: ${theme.mediaBreakpoints.tablet.width};
    padding: 0 30px;
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    width: ${theme.mediaBreakpoints.desktop.width};
  }
`;

export const Section = styled.section`
  width: 100%;
  padding: 36px 0 0;

  @media ${theme.mediaBreakpoints.tablet.media} {
    padding: 100px 0 0 0;
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    padding: 120px 0 0 0;
  }
`;

export const Hr = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid ${theme.colors.accent.regular};
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
  border-left: 1px solid ${theme.colors.accent.regular};
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

export const Backdrop = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(23, 61, 51, 0.25);
  backdrop-filter: blur(2px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  opacity: ${p => (p.isMenuOpen ? '1' : '0')};
  transition: ${theme.transition.primary};
  transition-property: opacity, visibility;
  visibility: ${p => (p.isMenuOpen ? 'visible' : 'hidden')};
`;
