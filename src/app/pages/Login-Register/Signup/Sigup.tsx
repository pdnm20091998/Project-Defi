import PasswordIcon from '../assets/img/showoff.png';
import ShowIcon from '../assets/img/show.png';
import DefiButton from '../../../components/DefiButton/DefiButton';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import validator from 'validator';
import ReCAPTCHA from 'react-google-recaptcha';
import {
  Label,
  InputField,
  Description,
  DescriptionSd,
  Center,
  Validation,
} from './style';

export default function Signup() {
  const [values, setValues] = useState(true);
  const [valuesConfirm, setValuesConfirm] = useState(true);
  const [nameError, setNameError] = useState(true);
  const [emailError, setEmailError] = useState(true);
  const [passwordError, setPasswordError] = useState('');
  const [bodercolor, setBodercolor] = useState('#74767b');
  const [confirmPassword, setconfirmPassword] = useState(true);

  const [pass, setPass] = useState('');
  // Show password
  const handleClickShowPassword = () => {
    setValues(!values);
  };
  const handleClickShowConfirmPassword = () => {
    setValuesConfirm(!valuesConfirm);
  };
  //Validate name
  const validateName = e => {
    var name = e.target.value;
    var reg =
      /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
    var test = reg.test(name);
    if (test) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };
  //Validate email
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
    setPass(pass);
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
  //Validate confirm password
  const validateConfirmPassword = e => {
    var confirm = e.target.value;
    if (confirm === pass) {
      setconfirmPassword(true);
    } else {
      setconfirmPassword(false);
    }
  };

  return (
    <>
      <Form>
        <Label>Name</Label>
        <InputField color={nameError ? '#74767b' : '#ff5252'}>
          <div className="email__field">
            {' '}
            <input
              onChange={e => validateName(e)}
              className="email__input"
              type="text"
              placeholder="Enter name"
            ></input>
          </div>
          <Validation>{nameError ? '' : 'Invalid name'}</Validation>
        </InputField>
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
        <Label>Confirm Password</Label>
        <InputField color={confirmPassword ? '#74767b' : '#ff5252'}>
          <div className="password__field">
            {' '}
            <input
              onChange={e => validateConfirmPassword(e)}
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
          <Validation>{confirmPassword ? '' : 'Invalid password'}</Validation>
        </InputField>
        <Description>
          We will not share or sell your information to 3rd parties.
        </Description>
        <DescriptionSd>
          By clicking on <strong>Create Account</strong>, you agree to DeFi For
          You’s Terms and Conditions of Use.
        </DescriptionSd>
        <ReCAPTCHA sitekey="6LfNh7IcAAAAANlttyrvXXR9DwRC0MsyO5mA4g8o" />,
        <Center>
          <DefiButton type="submit" width={'174px'} height={'48px'}>
            Create Account
          </DefiButton>
        </Center>
      </Form>
    </>
  );
}
