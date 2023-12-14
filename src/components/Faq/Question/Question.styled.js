import styled from '@emotion/styled';
import theme from 'theme';

export const Box = styled.li`
  display: flex;
  gap: 8px;
  padding: 16px 0;
  border-top: ${theme.borders.normal};
  border-color: ${theme.colors.accent.regular};
  cursor: pointer;
  overflow: hidden;

  :last-of-type {
    padding-bottom: 0;
  }

  @media ${theme.mediaBreakpoints.tablet.media} {
    gap: 16px;
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    gap: 24px;
    padding: 24px 0;
  }

  > svg {
    fill: ${p =>
      p.isOpen
        ? `${theme.colors.accent.dark}`
        : `${theme.colors.accent.regular}`};
    width: 16px;
    height: 16px;

    @media screen and (${theme.mediaBreakpoints.tablet.width} <= width) {
      width: 28px;
      height: 28px;
    }
  }
`;

export const TextBox = styled.div`
  width: calc(100% - 16px - 8px);

  @media ${theme.mediaBreakpoints.tablet.media} {
    width: 298px;
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    width: 544px;
  }
`;

export const Title = styled.h5`
  text-align: justify;
  font-size: 18px;
  letter-spacing: -0.72px;

  @media ${theme.mediaBreakpoints.desktop.media} {
    font-size: ${theme.fontSizes.m};
    letter-spacing: -0.96px;
  }
`;

export const Text = styled.p`
  text-align: justify;
  letter-spacing: -0.64px;
  overflow: hidden;
  max-height: ${p => (p.isOpen ? '500px' : '0px')};
  transition: ${theme.transition.primary};
  font-size: 14px;

  @media ${theme.mediaBreakpoints.tablet.media} {
    letter-spacing: -0.56px;
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    font-size: ${theme.fontSizes.s};
    letter-spacing: -0.64px;
  }

  :before {
    content: '';
    display: block;
    margin-bottom: 16px;

    @media ${theme.mediaBreakpoints.desktop.media} {
      margin-bottom: 24px;
    }
  }
`;
