import React from 'react';
import styled from 'styled-components';
import FilterComponent from './FilterComponents';
import { AiFillCloseCircle } from 'react-icons/ai';
interface Props {
  dataAsset?: Array<object>;
  handleClose: Function;
}
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
export default function FilterLend(props: Props) {
  const collateral: Array<object> = [];
  const loanCurrency: Array<object> = [];
  const durationList = [
    { name: ' Weeks', title: 'Weeks' },
    { name: 'Months', title: 'Months' },
  ];
  const nft = [
    { name: ' All', title: 'All' },
    { name: 'Evaluated', title: 'Evaluated' },
  ];
  props.dataAsset &&
    props.dataAsset.map((data: any) => {
      if (data.isWhitelistCollateral) {
        collateral.push({
          name: data.symbol,
          title: data.symbol,
          img: `https://staging.app.defiforyou.uk/_nuxt/img${
            imgObject[data.symbol]
          }`,
        });
      }
      if (data.isWhitelistSupply) {
        loanCurrency.push({
          name: data.symbol,
          title: data.symbol,
          img: `https://staging.app.defiforyou.uk/_nuxt/img${
            imgObject[data.symbol]
          }`,
        });
      }
      return 0;
    });
  const { handleClose } = props;
  const handleExitMenu = () => {
    handleClose();
  };
  return (
    <Wrapper>
      <div className="container">
        <div className="header">
          <span>Reset filter</span>
          <div className="exitMenu" onClick={handleExitMenu}>
            <AiFillCloseCircle />
          </div>
        </div>

        <div className="borderBottom"></div>
        <FilterComponent title="Collateral" listCheckBox={collateral} />
        <div className="borderBottom"></div>
        <FilterComponent title="loanCurrency" listCheckBox={loanCurrency} />
        <FilterComponent
          type="sortList"
          title="NFT Evaluetion"
          listCheckBox={nft}
        />
        <FilterComponent
          type="sortList"
          title="Duration"
          listCheckBox={durationList}
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .container {
    width: 293px;
    background-color: #282c37;
    color: #fff;
    border-radius: 20px;
  }

  .header {
    position: relative;
    border-bottom: 1px solid #45484f;
    padding: 8px 16px;

    span {
      text-decoration: underline;
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      cursor: pointer;
    }

    .exitMenu {
      position: absolute;
      top: 0px;
      right: 16px;
      font-size: 30px;
      cursor: pointer;
      display: none;

      @media screen and (max-width: 1024px) {
        display: block;
      }
    }
  }

  .searchFilter {
    padding: 16px 12px 0 12px;
    width: 100%;
    position: relative;

    .iconSearch {
      position: absolute;
      top: 24px;
      left: 26px;

      svg {
        color: #a2a3a7;
      }
    }

    input {
      color: #a2a3a7;
      padding: 10px 36px;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 22px;
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
    }

    fieldset {
      border: none;
    }
  }
  .borderBottom {
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #45484f;
  }
`;
