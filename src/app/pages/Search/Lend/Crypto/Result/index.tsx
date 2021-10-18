/**
 *
 * Result
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { SumCollateral } from '../SumCollateral/SumCollateral';
import { Col, Container, Row } from 'react-bootstrap';
import { Address, P, Start } from '../Style';
import imgStar from '../assets/Star.svg';
import DefiButton from 'app/components/DefiButton/DefiButton';
import { Advertisement } from '../Advertisement';
import { Pagination } from 'app/components/Pagination/Pagination';
import { useSelector } from 'react-redux';
import { RootState } from 'app/reducer/reducers';
import { useLendCryptoContext } from 'app/components/common/context/lendCryptoContext';
interface Props {}

export function Result(props: Props) {
  const { setPage, render, setRender } = useLendCryptoContext();
  const result: any = useSelector((state: RootState) => state.lendcrypto);
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
    BNB: '/BNB.978ee2b.png',
  };
  const handlePageChange = e => {
    setPage(e);
    setRender(!render);
  };
  return (
    <Div>
      <SumCollateral sum={result.result ? result.result.total_elements : 0} />
      <div className="table mt-sm-4">
        <Container>
          <Row className="table__head d-flex">
            <Col lg={1} className="id">
              #
            </Col>
            <Col lg={3} className="borrow">
              Borrow
            </Col>
            <Col lg={2}>Collateral</Col>
            <Col lg={2} className="loanCurrency">
              Loan currency
            </Col>
            <Col lg={3} className="duration">
              Duration
            </Col>
          </Row>

          <div className="table__body">
            {result.result && result.result.content.length >= 5
              ? result.result.content
                  .slice(0, 5)
                  .map((data?: any, index?: any) => {
                    const walletAddress = data.walletAddress;
                    const shortAddress = `${walletAddress.slice(
                      0,
                      5,
                    )}...${walletAddress.slice(-5)}`;
                    return (
                      <Row key={index} className="items d-flex flex-row">
                        <Col lg={1} sm={12} className="id">
                          <P>{index + 1}</P>
                        </Col>
                        <Col
                          lg={3}
                          sm={12}
                          className="borrow d-flex flex-column"
                        >
                          <Address className="borrow__address">
                            {shortAddress}
                          </Address>
                          <Start>
                            <img className="start" src={imgStar} alt="" />
                            <p className="contracts">
                              {' '}
                              {data.reputation} &nbsp;{' | '} &nbsp;{' '}
                              {data.completedContracts} Contracts
                            </p>
                          </Start>
                        </Col>
                        <Col lg={2} sm={12}>
                          <P>
                            <img
                              src={`https://staging.app.defiforyou.uk/_nuxt/img${
                                imgObject[data.collateralSymbol]
                              }`}
                              alt=""
                            />
                            {data.collateralSymbol} {data.collateralAmount}
                          </P>
                        </Col>
                        <Col lg={2} sm={12}>
                          <P>
                            <img
                              src={`https://staging.app.defiforyou.uk/_nuxt/img${
                                imgObject[data.loanSymbol]
                              }`}
                              alt=""
                            />
                            {data.loanSymbol}
                          </P>
                        </Col>
                        <Col lg={2} sm={12}>
                          <P>
                            {data.durationType
                              ? `${data.durationQty} Months`
                              : `${data.durationQty} Weeks`}
                          </P>
                        </Col>
                        <Col
                          lg={2}
                          sm={12}
                          className="send d-flex justify-content-center align-items-center my-sm-3 my-xs-3"
                        >
                          <DefiButton width="116px" height="36px">
                            Send Offer
                          </DefiButton>
                        </Col>
                      </Row>
                    );
                  })
              : result.result &&
                result.result.content.map((data?: any, index?: any) => {
                  const walletAddress = data.walletAddress;
                  const shortAddress = `${walletAddress.slice(
                    0,
                    5,
                  )}...${walletAddress.slice(-5)}`;
                  return (
                    <Row key={index} className="items d-flex flex-row">
                      <Col lg={1} sm={12} className="id">
                        <P>{index + 1}</P>
                      </Col>
                      <Col lg={3} sm={12} className="borrow d-flex flex-column">
                        <Address className="borrow__address">
                          {shortAddress}
                        </Address>
                        <Start>
                          <img className="start" src={imgStar} alt="" />
                          <p className="contracts">
                            {' '}
                            {data.reputation} &nbsp;{' | '} &nbsp;{' '}
                            {data.completedContracts} Contracts
                          </p>
                        </Start>
                      </Col>
                      <Col lg={2} sm={12}>
                        <P>
                          <img
                            src={`https://staging.app.defiforyou.uk/_nuxt/img${
                              imgObject[data.collateralSymbol]
                            }`}
                            alt=""
                          />
                          {data.collateralSymbol} {data.collateralAmount}
                        </P>
                      </Col>
                      <Col lg={2} sm={12}>
                        <P>
                          <img
                            src={`https://staging.app.defiforyou.uk/_nuxt/img${
                              imgObject[data.loanSymbol]
                            }`}
                            alt=""
                          />
                          {data.loanSymbol}
                        </P>
                      </Col>
                      <Col lg={2} sm={12}>
                        <P>
                          {data.durationType
                            ? `${data.durationQty} Months`
                            : `${data.durationQty} Weeks`}
                        </P>
                      </Col>
                      <Col
                        lg={2}
                        sm={12}
                        className="send d-flex justify-content-center align-items-center my-sm-3 my-xs-3"
                      >
                        <DefiButton width="116px" height="36px">
                          Send Offer
                        </DefiButton>
                      </Col>
                    </Row>
                  );
                })}
            <Advertisement />
            {result.result &&
              result.result.content.length >= 5 &&
              result.result.content.slice(5).map((data?: any, index?: any) => {
                const walletAddress = data.walletAddress;
                const shortAddress = `${walletAddress.slice(
                  0,
                  5,
                )}...${walletAddress.slice(-5)}`;
                return (
                  <Row key={index} className="items d-flex flex-row">
                    <Col lg={1} sm={12} className="id">
                      <P>{index + 6}</P>
                    </Col>
                    <Col lg={3} sm={12} className="borrow d-flex flex-column">
                      <Address className="borrow__address">
                        {shortAddress}
                      </Address>
                      <Start>
                        <img className="start" src={imgStar} alt="" />
                        <p className="contracts">
                          {' '}
                          {data.reputation} &nbsp;{' | '} &nbsp;{' '}
                          {data.completedContracts} Contracts
                        </p>
                      </Start>
                    </Col>
                    <Col lg={2} sm={12}>
                      <P>
                        <img
                          src={`https://staging.app.defiforyou.uk/_nuxt/img${
                            imgObject[data.collateralSymbol]
                          }`}
                          alt=""
                        />
                        {data.collateralSymbol} {data.collateralAmount}
                      </P>
                    </Col>
                    <Col lg={2} sm={12}>
                      <P>
                        <img
                          src={`https://staging.app.defiforyou.uk/_nuxt/img${
                            imgObject[data.loanSymbol]
                          }`}
                          alt=""
                        />
                        {data.loanSymbol}
                      </P>
                    </Col>
                    <Col lg={2} sm={12}>
                      <P>
                        {data.durationType
                          ? `${data.durationQty} Months`
                          : `${data.durationQty} Weeks`}
                      </P>
                    </Col>
                    <Col
                      lg={2}
                      sm={12}
                      className="send d-flex justify-content-center align-items-center my-sm-3 my-xs-3"
                    >
                      <DefiButton width="116px" height="36px">
                        Send Offer
                      </DefiButton>
                    </Col>
                  </Row>
                );
              })}
          </div>
        </Container>
      </div>
      <div className="pagi">
        <Pagination
          totalPage={result.result ? result.result.total_pages : 0}
          changePage={e => handlePageChange(e)}
        />
      </div>
    </Div>
  );
}

const Div = styled.div`
  .row {
    --bs-gutter-x: 0px !important;
  }
  .pagi {
    margin-top: 32px;
    margin-bottom: 120px;
    display: flex;
    justify-content: center;
  }
`;
