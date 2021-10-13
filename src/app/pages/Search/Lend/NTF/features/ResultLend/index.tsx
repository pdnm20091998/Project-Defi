import { Result } from '../../style/style';
import { Container, Row, Col } from 'react-bootstrap';
import ImgResult from '../../assets/img5273.png';
import { SingleWrapper, LoanWrapper } from '../../style/style';
import DefiButton from 'app/components/DefiButton/DefiButton';

export default function ResultLendComponent() {
  return (
    <Result>
      <div>10 collateral offers match your search</div>
      <SingleWrapper>
        <Container fluid>
          <Row>
            <Col className="img" xs={12} md={6} xl>
              <img src={ImgResult} alt="result" />
            </Col>
            <Col className="detailResult" xs={12} md={6} xl>
              <div className="title">Diamond ring</div>
              <div className="amount-star">1000</div>
              <div className="detail-result">
                <p>
                  <span className="detail-name">Borrower:</span>
                  <span className="detail-content detail-content__borrower">
                    0x723.....0238
                  </span>
                </p>
                <p>
                  <span className="detail-name">Duration:</span>
                  <span className="detail-content">12 months</span>
                </p>
                <p>
                  <span className="detail-name">Asset location:</span>
                  <span className="detail-content">Manchester City, UK</span>
                </p>
                <p>
                  <span className="detail-name">Evaluated price:</span>
                  <span className="detail-content detail-content__price">
                    1,000,000 USDT
                  </span>
                </p>
              </div>
            </Col>
            <Col className="loan" xl>
              <LoanWrapper>
                <div className="detail">
                  <p>Expected loan</p>
                  <div className="price">100,000,000 USDT</div>
                  {/* huy hieu */}
                  <div className="armorial armorial__diamond">Diamond</div>
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
    </Result>
  );
}
