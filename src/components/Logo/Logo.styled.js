import styled from '@emotion/styled';
import theme from 'theme';

export const Link = styled.a`
  display: flex;
  margin: 0;
  padding: 0;

  svg path {
    transition: ${theme.transition.primary};
  }
`;
