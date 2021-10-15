import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components/macro';
import increase from './assests/increase.svg';
import styles from './style/PawnList.module.css';
import PawnItem from './PawnItem/PawnItem';
import ReactPaginate from 'react-paginate';
import { RootState } from 'app/reducer/reducers';

import { useBorrowContext } from 'app/components/common/context/borrowCryptoContext';
import { useSelector } from 'react-redux';

export default function PawnList() {
  //redux
  const result: any = useSelector((state: RootState) => state.borrow);
  //state init
  const [pick, setPick] = useState(0);
  const [pickInterest, setPickInterest] = useState(false);
  const [pickLoan, setPickLoan] = useState(false);
  const [pickDuration, setPickDuration] = useState(false);
  const [pickLimitation, setPickLimitation] = useState(false);
  const [pickRating, setPickRating] = useState(false);
  //use context
  const { setPage, setCusSort } = useBorrowContext();
  return (
    <>
      <Div className={`${styles.bg_on_small_scr} mb-4`}>
        <MyRow>
          <MyCol
            className={pick === 1 ? styles.active : ''}
            onClick={e => {
              e.preventDefault();
              setPick(1);
              setPickInterest(!pickInterest);

              if (pickInterest === true) {
                setCusSort('interest,asc');
              } else {
                setCusSort('interest,desc');
              }
            }}
            xs={{ span: 5 }}
            sm={true}
          >
            <MyRow
              className={`${styles.not_last_child} ${styles.bg_small_btn}`}
            >
              <MyCol lg={{ span: 8, offset: 1 }} sm={9} xs={10}>
                <p
                  className={`me-lg-1 text-center text-white ${styles.text_small}`}
                >
                  Interest Rate
                </p>
              </MyCol>
              {pick === 1 && pickInterest ? (
                <MyCol xs={2} className={styles.activeIcon}>
                  <img className={styles.img_small} src={increase} alt="icon" />
                </MyCol>
              ) : (
                <MyCol xs={2}>
                  <img className={styles.img_small} src={increase} alt="icon" />
                </MyCol>
              )}
            </MyRow>
          </MyCol>

          <MyCol
            className={pick === 2 ? styles.active : ''}
            onClick={e => {
              e.preventDefault();
              setPick(2);
              setPickLoan(!pickLoan);
              if (pickLoan === true) {
                setCusSort('loanToValue,asc');
              } else {
                setCusSort('loanToValue,desc');
              }
            }}
            xs={{ span: 5, offset: 1 }}
            sm={{ span: true, offset: 0 }}
          >
            <MyRow
              className={`${styles.not_last_child} ${styles.bg_small_btn}`}
            >
              <MyCol lg={{ span: 8, offset: 1 }} sm={9} xs={10}>
                <p
                  className={`me-lg-1 text-center text-white ${styles.text_small}`}
                >
                  Loan to value
                </p>
              </MyCol>
              {pick === 2 && pickLoan ? (
                <MyCol xs={2} className={styles.activeIcon}>
                  <img className={styles.img_small} src={increase} alt="icon" />
                </MyCol>
              ) : (
                <MyCol xs={2}>
                  <img className={styles.img_small} src={increase} alt="icon" />
                </MyCol>
              )}
            </MyRow>
          </MyCol>
          <MyCol
            className={pick === 3 ? styles.active : ''}
            onClick={e => {
              e.preventDefault();
              setPick(3);
              setPickDuration(!pickDuration);
              if (pickLoan === true) {
                setCusSort('durationQty,asc');
              } else {
                setCusSort('durationQty,desc');
              }
            }}
            xs={{ span: 5, offset: 0 }}
            sm={{ span: true, offset: 0 }}
          >
            <MyRow
              className={`${styles.not_last_child} ${styles.bg_small_btn}`}
            >
              <MyCol lg={{ span: 6, offset: 2 }} sm={9} xs={10}>
                <p
                  className={`me-lg-1 text-center text-white ${styles.text_small}`}
                >
                  Duration
                </p>
              </MyCol>
              {pick === 3 && pickDuration ? (
                <MyCol xs={2} className={styles.activeIcon}>
                  <img className={styles.img_small} src={increase} alt="icon" />
                </MyCol>
              ) : (
                <MyCol xs={2}>
                  <img className={styles.img_small} src={increase} alt="icon" />
                </MyCol>
              )}
            </MyRow>
          </MyCol>
          <MyCol
            className={pick === 4 ? styles.active : ''}
            onClick={e => {
              e.preventDefault();
              setPick(4);
              setPickLimitation(!pickLimitation);
              if (pickLimitation === true) {
                setCusSort('limitation,asc');
              } else {
                setCusSort('limitation,desc');
              }
            }}
            xs={{ span: 5, offset: 1 }}
            sm={{ span: true, offset: 0 }}
          >
            <MyRow
              className={`${styles.not_last_child} ${styles.bg_small_btn}`}
            >
              <MyCol lg={{ span: 7, offset: 2 }} sm={9} xs={10}>
                <p
                  className={`me-lg-1 text-center text-white ${styles.text_small}`}
                >
                  Limitation
                </p>
              </MyCol>
              {pick === 4 && pickLimitation ? (
                <MyCol xs={2} className={styles.activeIcon}>
                  <img className={styles.img_small} src={increase} alt="icon" />
                </MyCol>
              ) : (
                <MyCol xs={2}>
                  <img className={styles.img_small} src={increase} alt="icon" />
                </MyCol>
              )}
            </MyRow>
          </MyCol>
          <MyCol
            className={pick === 5 ? styles.active : ''}
            onClick={e => {
              e.preventDefault();
              setPick(5);
              setPickRating(!pickRating);
              if (pickRating === true) {
                setCusSort('reputation,asc');
              } else {
                setCusSort('reputation,desc');
              }
            }}
            xs={5}
            sm={true}
          >
            <MyRow className={styles.bg_small_btn}>
              <MyCol lg={{ span: 7, offset: 2 }} sm={9} xs={10}>
                <p
                  className={`me-lg-1 text-center text-white ${styles.text_small}`}
                >
                  Pawnshop rating
                </p>
              </MyCol>
              {pick === 5 && pickRating ? (
                <MyCol xs={2} className={styles.activeIcon}>
                  <img className={styles.img_small} src={increase} alt="icon" />
                </MyCol>
              ) : (
                <MyCol xs={2}>
                  <img className={styles.img_small} src={increase} alt="icon" />
                </MyCol>
              )}
            </MyRow>
          </MyCol>
        </MyRow>
      </Div>
      {result.result &&
        result.result.content.map((e, index) => (
          <PawnItemDiv key={index}>
            <PawnItem
              shopname={e.pawnShop.name}
              interest={e.interest}
              interestmax={e.interestMax}
              interestmin={e.interestMin}
              allowedloanmax={e.allowedLoanMax}
              allowedloanmin={e.allowedLoanMin}
              durationqtymax={e.durationQtyMax}
              durationqtymin={e.durationQtyMin}
              durationqtytype={e.durationQtyType}
              loantovalue={e.loanToValue}
              symbol={e.acceptableAssetsAsLoan}
              accept={e.acceptableAssetsAsCollateral}
              reputation={e.pawnShop.reputation}
              avatar={e.pawnShop.avatar}
              type={e.type}
            />
          </PawnItemDiv>
        ))}
      <Pagination>
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          breakClassName={'break-me text-white'}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          containerClassName={`pagination mt-4 justify-content-center`}
          activeClassName={styles.pagiactive}
          pageClassName={styles.pagiBtn}
          previousClassName={styles.pagiBtn}
          nextClassName={styles.pagiBtn}
          pageLinkClassName={styles.pagiLink}
          previousLinkClassName={styles.pagiLink}
          nextLinkClassName={styles.pagiLink}
          pageCount={result.result ? result.result.total_pages : 0}
          onPageChange={e => setPage(e.selected)}
        />
      </Pagination>
    </>
  );
}
const Div = styled.div`
  background: #232732;
  border-radius: 9px;
  // height: 50px;
`;
const PawnItemDiv = styled.div`
  margin-bottom: 16px;
`;

const Pagination = styled.div`
  margin: 48px 0 64px 0;
`;
const MyCol = styled(Col)`
  padding: 0;
  align-self: center;
`;
const MyRow = styled(Row)`
  cursor: pointer;
  margin: 0;
`;
