import { useContext } from 'react';
import { Web3Context, Web3ContextProps } from '../providers/wallet';

const useWallet = (): Web3ContextProps => {
  return useContext(Web3Context);
};

export default useWallet;
