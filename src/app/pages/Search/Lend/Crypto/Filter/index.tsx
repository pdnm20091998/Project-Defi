import styled from 'styled-components';
import FilterComponent from './FilterComponents';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useLendCryptoContext } from 'app/components/common/context/lendCryptoContext';
import { Checkbox, FormControlLabel } from '@mui/material';
import { IoIosArrowUp } from 'react-icons/io';
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
  const {
    setLA,
    loanSymbol,
    setLS,
    setLD,
    loanDurationType,
    setLDType,
    item,
    setItem,
    render,
    setRender,
  } = useLendCryptoContext();
  const durationList = [
    { name: ' Weeks', title: 'Weeks', value: '0' },
    { name: 'Months', title: 'Months', value: '1' },
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
          value: data.symbol,
        });
      }
      if (data.isWhitelistSupply) {
        loanCurrency.push({
          name: data.symbol,
          title: data.symbol,
          img: `https://staging.app.defiforyou.uk/_nuxt/img${
            imgObject[data.symbol]
          }`,
          value: data.symbol,
        });
      }
      return 0;
    });
  // exit menu
  const { handleClose } = props;
  const handleExitMenu = () => {
    handleClose();
  };
  //reset filter state
  const handleReset = () => {
    setLA('');
    setLS('');
    setLD('');
    setLDType('');
    setItem('');
    setRender(!render);
  };
  // Change Collateral
  const changeCollateral = data => {
    if (item === '') {
      setItem(data);
      setRender(!render);
    } else {
      setItem(item.concat(',', data));
      setRender(!render);
    }
    if (item.includes(data)) {
      let x = ',' + data;
      let y = data + ',';
      if (item.includes(x)) {
        setItem(item.replace(x, ''));
        setRender(!render);
      } else if (item.includes(y)) {
        setItem(item.replace(y, ''));
        setRender(!render);
      } else {
        setItem(item.replace(data, ''));
        setRender(!render);
      }
    }
  };
  // Change loanCurrency
  const changeLoanCurrency = data => {
    if (loanSymbol === '') {
      setLS(data);
      setRender(!render);
    } else {
      setLS(loanSymbol.concat(',', data));
      setRender(!render);
    }
    if (loanSymbol.includes(data)) {
      let x = ',' + data;
      let y = data + ',';
      if (loanSymbol.includes(x)) {
        setLS(loanSymbol.replace(x, ''));
        setRender(!render);
      } else if (loanSymbol.includes(y)) {
        setLS(loanSymbol.replace(y, ''));
        setRender(!render);
      } else {
        setLS(loanSymbol.replace(data, ''));
        setRender(!render);
      }
    }
  };
  // Change Collateral
  const changeDuration = data => {
    if (loanDurationType === '') {
      setLDType(data);
      setRender(!render);
    } else {
      setLDType(loanDurationType.concat(',', data));
      setRender(!render);
    }
    if (loanDurationType.includes(data)) {
      let x = ',' + data;
      let y = data + ',';
      if (loanDurationType.includes(x)) {
        setLDType(loanDurationType.replace(x, ''));
        setRender(!render);
      } else if (loanDurationType.includes(y)) {
        setLDType(loanDurationType.replace(y, ''));
        setRender(!render);
      } else {
        setLDType(loanDurationType.replace(data, ''));
        setRender(!render);
      }
    }
  };
  return (
    <Wrapper>
      <div className="container">
        <div className="header">
          <span onClick={handleReset}>Reset filter</span>
          <div className="exitMenu" onClick={handleExitMenu}>
            <AiFillCloseCircle />
          </div>
        </div>

        <div className="borderBottom"></div>
        <FilterComponent
          change={changeCollateral}
          title="Collateral"
          listCheckBox={collateral}
          checked={item}
        />
        <div className="borderBottom"></div>
        <FilterComponent
          change={changeLoanCurrency}
          title="loanCurrency"
          listCheckBox={loanCurrency}
          checked={loanSymbol}
        />
        <div className="disable headerFilter block d-flex justify-content-between">
          <span>NFT Evaluation</span>
          <div className="icons me-2 mb-2">
            <IoIosArrowUp />
          </div>
        </div>
        <div className="disable d-flex flex-column">
          <FormControlLabel disabled control={<Checkbox />} label="All" />
          <FormControlLabel disabled control={<Checkbox />} label="Evaluated" />
        </div>
        <FilterComponent
          change={changeDuration}
          type="sortList"
          title="Duration"
          listCheckBox={durationList}
          checked={loanDurationType}
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .block {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #53565f;
  }
  .container {
    width: 293px;
    padding: 0;
    background-color: #282c37;
    color: #fff;
    border-radius: 20px;
  }
  .disable {
    padding: 0 12px;
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
