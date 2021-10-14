import { useState, useEffect } from 'react';
import FilterLend from './features/FilterLend/FilterLend';
import ResultLendComponent from './features/ResultLend';
import IconFilter from './assets/iconFilter.svg';
import { useMediaQuery } from '@mui/material';
import FilterLendMobile from './features/FilterLend/FilterLendMobile';
import Navbar from 'app/pages/Home/NavBar/index';
import Footer from 'app/components/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import { Wrapper } from './style/style';

import { useDispatch } from 'react-redux';
import { resultLendNftAction } from 'app/actions/Lend NTF/resultLendNft-Action';
import { useLendContext } from 'app/components/common/context/lendNftContext';

export default function ResultLendCrypt() {
  const dispatch = useDispatch();
  const isNoneFilter = useMediaQuery('(max-width:992px)');
  const [openFilter, setOpenFilter] = useState(false);
  // useContext
  const { page, loanAmount, loanSymbol, loanDuration, loanDurationType, name } =
    useLendContext();
  const data = {
    page,
    loanAmount,
    loanSymbol,
    loanDuration,
    loanDurationType,
    name,
  };
  useEffect(() => {
    dispatch(resultLendNftAction(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const closeFilter = () => {
    setOpenFilter(false);
  };

  const handleClose = () => {};

  return (
    <>
      <Navbar />
      <Wrapper>
        <Container className="px-sm-0">
          <Row className="wrapper">
            <Col lg={9} md={12}>
              {' '}
              <div className="icon-filter" onClick={() => setOpenFilter(true)}>
                <img src={IconFilter} alt="filter" />
              </div>
              <ResultLendComponent />
            </Col>
            <Col lg={3}>
              {' '}
              {isNoneFilter ? (
                <FilterLendMobile open={openFilter} closeFilter={closeFilter} />
              ) : (
                <FilterLend handleClose={handleClose} />
              )}
            </Col>
            {/*  */}
          </Row>
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
}
