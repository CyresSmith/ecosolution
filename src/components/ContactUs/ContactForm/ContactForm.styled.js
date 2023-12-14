import styled from '@emotion/styled';
import { Form } from 'formik';
import theme from 'theme';

export const FormBox = styled(Form)`
  padding: 36px 12px;
  background-color: ${theme.colors.primary.light};

  @media ${theme.mediaBreakpoints.tablet.media} {
    padding: 36px 24px;
  }

  @media ${theme.mediaBreakpoints.desktop.media} {
    padding: 48px;
  }

  > div {
    display: flex;
    justify-content: flex-end;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-bottom: 16px;

  @media ${theme.mediaBreakpoints.desktop.media} {
    margin-bottom: 32px;
  }
`;
