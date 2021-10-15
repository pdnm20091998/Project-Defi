/**
 *
 * Lend
 *
 */
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import DefiButton from '../../../../../../components/DefiButton/DefiButton';
import imgSearch from '../../assets/search.svg';
import imgClose from '../../assets/x.svg';
import { MultiSelect } from 'react-multi-select-component';
import { getAsset } from '../../../../../../service/apiAsset/apiAsset';
import { Link } from 'react-router-dom';
import { Div, InputField, P, Main } from '../../../components/style';
import ComboBox from 'react-responsive-combo-box';
import { useLendContext } from 'app/components/common/context/lendNftContext';
import { useLendCryptoContext } from 'app/components/common/context/lendCryptoContext';

interface OptionsItem {
  label: string;
  value: string;
}

const DefaultItemRenderer = ({ checked, option, onClick, disabled }) => (
  <div
    key={option.label}
    onClick={onClick}
    className={`item-renderer ${disabled && 'disabled'}`}
  >
    {option.value && (
      <img
        className="icon"
        src={`https://staging.app.defiforyou.uk/_nuxt/img/${option.value}`}
        alt=""
      />
    )}
    <P>{option.label}</P>
  </div>
);
const dataSymbol = {
  XRP: 'XRP.7ff389b.png',
  ETH: 'ETH.d810d23.png',
  LTC: 'LTC.4b4595e.png',
  BTC: 'BTC.fba89d5.png',
  DFY: 'DFY.a0b985b.png',
  BNB: 'BNB.978ee2b.png',
  DOT: 'DOT.69cb9b6.png',
  ADA: 'ADA.4647c52.png',
  WBNB: 'WBNB.978ee2b.png',
};

interface Props {
  dataAsset?: Array<object>;
}
export function Lend(props: Props) {
  const { t } = useTranslation();
  const [component, setComponent] = useState(true);
  // Combobox duration type
  const week = ['All', 'Weeks', 'Months'];
  // combobox loan type
  const loanCurrency: any[] = ['All'];
  const data = props.dataAsset;
  data &&
    data.map((e: any) => {
      e.isWhitelistSupply && loanCurrency.push(e.symbol);
      return loanCurrency;
    });
  const [selected, setSelected] = useState([]);
  const [options, setOptions] = useState<Array<OptionsItem>>([]);

  const handleSelected = item => {
    setSelected(item);
    const arrLabel = item?.map(option => option.label);
    setItem(arrLabel.join(','));
  };
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
  // import lendNftContext
  const { setLoanAmount, setLoanSymbol, setLoanDuration, setLoanDurationType } =
    useLendContext();
  // import lendCryptoContext
  const { setLA, setLS, setLD, setLDType, setItem } = useLendCryptoContext();
  // get data loan amount
  const handleLoanAmountChange = e => {
    setLoanAmount(e.target.value);
    setLA(e.target.value);
  };
  //get data duration
  const handleLoanDurationChange = e => {
    setLoanDuration(e.target.value);
    setLD(e.target.value);
  };

  // items crypto
  const optionsItems: any[] = [];
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
          const tmpOption = o.map(item => {
            return {
              label: item.symbol,
              value: dataSymbol[item.symbol],
            };
          });
          setOptions(tmpOption);
        })
        .catch(e => e);
    };
    async function asyncCall() {
      await resultAsset();
    }
    asyncCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Main>
      <div>
        <Container fluid="lg">
          <Row>
            <Col>
              <div>
                <P>Maximum loan amount</P>
                <Row className="field">
                  <Div className="mx-1">
                    <Col sm="9" xs="9">
                      <InputField>
                        <div className="input ">
                          <input
                            type="number"
                            className="input input-slot"
                            placeholder="Enter amount"
                            onChange={handleLoanAmountChange}
                          ></input>
                          <DefiButton
                            className="defi-btn"
                            width="64px"
                            height="34px"
                          >
                            Max
                          </DefiButton>
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
                          onSelect={option => {
                            setLS(option);
                            setLoanSymbol(option);
                          }}
                        />
                      </div>
                    </Col>
                  </Div>
                </Row>
                <div className="pt-3 pb-2"></div>
              </div>
              <div>
                {' '}
                <P>Duration</P>
                <Row className="field">
                  <Div className="mx-1">
                    <Col sm="9" xs="9">
                      <InputField>
                        <div className="input ">
                          <input
                            type="number"
                            className="input input-slot"
                            placeholder="Duration"
                            onChange={handleLoanDurationChange}
                          ></input>
                        </div>
                      </InputField>
                    </Col>
                    <Col sm="3" xs="3">
                      <div className="drop">
                        <ComboBox
                          className={`option`}
                          selectedOptionColor="#2c4059"
                          defaultValue={`${week[0]}`}
                          placeholder="Currency"
                          options={week}
                          enableAutocomplete
                          onSelect={option => {
                            if (option === 'All') {
                              setLoanDurationType('');
                              setLDType('');
                            } else if (option === 'Weeks') {
                              setLoanDurationType('0');
                              setLDType('0');
                            } else if (option === 'Months') {
                              setLoanDurationType('1');
                              setLDType('1');
                            }
                          }}
                        />
                      </div>
                    </Col>
                  </Div>
                </Row>
                <div className="pt-3 pb-2"></div>
              </div>
              <P className="pb-2">Collateral</P>
              <div className="tabsRadio d-flex my-3">
                <label className="tabsRadio__Crypto tab ">
                  <input
                    type="radio"
                    name="radio"
                    onClick={() => setComponent(true)}
                    defaultChecked={true}
                  />
                  <P className={component ? 'true ' : ''}>Crypto</P>
                  <span className="checkmark"></span>
                </label>
                <label className="tabsRadio__NFT tab">
                  <input
                    type="radio"
                    name="radio"
                    onClick={() => setComponent(false)}
                  />
                  <P className={!component ? 'true ' : ''}>NFT</P>
                  <span className="checkmark"></span>
                </label>
              </div>
              {component ? (
                <div>
                  <Row className="multi">
                    <MultiSelect
                      options={options}
                      value={selected}
                      onChange={item => handleSelected(item)}
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
                  </Row>
                  <div className="lendCrypto--Search">
                    <Link to="/resultLendCrypto">
                      <DefiButton
                        className="search mb-lg-5 mb-sm-3 mb-xs-3"
                        width="100%"
                        height="3.4rem"
                        margin="38px 0px"
                      >
                        <img src={imgSearch} alt="" /> {t('home.search')}
                      </DefiButton>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="lendnft--Search">
                  <Link to="/resultLendNFT">
                    <DefiButton
                      className="search mb-lg-5 mb-sm-3 mb-xs-3"
                      width="100%"
                      height="54px"
                      margin="38px 0px"
                    >
                      <img src={imgSearch} alt="" />
                      {t('home.search')}
                    </DefiButton>
                  </Link>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </Main>
  );
}
