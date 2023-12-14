import styled from '@emotion/styled';
import { Field } from 'formik';
import theme from 'theme';

export const InputBox = styled.p`
  position: relative;
  width: 100%;
`;

export const Label = styled.label`
  letter-spacing: -0.64px;
`;

export const InputField = styled(Field)`
  width: 100%;
  height: ${p => (p.as === 'textarea' ? '149px' : 'auto')};
  padding: 0 0 8px 0;
  margin-top: 8px;
  background-color: transparent;
  border: 0;
  border-bottom: ${theme.borders.normal};
  border-color: ${p =>
    p.error ? theme.colors.danger : theme.colors.accent.regular};
  color: ${theme.colors.accent.dark};
  font-family: ${theme.fonts.body};
  font-size: 18px;
  letter-spacing: -0.72px;
  resize: none;

  @media ${theme.mediaBreakpoints.desktop.media} {
    margin-top: 12px;
    font-size: 20px;
    letter-spacing: -0.8px;
  }

  :focus {
    outline: none;
  }

  ::placeholder {
    color: ${theme.colors.primary.regular};
    font-family: ${theme.fonts.body};
    font-size: 18px;
    letter-spacing: -0.8px;

    @media ${theme.mediaBreakpoints.desktop.media} {
      font-size: 20px;
    }
  }
`;

export const Error = styled.span`
  position: absolute;
  font-size: ${theme.fontSizes.xs};
  color: ${theme.colors.danger};
  bottom: -24px;
  right: 0;
  letter-spacing: -0.48px;
`;
