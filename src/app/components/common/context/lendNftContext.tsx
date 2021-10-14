import React, { useContext, createContext, useState } from 'react';

interface InitContext {
  page?: any;
  setPage?: any;
  loanAmount?: any;
  setLoanAmount?: any;
  loanSymbol?: any;
  setLoanSymbol?: any;
  loanDuration?: any;
  setLoanDuration?: any;
  loanDurationType?: any;
  setLoanDurationType?: any;
  name?: any;
  setName?: any;
}
export const LendNftContext = createContext({} as InitContext);

export const LendNftContextProvider = ({ children }) => {
  const [page, setPage] = useState(0);
  const [loanAmount, setLoanAmount] = useState();
  const [loanSymbol, setLoanSymbol] = useState();
  const [loanDuration, setLoanDuration] = useState();
  const [loanDurationType, setLoanDurationType] = useState();
  const [name, setName] = useState('');

  const data: any = {
    setPage,
    page,
    loanAmount,
    setLoanAmount,
    loanSymbol,
    setLoanSymbol,
    loanDuration,
    setLoanDuration,
    loanDurationType,
    setLoanDurationType,
    name,
    setName,
  };

  return (
    <LendNftContext.Provider value={data}>{children}</LendNftContext.Provider>
  );
};

export const useLendContext = () => {
  return useContext(LendNftContext);
};
