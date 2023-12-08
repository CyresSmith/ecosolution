import styled from '@emotion/styled';
import theme from 'theme';

export const Box = styled.div`
  width: ${theme.mediaBreakpoints.mobile.width};
  margin: 0 auto;
  padding: 0 20px;

  @media ${theme.mediaBreakpoints.desktop.media} {
    width: ${theme.mediaBreakpoints.desktop.width};
  }
`;
