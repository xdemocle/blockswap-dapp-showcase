import { ReactComponent as MetamaskIconSvg } from '../assets/metamask-icon.svg';
import { ReactComponent as WalletConnectIconSvg } from '../assets/walletconnect-icon.svg';
import useGlobal from '../hooks/use-global';
import useWallet from '../hooks/use-wallet';
import Button from './button';
import Modal from './modal';

const WalletModal = () => {
  const { setShowWalletModal } = useGlobal();
  const { connect, disconnect, isConnected, address } = useWallet();

  const viewOnEtherscanHandler = () => {
    return window.open(`https://etherscan.io/address/${address}`);
  };

  const signOutHandler = () => {
    setShowWalletModal(false);
    return disconnect();
  };

  return (
    <Modal>
      <Modal.Main>
        {isConnected ? (
          <>
            <Button
              className="w-full font-bold text-base my-5"
              type="flat"
              onClick={viewOnEtherscanHandler}
            >
              View On Etherscan
            </Button>

            <Button
              className="w-full font-bold text-base my-5"
              type="flat"
              onClick={signOutHandler}
            >
              Sign Out
            </Button>
          </>
        ) : (
          <>
            <div className="text-center">Select your wallet:</div>

            <Button
              className="w-full font-bold text-base my-5"
              type="flat"
              onClick={() => connect('metaMask')}
            >
              <MetamaskIconSvg className="inline-block mr-1" /> MetaMask
            </Button>

            <Button
              className="w-full font-bold text-base my-5"
              type="flat"
              onClick={() => connect('walletConnect')}
            >
              <WalletConnectIconSvg className="inline-block mr-1" />
              WalletConnect
            </Button>
          </>
        )}
      </Modal.Main>

      <Modal.Footer>
        <Button
          type="flat"
          className="font-bold text-base"
          onClick={() => setShowWalletModal(false)}
        >
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WalletModal;
