import styled from 'styled-components/macro';

export const Div = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  margin: -12px;
  .text {
    min-height: 24px;
  }
  .input {
    position: relative;
    box-sizing: border-box;
    color: #fff;
    height: 44px;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    [type='number'] {
      -moz-appearance: textfield;
    }

    &-slot {
      background: transparent;
      padding: 0 24px;
      width: 100%;
      border-radius: 22px;
      border: 1px solid #74767b;
      &:hover {
        border: 1px solid #fff;
      }
      &:focus {
        border: 2px solid #dba83d !important;
        outline: none;
      }
    }
    .defi-btn {
      position: absolute;
      top: 5px;
      right: 5px;
    }
  }

  .input-group {
    width: 70%;
    padding: 12px;
  }
  .drop {
    border: 1px solid #74767b;
    box-sizing: border-box;
    border-radius: 22px;
    height: 44px;
    width: 100%;
    margin: 12px;
    color: #fff;
    &:hover {
      border-color: #ffffff;
    }

    ._3tcyg {
      width: 100%;

      ._WbEAz {
        background-color: #2f3543;
        border-radius: 10px;

        ._r3jpc {
          ._2iQTD {
            background: #2d3341 !important;
          }
          .option:hover {
            background-color: #2a303c !important;
          }
          /* .option[toggleFocus] {
            background-color: #2c4059 !important;
          } */
        }
      }
      ._WbEAz ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #2f3543;
      }
      ._WbEAz ::-webkit-scrollbar {
        width: 5px;
        background-color: #2f3543;
      }
      ._WbEAz ::-webkit-scrollbar-thumb {
        background-color: #45484f;
        border: none;
      }
    }
    ._3LDgJ {
      border: none;
      width: 100%;
      &:focus {
        outline: none;
      }
    }
  }
`;
export const InputField = styled.div`
  width: 100%;
  height: 44px;
  box-sizing: border-box;
  border-radius: 22px;
`;
export const P = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  vertical-align: baseline;
`;
export const Main = styled.div`
  background: #171a23;
  border-radius: 30px;
  padding: 30px 0px 12px 0px;
  color: #fff;
  .rmsc {
    --rmsc-bg: rgba(47, 53, 67, 1);
    --rmsc-hover: #2d3341;
    --rmsc-selected: rgba(219, 168, 61, 0.3);
    --rmsc-radius: 22px;
    box-sizing: border-box;
    --rmsc-h: 44px;
    --rmsc-main: #dba83d;
    color: #fff;
    .icon {
      width: 40px;
      height: 40px;
      margin-right: 5px;
      &__value {
        width: 40px;
        height: 40px;
        margin: 5px;
      }
    }
    .dropdown-container {
      background-color: transparent !important;
      box-shadow: none;
      .dropdown-heading {
        height: 44px;
      }
      .options::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #2f3543;
      }
      .options::-webkit-scrollbar {
        width: 5px;
        background-color: #2f3543;
      }
      .options::-webkit-scrollbar-thumb {
        background-color: #45484f;
        border: none;
      }
      .dropdown-heading-value {
        span {
          display: flex;
          flex-wrap: wrap;
        }
      }
      .selectedItem {
        border: none;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 16.5px;
        padding-right: 10px;
        min-height: 33px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-space-evenly;
        margin: 10px 10px 10px 0px;
      }
    }
  }
  .multi-select {
    height: 44px;
  }
  .field {
    margin-top: 6px;
  }
  .multi {
    height: 44px;
  }
  .lendCrypto--Search {
    margin-top: 14px;
  }
  .lendnft--Search {
    margin-bottom: 94px;
  }
  .tabsRadio {
    .true {
      color: #dba83d;
    }
    .tab {
      display: flex;
      align-items: center;
      position: relative;
      padding-left: 35px;
      cursor: pointer;
      font-size: 22px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        &:checked ~ .checkmark {
          background-color: transparent;
          border: 2px solid #dba83d;
        }
        &:checked ~ .checkmark:after {
          display: block;
        }
      }
      .checkmark {
        position: absolute;
        top: -2px;
        left: 0;
        height: 24px;
        width: 24px;
        background-color: transparent;
        border-radius: 50%;
        border: 1px solid #fff;
        &:after {
          content: '';
          position: absolute;
          display: none;
          top: 3px;
          left: 3px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #dba83d;
        }

        &:hover {
          background-color: #ccc;
        }
      }
    }
    &__Crypto {
      margin-right: 28%;
    }
  }
  .search {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
  }
`;
