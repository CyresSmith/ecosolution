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
  height: 506px;
  width: 100%;
  margin-top: 120px;
  overflow: hidden;
  position: relative;
`;

export const SlideList = styled.ul`
  height: 100%;
  display: flex;
  gap: 48px;
  transition-property: transform;
  transition-timing-function: ease-in-out;
  position: absolute;
  top: 0;
`;
