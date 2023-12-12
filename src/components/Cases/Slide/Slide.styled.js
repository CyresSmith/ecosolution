import styled from '@emotion/styled';
import theme from 'theme';

export const SlideBox = styled.li`
  flex-shrink: 0;
`;

export const SlideFigure = styled.figure`
  height: 506px;
  flex-basis: 596px;
  margin: 0;
  background-color: ${theme.colors.primary.light};
`;

export const Caption = styled.figcaption`
  padding: 36px 48px;
`;

export const TitleBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 36px;

  :after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.accent.regular};
  }
`;

export const Title = styled.p`
  display: flex;
  flex-direction: column;
  font-size: ${theme.fontSizes.m};
  line-height: normal;
  letter-spacing: -0.96px;
`;

export const Text = styled.p`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
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
