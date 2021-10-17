import styled from 'styled-components';
export const Wrapper = styled.div`
  .container {
    background-color: #282c37;
    color: #fff;
    border-radius: 20px;
    padding: 0;

    @media (max-width: 1024px) {
      border-radius: 0px;
    }
  }

  .header {
    position: relative;
    border-bottom: 1px solid #45484f;
    padding: 8px 16px;

    span {
      text-decoration: underline;
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      cursor: pointer;
    }

    .exitMenu {
      position: absolute;
      top: 0;
      right: 16px;
      font-size: 30px;
      cursor: pointer;
      display: none;

      @media screen and (max-width: 992px) {
        display: block;
      }
    }
  }

  .searchFilter {
    padding: 16px 12px 0 8px;
    width: 100%;
    fieldset {
      height: 40px;
      border: none;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 22px;
      font-size: 14px;
      font-weight: 400;
      line-height: 19px;
    }
    input {
      padding: 0;
      height: 30px;
      color: #a2a3a7;
      border-radius: 22px;
    }
    svg {
      color: #a2a3a7;
    }
  }
  .borderBottom {
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #45484f;
  }
`;
