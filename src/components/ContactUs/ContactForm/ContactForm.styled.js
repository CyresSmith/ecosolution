import styled from '@emotion/styled';
import { Form } from 'formik';
import theme from 'theme';

export const FormBox = styled(Form)`
  padding: 48px;
  background-color: ${theme.colors.primary.light};

  > div {
    display: flex;
    justify-content: flex-end;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-bottom: 32px;
`;
