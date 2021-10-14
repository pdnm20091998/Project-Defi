import styled from 'styled-components/macro';
import HeaderCrypto from '../InfoTitle/Header/Header';
import '../InfoTitle/Sass/mainCrypto.scss';
import dolar from '../InfoTitle/asset/dolar.svg';
import dolarHidden from '../InfoTitle/asset/dolarHidden.svg';
import PawnShopItem from '../PawnshopItem/pawnshopItem';
interface Props {
  dataShop: any;
  dataPerson: any;
}
export default function SumPawnShop(props: Props) {
  // console.log(props.dataShop);
  // console.log(props.dataPerson);
  return (
    <div className="headerCrypto">
      <p className="crypto__title">
        {props.dataShop.data.total_elements} pawnshop package match your search
      </p>
      <HeaderCrypto
        picture={dolar}
        title="You are not in a hurry and can wait?"
        text="Request a loan from a trusted P2P lender to get a better interest rate
        and LTV"
      />
      {props.dataPerson && <PawnShopItem data={props.dataPerson} />}
      <HeaderCrypto
        picture={dolarHidden}
        title="Want an instant loan?"
        text="Submit your collateral to get a loan in seconds"
      />
    </div>
  );
}
