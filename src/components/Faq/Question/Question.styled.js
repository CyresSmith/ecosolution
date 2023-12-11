import styled from '@emotion/styled';
import theme from 'theme';

export const Box = styled.li`
  display: flex;
  gap: 24px;
  padding: 24px 0;
  border-top: ${theme.borders.normal};
  border-color: ${theme.colors.accent.regular};
  cursor: pointer;
  overflow: hidden;

  > svg {
    fill: ${p =>
      p.isOpen
        ? `${theme.colors.accent.dark}`
        : `${theme.colors.accent.regular}`};
    width: 28px;
    height: 28px;
  }
`;

export const TextBox = styled.div`
  width: 544px;
`;

export const Title = styled.h5`
  text-align: justify;
  font-size: ${theme.fontSizes.m};
  letter-spacing: -0.96px;
`;

export const Text = styled.p`
  text-align: justify;
  letter-spacing: -0.64px;
  overflow: hidden;
  max-height: ${p => (p.isOpen ? '500px' : '0px')};
  transition: ${theme.transition.primary};

  :before {
    content: '';
    display: block;
    margin-bottom: 24px;
  }
`;
