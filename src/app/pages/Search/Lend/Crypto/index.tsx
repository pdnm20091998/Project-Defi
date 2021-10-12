/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components/macro';
import Navbar from '../../../Home/NavBar/index';
import Footer from '../../../../components/Footer/index';
import { Container, Col, Row, Table } from 'react-bootstrap';
import { getResultLenCrypto } from '../../../../service/apiLendCrypto/apiLendCypto';
import { getAsset } from '../../../../service/apiAsset/apiAsset';
import { useEffect, useState } from 'react';
import { SumCollateral } from './SumCollateral/SumCollateral';
import DefiButton from '../../../../components/DefiButton/DefiButton';
import imgStar from './assets/Star.svg';
import Filter from './Filter/index';
import { Pagination } from './Pagination/Pagination';
import { Advertisement } from './Advertisement';
import { useMediaQuery } from '@mui/material';
import FilterLendMobile from './Filter/FilterLendMobie';
import IconFilter from './assets/Group 6152.svg';
const Div = styled.div`
  background-color: #171a23;
  border-bottom: 1px solid rgba(125, 111, 125, 0.2);
  padding-top: 30px;

  .page-item {
    margin: 0px 6px;

    .page-link {
      color: #fff;
      background-color: transparent;
      border: 1px solid #d1d1d3;
      box-sizing: border-box;
      border-radius: 4px;
      &:focus {
        border: none;
        background-color: #dba83d !important;
        box-shadow: none !important;
      }
    }
  }
  .table {
    color: #fff;
    background: rgba(40, 44, 55, 0.5);
    border-radius: 10px 10px 10px 10px;
    .Advertisement {
      margin: 20px 0px;
    }
    .items {
      background: #282c37;
      &:hover {
        background-color: #475674;
      }
    }
    tr {
      border: 4px solid #171a23;
      td {
        border-bottom: none;
      }
    }

    .Id {
      text-align: center;
    }
    &__head {
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      background: rgba(40, 44, 55, 0.5);
    }
    &__body {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
    }
  }
`;
const Address = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-decoration-line: underline;
  color: #2596ff;
`;
const Start = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #ffffff;
`;
const P = styled.p`
  padding-top: 30px;
  img {
    width: 24px;
    margin-right: 12px;
  }
`;
const imgObject = {
  XRP: '/XRP.7ff389b.png',
  ETH: '/ETH.d810d23.png',
  LTC: '/LTC.4b4595e.png',
  BTC: '/BTC.fba89d5.png',
  DOT: '/DOT.69cb9b6.png',
  ADA: '/ADA.4647c52.png',
  WBNB: '/WBNB.978ee2b.png',
  USDT: '/USDT.b7a5381.png',
  DFY: '/DFY.a0b985b.png',
  BUSD: '/BUSD.3aa6751.png',
  USDC: '/USDC.10ea0ad.png',
  DAI: '/DAI.71410d0.png',
};
const Wrapper = styled.div`
  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;

    position: relative;

    .icon-filter {
      width: 30px;
      height: 30px;
      position: absolute;
      right: 0px;
      cursor: pointer;
      display: none;
      padding-right: 50px;
      @media (max-width: 767px) {
        right: 16px;
      }
    }

    @media (max-width: 767px) {
      width: 100%;
      margin: 0px auto;
    }

    @media (min-width: 768px) {
      width: 768px;
      margin: 0px auto;
    }

    @media (max-width: 1024px) {
      flex-direction: column;

      .icon-filter {
        display: block;
        z-index: 1;
      }
    }

    @media (min-width: 1025px) {
      width: 1024px;
      margin: 0px auto;
    }

    @media (min-width: 1280px) {
      width: 1280px;
      margin: 0px auto;
    }

    @media (min-width: 1536px) {
      max-width: 1536px;
      margin: 0px auto;
    }
  }
`;
export default function ResultLendCrypto() {
  const [total, setTotal] = useState(0);
  const [dataApi, setDataApi] = useState<Array<object>>([]);
  const dataAsset: Array<object> = [];
  const [dataasset, setDataAsset] = useState<Array<object>>([]);
  const isNoneFilter = useMediaQuery('(max-width:1024px)');
  const [openFilter, setOpenFilter] = useState(false);
  console.log(dataApi);

  useEffect(() => {
    const resultAsset = () => {
      const data = getAsset()
        .then(asset => asset.data)
        .catch(e => e);
      return data;
    };
    async function asyncCall() {
      const data = await resultAsset();
      if (data.data) {
        data.data.forEach(data => {
          dataAsset.push(data);
        });
      }
      return dataAsset;
    }
    asyncCall().then(e => {
      setDataAsset(e);
    });
  }, []);
  const imgAsset = [...dataasset];
  useEffect(() => {
    getResultLenCrypto(0, 10)
      .then((result: any) => {
        return result.data;
      })
      .then((data: any) => {
        return data.data;
      })
      .then((e: any) => {
        setTotal(e.total);
        setDataApi(e.content);
        return e.content;
      });
  }, []);
  const handleClose = () => {};
  const closeFilter = () => {
    setOpenFilter(false);
  };
  const handlePageChange = e => {
    getResultLenCrypto(e, 10)
      .then((result: any) => {
        return result.data;
      })
      .then((data: any) => {
        return data.data;
      })
      .then((e: any) => {
        setTotal(e.total);
        setDataApi(e.content);
        return e.content;
      });
  };
  return (
    <Wrapper>
      <Navbar />
      <Div>
        <Container>
          <Row>
            <div className="wrapper">
              <div className="icon-filter" onClick={() => setOpenFilter(true)}>
                <img src={IconFilter} alt="filter" />
              </div>
            </div>
            <Col lg="9" sm="12">
              <SumCollateral sum={total} />
              <Table className="table mt-sm-4">
                <thead className="table__head">
                  <tr>
                    <th className="Id">#</th>
                    <th>Borrow</th>
                    <th>Collateral</th>
                    <th>Loan currency</th>
                    <th>Duration</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="table__body">
                  {dataApi &&
                    dataApi.map((data?: any, index?: any) => {
                      const walletAddress = data.walletAddress;
                      const shortAddress = `${walletAddress.slice(
                        0,
                        5,
                      )}...${walletAddress.slice(-5)}`;
                      if (index % 4 === 0 && index % 8 !== 0) {
                        return (
                          <>
                            <tr key={index} className="items">
                              <td className="Id">
                                <P>{index + 1}</P>
                              </td>
                              <td className="d-flex flex-column">
                                <Address>{shortAddress}</Address>
                                <Start>
                                  <img className="pe-2" src={imgStar} alt="" />
                                  {data.reputation} {' | '}
                                  {data.completedContracts} Contracts
                                </Start>
                              </td>
                              <td>
                                <P>
                                  <img
                                    src={`https://staging.app.defiforyou.uk/_nuxt/img${
                                      imgObject[data.collateralSymbol]
                                    }`}
                                    alt=""
                                  />
                                  {data.collateralSymbol}{' '}
                                  {data.collateralAmount}
                                </P>
                              </td>
                              <td>
                                <P>
                                  <img
                                    src={`https://staging.app.defiforyou.uk/_nuxt/img${
                                      imgObject[data.loanSymbol]
                                    }`}
                                    alt=""
                                  />
                                  {data.loanSymbol}
                                </P>
                              </td>
                              <td>
                                <P>
                                  {data.durationType
                                    ? `${data.durationQty} Months`
                                    : `${data.durationQty} Weeks`}
                                </P>
                              </td>
                              <td className="d-flex justify-content-center">
                                <DefiButton
                                  width="60%"
                                  height="50%"
                                  margin="14px 23px 14px 64px"
                                >
                                  Send Offer
                                </DefiButton>
                              </td>
                            </tr>
                            <Advertisement />
                          </>
                        );
                      } else {
                        return (
                          <tr key={index} className="items">
                            <td className="Id">
                              <P>{index + 1}</P>
                            </td>
                            <td className="d-flex flex-column">
                              <Address>{shortAddress}</Address>
                              <Start>
                                <img className="pe-2" src={imgStar} alt="" />
                                {data.reputation} {' | '}
                                {data.completedContracts} Contracts
                              </Start>
                            </td>
                            <td>
                              <P>
                                <img
                                  src={`https://staging.app.defiforyou.uk/_nuxt/img${
                                    imgObject[data.collateralSymbol]
                                  }`}
                                  alt=""
                                />
                                {data.collateralSymbol} {data.collateralAmount}
                              </P>
                            </td>
                            <td>
                              <P>
                                <img
                                  src={`https://staging.app.defiforyou.uk/_nuxt/img${
                                    imgObject[data.loanSymbol]
                                  }`}
                                  alt=""
                                />
                                {data.loanSymbol}
                              </P>
                            </td>
                            <td>
                              <P>
                                {data.durationType
                                  ? `${data.durationQty} Months`
                                  : `${data.durationQty} Weeks`}
                              </P>
                            </td>
                            <td className="d-flex justify-content-center">
                              <DefiButton
                                width="60%"
                                height="50%"
                                margin="14px 23px 14px 64px"
                              >
                                Send Offer
                              </DefiButton>
                            </td>
                          </tr>
                        );
                      }
                    })}
                </tbody>
              </Table>
              <Pagination
                totalPage={total}
                changePage={e => handlePageChange(e)}
              />
            </Col>
            <Col lg="3">
              {isNoneFilter ? (
                <FilterLendMobile
                  dataAsset={imgAsset}
                  open={openFilter}
                  closeFilter={closeFilter}
                />
              ) : (
                <Filter dataAsset={imgAsset} handleClose={handleClose} />
              )}
            </Col>
          </Row>
        </Container>
      </Div>
      <Footer />s
    </Wrapper>
  );
}
