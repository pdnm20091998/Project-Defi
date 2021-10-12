/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components/macro';
import Navbar from '../../../Home/NavBar/index';
import Footer from '../../../../components/Footer/index';
import { Container, Col, Row, Table } from 'react-bootstrap';
import { getResultLenCrypto, getAsset } from '../../../../service/auth.service';
import { useEffect, useState } from 'react';
import { SumCollateral } from './SumCollateral/SumCollateral';
import DefiButton from '../../../../components/DefiButton/DefiButton';
import imgStar from './assets/Star.svg';
import Filter from './Filter/index';
import { Pagination } from './Pagination/index';
import { Advertisement } from './Advertisement';
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
    .items:hover {
      background-color: #475674;
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

export default function ResultLendCrypto() {
  const [total, setTotal] = useState();
  const [dataApi, setDataApi] = useState<Array<object>>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts: any = dataApi.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);
  const dataAsset: Array<object> = [];
  const [dataasset, setDataAsset] = useState<Array<object>>([]);

  useEffect(() => {
    const resultAsset = () => {
      const data = getAsset()
        .then(asset => asset.data)
        .catch(e => e);
      return data;
    };
    async function asyncCall() {
      const data = await resultAsset();
      data.data.forEach(data => {
        dataAsset.push(data);
      });
      return dataAsset;
    }
    asyncCall().then(e => {
      setDataAsset(e);
    });
  }, []);
  const imgAsset = [...dataasset];
  useEffect(() => {
    getResultLenCrypto()
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
  return (
    <>
      <Navbar />
      <Div>
        <Container>
          <Row>
            <Col sm="9">
              <SumCollateral sum={total} />
              <Table className="table mt-sm-4">
                <thead className="table__head">
                  <tr>
                    <th className="Id">#</th>
                    <th>Borrow</th>
                    <th>Collateral</th>
                    <th>Loan currency</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody className="table__body">
                  {currentPosts &&
                    currentPosts.map((data?: any, index?: any) => {
                      if (index % 4 === 0 && index % 8 !== 0) {
                        return (
                          <>
                            <tr key={index} className="items">
                              <td className="Id">
                                <P>{index + 1}</P>
                              </td>
                              <td className="d-flex flex-column">
                                <Address>{data.walletAddress}</Address>
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
                              <Address>{data.walletAddress}</Address>
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
                postsPerPage={postsPerPage}
                totalPosts={dataApi.length}
                paginate={paginate}
              />
            </Col>
            <Col sm="3">
              <Filter dataAsset={imgAsset} />
            </Col>
          </Row>
        </Container>
      </Div>
      <Footer />s
    </>
  );
}
