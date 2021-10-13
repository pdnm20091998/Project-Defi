import ComboBox from 'react-responsive-combo-box';

interface ComboBoxProps {
  name?: string;
  array?: string;
  dataAsset?: Array<object>;
}

export const ComboBoxExample = (props: ComboBoxProps) => {
  let collateral: any[] = [];
  let loan: any[] = [];
  let collateralOption: any[] = ['All'];
  let loanOption: any[] = ['All'];
  const data = props.dataAsset;
  if (data) {
    // eslint-disable-next-line array-callback-return
    data.map((e: any) => {
      e.isWhitelistCollateral && collateral.push(e);
      e.isWhitelistSupply && loan.push(e);
    });
    collateral.forEach(e => {
      collateralOption.push(`${e.symbol}`);
    });
    loan.forEach(e => {
      loanOption.push(e.symbol);
    });
  }
  const options = {
    data: collateralOption,
    data2: loanOption,
    week: ['All', 'Weeks', 'Months'],
  };

  return (
    <div className="drop">
      <ComboBox
        className={`option`}
        selectedOptionColor="#2c4059"
        defaultValue={`${props.array ? options[props.array][0] : []}`}
        placeholder={props.name}
        options={props.array ? options[props.array] : []}
        onBlur={e => {
          return <div>hello {e}</div>;
        }}
        enableAutocomplete
      />
    </div>
  );
};
