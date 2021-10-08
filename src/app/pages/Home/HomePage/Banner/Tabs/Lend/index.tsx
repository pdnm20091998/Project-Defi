/**
 *
 * Lend
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { Container, Row, Col } from 'react-bootstrap';
import { Form } from '../../Form/index';
import { useState } from 'react';
import DefiButton from '../../../../../../components/DefiButton/DefiButton';
import imgSearch from '../../assets/search.svg';
import imgClose from '../../assets/x.svg';
import { MultiSelect } from 'react-multi-select-component';
const options = [
  { label: 'BNC ', value: 'BNC' },
  { label: 'ETC ', value: 'ETC' },
  { label: 'ZEC ', value: 'ZEC' },
  { label: 'XRP ', value: 'XRP' },
  { label: 'LTC ', value: 'LTC' },
  { label: 'MKR ', value: 'MKR' },
  { label: 'BAT ', value: 'BAT' },
  { label: 'DFY ', value: 'DFY' },
  { label: 'ETH ', value: 'ETH' },
  { label: 'USDT ', value: 'USDT' },
  { label: 'FIL ', value: 'FIL' },
];

const DefaultItemRenderer = ({ checked, option, onClick, disabled }) => (
  <div onClick={onClick} className={`item-renderer ${disabled && 'disabled'}`}>
    <span>{option.label}</span>
  </div>
);

const Example = () => {
  const [selected, setSelected] = useState([]);
  const customValueRenderer = selected => {
    return selected.length
      ? selected.map(({ label }) => {
          return (
            <div>
              <span className="selectedItem">
                {label} <img src={imgClose} alt="" />
              </span>
            </div>
          );
        })
      : '😶 No Items Selected';
  };
  return (
    <div>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        hasSelectAll={true}
        disableSearch={true}
        ItemRenderer={item => (
          <DefaultItemRenderer
            checked={item.checked}
            option={item.option}
            onClick={item.onClick}
            disabled={item.disabled}
          />
        )}
        valueRenderer={customValueRenderer}
      />
    </div>
  );
};
const Main = styled.div`
  background: #171a23;
  border-radius: 30px;
  padding: 30px 0px;
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
    .dropdown-container {
      background-color: transparent !important;

      .options::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
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
        padding: 6px 30px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-space-evenly;
        margin: 10px 10px 10px 0px;
      }
    }
  }

  .tabsRadio {
    .tab {
      display: block;
      position: relative;
      padding-left: 35px;
      margin-bottom: 12px;
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
        top: 0;
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
  }
  .search {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
  }
`;
const P = styled.p``;
interface Props {}
export function Lend(props: Props) {
  const [component, setComponent] = useState('Crypto');
  return (
    <Main>
      <div>
        <Row>
          <Col>
            <Form
              name="Maximum loan amount"
              placeholder="Enter amount"
              filter="Currency"
              arr="data"
              button={true}
            ></Form>
            <Form
              name="Duration"
              placeholder="Duration"
              filter="Duration"
              arr="week"
            ></Form>
            <Container fluid="lg">
              <P>Collateral</P>
              <div className="tabsRadio d-flex ">
                <label className="tabsRadio__Crypto tab col-6">
                  <input
                    type="radio"
                    name="radio"
                    onClick={() => setComponent('Crypto')}
                    defaultChecked={true}
                  />
                  Crypto
                  <span className="checkmark"></span>
                </label>
                <label className="tabsRadio__NFT tab col-6">
                  <input
                    type="radio"
                    name="radio"
                    onClick={() => setComponent('NFT')}
                  />
                  NFT
                  <span className="checkmark"></span>
                </label>
              </div>
              {component === 'Crypto' ? (
                <Example />
              ) : (
                <DefiButton
                  className="search"
                  width="100%"
                  height="54px"
                  margin="38px 0px 124px 0px"
                >
                  <img src={imgSearch} alt="" />
                  Search
                </DefiButton>
              )}
            </Container>
          </Col>
        </Row>
      </div>
    </Main>
  );
}
