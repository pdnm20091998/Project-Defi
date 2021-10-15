/**
 *
 * Result
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { SumCollateral } from '../SumCollateral/SumCollateral';
import { Table } from 'react-bootstrap';
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
    <div>
      <SumCollateral sum={result.result ? result.result.total_elements : 0} />
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
          {result.result && result.result.content.length >= 5
            ? result.result.content.slice(5).map((data?: any, index?: any) => {
                const walletAddress = data.walletAddress;
                const shortAddress = `${walletAddress.slice(
                  0,
                  5,
                )}...${walletAddress.slice(-5)}`;
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
                        margin="14px 23px 14px 64px"
                        padding="9.5px 0px"
                      >
                        Send Offer
                      </DefiButton>
                    </td>
                  </tr>
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
                        margin="14px 23px 14px 64px"
                        padding="9.5px 0px"
                      >
                        Send Offer
                      </DefiButton>
                    </td>
                  </tr>
                );
              })}
          <Advertisement />
          {result.result &&
            result.result.content.length >= 5 &&
            result.result.content.slice(-5).map((data?: any, index?: any) => {
              const walletAddress = data.walletAddress;
              const shortAddress = `${walletAddress.slice(
                0,
                5,
              )}...${walletAddress.slice(-5)}`;
              return (
                <tr key={index} className="items">
                  <td className="Id">
                    <P>{index + 6}</P>
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
                      margin="14px 23px 14px 64px"
                      padding="9.5px 0px"
                    >
                      Send Offer
                    </DefiButton>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <Pag>
        <Pagination
          totalPage={result.result ? result.result.total_pages : 0}
          changePage={e => handlePageChange(e)}
        />
      </Pag>
    </div>
  );
}

const Pag = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
  margin-bottom: 120px;
`;
