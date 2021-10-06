/**
 *
 * Form
 *
 */
import styled from 'styled-components/macro';
import { useState } from 'react';

import ComboBox from 'react-responsive-combo-box';
import DefiButton from '../../../../../components/DefiButton/DefiButton';
interface Props {
  name?: string;
  placeholder?: string;
  button?: boolean;
}
const ComboBoxExample = ({ name }) => {
  const [text, setText] = useState(name);

  const data = [
    'BNC',
    'ETC',
    'ZEC',
    'XRP',
    'LTC',
    'MKR',
    'BAT',
    'ETH',
    'DFY',
    'USDT',
    'FIL',
  ];
  return (
    <div className="drop ">
      <ComboBox placeholder={text} options={data} enableAutocomplete />
    </div>
  );
};
const Div = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  margin: -12px;

  .input {
    position: relative;
    box-sizing: border-box;
    color: #fff;
    height: 44px;
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
    width: 20%;
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
        }
      }
      ._WbEAz ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
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
const P = styled.p`
  color: #fff;
`;
const InputField = styled.div`
  width: 100%;
  height: 44px;
  box-sizing: border-box;
  border-radius: 22px;
`;
export function Form(props: Props) {
  return (
    <>
      <P>{props.name}</P>
      <Div>
        <InputField>
          <div className="input ">
            <input
              className="input input-slot"
              placeholder={props.placeholder}
            ></input>
            {props.button && (
              <DefiButton className="defi-btn" width="64px" height="34px">
                Max
              </DefiButton>
            )}
          </div>
        </InputField>
        <ComboBoxExample name="" />
      </Div>
    </>
  );
}
