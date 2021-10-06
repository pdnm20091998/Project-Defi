/**
 *
 * Cypto
 *
 */
import * as React from 'react';
import { useState } from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import styled from 'styled-components/macro';
import ComboBox from 'react-responsive-combo-box';
import 'react-responsive-combo-box/dist/index.css';
import img from '../../../assets/Vector.svg';
import img1 from '../../../assets/search.svg';
import DefiButton from '../../../../../../../components/DefiButton/DefiButton';

interface Props {}
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
  flex: 1 1 auto;
  margin: -12px;
  .input {
    border: 1px solid #74767b;
    box-sizing: border-box;
    border-radius: 22px;
    height: 44px;
    color: #fff;
    &:hover {
      border-color: #ffffff;
    }
    &:focus {
      border-color: #dba83d;
    }
  }
  .input-slot {
    background: transparent;
    padding: 0 24px;
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
    &:focus {
      border-color: #dba83d;
    }
    input:focus {
      outline: none;
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
    }
  }
`;
const P = styled.p`
  margin-bottom: 5px;
  img {
    width: 10px;
    height: 10px;
  }
`;
const Main = styled.div`
  .btn-primary {
    background: #171a23;
    border: 1px solid #dba83d;
    box-sizing: border-box;
    border-radius: 25px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-transform: capitalize;
    color: #dba83d;
  }
  .mt {
    margin-top: 6px;
  }
`;
export function Crypto(props: Props) {
  const [num, setNum] = useState({});
  const onHandleTelephoneChange = e => {
    let telephone = e.target.value;

    if (!Number.isInteger(telephone)) {
      return;
    }
    setNum({
      [e.target.name]: telephone,
    });
  };
  return (
    <Main>
      <P>Collateral</P>
      <Div>
        <InputGroup onChange={onHandleTelephoneChange}>
          <FormControl
            className="input input-slot"
            placeholder="Enter amount"
          />
        </InputGroup>
        <ComboBoxExample name="Currency" />
      </Div>
      <P>Or</P>
      <Button>Choose Existing collateral</Button>
      <P>Duration</P>
      <Div>
        <InputGroup>
          <FormControl className="input input-slot" placeholder="Duration" />
        </InputGroup>
        <ComboBoxExample name="Weeks" />
      </Div>
      <P>Loan amount</P>
      <Div>
        <InputGroup>
          <FormControl
            className="input input-slot"
            placeholder="Enter amount"
          />
        </InputGroup>
        <ComboBoxExample name="USDT" />
      </Div>
      <P className="mt">
        Recommended amount <img src={img} alt="" />
      </P>
      <DefiButton width="100%" height="54px" margin="60px 0px 0px">
        <img src={img1} alt="" /> Search
      </DefiButton>
    </Main>
  );
}
