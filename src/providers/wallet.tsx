import {
  useWeb3React,
  Web3ReactHooks,
  Web3ReactProvider
} from '@web3-react/core';
import { MetaMask } from '@web3-react/metamask';
import { Network } from '@web3-react/network';
import type { Connector } from '@web3-react/types';
import { WalletConnect } from '@web3-react/walletconnect';
import { ReactNode, useEffect } from 'react';
import { hooks as metaMaskHooks, metaMask } from '../connectors/metamask';
import { hooks as networkHooks, network } from '../connectors/network';
import {
  hooks as walletConnectHooks,
  walletConnect
} from '../connectors/wallet-connect';

interface WalletProviderProps {
  children: ReactNode;
}

const getName = (connector: Connector) => {
  if (connector instanceof MetaMask) return 'MetaMask';
  if (connector instanceof WalletConnect) return 'WalletConnect';
  if (connector instanceof Network) return 'Network';
  return 'Unknown';
};

const connectors: [MetaMask | WalletConnect | Network, Web3ReactHooks][] = [
  [metaMask, metaMaskHooks],
  [walletConnect, walletConnectHooks],
  [network, networkHooks]
];

const ChildDebug = () => {
  const { connector } = useWeb3React();

  useEffect(() => {
    console.debug(`Priority Connector is: ${getName(connector)}`);
  }, [connector]);

  return null;
};

const WalletProvider = ({ children }: WalletProviderProps) => {
  return (
    <Web3ReactProvider connectors={connectors}>
      <ChildDebug />
      {children}
    </Web3ReactProvider>
  );
};

export default WalletProvider;
