import useGlobal from '../../hooks/use-global';
import useWallet from '../../hooks/use-wallet';
import Button from '../button';
import Layout from '../layout';
import WalletModal from '../wallet-modal';

const App = () => {
  const { showWalletModal, toggleShowWalletModal } = useGlobal();
  const { isConnected } = useWallet();

  return (
    <>
      <Layout>
        {!isConnected && (
          <Button
            className="font-semibold bg-button-color hover:bg-button-color-hover mx-auto mt-[256px]"
            prepend={<div className="mr-2">🔓</div>}
            onClick={() => toggleShowWalletModal()}
          >
            Unlock Wallet
          </Button>
        )}
      </Layout>

      {showWalletModal && <WalletModal />}
    </>
  );
};

export default App;
