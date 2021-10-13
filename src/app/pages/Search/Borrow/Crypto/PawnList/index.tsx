import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components/macro';
import increase from './assests/increase.svg';
import styles from './style/PawnList.module.css';
import PawnItem from './PawnItem/PawnItem';
import ReactPaginate from 'react-paginate';

import axios from 'axios';
const url =
  'https://staginggw.defiforyou.uk/defi-pawn-crypto-service/public-api/v1.0.0/pawn-shop-package/search?collateralAmount=&collateralSymbols=&durationQty=&durationTypes=&loanAmount=&loanSymbols=&status=3&size=10';
// const url2 =
// 'https://staginggw.defiforyou.uk/defi-pawn-crypto-service/public-api/v1.0.0/pawn-shop/search-p2p-lenders?status=3&size=10';
const url3 =
  'https://staginggw.defiforyou.uk/defi-pawn-crypto-service/public-api/v1.0.0/pawn-shop-package/search?size=10&status=3&durationTypes=';
export default function PawnList() {
  const [pick, setPick] = useState(0);
  const [shop, setShop] = useState<null | { data: any }>(null);
  // const [shop2, setShop2] = useState<null | { data: any }>(null);
  useEffect(() => {
    // axios.get(url).then(res => {
    //   setShop(res.data);
    // });
    axios.get(url3).then(res => {
      setShop(res.data);
    });
    // axios.get(url).then(res => {
    //   setShop2(res.data);
    // });
  }, []);
  console.log(shop?.data);
  // console.log('shop 2 ne');
  // console.log(shop2);
  return (
    <>
      <Div className={`${styles.bg_on_small_scr} mb-4`}>
        <MyRow>
          <MyCol
            className={pick === 1 ? styles.active : ''}
            onClick={e => {
              e.preventDefault();
              setPick(1);
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
              <MyCol
                // sm={2}
                // lg={{ span: 2 }}
                xs={2}
                className={pick === 1 ? styles.activeIcon : ''}
              >
                <img className={styles.img_small} src={increase} alt="icon" />
              </MyCol>
            </MyRow>
          </MyCol>

          <MyCol
            className={pick === 2 ? styles.active : ''}
            onClick={e => {
              e.preventDefault();
              setPick(2);
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
              <MyCol
                lg={{ span: 2 }}
                sm={2}
                xs={2}
                className={pick === 2 ? styles.activeIcon : ''}
              >
                <img className={styles.img_small} src={increase} alt="icon" />
              </MyCol>
            </MyRow>
          </MyCol>
          <MyCol
            className={pick === 3 ? styles.active : ''}
            onClick={e => {
              e.preventDefault();
              setPick(3);
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
              <MyCol
                lg={{ span: 2 }}
                sm={2}
                xs={2}
                className={pick === 3 ? styles.activeIcon : ''}
              >
                <img className={styles.img_small} src={increase} alt="icon" />
              </MyCol>
            </MyRow>
          </MyCol>
          <MyCol
            className={pick === 4 ? styles.active : ''}
            onClick={e => {
              e.preventDefault();
              setPick(4);
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
              <MyCol
                lg={{ span: 2 }}
                sm={2}
                xs={2}
                className={pick === 4 ? styles.activeIcon : ''}
              >
                <img className={styles.img_small} src={increase} alt="icon" />
              </MyCol>
            </MyRow>
          </MyCol>
          <MyCol
            className={pick === 5 ? styles.active : ''}
            onClick={e => {
              e.preventDefault();
              setPick(5);
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
              <MyCol
                lg={{ span: 2 }}
                sm={2}
                xs={2}
                className={pick === 5 ? styles.activeIcon : ''}
              >
                <img className={styles.img_small} src={increase} alt="icon" />
              </MyCol>
            </MyRow>
          </MyCol>
        </MyRow>
      </Div>
      {/* {shop && <PawnItem />} */}
      {shop !== undefined &&
        shop?.data.content.map((e, index) => (
          <>
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
              symbol={e.acceptableAssetsAsLoan[0].symbol}
              accept={e.acceptableAssetsAsCollateral}
              reputation={e.pawnShop.reputation}
              avatar={e.pawnShop.avatar}
              key={index}
              type={e.type}
            />
          </>
        ))}
      {shop !== undefined && (
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          breakClassName={'break-me text-white'}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          containerClassName={`pagination mt-4 justify-content-center`}
          activeClassName={styles.pagiactive}
          pageCount={shop?.data.total_pages}
          pageClassName={styles.pagiBtn}
          previousClassName={styles.pagiBtn}
          nextClassName={styles.pagiBtn}
          pageLinkClassName={styles.pagiLink}
          previousLinkClassName={styles.pagiLink}
          nextLinkClassName={styles.pagiLink}
        />
      )}
    </>
  );
}
const Div = styled.div`
  background: #232732;
  border-radius: 9px;
  // height: 50px;
`;
const MyCol = styled(Col)`
  padding: 0;
  align-self: center;
`;
const MyRow = styled(Row)`
  cursor: pointer;
  margin: 0;
`;
