/**
 *
 * Cypto
 *
 */
import { useTranslation } from 'react-i18next';
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
  margin-bottom: 6px;
  color: #fff;
  line-height: 17px;
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
    @media (max-width: 576px) {
      width: 100%;
    }
  }
  .mt {
    color: #fff;
    line-height: 15px;
  }
  .btnSearch {
    margin-top: 12px;
    margin-bottom: 60px;
    @media (max-width: 576px) {
      margin: 40px 0;
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
  const { t } = useTranslation();
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
        <Container fluid="lg">
          <Row>
            <Col>
              <div>
                <P>{t('home.collateral')}</P>
                <Row>
                  <Div className="mx-1">
                    <Col sm="9" xs="9">
                      <InputField>
                        <div className="input ">
                          <input
                            type="number"
                            className="input input-slot"
                            placeholder={t('home.enter_amount')}
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
              </div>
              <Container className="px-0">
                <P>{t('home.or')}</P>
                <Row>
                  <Col xs="9">
                    <Button className="btn mb-3 px-4 py-2">
                      {t('home.choose')}
                    </Button>
                  </Col>
                </Row>
              </Container>
              <div>
                <P>{t('home.duration')}</P>
                <Row>
                  <Div className="mx-1">
                    <Col sm="9" xs="9">
                      <InputField>
                        <div className="input ">
                          <input
                            type="number"
                            className="input input-slot"
                            placeholder={t('home.duration')}
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
              </div>
              <div>
                <P>{t('home.loan_amount')}</P>
                <Row>
                  <Div className="mx-1">
                    <Col sm="9" xs="9">
                      <InputField>
                        <div className="input ">
                          <input
                            type="number"
                            className="input input-slot"
                            placeholder={t('home.enter_amount')}
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
              </div>
              <p
                className="mt"
                title="To get a loan quickly, you should set the desired loan amount between 50-70% of the collateral value"
              >
                {t('home.recommended')} <img src={img} alt="" />
              </p>
              <div className="btnSearch">
                <Link to="/resultBorrowCrypto">
                  <DefiButton
                    className="search my-sm-5 mb-xs-5"
                    width="100%"
                    height="54px"
                  >
                    <img src={imgSearch} alt="" /> {t('home.search')}
                  </DefiButton>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Main>
  );
}
