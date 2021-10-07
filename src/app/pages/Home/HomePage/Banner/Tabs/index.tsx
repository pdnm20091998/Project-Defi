/**
 *
 * Tabs
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { Tabs, Tab } from 'react-bootstrap';
import { Borrow } from './Borrow/index';
import { Lend } from './Lend/index';
interface Props {}
const Div = styled.div`
  .tabs {
    padding: 4px;
    border: none;
    padding-bottom: 12px;

    .nav-item {
      display: flex;
      align-items: center;
      text-align: center;
    }
    .nav-link {
      background-color: Transparent;
      border: none;
      color: #ffffff;
      font-style: normal;

      padding: 0px;
      :first-child {
        margin-right: 15px;
      }
    }
    .active {
      color: #dba83d;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
    }
    &__borrow {
      padding: 10px;
      border: none;
      background: #282c37;
      border-radius: 1000px;
      flex-wrap: nowrap;
      @media (max-width: 480px) {
        width: 50%;
      }
      .nav-item {
        font-weight: 500;
        font-size: 16px;
        line-height: 17px;
        display: inline-block;
        cursor: pointer;
        display: flex;
        align-items: center;
        text-align: center;
      }
      .nav-link {
        background-color: Transparent;
        border: none;
        color: #ffffff;
        font-style: normal;
        transition: color 0.5s ease-in;
        padding: 1rem 1.5rem;
      }
      .active {
        background: linear-gradient(
          221.15deg,
          #bd8727 0%,
          #ffd574 49.02%,
          #feca50 62.02%,
          #bd8727 101.47%
        );
        border-radius: 1000px;
        border: none;
        cursor: pointer;
        color: #282c37;
      }
    }
  }
`;

export function PawnTabs(props: Props) {
  return (
    <Div>
      <Tabs
        defaultActiveKey="Borrow"
        transition={false}
        id="noanim-tab-example"
        className="tabs"
      >
        <Tab eventKey="Borrow" title="Borrow">
          <Borrow />
        </Tab>
        <Tab eventKey="Lend" title="Lend">
          <Lend />
        </Tab>
      </Tabs>
    </Div>
  );
}
