import { TextField } from '@mui/material';
import { BiSearch } from 'react-icons/bi';
import { Wrapper } from './style';
import FilterListComponent from './FilterListComponent';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useLendContext } from 'app/components/common/context/lendNftContext';
import InputAdornment from '@mui/material/InputAdornment';

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
  { name: 'Soft NFT', title: 'Soft NFT', value: '1' },
  { name: 'Hard NFT', title: 'Hard NFT', value: '0' },
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
    render,
    setRender,
  } = useLendContext();
  //exitMenu
  const handleExitMenu = () => {
    handleClose();
  };
  //get Name search
  const handleSearchName = e => {
    setName(e.target.value);
    setRender(!render);
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
    setRender(!render);
  };
  // Change duration
  const changeDuration = data => {
    if (loanDurationType === '') {
      setLoanDurationType(data);

      setRender(!render);
    } else {
      setLoanDurationType(loanDurationType.concat(',', data));
      setRender(!render);
    }
    if (loanDurationType.includes(data)) {
      let x = ',' + data;
      let y = data + ',';
      if (loanDurationType.includes(x)) {
        setLoanDurationType(loanDurationType.replace(x, ''));

        setRender(!render);
      } else if (loanDurationType.includes(y)) {
        setLoanDurationType(loanDurationType.replace(y, ''));

        setRender(!render);
      } else {
        setLoanDurationType(loanDurationType.replace(data, ''));

        setRender(!render);
      }
    }
  };
  // Change Nft Type
  const changeNftType = data => {
    if (nftType === '') {
      setNftType(data);

      setRender(!render);
    } else {
      setNftType(nftType.concat(',', data));
      setRender(!render);
    }
    if (nftType.includes(data)) {
      let x = ',' + data;
      let y = data + ',';
      if (nftType.includes(x)) {
        setNftType(nftType.replace(x, ''));

        setRender(!render);
      } else if (nftType.includes(y)) {
        setNftType(nftType.replace(y, ''));

        setRender(!render);
      } else {
        setNftType(nftType.replace(data, ''));

        setRender(!render);
      }
    }
  };
  // Change AssetType
  const changeAssetType = data => {
    if (assetType === '') {
      setAssetType(data);

      setRender(!render);
    } else {
      setAssetType(assetType.concat(',', data));
      setRender(!render);
    }
    if (assetType.includes(data)) {
      let x = ',' + data;
      let y = data + ',';
      if (assetType.includes(x)) {
        setAssetType(assetType.replace(x, ''));

        setRender(!render);
      } else if (assetType.includes(y)) {
        setAssetType(assetType.replace(y, ''));

        setRender(!render);
      } else {
        setAssetType(assetType.replace(data, ''));

        setRender(!render);
      }
    }
  };
  // change loan symbol
  const changeLoanSymbol = data => {
    if (loanSymbol === '') {
      setLoanSymbol(data);

      setRender(!render);
    } else {
      setLoanSymbol(loanSymbol.concat(',', data));
      setRender(!render);
    }
    if (loanSymbol.includes(data)) {
      let x = ',' + data;
      let y = data + ',';
      if (loanSymbol.includes(x)) {
        setLoanSymbol(loanSymbol.replace(x, ''));

        setRender(!render);
      } else if (loanSymbol.includes(y)) {
        setLoanSymbol(loanSymbol.replace(y, ''));

        setRender(!render);
      } else {
        setLoanSymbol(loanSymbol.replace(data, ''));

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

        <div className="searchFilter">
          <TextField
            variant="outlined"
            name="searchFilter"
            placeholder="Search NFT"
            fullWidth
            onChange={handleSearchName}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BiSearch />
                </InputAdornment>
              ),
            }}
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
