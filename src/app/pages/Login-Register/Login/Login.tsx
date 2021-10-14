import React from 'react';
import PasswordIcon from '../assets/img/showoff.png';
import ShowIcon from '../assets/img/show.png';
import DefiButton from '../../../components/DefiButton/DefiButton';
import { useState } from 'react';
import { Label, InputField, Forgot, Center, Validation } from './style';
import { Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginUserAction } from '../../../actions/auth/authActions';

type UserSubmitForm = {
  email: string;
  password: string;
};

export default function Login() {
  const [values, setValues] = useState(true);
  const dispatch = useDispatch();
  let history = useHistory();
  //validate
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
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
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema),
  });
  // Submit login form
  const onSubmit = (data: UserSubmitForm) => {
    const dataLogin = JSON.parse(JSON.stringify(data));
    const username = dataLogin.email;
    const password = dataLogin.password;
    const logindata = { username, password, history };
    dispatch(loginUserAction(logindata));
  };

  //show password
  const handleClickShowPassword = () => {
    setValues(!values);
  };
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>Email</Label>
        <InputField color={errors.email ? '#ff5252' : '#74767b'}>
          <div className="email__field">
            {' '}
            <input
              className="email__input"
              type="email"
              placeholder="Enter email"
              {...register('email')}
            ></input>
          </div>
          <Validation>{errors.email?.message}</Validation>
        </InputField>
        <Label>Password</Label>
        <InputField color={errors.password ? '#ff5252' : '#74767b'}>
          <div className="password__field">
            {' '}
            <input
              className="password__input"
              type={values ? 'password' : 'text'}
              placeholder="Enter password"
              {...register('password')}
            />
            <img
              onClick={handleClickShowPassword}
              className="password__icon"
              src={values ? PasswordIcon : ShowIcon}
              alt="Hide Password"
            />
          </div>
          <Validation>{errors.password?.message}</Validation>
        </InputField>
        <div>
          <Forgot>Forgot your password?</Forgot>
        </div>
        <Center>
          <DefiButton type="submit" width={'117px'} height={'48px'}>
            Login
          </DefiButton>
        </Center>
      </Form>
    </>
  );
}
