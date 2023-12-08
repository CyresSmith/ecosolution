import styled from '@emotion/styled';
import theme from 'theme';

export const HeroSection = styled.section`
  width: 100%;
`;

export const InfoBox = styled.div`
  margin-bottom: 30px;
`;

export const Info = styled.div`
  display: grid;
  grid-template-columns: 781px 1fr;
  margin-top: ${p => {
    return p.mt ? `${p.mt}px` : 'unset';
  }};
  margin-bottom: ${p => {
    return p.mb ? `${p.mb}px` : 'unset';
  }};
`;

export const RightSide = styled.div`
  display: ${p => (p.variant === 'flex' ? 'flex' : 'block')};
  justify-content: ${p => (p.variant === 'flex' ? 'space-between' : 'unset')};
`;

export const Text = styled.p`
  width: 363px;
  letter-spacing: -0.64px;
  margin-bottom: 20px;
`;

export const Contacts = styled.p`
  display: flex;
`;

export const Title = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.xxl};
  font-weight: ${theme.fontWeights.regular};
  line-height: 1;
  text-transform: uppercase;
  display: block;
  width: 485px;
`;
