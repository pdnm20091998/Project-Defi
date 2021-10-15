import React, { useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { loginUserAction } from '../../../actions/auth/authActions';
import { WrongPasswordModal } from '../Modal/wrongPassword';
import { NotActiveModal } from '../Modal/notActive';
import { RootState } from 'app/reducer/reducers';
import { useTranslation } from 'react-i18next';
type UserSubmitForm = {
  email: string;
  password: string;
};

export default function Login() {
  const { t } = useTranslation();
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
  // Modal
  const [wrongPasswordShow, setwrongPasswordShow] = useState(false);
  const [notActiveShow, setnotActiveShow] = useState(false);
  const errorLogin: any = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    if (errorLogin.access) {
      if (errorLogin.access.status === 401) {
        setwrongPasswordShow(true);
      }
      if (errorLogin.access.status === 404) {
        setnotActiveShow(true);
      }
    }
  }, [errorLogin]);
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
        <Label>{t('login.password')}</Label>
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
          <Forgot>{t('login.forgot_password')}</Forgot>
        </div>
        <Center>
          <DefiButton type="submit" width={'117px'} height={'48px'}>
            {t('login.login_btn')}
          </DefiButton>
        </Center>
        <WrongPasswordModal
          show={wrongPasswordShow}
          onHide={() => setwrongPasswordShow(false)}
        />
        <NotActiveModal
          show={notActiveShow}
          onHide={() => setnotActiveShow(false)}
        />
      </Form>
    </>
  );
}
