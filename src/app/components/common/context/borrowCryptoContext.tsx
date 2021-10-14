import React, { useContext, createContext, useState } from 'react';

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
  const [collateralAmount, setCollateralAmount] = useState(0);

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
