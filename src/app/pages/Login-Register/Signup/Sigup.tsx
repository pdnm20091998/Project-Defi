import styled from 'styled-components/macro';
import PasswordIcon from '../assets/img/showoff.png';
import ShowIcon from '../assets/img/show.png';
import DefiButton from '../../../components/DefiButton/DefiButton';
import { useState } from 'react';

const Label = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #ffff;
  margin-bottom: 6px;
  margin-top: 24px;
`;
const Description = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: #ffffff;
  max-width: 715px;
  margin: 12px 0 0 0;
  strong {
    color: #dba83d;
  }
`;
const InputField = styled.div`
  width: 100%;
  height: 44px;
  border: 1px solid #74767b;
  box-sizing: border-box;
  border-radius: 22px;
  :hover {
    border: 1px solid #fff;
  }
  :focus {
    border: 1px solid #dba83d;
  }
  .email__field {
    display: flex;
    flex: 1 1 auto;
  }
  .email__input {
    display: flex;
    flex: 1 1 auto;
    padding: 21px 20px;
    background-color: transparent;
    color: #a2a3a7;
    border: none;
    outline: none;
    height: 34px;
  }
  .password__field {
    display: flex;
  }
  .password__input {
    flex: 1 1 auto;
    padding: 21px 20px;
    background-color: transparent;
    color: #a2a3a7;
    border: none;
    outline: none;
    height: 34px;
  }
  .password__icon {
    width: 22px;
    height: 19px;
    cursor: pointer;
    margin: 13px;
  }
`;
export default function Signup() {
  const [values, setValues] = useState(true);
  const [valuesConfirm, setValuesConfirm] = useState(true);
  const handleClickShowPassword = () => {
    setValues(!values);
  };
  const handleClickShowConfirmPassword = () => {
    setValuesConfirm(!valuesConfirm);
  };
  return (
    <>
      <Label>Name</Label>
      <InputField>
        <div className="email__field">
          {' '}
          <input
            className="email__input"
            type="text"
            placeholder="Enter name"
          ></input>
        </div>
      </InputField>
      <Label>Email</Label>
      <InputField>
        <div className="email__field">
          {' '}
          <input
            className="email__input"
            type="email"
            placeholder="Enter email"
          ></input>
        </div>
      </InputField>
      <Label>Password</Label>
      <InputField>
        <div className="password__field">
          {' '}
          <input
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
      </InputField>
      <Label>Confirm Password</Label>
      <InputField>
        <div className="password__field">
          {' '}
          <input
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
      </InputField>
      <Description>
        We will not share or sell your information to 3rd parties.
      </Description>
      <Description>
        By clicking on <strong>Create Account</strong>, you agree to DeFi For
        You’s Terms and Conditions of Use.
      </Description>
      <div>
        <DefiButton width={'174px'} height={'48px'}>
          Create Account
        </DefiButton>
      </div>
    </>
  );
}
