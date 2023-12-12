import styled from '@emotion/styled';
import { Field } from 'formik';
import theme from 'theme';

export const InputBox = styled.p`
  position: relative;
  width: 100%;
`;

export const Label = styled.label``;

export const InputField = styled(Field)`
  width: 100%;
  height: ${p => (p.as === 'textarea' ? '149px' : 'auto')};
  padding: 0 0 8px 0;
  margin-top: 12px;
  background-color: transparent;
  border: 0;
  border-bottom: ${theme.borders.normal};
  border-color: ${p =>
    p.error ? theme.colors.danger : theme.colors.accent.regular};
  color: ${theme.colors.accent.dark};
  font-family: ${theme.fonts.body};
  font-size: 20px;
  letter-spacing: -0.8px;
  resize: none;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: ${theme.colors.primary.regular};
    font-family: ${theme.fonts.body};
    font-size: 20px;
    letter-spacing: -0.8px;
  }
`;

export const Error = styled.span`
  position: absolute;
  font-size: ${theme.fontSizes.xs};
  color: ${theme.colors.danger};
  bottom: -24px;
  right: 0;
`;
