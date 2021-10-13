import PasswordIcon from '../assets/img/showoff.png';
import ShowIcon from '../assets/img/show.png';
import DefiButton from '../../../components/DefiButton/DefiButton';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import ReCAPTCHA from 'react-google-recaptcha';
import {
  Label,
  InputField,
  Description,
  DescriptionSd,
  Center,
  Validation,
} from './style';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { registerUserAction } from '../../../actions/auth/authActions';

type UserSubmitFormSignup = {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function Signup() {
  const [values, setValues] = useState(true);
  const [valuesConfirm, setValuesConfirm] = useState(true);
  const [recaptcha_response, setRecaptcha] = useState('');
  const dispatch = useDispatch();
  //Validate
  const validation = Yup.object().shape({
    fullname: Yup.string().required('Invalid name'),
    email: Yup.string().required('Invalid email').email('Invalid email'),
    password: Yup.string()
      .required('Invalid password')
      .min(8, 'Password must be at least 8 characters')
      .max(255, 'Password must not exceed 255 characters')
      .matches(
        /(?=.*?[0-9])/,
        'Password should contain at least one digit(0-9)',
      )
      .matches(
        /(?=.*?[A-Z])/,
        'Password should contain at least one uppercase letter(A-Z).',
      )
      .matches(
        /(?=.*?[a-z])/,
        'Password should contain at least one lowercase letter(a-z)',
      )
      .matches(
        /(?=.*?[#?!@$%^&*-])/,
        'Password should contain at least one special character ( @, #, %, &, !, $, etc….).',
      ),
    confirmPassword: Yup.string()
      .required('Invalid confirm password')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitFormSignup>({
    resolver: yupResolver(validation),
  });

  const onSubmitSignup = (data: UserSubmitFormSignup) => {
    console.log(JSON.stringify(data, null, 2));
    const dataSignup = JSON.parse(JSON.stringify(data));
    const name = dataSignup.fullname;
    const email = dataSignup.email;
    const password = dataSignup.password;
    const dataApi = { name, email, password, recaptcha_response };
    dispatch(registerUserAction(dataApi));
  };

  // Show password
  const handleClickShowPassword = () => {
    setValues(!values);
  };
  const handleClickShowConfirmPassword = () => {
    setValuesConfirm(!valuesConfirm);
  };
  // get value Captcha
  const onChange = value => {
    // console.log(value);
    setRecaptcha(value);
  };
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmitSignup)}>
        <Label>Name</Label>
        <InputField color={errors.fullname ? '#ff5252' : '#74767b'}>
          <div className="email__field">
            {' '}
            <input
              {...register('fullname')}
              className="email__input"
              type="text"
              placeholder="Enter name"
            ></input>
          </div>
          <Validation>{errors.fullname?.message}</Validation>
        </InputField>
        <Label>Email</Label>
        <InputField color={errors.email ? '#ff5252' : '#74767b'}>
          <div className="email__field">
            {' '}
            <input
              {...register('email')}
              className="email__input"
              type="email"
              placeholder="Enter email"
            ></input>
          </div>
          <Validation>{errors.email?.message}</Validation>
        </InputField>
        <Label>Password</Label>
        <InputField color={errors.password ? '#ff5252' : '#74767b'}>
          <div className="password__field">
            {' '}
            <input
              {...register('password')}
              className="password__input"
              type={values ? 'password' : 'text'}
              placeholder="Enter password"
            ></input>
            <img
              onClick={handleClickShowPassword}
              className="password__icon"
              src={values ? PasswordIcon : ShowIcon}
              alt="Hide Password"
            />
          </div>
          <Validation>{errors.password?.message}</Validation>
        </InputField>
        <Label>Confirm Password</Label>
        <InputField color={errors.confirmPassword ? '#ff5252' : '#74767b'}>
          <div className="password__field">
            {' '}
            <input
              {...register('confirmPassword')}
              className="password__input"
              type={valuesConfirm ? 'password' : 'text'}
              placeholder="Confirm Password"
            ></input>
            <img
              onClick={handleClickShowConfirmPassword}
              className="password__icon"
              src={valuesConfirm ? PasswordIcon : ShowIcon}
              alt="Hide Password"
            />
          </div>
          <Validation>{errors.confirmPassword?.message}</Validation>
        </InputField>
        <Description>
          We will not share or sell your information to 3rd parties.
        </Description>
        <DescriptionSd>
          By clicking on <strong>Create Account</strong>, you agree to DeFi For
          You’s Terms and Conditions of Use.
        </DescriptionSd>
        <ReCAPTCHA
          sitekey="6LcSG9EaAAAAABvbpHkdugGmjEWeYPp6NoPPDEvt"
          onChange={onChange}
        />
        <Center>
          <DefiButton type="submit" width={'174px'} height={'48px'}>
            Create Account
          </DefiButton>
        </Center>
      </Form>
    </>
  );
}
