/**
 *
 * Lend
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { Container, Row, Col } from 'react-bootstrap';
import { Form } from '../../Form/index';
import { useEffect, useState } from 'react';
import DefiButton from '../../../../../../components/DefiButton/DefiButton';
import imgSearch from '../../assets/search.svg';
import imgClose from '../../assets/x.svg';
import { MultiSelect } from 'react-multi-select-component';
import { getAsset } from '../../../../../../../api/homePageApi.js';
import { Link } from 'react-router-dom';
interface OptionsItem {
  label: string;
  value: string;
}
const options: Array<OptionsItem> = [];
const optionsItems: any[] = [];

const DefaultItemRenderer = ({ checked, option, onClick, disabled }) => (
  <div
    key={option.label}
    onClick={onClick}
    className={`item-renderer ${disabled && 'disabled'}`}
  >
    <img
      className="icon"
      src={`https://staging.app.defiforyou.uk/_nuxt/img/${option.value}`}
      alt=""
    />
    <P>{option.label}</P>
  </div>
);
const Example = () => {
  const [selected, setSelected] = useState([]);
  useEffect(() => {
    const resultAsset = () => {
      getAsset()
        .then(asset => asset.data)
        .then((e: any) => {
          e.data.map((o: any) => {
            o.isWhitelistCollateral && optionsItems.push(o);
            return o;
          });
          return optionsItems;
        })
        .then((o: any[]) => {
          o.forEach(e => {
            let img: string;
            if (options.length < 9) {
              switch (e.symbol) {
                case 'XRP':
                  img = 'XRP.7ff389b.png';
                  options.push({
                    label: e.symbol,
                    value: img,
                  });
                  break;
                case 'ETH':
                  img = 'ETH.d810d23.png';
                  options.push({
                    label: e.symbol,
                    value: img,
                  });
                  break;
                case 'LTC':
                  img = 'LTC.4b4595e.png';
                  options.push({
                    label: e.symbol,
                    value: img,
                  });
                  break;
                case 'BTC':
                  img = 'BTC.fba89d5.png';
                  options.push({
                    label: e.symbol,
                    value: img,
                  });
                  break;
                case 'DFY':
                  img = 'DFY.a0b985b.png';
                  options.push({
                    label: e.symbol,
                    value: img,
                  });
                  break;
                case 'BNB':
                  img = 'BNB.978ee2b.png';
                  options.push({
                    label: e.symbol,
                    value: img,
                  });
                  break;
                case 'DOT':
                  img = 'DOT.69cb9b6.png';
                  options.push({
                    label: e.symbol,
                    value: img,
                  });
                  break;
                case 'ADA':
                  img = 'ADA.4647c52.png';
                  options.push({
                    label: e.symbol,
                    value: img,
                  });
                  break;
                case 'WBNB':
                  img = 'WBNB.978ee2b.png';
                  options.push({
                    label: e.symbol,
                    value: img,
                  });
                  break;

                default:
                  break;
              }
            }
          });
          return options;
        })
        .catch(e => e);
    };
    async function asyncCall() {
      await resultAsset();
    }
    asyncCall();
    return () => resultAsset();
  }, []);

  const customValueRenderer = selected => {
    return selected.length
      ? selected.map(({ label, value }) => {
          return (
            <div key={label}>
              <span className="selectedItem ">
                <div className="d-flex me-2">
                  <img
                    className="icon__value"
                    src={`https://staging.app.defiforyou.uk/_nuxt/img/${value}`}
                    alt=""
                  />
                  <P>{label}</P>
                </div>
                <img src={imgClose} alt="" />
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
    .icon {
      width: 20px;
      height: 20px;
      margin-right: 5px;
      &__value {
        width: 20px;
        height: 20px;
        margin: 5px;
      }
    }
    .dropdown-container {
      background-color: transparent !important;
      .dropdown-heading {
        height: auto;
      }
      .options {
      }
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
        padding-right: 10px;
        min-height: 33px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-space-evenly;
        margin: 10px 10px 10px 0px;
      }
    }
  }

  .tabsRadio {
    .true {
      color: #dba83d;
    }
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
        top: -4px;
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
      margin-right: 25%;
    }
  }
  .search {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
  }
`;
const P = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
`;
interface Props {}
export function Lend(props: Props) {
  const [component, setComponent] = useState(true);
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
              <P className="pb-2">Collateral</P>
              <div className="tabsRadio d-flex my-3">
                <label className="tabsRadio__Crypto tab ">
                  <input
                    type="radio"
                    name="radio"
                    onClick={() => setComponent(true)}
                    defaultChecked={true}
                  />
                  <P className={component ? 'true' : ''}>Crypto</P>
                  <span className="checkmark"></span>
                </label>
                <label className="tabsRadio__NFT tab">
                  <input
                    type="radio"
                    name="radio"
                    onClick={() => setComponent(false)}
                  />
                  <P className={!component ? 'true' : ''}>NFT</P>
                  <span className="checkmark"></span>
                </label>
              </div>
              {component ? (
                <div>
                  <Row>
                    <Example />
                  </Row>
                  <Row>
                    <Link to="/resultLendCrypto">
                      <DefiButton
                        className="search mb-lg-5 mb-sm-3 mb-xs-3"
                        width="100%"
                        height="3.4rem"
                        margin="38px 0px"
                      >
                        <img src={imgSearch} alt="" /> Search
                      </DefiButton>
                    </Link>
                  </Row>
                </div>
              ) : (
                <Link to="/resultLendNFT">
                  <DefiButton
                    className="search mb-lg-5 mb-sm-3 mb-xs-3"
                    width="100%"
                    height="54px"
                    margin="38px 0px"
                  >
                    <img src={imgSearch} alt="" />
                    Search
                  </DefiButton>
                </Link>
              )}
            </Container>
          </Col>
        </Row>
      </div>
    </Main>
  );
}
