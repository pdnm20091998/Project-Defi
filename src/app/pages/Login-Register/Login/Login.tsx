import PasswordIcon from '../assets/img/showoff.png';
import ShowIcon from '../assets/img/show.png';
import DefiButton from '../../../components/DefiButton/DefiButton';
import { useState } from 'react';
import { Label, InputField, Forgot, Center, Validation } from './style';
import validator from 'validator';
import { Form } from 'react-bootstrap';

export default function Login() {
  const [values, setValues] = useState(true);
  const [emailError, setEmailError] = useState(true);
  const [passwordError, setPasswordError] = useState('');
  const [bodercolor, setBodercolor] = useState('#74767b');
  //show password
  const handleClickShowPassword = () => {
    setValues(!values);
  };
  // Validate email
  const validateEmail = e => {
    var email = e.target.value;
    if (validator.isEmail(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };
  //Validate password
  const validatePassword = e => {
    var pass = e.target.value;
    var reg =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var test = reg.test(pass);
    if (pass.length < 8 && pass.length > 255) {
      setPasswordError(
        'Password length should be between 8 to 255 characters.',
      );
      setBodercolor('#ff5252');
    } else if (!test) {
      setPasswordError('Contain at least one capital letter and one number');
      setBodercolor('#ff5252');
    } else {
      setPasswordError('');
      setBodercolor('#74767b');
    }
  };

  return (
    <>
      <Form>
        <Label>Email</Label>
        <InputField color={emailError ? '#74767b' : '#ff5252'}>
          <div className="email__field">
            {' '}
            <input
              onChange={e => validateEmail(e)}
              className="email__input"
              type="email"
              placeholder="Enter email"
            ></input>
          </div>
          <Validation>{emailError ? '' : 'Invalid email'}</Validation>
        </InputField>
        <Label>Password</Label>
        <InputField color={bodercolor}>
          <div className="password__field">
            {' '}
            <input
              onChange={e => validatePassword(e)}
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
          <Validation>{passwordError}</Validation>
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
