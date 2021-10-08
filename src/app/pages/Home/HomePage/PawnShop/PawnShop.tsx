import styled from 'styled-components/macro';
import { Container, Row, Col } from 'react-bootstrap';
import DefiButton from 'app/components/DefiButton/DefiButton';
import backgroundImg from '../PawnShop/asset/watch.png';
import '../PawnShop/sass/pawnshop.scss';

const DivPawnShop = styled.div`
  padding: 60px 20px;
  background: rgb(26, 26, 35);
  .pawnShop {
    padding: 50px 100px;
    background-image: url('../PawnShop/asset/watch.png');
    color: #ffffff;
    background: linear-gradient(
      90.03deg,
      #131318 21.91%,
      #211e22 64.64%,
      rgba(23, 26, 35, 0) 68.82%
    );
    border-radius: 20px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .pawnShop__title {
      margin-bottom: 16px;
      font-weight: 600;
      font-size: 36px;
      line-height: 44px;
    }
    .pawnShop__info {
      width: 45%;
      margin-bottom: 30px;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
    }
    .button__learnMore {
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
    }
  }
`;

const PawnShop = () => {
  return (
    <DivPawnShop>
      <Container>
        <Row>
          <Col xl={12}>
            <div
              className="pawnShop"
              style={{ backgroundImage: `url(${backgroundImg})` }}
            >
              <h3 className="pawnShop__title">Become a Pawnshop</h3>
              <p className="pawnShop__info">
                Open your own pawn shop and discover a new business opportunity
                with an unmatched ROI. Be a part of the world's financial
                revolution.
              </p>
              <DefiButton className="button__learnMore" padding="14px 24px">
                Learn more
              </DefiButton>
            </div>
          </Col>
        </Row>
      </Container>
    </DivPawnShop>
  );
};

export default PawnShop;
