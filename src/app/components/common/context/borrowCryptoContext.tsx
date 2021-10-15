import { useContext, createContext, useState } from 'react';

interface InitContext {
  page?: any;
  setPage?: any;
  cusSort?: any;
  setCusSort?: any;
  interestRanges?: any;
  setInterestRanges?: any;
  loanToValueRanges?: any;
  setLoanToValueRanges?: any;
  loanTypes: any;
  setLoanTypes: any;
  collateralSymbols?: any;
  setCollateralSymbols?: any;
  loanSymbols?: any;
  setLoanSymbols?: any;
  durationTypes?: any;
  setDurationTypes?: any;
  collateralAmount?: any;
  setCollateralAmount?: any;
  durationQty?: any;
  setDurationQty?: any;
  loanAmount?: any;
  setLoanAmount?: any;
  name?: any;
  setName?: any;
  render?: any;
  setRender?: any;
}

export const BorrowCryptoContext = createContext({} as InitContext);

export const BorrowCryptoContextProvider = ({ children }) => {
  const [page, setPage] = useState(0);
  const [cusSort, setCusSort] = useState('');
  const [interestRanges, setInterestRanges] = useState('');
  const [loanToValueRanges, setLoanToValueRanges] = useState('');
  const [loanTypes, setLoanTypes] = useState('');
  const [collateralSymbols, setCollateralSymbols] = useState('');
  const [loanSymbols, setLoanSymbols] = useState('');
  const [durationTypes, setDurationTypes] = useState('');
  const [collateralAmount, setCollateralAmount] = useState('');
  const [durationQty, setDurationQty] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [name, setName] = useState('');
  const [render, setRender] = useState(false);
  const data: any = {
    page,
    setPage,
    cusSort,
    setCusSort,
    interestRanges,
    setInterestRanges,
    loanToValueRanges,
    setLoanToValueRanges,
    loanTypes,
    setLoanTypes,
    collateralSymbols,
    setCollateralSymbols,
    loanSymbols,
    setLoanSymbols,
    durationTypes,
    setDurationTypes,
    collateralAmount,
    setCollateralAmount,
    durationQty,
    setDurationQty,
    loanAmount,
    setLoanAmount,
    name,
    setName,
    render,
    setRender,
  };
  return (
    <BorrowCryptoContext.Provider value={data}>
      {children}
    </BorrowCryptoContext.Provider>
  );
};

export const useBorrowContext = () => {
  return useContext(BorrowCryptoContext);
};
