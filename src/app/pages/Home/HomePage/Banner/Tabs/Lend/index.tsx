/**
 *
 * Lend
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { Container, Row, Col } from 'react-bootstrap';
import { Form } from '../../Form/index';
import { useState } from 'react';
import DefiButton from '../../../../../../components/DefiButton/DefiButton';
import imgSearch from '../../assets/search.svg';

interface Props {}

const Main = styled.div`
  background: #171a23;
  border-radius: 30px;
  padding: 30px;
  color: #fff;
  .tabsRadio {
    .tab {
      display: block;
      position: relative;
      padding-left: 35px;
      margin-bottom: 12px;
      cursor: pointer;
      font-size: 22px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        &:checked ~ .checkmark {
          background-color: transparent;
          border: 2px solid #dba83d;
        }
        &:checked ~ .checkmark:after {
          display: block;
        }
      }
      .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 24px;
        width: 24px;
        background-color: transparent;
        border-radius: 50%;
        border: 1px solid #fff;
        &:after {
          content: '';
          position: absolute;
          display: none;
          top: 3px;
          left: 3px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #dba83d;
        }

        &:hover {
          background-color: #ccc;
        }
      }
    }
  }
  .search {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
  }
`;
const P = styled.p``;
export function Lend(props: Props) {
  const [component, setComponent] = useState('Crypto');
  return (
    <Main>
      <Container>
        <Row>
          <Col>
            <Form
              name="Maximum loan amount"
              placeholder="Enter amount"
              button={true}
            ></Form>
            <Form name="Duration" placeholder="Duration"></Form>
            <P>Collateral</P>
            <div className="tabsRadio d-flex ">
              <label className="tabsRadio__Crypto tab col-6">
                <input
                  type="radio"
                  name="radio"
                  onClick={() => setComponent('Crypto')}
                  defaultChecked={true}
                />
                Crypto
                <span className="checkmark"></span>
              </label>
              <label className="tabsRadio__NFT tab col-6">
                <input
                  type="radio"
                  name="radio"
                  onClick={() => setComponent('NFT')}
                />
                NFT
                <span className="checkmark"></span>
              </label>
            </div>
            {component === 'Crypto' ? (
              'hello'
            ) : (
              <DefiButton
                className="search"
                width="100%"
                height="54px"
                margin="38px 0px 124px 0px"
              >
                <img src={imgSearch} alt="" />
                Search
              </DefiButton>
            )}
          </Col>
        </Row>
      </Container>
    </Main>
  );
}
