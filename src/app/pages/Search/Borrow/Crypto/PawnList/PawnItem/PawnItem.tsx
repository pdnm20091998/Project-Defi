import { style } from '@mui/system';
import DefiButton from 'app/components/DefiButton/DefiButton';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import styled from 'styled-components/macro';
import image from '../assests/image.svg';
import Type from './components/Type';
import styles from './style/PawnItem.module.css';
interface Props {
  shopname: string;
  interest: string;
  interestmax: string;
  interestmin: string;
  allowedloanmax: string;
  allowedloanmin: string;
  durationqtymax: string;
  durationqtymin: string;
  durationqtytype: number;
  loantovalue: string;
  symbol: string;
  accept: Array<any>;
  reputation: number;
  avatar: string;
  type: number;
}
export default function PawnItem(props: Props) {
  return (
    <Div>
      <Container className="my-1">
        <Row className="py-3">
          <Col md={8}>
            <MyRow className={`${styles.border_bot} pb-md-0 pb-2`}>
              <Row>
                <Col className="mb-2 mb-lg-0" md={5} xs={6}>
                  {props.avatar ? (
                    <img src={props.avatar} width="100%" alt="imag" />
                  ) : (
                    <img src={image} alt="imag" width="100%" />
                  )}
                </Col>
                <Col xs={6} md={7}>
                  <Stack gap={0}>
                    <Title className={styles.small_title}>
                      {props.shopname}
                    </Title>
                    <Detail>{props.reputation}</Detail>
                  </Stack>
                </Col>
              </Row>
              {/* <Col md={7} xs={6}> */}
              {/* <Stack gap={4}> */}
              <Row className={`justify-content-lg-end ${styles.negaMargin}`}>
                {/* <Stack gap={0}>
                  <Title>{props.shopname}</Title>
                  <Detail>{props.reputation}</Detail>
                </Stack> */}
                <Col xs={12} lg={7}>
                  <Stack gap={2} className={styles.text_small}>
                    <Row>
                      <Col xs={4} sm={3} md={4} lg={5}>
                        <Label>Available</Label>
                      </Col>
                      <Col xs={true} sm={true} md={true} lg={true}>
                        <Detail>32,589,386</Detail>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={4} md={4} sm={3} lg={5}>
                        <Label>Limit</Label>
                      </Col>
                      <Col xs={true} sm={true} md={true} lg={true}>
                        <Detail>
                          {props.allowedloanmin} - {props.allowedloanmax}{' '}
                          {props.symbol}
                        </Detail>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={4} sm={3} md={4} lg={5}>
                        <Label>Duration</Label>
                      </Col>
                      <Col xs={true} sm={true} md={true} lg={true}>
                        {props.durationqtytype === 1 ? (
                          <Detail>
                            {props.durationqtymin}-{props.durationqtymax} months
                          </Detail>
                        ) : (
                          <Detail>
                            {props.durationqtymin}-{props.durationqtymax} weeks
                          </Detail>
                        )}
                      </Col>
                    </Row>
                    {props.loantovalue && (
                      <Row>
                        <Col xs={4} sm={3} md={4} lg={5}>
                          <Label>LTV</Label>
                        </Col>
                        <Col xs={true} sm={true} md={true} lg={true}>
                          <Detail>up to {props.loantovalue}%</Detail>
                        </Col>
                      </Row>
                    )}
                  </Stack>
                </Col>
                {/* </Stack> */}
              </Row>
              {/* </Col> */}
            </MyRow>
          </Col>
          <Col md={4} className="mt-md-0 mt-2">
            <Stack className="align-items-md-end">
              <Label className={`${styles.text_small}`}>interest rate</Label>
              {props.interest ? (
                <Percent className={styles.percent}>
                  {props.interest}% APR
                </Percent>
              ) : (
                <Percent className={styles.percent}>
                  {props.interestmin} - {props.interestmax}% APR
                </Percent>
              )}
              <Label className={`mt-2 mb-1 ${styles.text_small}`}>
                collateral accepted
              </Label>
              <Detail className={styles.text_small}>
                {props.accept[0].symbol}, {props.accept[1].symbol},{' '}
                {props.accept[2].symbol} & {props.accept.length - 3}+ more
              </Detail>
              {props.type === 0 && (
                <Type
                  backgroundColor="rgba(37, 150, 255, 0.2)"
                  border="1px solid #2596FF"
                  color="#2596FF"
                  className="my-3 "
                >
                  Auto
                </Type>
              )}
              {props.type === 1 && (
                <Type
                  backgroundColor="rgba(254, 149, 26, 0.2);"
                  border="1px solid #FE951A"
                  color="#FE951A"
                  className="my-3 "
                >
                  Semi-auto
                </Type>
              )}
              {props.type === 2 && (
                <Type
                  backgroundColor="rgba(255, 72, 72, 0.2)"
                  border="1px solid #FF4848"
                  color="#FF4848"
                  className="my-3 "
                >
                  Negotiation
                </Type>
              )}

              <DefiButton width="150px" height="50px">
                View Detail
              </DefiButton>
            </Stack>
          </Col>
        </Row>
      </Container>
    </Div>
  );
}
const Div = styled.div`
  background-color: #282c37;
  //   background-color: red;
  border-radius: 20px;
  width: 100%;
`;
const Title = styled.h5`
  color: white;
  font-weight: 600;
  font-size: 24px;
`;
const Detail = styled.p`
  color: white;
  font-weight: 500;
`;
const Label = styled.p`
  color: #a2a3a7;
  font-weight: 500;
`;
const MyRow = styled(Row)`
  border-right: 1px solid #45484f;
`;
const Percent = styled.p`
  font-weight: 600;
  font-size: 30px;
  color: #3fd762;
`;
