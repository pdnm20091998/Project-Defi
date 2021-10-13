import { TextField } from '@mui/material';
import React from 'react';
import { BiSearch } from 'react-icons/bi';
import styled from 'styled-components';
import FilterListComponent from './FilterListComponent';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useLendContext } from 'app/components/common/context';

interface FilterLendProps {
  handleClose: Function;
}
const assetTypeList = [
  { name: 'Jewelry', title: 'Jewelry' },
  { name: 'Car', title: 'Car' },
  { name: 'Gemstone', title: 'Gemstone' },
  { name: 'HouseAndLand', title: 'House and land' },
  { name: 'AtWork', title: 'At Work' },
];

const durationList = [
  { name: ' Week', title: 'Week' },
  { name: 'Month', title: 'Month' },
];

const NftType = [
  { name: 'Soft NFT', title: 'Soft NFT' },
  { name: 'Hard NFT', title: 'Hard NFT' },
];
const loanCurrency = [
  {
    name: 'dfy',
    img: 'https://app.defiforyou.uk/_nuxt/img/DFY.a0b985b.png',
    title: 'DFY',
  },
  {
    name: 'usdt',
    img: 'https://app.defiforyou.uk/_nuxt/img/USDT.b7a5381.png',
    title: 'USTD',
  },
  {
    name: 'usdc',
    img: 'https://app.defiforyou.uk/_nuxt/img/USDC.10ea0ad.png',
    title: 'USDC',
  },
  {
    name: 'dai',
    img: 'https://app.defiforyou.uk/_nuxt/img/DAI.71410d0.png',
    title: 'DAI',
  },
  {
    name: 'busd',
    img: 'https://app.defiforyou.uk/_nuxt/img/BUSD.3aa6751.png',
    title: 'BUSD',
  },
];
export default function FilterLend(props: FilterLendProps) {
  const { handleClose } = props;
  const { setName } = useLendContext();
  const handleExitMenu = () => {
    handleClose();
  };
  const handleSearchName = e => {
    setName(e.target.value);
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

        <div className="searchFilter">
          <div className="iconSearch">
            <BiSearch />
          </div>
          <TextField
            variant="outlined"
            name="searchFilter"
            placeholder="Search NFT"
            fullWidth
            onChange={e => handleSearchName(e)}
          />
        </div>

        <FilterListComponent
          type="sortList"
          title="Duration"
          listCheckBox={durationList}
        />
        <div className="borderBottom"></div>
        <FilterListComponent
          type="sortList"
          title="NFT type"
          listCheckBox={NftType}
        />
        <div className="borderBottom"></div>
        <FilterListComponent title="Asset type" listCheckBox={assetTypeList} />
        <div className="borderBottom"></div>
        <FilterListComponent
          title="Loan currency"
          listCheckBox={loanCurrency}
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
