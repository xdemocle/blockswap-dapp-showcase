import WalletConnectProvider from '@walletconnect/web3-provider';
import { INFURA_KEY } from '../constants/config';

const getNewInstance = () => {
  return new WalletConnectProvider({
    infuraId: INFURA_KEY
  });
};

//  Create WalletConnect Provider
let walletConnect = getNewInstance();

export const reset = async () => {
  walletConnect = getNewInstance();
};

//  Enable session (triggers QR Code modal)
export const enable = async () => {
  await walletConnect.enable();
};

export default walletConnect;
