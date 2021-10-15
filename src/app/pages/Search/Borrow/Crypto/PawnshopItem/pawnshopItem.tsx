import styled from 'styled-components/macro';
import tick from '../InfoTitle/asset/tick.svg';
import star from '../InfoTitle/asset/star.svg';
import infomation from '../InfoTitle/asset/information.svg';
import tag from '../InfoTitle/asset/tag.svg';
import bitcoin from '../InfoTitle/asset/bitcoin.svg';
import compass from '../InfoTitle/asset/compass.svg';
import Dcoin from '../InfoTitle/asset/Dcoin.svg';
import rhombus from '../InfoTitle/asset/rhombus.svg';
import DefiButton from 'app/components/DefiButton/DefiButton';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from 'app/reducer/reducers';
interface Props {}
const PawnShopItem = (props: Props) => {
  const result: any = useSelector((state: RootState) => state.personborrow);

  return (
    <PawnShop>
      <div className="pawnshop__header">
        <p className="pawnshop__title">Personal Lending</p>
        <a className="pawnshop__viewall" href="/">
          View all
        </a>
      </div>

      <Row>
        <Col sm={6}>
          <div className="pawnshop__item">
            <div className="pawnshop__item--title">
              {result.result
                ? `${result.result.content[0].associatedAddress.slice(
                    0,
                    10,
                  )}...${result.result.content[0].associatedAddress.slice(-10)}`
                : null}
              <img src={tick} alt="Notick" />
            </div>
            <div className="rating">
              <img src={star} alt="Nopicture" />
              <span className="rating__number">
                {result.result ? result.result.content[0].reputation : null}
              </span>
              <span className="rating__line">|</span>
              <span className="rating__text">
                {result.result && result.result.content[0].completedContracts}{' '}
                signed contracts
              </span>
            </div>
            <div className="rating__info">
              <span>
                {result.result && result.result.content[0].minInterestRate} -{' '}
                {result.result && result.result.content[0].maxInterestRate}%
                interest rate
              </span>
              <img src={infomation} alt="No picutre" />
            </div>
            <div className="listed">
              <div className="listed__item">
                <img src={tag} alt="No picutre" />
                <span>Good LTV</span>
              </div>
              <div className="listed__item">
                <img src={tag} alt="No picutre" />
                <span>Fast Disburement</span>
              </div>
              <div className="listed__item">
                <img src={tag} alt="No picutre" />
                <span>Trusted </span>
              </div>
            </div>
            <div className="list__icon">
              <div className="text__title">Collateral accepted:</div>
              <div className="list__icon--img">
                <img src={bitcoin} alt="Nopicture" />
                <img src={compass} alt="Nopicture" />
                <img src={Dcoin} alt="Nopicture" />
                <img src={rhombus} alt="Nopicture" />
                <span className="text__last">& 4 more</span>
              </div>
            </div>
            <div className="button___request">
              <DefiButton padding="14px 24px">Request loan</DefiButton>
            </div>
          </div>
        </Col>
        <Col sm={6}>
          <div className="pawnshop__item">
            <div className="pawnshop__item--title">
              {result.result
                ? `${result.result.content[1].associatedAddress.slice(
                    0,
                    10,
                  )}...${result.result.content[1].associatedAddress.slice(-10)}`
                : null}
              <img src={tick} alt="Notick" />
            </div>
            <div className="rating">
              <img src={star} alt="Nopicture" />
              <span className="rating__number">
                {result.result && result.result.content[1].reputation}
              </span>
              <span className="rating__line">|</span>
              <span className="rating__text">
                {result.result && result.result.content[1].completedContracts}{' '}
                signed contracts
              </span>
            </div>
            <div className="rating__info">
              <span>
                {result.result && result.result.content[1].minInterestRate} -{' '}
                {result.result && result.result.content[1].maxInterestRate}%
                interest rate
              </span>
              <img src={infomation} alt="No picutre" />
            </div>
            <div className="listed">
              <div className="listed__item">
                <img src={tag} alt="No picutre" />
                <span>Good LTV</span>
              </div>
              <div className="listed__item">
                <img src={tag} alt="No picutre" />
                <span>Fast Disburement</span>
              </div>
              <div className="listed__item">
                <img src={tag} alt="No picutre" />
                <span>Trusted </span>
              </div>
            </div>
            <div className="list__icon">
              <div className="text__title">Collateral accepted:</div>
              <div className="list__icon--img">
                <img src={bitcoin} alt="Nopicture" />
                <img src={compass} alt="Nopicture" />
                <img src={Dcoin} alt="Nopicture" />
                <img src={rhombus} alt="Nopicture" />
                <span className="text__last">& 4 more</span>
              </div>
            </div>
            <div className="button___request">
              <DefiButton padding="14px 24px">Request loan</DefiButton>
            </div>
          </div>
        </Col>
      </Row>
    </PawnShop>
  );
};

const PawnShop = styled.div`
  color: #ffffff;
  margin: 30px 0 24px 0;
  .pawnshop__header {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    justify-content: space-between;
    .pawnshop__title {
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
    }
    .pawnshop__viewall {
      color: #ffffff;
    }
  }

  .pawnshop__item {
    padding: 20px 17px;
    background: #282c37;
    border-radius: 20px;
    margin-bottom: 10px;
    .pawnshop__item--title {
      color: rgb(37, 150, 255);
      font-weight: 500;
      font-size: 20px;
      text-decoration-line: underline;
      img {
        padding-left: 8px;
        padding-right: 8px;
      }
    }
  }

  .rating {
    display: flex;
    align-item: center;
    margin-top: 10px;
    img {
      padding-right: 8px;
    }
    &__number {
      font-weight: 500;
      font-size: 16px;
      color: rgb(255, 255, 255);
      margin-right: 8px;
    }
    &__line {
      margin-right: 8px;
    }
    &__text {
      color: rgb(162, 163, 167);
    }
  }

  .rating__info {
    display: flex;
    align-items: center;
    margin: 10px 0 13px 0;
    span {
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: #3fd762;
      margin-right: 8px;
    }
  }

  .listed__item {
    border: 1px solid rgb(219, 168, 61);
    color: rgb(219, 168, 61);
    border-radius: 17px;
    margin-right: 12px;
    padding: 4px 9px;
    margin-bottom: 10px;
    float: left;
    font-size: 12px;
    img {
      margin-right: 9px;
    }
  }

  .list__icon {
    clear: both;
    display: flex;
    flex-wrap: wrap;
    .text__title {
      margin-right: 12px;
    }
    .list__icon--img {
      img {
        margin-right: 8px;
      }
    }
  }

  .button___request {
    text-align: center;
    margin: 28px 0 24px 0;
  }
`;

export default PawnShopItem;
