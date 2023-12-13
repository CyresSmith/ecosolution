import styled from '@emotion/styled';
import theme from 'theme';

export const HeroSection = styled.section`
  width: 100%;
  padding: 222px 0 0 0;

  @media ${theme.mediaBreakpoints.tablet.media} {
    padding-top: 240px;
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    padding-top: 264px;
  }
`;

export const InfoBox = styled.div`
  margin-bottom: 36px;
  display: flex;
  flex-direction: column;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (${theme.mediaBreakpoints.tablet.width} <= width) {
    flex-direction: row;
  }

  @media ${theme.mediaBreakpoints.tablet.media} {
    justify-content: space-between;
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    gap: 296px;
  }
`;

export const HeroTitle = styled.h1`
  font-family: ${theme.fonts.heading};
  font-weight: ${theme.fontWeights.regular};
  line-height: 1;
  text-transform: uppercase;
  display: block;
  width: 100%;
  font-size: 36px;

  @media ${theme.mediaBreakpoints.mobile.media} {
  }

  @media ${theme.mediaBreakpoints.tablet.media} {
    width: 300px;
    font-size: ${theme.fontSizes.xl};
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    width: 485px;
    font-size: ${theme.fontSizes.xxl};
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (${theme.mediaBreakpoints.tablet.width} <= width) {
    align-items: flex-start;
  }

  @media ${theme.mediaBreakpoints.tablet.media} {
    padding-top: 3px;
    width: 342px;
    justify-content: space-between;
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    padding-top: 8px;
    justify-content: flex-start;
  }
`;

export const Text = styled.p`
  letter-spacing: -0.64px;
  margin-bottom: 24px;
  width: 100%;
  text-align: justify;

  @media ${theme.mediaBreakpoints.tablet.media} {
    margin-bottom: 0;
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    width: 363px;
    margin-bottom: 20px;
    text-align: left;
  }
`;

export const Contacts = styled.ul`
  display: flex;
  padding-top: 24px;
  margin-top: 24px;
  border-top: ${theme.borders.normal};
  border-color: ${theme.colors.accent.regular};
  letter-spacing: -0.64px;

  @media ${theme.mediaBreakpoints.mobile.media} {
    flex-direction: column;
    gap: 8px;

    > li {
      display: flex;
      justify-content: center;
    }
  }

  @media ${theme.mediaBreakpoints.tablet.media} {
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    padding-top: 12px;
    margin-top: 24px;
  }
`;

export const Address = styled.li`
  @media screen and (${theme.mediaBreakpoints.tablet.width} <= width) {
    margin-right: auto;
  }
`;

export const Mail = styled.li`
  @media ${theme.mediaBreakpoints.tablet.media} {
    margin-right: 50px;
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    margin-right: 167px;
  }
`;
