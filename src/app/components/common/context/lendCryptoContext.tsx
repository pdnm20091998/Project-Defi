import { useContext, createContext, useState } from 'react';

interface InitContext {
  page?: any;
  setPage?: any;
  loanAmount?: any;
  setLA?: any;
  loanSymbol?: any;
  setLS?: any;
  loanDuration?: any;
  setLD?: any;
  loanDurationType?: any;
  setLDType?: any;
  name?: any;
  setName?: any;
  nftType?: any;
  setNftType?: any;
  assetType?: any;
  setAssetType?: any;
  item?: any;
  setItem?: any;
  render?: any;
  setRender?: any;
}
export const LendCryptoContext = createContext({} as InitContext);

export const LendCryptoContextProvider = ({ children }) => {
  const [page, setPage] = useState(0);
  const [loanAmount, setLA] = useState();
  const [loanSymbol, setLS] = useState('');
  const [loanDuration, setLD] = useState();
  const [loanDurationType, setLDType] = useState('');
  const [name, setName] = useState('');
  const [nftType, setNftType] = useState('');
  const [assetType, setAssetType] = useState('');
  const [item, setItem] = useState('');
  const [render, setRender] = useState(false);
  const data: any = {
    setPage,
    page,
    loanAmount,
    setLA,
    loanSymbol,
    setLS,
    loanDuration,
    setLD,
    loanDurationType,
    setLDType,
    name,
    setName,
    nftType,
    setNftType,
    assetType,
    setAssetType,
    item,
    setItem,
    render,
    setRender,
  };

  return (
    <LendCryptoContext.Provider value={data}>
      {children}
    </LendCryptoContext.Provider>
  );
};

export const useLendCryptoContext = () => {
  return useContext(LendCryptoContext);
};
