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
const Forgot = styled(Label)`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
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
    margin: 13px;
    cursor: pointer;
  }
`;
export default function Login() {
  const [values, setValues] = useState(true);
  const handleClickShowPassword = () => {
    setValues(!values);
  };
  return (
    <>
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
      <div>
        <Forgot>Forgot your password?</Forgot>
      </div>
      <div>
        <DefiButton width={'117px'} height={'48px'}>
          Login
        </DefiButton>
      </div>
    </>
  );
}
