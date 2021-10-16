import { useBorrowContext } from 'app/components/common/context/borrowCryptoContext';
import { BiSearch } from 'react-icons/bi';

import styled from 'styled-components/macro';
import Filter from './components/Filter';
import '../FilterZone/Sass/menuMobile.scss';
import hiddenMenu from '../FilterZone/asset/x-circle.svg';
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
export default function FilterZone(props: Props) {
  const {
    interestRanges,
    setInterestRanges,
    loanToValueRanges,
    setLoanToValueRanges,
    loanTypes,
    setLoanTypes,
    collateralSymbols,
    setCollateralSymbols,
    loanSymbols,
    setLoanSymbols,
    durationTypes,
    setDurationTypes,
    name,
    setName,
    render,
    setRender,
  } = useBorrowContext();
  const collateralAccepted: Array<object> = [];
  const handleCollateral = data => {
    if (collateralSymbols === '') {
      setCollateralSymbols(data);
      setRender(!render);
    } else {
      setCollateralSymbols(collateralSymbols.concat(',', data));
      setRender(!render);
    }
    if (collateralSymbols.includes(data)) {
      let x = ',' + data;
      let y = data + ',';
      if (collateralSymbols.includes(x)) {
        setCollateralSymbols(collateralSymbols.replace(x, ''));
        setRender(!render);
      } else if (collateralSymbols.includes(y)) {
        setCollateralSymbols(collateralSymbols.replace(y, ''));
        setRender(!render);
      } else {
        setCollateralSymbols(collateralSymbols.replace(data, ''));
        setRender(!render);
      }
    }
  };
  const loanToken: Array<object> = [];
  const handleLoanSymbol = data => {
    if (loanSymbols === '') {
      setLoanSymbols(data);
      setRender(!render);
    } else {
      setLoanSymbols(loanSymbols.concat(',', data));
      setRender(!render);
    }
    if (loanSymbols.includes(data)) {
      let x = ',' + data;
      let y = data + ',';
      if (loanSymbols.includes(x)) {
        setLoanSymbols(loanSymbols.replace(x, ''));
        setRender(!render);
      } else if (loanSymbols.includes(y)) {
        setLoanSymbols(loanSymbols.replace(y, ''));
        setRender(!render);
      } else {
        setLoanSymbols(loanSymbols.replace(data, ''));
        setRender(!render);
      }
    }
  };
  const interestRange = [
    { name: '0-10%', title: '0-10%', value: '0:0.1' },
    { name: '10-25%', title: '10-25%', value: '0.1:0.25' },
    { name: '25-50%', title: '25-50%', value: '0.25:0.5' },
    { name: '>50%', title: '>50%', value: '0.5:1' },
  ];
  const handleInterestRanges = data => {
    setInterestRanges(data);
    console.log(data);
    console.log(interestRanges);
    setRender(!render);
  };
  const handleLoanToValueRanges = data => {
    setLoanToValueRanges(data);
    console.log(data);
    console.log(loanToValueRanges);
    setRender(!render);
  };
  const loanToValue = [
    { name: '0-25%', title: '0-25%', value: '0:0.25' },
    { name: '25-50%', title: '25-50%', value: '0.25:0.5' },
    { name: '50-75%', title: '50-75%', value: '0.5:0.75' },
    { name: '>75%', title: '>75%', value: '0.75:1' },
  ];
  const loanType = [
    { name: 'auto', title: 'Auto', value: '0' },
    { name: 'semi-auto', title: 'Semi-auto', value: '1' },
    { name: 'negotiation', title: 'Negotiation', value: '2' },
  ];
  const handleLoanType = data => {
    if (loanTypes === '') {
      setLoanTypes(data);
      setRender(!render);
    } else {
      setLoanTypes(loanTypes.concat(',', data));
      setRender(!render);
    }
    if (loanTypes.includes(data)) {
      let x = ',' + data;
      let y = data + ',';
      if (loanTypes.includes(x)) {
        setLoanTypes(loanTypes.replace(x, ''));
        setRender(!render);
      } else if (loanTypes.includes(y)) {
        setLoanTypes(loanTypes.replace(y, ''));
        setRender(!render);
      } else {
        setLoanTypes(loanTypes.replace(data, ''));
        setRender(!render);
      }
    }
  };
  const duration = [
    { name: 'week', title: 'Week', value: '0' },
    { name: 'month', title: 'Month', value: '1' },
  ];
  const handleDurationTypes = data => {
    if (durationTypes === '') {
      setDurationTypes(data);
      setRender(!render);
    } else {
      setDurationTypes(durationTypes.concat(',', data));
      setRender(!render);
    }
    if (durationTypes.includes(data)) {
      let x = ',' + data;
      let y = data + ',';
      if (durationTypes.includes(x)) {
        setDurationTypes(durationTypes.replace(x, ''));
        setRender(!render);
      } else if (durationTypes.includes(y)) {
        setDurationTypes(durationTypes.replace(y, ''));
        setRender(!render);
      } else {
        setDurationTypes(durationTypes.replace(data, ''));
        setRender(!render);
      }
    }
  };
  props.dataAsset &&
    props.dataAsset.map((data: any) => {
      if (data.isWhitelistCollateral) {
        collateralAccepted.push({
          name: data.symbol,
          title: data.symbol,
          img: `https://staging.app.defiforyou.uk/_nuxt/img${
            imgObject[data.symbol]
          }`,
          value: data.symbol,
        });
      }
      if (data.isWhitelistSupply) {
        loanToken.push({
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
  const handleSearchName = e => {
    setName(e.target.value);
    setRender(!render);
  };
  const handleReset = e => {
    setInterestRanges('');
    setLoanToValueRanges('');
    setCollateralSymbols('');
    setLoanSymbols('');
    setLoanTypes('');
    setDurationTypes('');
    setName('');
    setRender(!render);
  };

  //xử lí menu mobile
  const HiddenFilterMobile = () => {
    let filtermobile = document.querySelector('.filtermobile');
    filtermobile?.classList.add('HiddenFilter__Mobile');
    filtermobile?.classList.remove('ShowFilter__Mobile');
  };

  return (
    <div>
      {/* insert menumobile */}
      <div className="filtermobile">
        <div className="filterheader">
          <span onClick={handleReset}>Reset filter</span>
          <img
            className="exitfilter-icon"
            src={hiddenMenu}
            alt="No-icon"
            onClick={HiddenFilterMobile}
          />
        </div>
        <Border></Border>
        <div className="searchFilter">
          <div className="iconSearch">
            <BiSearch />
          </div>
          <input
            className="search-input"
            name="searchFilter"
            value={name}
            placeholder="Search pawnshops"
            onChange={handleSearchName}
          />
        </div>
        <FilterHolder>
          <Filter
            title="Interest range"
            listCheckBox={interestRange}
            change={handleInterestRanges}
            checked={interestRanges}
          />
        </FilterHolder>
        <Border />
        <FilterHolder>
          <Filter
            title="loan to value"
            listCheckBox={loanToValue}
            change={handleLoanToValueRanges}
            checked={loanToValueRanges}
          />
        </FilterHolder>
        <Border />
        <FilterHolder>
          <Filter
            title="Collateral accepted"
            listCheckBox={collateralAccepted}
            change={handleCollateral}
            checked={collateralSymbols}
          />
        </FilterHolder>
        <Border />
        <FilterHolder>
          <Filter
            title="Loan token"
            listCheckBox={loanToken}
            change={handleLoanSymbol}
            checked={loanSymbols}
          />
        </FilterHolder>
        <Border />
        <FilterHolder>
          <Filter
            title="Loan type"
            listCheckBox={loanType}
            change={handleLoanType}
            checked={loanTypes}
          />
        </FilterHolder>
        <Border />
        <FilterHolder>
          <Filter
            title="Duration"
            listCheckBox={duration}
            change={handleDurationTypes}
            checked={durationTypes}
          />
        </FilterHolder>
        <Border />
      </div>
      {/* End menu mobile */}
      <Div className="filterdesktop">
        <FilterHolder>
          <Span onClick={handleReset}>Reset filter</Span>
        </FilterHolder>
        <Border></Border>
        <div className="searchFilter">
          <div className="iconSearch">
            <BiSearch />
          </div>
          <input
            className="search-input"
            name="searchFilter"
            value={name}
            placeholder="Search pawnshops"
            onChange={handleSearchName}
          />
        </div>
        <FilterHolder>
          <Filter
            title="Interest range"
            listCheckBox={interestRange}
            change={handleInterestRanges}
            checked={interestRanges}
          />
        </FilterHolder>
        <Border />
        <FilterHolder>
          <Filter
            title="loan to value"
            listCheckBox={loanToValue}
            change={handleLoanToValueRanges}
            checked={loanToValueRanges}
          />
        </FilterHolder>
        <Border />
        <FilterHolder>
          <Filter
            title="Collateral accepted"
            listCheckBox={collateralAccepted}
            change={handleCollateral}
            checked={collateralSymbols}
          />
        </FilterHolder>
        <Border />
        <FilterHolder>
          <Filter
            title="Loan token"
            listCheckBox={loanToken}
            change={handleLoanSymbol}
            checked={loanSymbols}
          />
        </FilterHolder>
        <Border />
        <FilterHolder>
          <Filter
            title="Loan type"
            listCheckBox={loanType}
            change={handleLoanType}
            checked={loanTypes}
          />
        </FilterHolder>
        <Border />
        <FilterHolder>
          <Filter
            title="Duration"
            listCheckBox={duration}
            change={handleDurationTypes}
            checked={durationTypes}
          />
        </FilterHolder>
        <Border />
      </Div>
    </div>
  );
}
const Div = styled.div`
  background-color: #282c37;
  border-radius: 20px;
  padding-bottom: 1rem;

  .searchFilter {
    border: 1px solid #a2a3a7;
    border-radius: 24px;
    margin: 16px 12px 0 12px;
    background-color: #3e424b;
    display: flex;

    .iconSearch {
      margin: 8px;
      svg {
        color: #a2a3a7;
      }
    }
    .search-input {
      flex: 1;
      border-radius: 24px;
      background-color: transparent;
      color: #a2a3a7;
      border: none;
      font-size: 14px;
      outline: none;
    }
  }
`;

const FilterHolder = styled.div`
  padding: 0.5rem;
  color: white;
`;
const Border = styled.div`
  width: 100%;
  border: 1px solid;
`;
const Span = styled.span`
  color: white;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`;
