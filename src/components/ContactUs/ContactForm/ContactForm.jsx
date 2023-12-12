import ArrowRight from 'assets/svg/arrow_right.svg?react';
import Button from 'components/ui/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormBox, InputsWrapper } from './ContactForm.styled';
import Input from './Input';

const fields = [
  {
    id: 'fullName',
    type: 'text',
    label: '* Full name:',
    placeholder: 'John Rosie',
  },
  {
    id: 'email',
    type: 'email',
    label: '* E-mail:',
    placeholder: 'johnrosie@gmail.com',
  },
  { id: 'phone', type: 'tel', label: '* Phone:', placeholder: '380961234567' },
  {
    id: 'message',
    type: 'text',
    label: 'Message:',
    placeholder: 'Your message',
  },
];

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ValidationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, 'Wrong Fullname')
    .max(20, 'Wrong Fullname')
    .required('Required'),
  email: Yup.string().email('Wrong Email').required('Required'),
  phone: Yup.string().matches(phoneRegExp, 'Wrong Phone').required('Required'),
  message: Yup.string().min(20, 'Too short').max(200, 'Too long'),
});

const initialValues = {};

fields.forEach(item => {
  initialValues[item.id] = '';
});

const ContactForm = () => {
  const handleSubmit = values => {
    console.log('values: ', values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationSchema}
      onSubmit={(values, { resetForm }) => {
        const { fullName, email, phone, message } = values;

        handleSubmit({
          fullName: fullName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          message: message.trim(),
        });

        resetForm();
      }}
    >
      {({ errors, isValid, values }) => (
        <FormBox>
          <InputsWrapper>
            {fields.map((field, i) => (
              <Input
                key={i}
                {...field}
                textarea={field.id === 'message'}
                isError={errors[field.id]}
              />
            ))}
          </InputsWrapper>

          <div>
            <Button
              variant="transparent"
              Icon={ArrowRight}
              iconSize="l"
              type="submit"
              disabled={
                !isValid ||
                Object.keys(values)
                  .filter(key => key !== 'message')
                  .every(key => values[key] === '')
              }
            >
              Send
            </Button>
          </div>
        </FormBox>
      )}
    </Formik>
  );
};

export default ContactForm;
