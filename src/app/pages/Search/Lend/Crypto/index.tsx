import Navbar from 'app/components/NavBar/index';
import Footer from '../../../../components/Footer/index';
import { Container, Col, Row } from 'react-bootstrap';
import { getAsset } from '../../../../service/apiAsset/apiAsset';
import { useEffect, useState } from 'react';
import Filter from './Filter/index';
import { useMediaQuery } from '@mui/material';
import FilterLendMobile from './Filter/FilterLendMobie';
import IconFilter from './assets/Group 6152.svg';

import { useDispatch } from 'react-redux';
import { resultLendCryptoAction } from 'app/actions/lendCrypto/lendCryptoAction';
import { Result } from './Result';
import { useLendCryptoContext } from 'app/components/common/context/lendCryptoContext';
import { Wrapper, Div } from './Style/index';

export default function ResultLendCrypto() {
  const dataAsset: Array<object> = [];
  const [dataasset, setDataAsset] = useState<Array<object>>([]);
  const isNoneFilter = useMediaQuery('(max-width:1024px)');
  const [openFilter, setOpenFilter] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const resultAsset = () => {
      const data = getAsset()
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const imgAsset = [...dataasset];
  // data for api
  const {
    page,
    loanAmount,
    loanSymbol,
    loanDuration,
    loanDurationType,
    name,
    nftType,
    assetType,
    item,
  } = useLendCryptoContext();
  const data = {
    page,
    loanAmount,
    loanSymbol,
    loanDuration,
    loanDurationType,
    name,
    nftType,
    assetType,
    item,
  };
  //call api
  useEffect(() => {
    dispatch(resultLendCryptoAction(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleClose = () => {};
  const closeFilter = () => {
    setOpenFilter(false);
  };
  return (
    <Wrapper>
      <Navbar />
      <Div>
        <Container>
          <Row>
            <div className="wrapper">
              <div className="icon-filter" onClick={() => setOpenFilter(true)}>
                <img src={IconFilter} alt="filter" />
              </div>
            </div>
            <Col lg={9} sm={12} xs={12}>
              <Result />
            </Col>
            <Col lg={3}>
              {isNoneFilter ? (
                <FilterLendMobile
                  dataAsset={imgAsset}
                  open={openFilter}
                  closeFilter={closeFilter}
                />
              ) : (
                <Filter dataAsset={imgAsset} handleClose={handleClose} />
              )}
            </Col>
          </Row>
        </Container>
      </Div>
      <Footer />
    </Wrapper>
  );
}
