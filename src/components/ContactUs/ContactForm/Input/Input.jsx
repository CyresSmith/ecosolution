import { ErrorMessage } from 'formik';
import { Error, InputBox, InputField, Label } from './Input.styled';

const Input = ({ type, label, placeholder, id, isError, textarea = false }) => {
  return (
    <InputBox>
      {label && <Label htmlFor={id}>{label}</Label>}

      <InputField
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        error={isError}
        as={textarea ? 'textarea' : 'input'}
      />

      <ErrorMessage name={id} component={Error} />
    </InputBox>
  );
};

export default Input;
