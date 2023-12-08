import styled from '@emotion/styled';
import theme from 'theme';

export const Item = styled.li`
  width: 274px;
  height: 339px;
  padding: 48px 24px;
  background-color: ${theme.colors.primary.light};
  /* 
  :nth-of-type(4n - 3) {
    grid-column: 1 / 2;
  }

  :nth-of-type(4n - 2) {
    grid-column: 2 / 3;
  }

  :nth-of-type(4n) {
    grid-column: 4 / 5;
  }

  :nth-of-type(4n - 1) {
    grid-column: 3 / 4;
  } */
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 94px;

  > svg {
    width: 24px;
    height: 24px;
    fill: ${theme.colors.text};
  }
`;

export const Title = styled.h5`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeights.regular};
  line-height: ${theme.lineHeights.l};
  text-transform: uppercase;
`;

export const Text = styled.p`
  text-align: justify;
  line-height: normal;
  letter-spacing: -0.64px;
  margin-top: 24px;
`;
