import { TextField } from '@mui/material';
import { BiSearch } from 'react-icons/bi';
import styled from 'styled-components';
import FilterListComponent from './FilterListComponent';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useLendContext } from 'app/components/common/context/lendNftContext';

interface FilterLendProps {
  handleClose: Function;
}
const assetTypeList = [
  { name: 'Jewelry', title: 'Jewelry', value: '1' },
  { name: 'Car', title: 'Car', value: '2' },
  { name: 'Gemstone', title: 'Gemstone', value: '3' },
  { name: 'HouseAndLand', title: 'House and land', value: '4' },
  { name: 'AtWork', title: 'At Work', value: '5' },
];

const durationList = [
  { name: ' Week', title: 'Week', value: '0' },
  { name: 'Month', title: 'Month', value: '1' },
];

const NftType = [
  { name: 'Soft NFT', title: 'Soft NFT', value: '0' },
  { name: 'Hard NFT', title: 'Hard NFT', value: '1' },
];
const loanCurrency = [
  {
    name: 'dfy',
    img: 'https://app.defiforyou.uk/_nuxt/img/DFY.a0b985b.png',
    title: 'DFY',
    value: 'DFY',
  },
  {
    name: 'usdt',
    img: 'https://app.defiforyou.uk/_nuxt/img/USDT.b7a5381.png',
    title: 'USDT',
    value: 'USDT',
  },
  {
    name: 'usdc',
    img: 'https://app.defiforyou.uk/_nuxt/img/USDC.10ea0ad.png',
    title: 'USDC',
    value: 'USDC',
  },
  {
    name: 'dai',
    img: 'https://app.defiforyou.uk/_nuxt/img/DAI.71410d0.png',
    title: 'DAI',
    value: 'DAI',
  },
  {
    name: 'busd',
    img: 'https://app.defiforyou.uk/_nuxt/img/BUSD.3aa6751.png',
    title: 'BUSD',
    value: 'BUSD',
  },
];
export default function FilterLend(props: FilterLendProps) {
  const { handleClose } = props;
  const {
    setLoanAmount,
    loanSymbol,
    setLoanSymbol,
    setLoanDuration,
    loanDurationType,
    setLoanDurationType,
    setName,
    nftType,
    setNftType,
    assetType,
    setAssetType,
  } = useLendContext();
  //exitMenu
  const handleExitMenu = () => {
    handleClose();
  };
  //get Name search
  const handleSearchName = e => {
    setName(e.target.value);
  };
  // Reset filter
  const handleReset = () => {
    setLoanAmount('');
    setLoanSymbol('');
    setLoanDuration('');
    setLoanDurationType('');
    setName('');
    setNftType('');
    setAssetType('');
  };
  // Change duration
  const changeDuration = data => {
    if (loanDurationType === '') {
      setLoanDurationType(data);
    } else {
      setLoanDurationType(loanDurationType.concat(',', data));
    }
    if (loanDurationType.includes(data)) {
      let x = ',' + data;
      let y = data + ',';
      if (loanDurationType.includes(x)) {
        setLoanDurationType(loanDurationType.replace(x, ''));
      } else if (loanDurationType.includes(y)) {
        setLoanDurationType(loanDurationType.replace(y, ''));
      } else {
        setLoanDurationType(loanDurationType.replace(data, ''));
      }
    }
  };
  // Change Nft Type
  const changeNftType = data => {
    if (nftType === '') {
      setNftType(data);
    } else {
      setNftType(nftType.concat(',', data));
    }
    if (nftType.includes(data)) {
      let x = ',' + data;
      let y = data + ',';
      if (nftType.includes(x)) {
        setNftType(nftType.replace(x, ''));
      } else if (nftType.includes(y)) {
        setNftType(nftType.replace(y, ''));
      } else {
        setNftType(nftType.replace(data, ''));
      }
    }
  };
  // Change AssetType
  const changeAssetType = data => {
    if (assetType === '') {
      setAssetType(data);
    } else {
      setAssetType(assetType.concat(',', data));
    }
    if (assetType.includes(data)) {
      let x = ',' + data;
      let y = data + ',';
      if (assetType.includes(x)) {
        setAssetType(assetType.replace(x, ''));
      } else if (assetType.includes(y)) {
        setAssetType(assetType.replace(y, ''));
      } else {
        setAssetType(assetType.replace(data, ''));
      }
    }
  };
  // change loan symbol
  const changeLoanSymbol = data => {
    if (loanSymbol === '') {
      setLoanSymbol(data);
    } else {
      console.log(loanSymbol, data);

      setLoanSymbol(loanSymbol.concat(',', data));
    }
    if (loanSymbol.includes(data)) {
      let x = ',' + data;
      let y = data + ',';
      if (loanSymbol.includes(x)) {
        setLoanSymbol(loanSymbol.replace(x, ''));
      } else if (loanSymbol.includes(y)) {
        setLoanSymbol(loanSymbol.replace(y, ''));
      } else {
        setLoanSymbol(loanSymbol.replace(data, ''));
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

        <div className="searchFilter">
          <div className="iconSearch">
            <BiSearch />
          </div>
          <TextField
            variant="outlined"
            name="searchFilter"
            placeholder="Search NFT"
            fullWidth
            onChange={handleSearchName}
          />
        </div>

        <FilterListComponent
          type="sortList"
          title="Duration"
          listCheckBox={durationList}
          change={changeDuration}
          checked={loanDurationType}
        />
        <div className="borderBottom"></div>
        <FilterListComponent
          type="sortList"
          title="NFT type"
          listCheckBox={NftType}
          change={changeNftType}
          checked={nftType}
        />
        <div className="borderBottom"></div>
        <FilterListComponent
          title="Asset type"
          listCheckBox={assetTypeList}
          change={changeAssetType}
          checked={assetType}
        />
        <div className="borderBottom"></div>
        <FilterListComponent
          title="Loan currency"
          listCheckBox={loanCurrency}
          change={changeLoanSymbol}
          checked={loanSymbol}
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .container {
    background-color: #282c37;
    color: #fff;
    border-radius: 20px;
    padding: 0;

    @media (max-width: 1024px) {
      border-radius: 0px;
    }
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
      top: 0;
      right: 16px;
      font-size: 30px;
      cursor: pointer;
      display: none;

      @media screen and (max-width: 992px) {
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

      @media screen and (min-width: 320px) and (max-width: 600px) {
        padding: 8px 16px;
      }
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
