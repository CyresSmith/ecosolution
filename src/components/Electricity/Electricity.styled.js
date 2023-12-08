import styled from '@emotion/styled';
import theme from 'theme';

export const CounterBox = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: center;

  > span {
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.xl};
    font-weight: ${theme.fontWeights.regular};
    line-height: 1;
  }
`;

export const Counter = styled.p`
  color: ${theme.colors.accent.regular};
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.max};
  font-weight: ${theme.fontWeights.bold};
  line-height: 1;
  text-transform: uppercase;
`;
