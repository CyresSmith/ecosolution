import styled from '@emotion/styled';
import theme from 'theme';

export const Title = styled.h3`
  font-family: ${theme.fonts.heading};
  font-size: 28px;
  text-transform: uppercase;
  font-weight: ${theme.fontWeights.regular};
  text-align: center;
  margin-bottom: 24px;

  @media ${theme.mediaBreakpoints.tablet.media} {
    font-size: 36px;
    margin-bottom: 40px;
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    font-size: ${theme.fontSizes.xl};
    margin-bottom: 120px;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (${theme.mediaBreakpoints.tablet.width} <= width) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    gap: 48px;
  }
`;

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Contact = styled.li`
  > p {
    display: flex;
    flex-direction: column;

    svg {
      width: 24px;
      height: 24px;
      fill: ${theme.colors.primary.dark};
      transition: ${theme.transition.primary};
    }
  }
`;

export const ContactItemsBox = styled.span`
  gap: 8px;
`;

export const ContactName = styled.span`
  text-transform: capitalize;
  letter-spacing: -0.64px;
  margin-bottom: 8px;

  @media ${theme.mediaBreakpoints.tablet.media} {
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    margin-bottom: 16px;
  }
`;

export const ContactLink = styled.a`
  font-size: 20px;
  letter-spacing: -0.8px;
  display: flex;
  align-items: center;
  gap: 8px;

  :not(:last-of-type) {
    margin-bottom: 12px;
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    font-size: 24px;
    letter-spacing: -0.96px;
  }

  :hover {
    > svg {
      fill: ${theme.colors.accent.regular};
    }
  }
`;

export const RightSide = styled.div``;
