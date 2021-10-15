/**
 *
 * Cypto
 *
 */
import * as React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components/macro';
import 'react-responsive-combo-box/dist/index.css';
import img from '../../../assets/Vector.svg';
import imgSearch from '../../../assets/search.svg';
import DefiButton from '../../../../../../../components/DefiButton/DefiButton';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ComboBox from 'react-responsive-combo-box';
import { Div, InputField } from 'app/pages/Home/HomePage/components/style';
import { useBorrowContext } from 'app/components/common/context/borrowCryptoContext';
interface Props {
  dataAsset?: Array<object>;
}

const P = styled.p`
  margin-bottom: 5px;
  color: #fff;
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
  .btn {
    box-shadow: none !important;
  }
  .mt {
    margin-top: 6px;
    &[title]:after {
      position: absolute;
      content: attr(title);
      background-color: #c9cacd83;
      border: none;
      padding: 5px;
      color: #ffffff;
      display: block;
      border-radius: 5px;
      padding: 5px 20px 5px 15px;
      transform: scale(0);
      -webkit-transition: all 1s;
      transition: all 1s;
    }
    &[title]:hover:after {
      transform: scale(1);
      -webkit-transition: all 1s;
      transition: all 1s;
    }
  }
  .search {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
  }
`;
export function Crypto(props: Props) {
  // combobox duration type
  const duration: any[] = ['All', 'Weeks', 'Months'];
  // combobox collateral type
  const collateral: any[] = ['All'];
  const data = props.dataAsset;
  data &&
    data.map((e: any) => {
      e.isWhitelistCollateral && collateral.push(e.symbol);
      return collateral;
    });
  // combobox loan type
  const loanCurrency: any[] = ['All'];
  const dataLoan = props.dataAsset;
  dataLoan &&
    dataLoan.map((e: any) => {
      e.isWhitelistSupply && loanCurrency.push(e.symbol);
      return loanCurrency;
    });
  //use context
  const {
    setCollateralAmount,
    setCollateralSymbols,
    setDurationTypes,
    setLoanSymbols,
    setDurationQty,
    setLoanAmount,
  } = useBorrowContext();
  const handleCollateralChange = e => {
    setCollateralAmount(e.target.value);
  };
  const handleDurationQty = e => {
    setDurationQty(e.target.value);
  };
  const handleLoanAmount = e => {
    setLoanAmount(e.target.value);
  };
  return (
    <Main>
      <div>
        <Row>
          <Col>
            <div>
              <Container fluid="lg">
                <P>Collateral</P>
                <Row>
                  <Div className="mx-1">
                    <Col sm="9" xs="9">
                      <InputField>
                        <div className="input ">
                          <input
                            type="number"
                            className="input input-slot"
                            placeholder="Enter amount"
                            onChange={handleCollateralChange}
                          ></input>
                        </div>
                      </InputField>
                    </Col>
                    <Col sm="3" xs="3">
                      <div className="drop">
                        <ComboBox
                          className={`option`}
                          selectedOptionColor="#2c4059"
                          defaultValue={`${collateral[0]}`}
                          placeholder="Currency"
                          options={collateral}
                          enableAutocomplete
                          onSelect={e => setCollateralSymbols(e)}
                        />
                      </div>
                    </Col>
                  </Div>
                </Row>
                <div className="pt-3 pb-2"></div>
              </Container>
            </div>
            <Container fluid="lg">
              <P>Or</P>
              <Button className="btn mb-3 px-4 py-2">
                Choose Existing collateral
              </Button>
            </Container>
            <div>
              <Container fluid="lg">
                <P>Duration</P>
                <Row>
                  <Div className="mx-1">
                    <Col sm="9" xs="9">
                      <InputField>
                        <div className="input ">
                          <input
                            type="number"
                            className="input input-slot"
                            placeholder="Duration"
                            onChange={handleDurationQty}
                          ></input>
                        </div>
                      </InputField>
                    </Col>
                    <Col sm="3" xs="3">
                      <div className="drop">
                        <ComboBox
                          className={`option`}
                          selectedOptionColor="#2c4059"
                          defaultValue={`${duration[0]}`}
                          placeholder="Currency"
                          options={duration}
                          enableAutocomplete
                          // onSelect={e => setDurationTypes(e)}
                          onSelect={option => {
                            if (option === 'All') {
                              setDurationTypes('');
                            } else if (option === 'Weeks') {
                              setDurationTypes('0');
                            } else if (option === 'Months') {
                              setDurationTypes('1');
                            }
                          }}
                        />
                      </div>
                    </Col>
                  </Div>
                </Row>
                <div className="pt-3 pb-2"></div>
              </Container>
            </div>
            <div>
              <Container fluid="lg">
                <P>Loan Amount</P>
                <Row>
                  <Div className="mx-1">
                    <Col sm="9" xs="9">
                      <InputField>
                        <div className="input ">
                          <input
                            type="number"
                            className="input input-slot"
                            placeholder="Enter amount"
                            onChange={handleLoanAmount}
                          ></input>
                        </div>
                      </InputField>
                    </Col>
                    <Col sm="3" xs="3">
                      <div className="drop">
                        <ComboBox
                          className={`option`}
                          selectedOptionColor="#2c4059"
                          defaultValue={`${loanCurrency[0]}`}
                          placeholder="Currency"
                          options={loanCurrency}
                          enableAutocomplete
                          onSelect={e => setLoanSymbols(e)}
                        />
                      </div>
                    </Col>
                  </Div>
                </Row>
                <div className="pt-3 pb-2"></div>
              </Container>
            </div>
            <Container fluid="lg">
              <P
                className="mt"
                title="To get a loan quickly, you should set the desired loan amount between 50-70% of the collateral value"
              >
                Recommended amount <img src={img} alt="" />
              </P>
              <div>
                <Link to="/resultBorrowCrypto">
                  <DefiButton
                    className="search my-sm-5 mb-xs-5"
                    width="100%"
                    height="54px"
                  >
                    <img src={imgSearch} alt="" /> Search
                  </DefiButton>
                </Link>
              </div>
            </Container>
          </Col>
        </Row>
      </div>
    </Main>
  );
}
