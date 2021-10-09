/**
 *
 * Form
 *
 */
import styled from 'styled-components/macro';
import { useState, useEffect } from 'react';
import ComboBox from 'react-responsive-combo-box';
import DefiButton from '../../../../../components/DefiButton/DefiButton';
import { Container, Row, Col } from 'react-bootstrap';
import 'react-responsive-combo-box/dist/index.css';
import { getAsset } from '../../../../../../api/homePageApi.js';

interface ComboBoxProps {
  name?: string;
  array?: string;
}
const ComboBoxExample = (props: ComboBoxProps) => {
  let collateral: any[] = [];
  let loan: any[] = [];
  let collateralOption: any[] = ['All'];
  let loanOption: any[] = ['All'];
  useEffect(() => {
    const resultAsset = () => {
      getAsset()
        .then(asset => asset.data)
        .then((e: any) => {
          e.data.map(o => {
            o.isWhitelistCollateral && collateral.push(o);
            o.isWhitelistSupply && loan.push(o);
            return o;
          });
        })
        .then(() => {
          collateral.forEach(e => {
            collateralOption.push(`${e.symbol}`);
          });
          loan.forEach(e => {
            loanOption.push(e.symbol);
          });
        })

        .catch(e => e);
    };

    async function asyncCall() {
      await resultAsset();
    }
    asyncCall();
  }, []);

  const options = {
    data: collateralOption,
    data2: loanOption,
    week: ['All', 'Weeks', 'Months'],
  };

  return (
    <div className="drop">
      <ComboBox
        className={`option`}
        selectedOptionColor="#2c4059"
        defaultValue={`${props.array ? options[props.array][0] : []}`}
        placeholder={props.name}
        options={props.array ? options[props.array] : []}
        onBlur={e => {
          return <div>hello {e}</div>;
        }}
        enableAutocomplete
      />
    </div>
  );
};
const Div = styled.div`
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
          .option[toggleFocus] {
            background-color: #2c4059 !important;
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
interface Props {
  name?: string;
  placeholder?: string;
  button?: boolean;
  filter?: string;
  arr?: string;
}
export function Form(props: Props) {
  return (
    <>
      <Container fluid="lg">
        <P>{props.name}</P>
        <Row>
          <Div className="mx-1">
            <Col sm="8" xs="8">
              <InputField>
                <div className="input ">
                  <input
                    type="number"
                    id="tentacles"
                    name="tentacles"
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
            </Col>
            <Col sm="4" xs="4">
              <ComboBoxExample name={props.filter} array={props.arr} />
            </Col>
          </Div>
        </Row>
        <div className="pt-3 pb-2"></div>
      </Container>
    </>
  );
}
