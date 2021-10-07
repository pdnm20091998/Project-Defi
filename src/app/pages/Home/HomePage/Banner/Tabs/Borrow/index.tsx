/**
 *
 * Borrow
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { Container, Row, Col } from 'react-bootstrap';
import { Crypto } from './Cypto/index';
import { Nft } from './Nft/index';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import { useState } from 'react';
interface Props {}
const Div = styled.div`
  background: #171a23;
  border-radius: 30px;
  padding-top: 30px;
  min-height: 600px;
  .Tabs {
    border: none;
    background: #282c37;
    border-radius: 27px;
    margin-bottom: 30px;
    padding: 5px;
    .active {
      background: linear-gradient(
        221.15deg,
        #bd8727 0%,
        #ffd574 49.02%,
        #feca50 62.02%,
        #bd8727 101.47%
      );
      border-radius: 172px;
      color: #282c37;
      padding: 16px 24px;
    }
    &__tab {
      padding: 16px 24px;
      color: #fff;
      font-weight: 500;
      font-size: 16px;
      line-height: 17px;
      display: inline-block;
      cursor: pointer;
      border-radius: 27px;
      transition: 0.5s ease-in;
    }
  }
`;
const Tab = styled.span`
  text-align: center;
  color: #fff;
`;

export function Borrow(props: Props) {
  let { path, url } = useRouteMatch();
  const [active, setActive] = useState('crypto');
  return (
    <Div>
      <div>
        <Col
          sm="12"
          className=" d-flex justify-content-center align-items-center"
        >
          <div className="Tabs d-flex justify-content-center align-items-center">
            <div>
              <Link onClick={() => setActive('crypto')} to={`${url}/tab=1`}>
                <Tab
                  className={`Tabs__tab ${active === 'crypto' ? 'active' : ''}`}
                >
                  Cryptocurrency
                </Tab>
              </Link>
            </div>
            <div>
              <Link onClick={() => setActive('NFT')} to={`${url}/tab=2`}>
                <Tab
                  className={
                    active === 'NFT' ? ' active Tabs__tab' : 'Tabs__tab'
                  }
                >
                  NFT
                </Tab>
              </Link>
            </div>
          </div>
        </Col>
        <Switch>
          <Route exact path={path}>
            <Crypto />
          </Route>
          <Route path={`${path}/tab=2`}>
            <Nft />
          </Route>
          <Route path={`${path}/tab=1`}>
            <Crypto />
          </Route>
        </Switch>
      </div>
    </Div>
  );
}
