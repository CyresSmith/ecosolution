import styled from '@emotion/styled';

export const FaqBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;
`;

export const LeftSide = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const RightSide = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
`;
