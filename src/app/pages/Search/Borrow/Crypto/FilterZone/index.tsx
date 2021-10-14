import { PropsOf } from '@emotion/react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components/macro';
import Filter from './components/Filter';
interface Props {
  dataAsset?: Array<object>;
  handleClose: Function;
  // changePage: Function;
  changeInterestRange: Function;
  changeLoanRange: Function;
  changeCollateral: Function;
  changeLoanSymbol: Function;
  changeLoanType: Function;
  changeDuration: Function;
}
const imgObject = {
  XRP: '/XRP.7ff389b.png',
  ETH: '/ETH.d810d23.png',
  LTC: '/LTC.4b4595e.png',
  BTC: '/BTC.fba89d5.png',
  DOT: '/DOT.69cb9b6.png',
  ADA: '/ADA.4647c52.png',
  WBNB: '/WBNB.978ee2b.png',
  USDT: '/USDT.b7a5381.png',
  DFY: '/DFY.a0b985b.png',
  BUSD: '/BUSD.3aa6751.png',
  USDC: '/USDC.10ea0ad.png',
  DAI: '/DAI.71410d0.png',
  BNB: '/BNB.978ee2b.png',
};
export default function FilterZone(props: Props) {
  const collateralAccepted: Array<object> = [];
  const loanToken: Array<object> = [];
  const interestRange = [
    { name: '0-10%', title: '0-10%', value: '0:0.1' },
    { name: '10-25%', title: '10-25%', value: '0.1:0.25' },
    { name: '25-50%', title: '25-50%', value: '0.25:0.5' },
    { name: '>50%', title: '>50%', value: '0.5:1' },
  ];
  const loanToValue = [
    { name: '0-25%', title: '0-25%', value: '0:0.25' },
    { name: '25-50%', title: '25-50%', value: '0.25:0.5' },
    { name: '50-75%', title: '50-75%', value: '0.5:0.75' },
    { name: '>75%', title: '>75%', value: '0.75:1' },
  ];
  const loanType = [
    { name: 'auto', title: 'auto', value: '0' },
    { name: 'semi-auto', title: 'semi-auto', value: '1' },
    { name: 'negotiation', title: 'negotiation', value: '2' },
  ];
  const duration = [
    { name: 'week', title: 'week', value: '0' },
    { name: 'month', title: 'month', value: '1' },
  ];
  props.dataAsset &&
    props.dataAsset.map((data: any) => {
      if (data.isWhitelistCollateral) {
        collateralAccepted.push({
          name: data.symbol,
          title: data.symbol,
          img: `https://staging.app.defiforyou.uk/_nuxt/img${
            imgObject[data.symbol]
          }`,
          value: data.symbol,
        });
      }
      if (data.isWhitelistSupply) {
        loanToken.push({
          name: data.symbol,
          title: data.symbol,
          img: `https://staging.app.defiforyou.uk/_nuxt/img${
            imgObject[data.symbol]
          }`,
          value: data.symbol,
        });
      }
      return 0;
    });
  const { handleClose } = props;
  return (
    <Div>
      <FilterHolder>
        <Span>Reset filter</Span>
      </FilterHolder>
      <Border></Border>
      <FilterHolder>
        <Filter
          title="Interest range"
          listCheckBox={interestRange}
          change={props.changeInterestRange}
        />
      </FilterHolder>
      <Border />
      <FilterHolder>
        <Filter
          title="loan to value"
          listCheckBox={loanToValue}
          change={props.changeLoanRange}
        />
      </FilterHolder>
      <Border />
      <FilterHolder>
        <Filter
          title="Collateral accepted"
          listCheckBox={collateralAccepted}
          change={props.changeCollateral}
        />
      </FilterHolder>
      <Border />
      <FilterHolder>
        <Filter
          title="Loan token"
          listCheckBox={loanToken}
          change={props.changeLoanSymbol}
        />
      </FilterHolder>
      <Border />
      <FilterHolder>
        <Filter
          title="Loan type"
          listCheckBox={loanType}
          change={props.changeLoanType}
        />
      </FilterHolder>
      <Border />
      <FilterHolder>
        <Filter
          title="Duration"
          listCheckBox={duration}
          change={props.changeDuration}
        />
      </FilterHolder>
      <Border />
    </Div>
  );
}
const Div = styled.div`
  background-color: #282c37;
  border-radius: 20px;
  padding-bottom: 1rem;
`;

const FilterHolder = styled.div`
  padding: 0.5rem;
  color: white;
`;
const Border = styled.div`
  width: 100%;
  border: 1px solid;
`;
const Span = styled.span`
  color: white;
  font-size: 14px;
  text-decoration: underline;
`;
