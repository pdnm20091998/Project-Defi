import styled from 'styled-components/macro';

export const Label = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #ffff;
  margin-bottom: 6px;
  margin-top: 24px;
`;
export const Forgot = styled(Label)`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;
export const Center = styled.div`
  text-align: center;
`;
export const Validation = styled.span`
  color: #ff5252;
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;
`;
export const InputField = styled.div<{
  color?: string;
}>`
  width: 100%;
  height: 44px;
  border: 1px solid ${props => props.color};
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
    border-radius: 22px;
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
    border-radius: 22px;
  }
  .password__icon {
    width: 22px;
    height: 19px;
    margin: 13px;
    cursor: pointer;
  }
`;
