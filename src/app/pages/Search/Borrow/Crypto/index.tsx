import styled from 'styled-components/macro';
import Navbar from '../../../Home/NavBar/index';
import Footer from '../../../../components/Footer/index';
import { Col, Container, Row } from 'react-bootstrap';
import SumPawnShop from './SumPawnShop/SumPawnShop';
import FilterZone from './FilterZone';
import PawnList from './PawnList';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useBorrowContext } from 'app/components/common/context/borrowCryptoContext';
import { useDispatch } from 'react-redux';
import {
  resultBorrowAction,
  resultPersonalBorrowAction,
} from 'app/actions/borrow/borrowAction';

const Div = styled.div`
  background-color: #171a23;
`;
const url =
  'https://staginggw.defiforyou.uk/defi-pawn-crypto-service/public-api/v1.0.0/crypto-asset';
const url2 =
  'https://staginggw.defiforyou.uk/defi-pawn-crypto-service/public-api/v1.0.0/pawn-shop/search-p2p-lenders?status=3&size=10';
export default function ResultBorrowCrypto() {
  const [dataasset, setDataAsset] = useState<Array<object>>([]);
  const dataAsset: Array<object> = [];
  const handleClose = () => {};
  const dispatch = useDispatch();

  // get Asset
  useEffect(() => {
    const resultAsset = () => {
      const data = axios
        .get(url)
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
  // const [shop, setShop] = useState<null | { data: any }>(null);
  const [shop, setShop] = useState<any>();
  const [shop2, setShop2] = useState<null | { data: any }>(null);
  const [rerender, setRerender] = useState(true);
  const [pageNum, setPageNum] = useState(0);
  // const [cusSort, setCusSort] = useState('');
  const [interest, setInterest] = useState('');
  const [loan, setLoan] = useState('');
  // const [collateral, setCollateral] = useState('');
  // const [loanSymbol, setLoanSymbol] = useState('');
  const [loanType, setLoanType] = useState('');
  const [duration, setDuration] = useState('');
  let params = {
    page: pageNum,
    // interestRange: '0 - 0.1',
    interestRanges: interest, //0:0,1|| 0,1:0.25|| 0.25:0.5|| 0.5:1
    loanToValueRanges: loan, // 0:25 || 0.25:0.5 || 0.5:0.75 || 0.75:1
    // collateralSymbols: collateral, //XRP ETH LTC BTC DFY BNB DOT WBNB ADA
    // loanSymbols: loanSymbol, //USDT,DFY,BUSD,USDC,DAI
    loanTypes: loanType, // 0,1,2
    durationTypes: duration, //0,1
    // cusSort: cusSort, //interest,asc || loanToValue,asc || durationQty,asc || limitation,asc || reputation,asc
  };

  // const changePage = data => {
  //   setPageNum(data);
  //   setRerender(!rerender);
  // };
  // const changeCusSort = data => {
  //   setCusSort(data);
  //   setRerender(!rerender);
  // };
  const changeInterestRange = data => {
    setInterest(data);
    setRerender(!rerender);
  };
  const changeLoanRange = data => {
    setLoan(data);
    setRerender(!rerender);
  };
  // const changeCollateral = data => {
  //   if (collateral === '') {
  //     setCollateral(data);
  //     setRerender(!rerender);
  //   } else {
  //     setCollateral(collateral.concat(',', data));
  //     setRerender(!rerender);
  //   }
  //   if (collateral.includes(data)) {
  //     let x = ',' + data;
  //     let y = data + ',';
  //     if (collateral.includes(x)) {
  //       setCollateral(collateral.replace(x, ''));
  //       setRerender(!rerender);
  //     } else if (collateral.includes(y)) {
  //       setCollateral(collateral.replace(y, ''));
  //       setRerender(!rerender);
  //     } else {
  //       setCollateral(collateral.replace(data, ''));
  //       setRerender(!rerender);
  //     }
  //   }
  // };
  // const changeLoanSymbol = data => {
  //   if (loanSymbol === '') {
  //     setLoanSymbol(data);
  //     setRerender(!rerender);
  //   } else {
  //     setLoanSymbol(loanSymbol.concat(',', data));
  //     setRerender(!rerender);
  //   }
  //   if (loanSymbol.includes(data)) {
  //     let x = ',' + data;
  //     let y = data + ',';
  //     if (loanSymbol.includes(x)) {
  //       setLoanSymbol(loanSymbol.replace(x, ''));
  //       setRerender(!rerender);
  //     } else if (loanSymbol.includes(y)) {
  //       setLoanSymbol(loanSymbol.replace(y, ''));
  //       setRerender(!rerender);
  //     } else {
  //       setLoanSymbol(loanSymbol.replace(data, ''));
  //       setRerender(!rerender);
  //     }
  //   }
  // };
  const changeLoanType = data => {
    if (loanType === '') {
      setLoanType(data);
      setRerender(!rerender);
    } else {
      setLoanType(loanType.concat(',', data));
      setRerender(!rerender);
    }
    if (loanType.includes(data)) {
      let x = ',' + data;
      let y = data + ',';
      if (loanType.includes(x)) {
        setLoanType(loanType.replace(x, ''));
        setRerender(!rerender);
      } else if (loanType.includes(y)) {
        setLoanType(loanType.replace(y, ''));
        setRerender(!rerender);
      } else {
        setLoanType(loanType.replace(data, ''));
        setRerender(!rerender);
      }
    }
  };
  const changeDuration = data => {
    if (duration === '') {
      setDuration(data);
      setRerender(!rerender);
    } else {
      setDuration(duration.concat(',', data));
      setRerender(!rerender);
    }
    if (duration.includes(data)) {
      let x = ',' + data;
      let y = data + ',';
      if (duration.includes(x)) {
        setDuration(duration.replace(x, ''));
        setRerender(!rerender);
      } else if (duration.includes(y)) {
        setDuration(duration.replace(y, ''));
        setRerender(!rerender);
      } else {
        setDuration(duration.replace(data, ''));
        setRerender(!rerender);
      }
    }
  };
  useEffect(() => {
    // axios.get(url).then(res => {
    //   setShop(res.data);
    // });
    // axios.get(url3, { params }).then(res => {
    //   setShop(res.data);
    // });
    axios.get(url2).then(res => {
      setShop2(res.data);
    });
  }, [rerender]);

  const {
    page,
    cusSort,
    interestRanges,
    loanToValueRanges,
    loanTypes,
    collateralSymbols,
    loanSymbols,
    durationTypes,
    collateralAmount,
    durationQty,
    loanAmount,
    name,
  } = useBorrowContext();
  const data = {
    page,
    cusSort,
    interestRanges,
    loanToValueRanges,
    loanTypes,
    collateralSymbols,
    loanSymbols,
    durationTypes,
    collateralAmount,
    durationQty,
    loanAmount,
    name,
  };

  useEffect(() => {
    dispatch(resultBorrowAction(data));
    dispatch(resultPersonalBorrowAction(data));
  }, [data]);

  const imgAsset = [...dataasset];
  return (
    <>
      <Navbar />
      <Div>
        <Container>
          <Row>
            <Col md={9}>
              <SumPawnShop />

              <PawnList
              // changePage={changePage}
              // changeCusSort={changeCusSort}
              />
            </Col>
            <Col className="mt-3" md={3}>
              <FilterZone
                handleClose={handleClose}
                // changePage={changePage}
                dataAsset={imgAsset}
                changeInterestRange={changeInterestRange}
                changeLoanRange={changeLoanRange}
                // changeCollateral={changeCollateral}
                // changeLoanSymbol={changeLoanSymbol}
                changeLoanType={changeLoanType}
                changeDuration={changeDuration}
              />
            </Col>
          </Row>
        </Container>
      </Div>
      <Footer />
    </>
  );
}
