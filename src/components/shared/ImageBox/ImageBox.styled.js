import styled from '@emotion/styled';

export const Box = styled.div`
  width: ${p => p.width};
  height: ${p => p.height};
  object-fit: cover;

  > img {
    width: 100%;
    height: auto;
  }
`;
