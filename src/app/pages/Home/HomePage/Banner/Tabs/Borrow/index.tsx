/**
 *
 * Borrow
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { Tabs, Tab } from 'react-bootstrap';
import { Crypto } from './Cypto/index';
import { Nft } from './Nft/index';
interface Props {}
const Div = styled.div`
  background: #171a23;
  border-radius: 30px;
  padding: 30px;
  min-height: 600px;
`;
const TabsComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  .tab-content {
    width: 100%;
  }
`;

export function Borrow(props: Props) {
  return (
    <Div>
      <TabsComponent>
        <Tabs
          defaultActiveKey="Cryptocurrency"
          transition={false}
          id="noanim-tab-example"
          className="tabs__borrow"
        >
          <Tab eventKey="Cryptocurrency" title="Cryptocurrency">
            <Crypto />
          </Tab>
          <Tab eventKey="NFT" title="NFT">
            <Nft />
          </Tab>
        </Tabs>
      </TabsComponent>
    </Div>
  );
}
