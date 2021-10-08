import styled from 'styled-components/macro';
import fast_time from './asset/fast-time.svg';
import arrow from './asset/Group-arrow.svg';
import money from './asset/money-management.svg';
import wallet from './asset/Group-wallet.svg';
import { Container, Row, Col } from 'react-bootstrap';
import './sass/content.scss';

const DivContent = styled.div`
  padding: 60px 0;
  width: 100%;
  background: rgb(26, 26, 35);
`;

const Title = styled.h3`
  font-size: 36px;
  color: #dba83d;
  font-weight: 600;
  line-height: 44px;
  text-align: center;
  margin: 0;
  margin-bottom: 100px;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
`;
const Error_img = 'No picture';

const ContentItem = styled.div`
  text-align: center;
  color: #ffffff;
  img {
    margin-bottom: 34px;
  }
  .content__title {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-transform: capitalize;
  }

  .content__info {
    margin-top: 20px;
    font-size: 16px;
    line-height: 20px;
  }
`;

const Content = () => {
  return (
    <DivContent className="content">
      <Container>
        <Row>
          <Title className="title">Why Borrow With Us?</Title>
        </Row>
        <Row>
          <Col sm={12} lg={3} className="content__col">
            <ContentItem className="content__item">
              <Image src={fast_time} alt={Error_img} />
              <div className="content__text">
                <h3 className="content__title">Quicker than the bank</h3>
                <p className="content__info">
                  Banks are yesterdays news. Get the money you need without
                  having to wait.
                </p>
              </div>
            </ContentItem>
          </Col>
          <Col sm={12} lg={3} className="content__col">
            <ContentItem className="content__item">
              <Image src={arrow} alt={Error_img} />
              <div className="content__text">
                <h3 className="content__title">Better interest rates</h3>
                <p className="content__info">
                  P2P lending lets you negotiate with the lender to arrange the
                  best possible interest rates
                </p>
              </div>
            </ContentItem>
          </Col>
          <Col sm={12} lg={3} className="content__col">
            <ContentItem className="content__item">
              <Image src={money} alt={Error_img} />
              <div className="content__text">
                <h3 className="content__title">
                  Finance assets without selling
                </h3>
                <p className="content__info">
                  Put your assets to work so you can continue to meet your
                  financial obligations.
                </p>
              </div>
            </ContentItem>
          </Col>
          <Col sm={12} lg={3} className="content__col">
            <ContentItem className="content__item">
              <Image src={wallet} alt={Error_img} />
              <div className="content__text">
                <h3 className="content__title">No credit checks</h3>
                <p className="content__info">
                  Borrow without the background checks. Anyone can get the
                  financing they need.
                </p>
              </div>
            </ContentItem>
          </Col>
        </Row>
      </Container>
    </DivContent>
  );
};

export default Content;
