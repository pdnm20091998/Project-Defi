import { Result, SingleWrapper, LoanWrapper } from '../../style/style';
import { Container, Row, Col } from 'react-bootstrap';
import DefiButton from 'app/components/DefiButton/DefiButton';
import { useSelector } from 'react-redux';
import { RootState } from 'app/reducer/reducers';
import { Pagination } from 'app/components/Pagination/Pagination';
import { useLendContext } from 'app/components/common/context/lendNftContext';
import ImgPrice from '../../assets/price.svg';
import Avt from '../../assets/Frame.svg';

export default function ResultLendComponent() {
  const { setPage } = useLendContext();
  const result: any = useSelector((state: RootState) => state.lendnft);

  const handlePageChange = e => {
    setPage(e);
  };
  return (
    <Result>
      <div>
        {result.result ? result.result.total_elements : '0'} collateral offers
        match your search
      </div>
      {result.result
        ? result.result.content.map((data: any, index: any) => {
            return (
              <SingleWrapper key={data.id}>
                <Container fluid>
                  <Row>
                    <Col className="img" xs={12} md={6} xxl={3}>
                      <img src={Avt} alt="Nft avatar" />
                    </Col>
                    <Col className="detailResult px-0" xs={12} md={6} xxl={6}>
                      <div className="detail">
                        <div className="title">{data.nftName}</div>
                        <div className="amount-star">1</div>
                        <div className="detail-result">
                          <p>
                            <span className="detail-name">Borrower:</span>
                            <span className="detail-content detail-content__borrower">
                              {data.borrowerWalletAddress.slice(0, 5) +
                                '...' +
                                data.borrowerWalletAddress.slice(-5)}
                            </span>
                          </p>
                          <p>
                            <span className="detail-name">Duration:</span>
                            <span className="detail-content">
                              {data.durationTime}
                              {data.durationType === 0 ? ' weeks' : ' months'}
                            </span>
                          </p>
                          <p>
                            <span className="detail-name">Asset location:</span>
                            <span className="detail-content">
                              {data.nftAssetLocation}
                            </span>
                          </p>
                          <p>
                            <span className="detail-name">
                              Evaluated price:
                            </span>
                            <span className="detail-content detail-content__price">
                              <img
                                className="evaluated-icon"
                                src={ImgPrice}
                                alt=""
                              />
                              {data.nftEvaluatedPrice} {data.nftEvaluatedSymbol}
                            </span>
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col className="loan" xxl={{ span: 3 }}>
                      <LoanWrapper>
                        <div className="detail">
                          <p>Expected loan</p>
                          <div className="price">
                            {data.expectedLoanAmount} {data.expectedLoanSymbol}
                          </div>
                          {/* huy hieu */}
                          <div className="armorial armorial__diamond">
                            {data.nftAssetTypeId === 1
                              ? 'Jewelry'
                              : data.nftAssetTypeId === 2
                              ? 'Car'
                              : data.nftAssetTypeId === 3
                              ? 'Gemstone'
                              : data.nftAssetTypeId === 4
                              ? 'House and land'
                              : 'At Work'}
                          </div>
                        </div>
                        <DefiButton
                          className="sendBtn"
                          type="submit"
                          width={'135px'}
                          height={'48px'}
                        >
                          Send Offer
                        </DefiButton>
                      </LoanWrapper>
                    </Col>
                  </Row>
                </Container>
              </SingleWrapper>
            );
          })
        : ''}
      <div className="pagination">
        {' '}
        <Pagination
          totalPage={result.result ? result.result.total_pages : 0}
          changePage={e => handlePageChange(e)}
        />
      </div>
    </Result>
  );
}
