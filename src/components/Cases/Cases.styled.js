import styled from '@emotion/styled';
import theme from 'theme';

export const ActionBox = styled.div`
  display: flex;
  gap: 193px;
  margin-left: auto;
  align-items: end;
`;

export const BtnBox = styled.div`
  display: flex;
  gap: 24px;
`;

export const SlidesCount = styled.span`
  font-size: 28px;
  font-weight: ${theme.fontWeights.light};
  line-height: normal;
  letter-spacing: -1.12px;

  > span {
    color: rgba(23, 61, 51, 0.25);
  }
`;

export const SlidesBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;
  margin-top: 120px;
`;
