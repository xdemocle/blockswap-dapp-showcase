import useGlobal from '../../hooks/use-global';
import useWallet from '../../hooks/use-wallet';
import Button from '../button';

const LayoutHeader = () => {
  const { toggleShowWalletModal } = useGlobal();
  const { isConnected } = useWallet();

  return (
    <header className="flex items-center py-3 bg-light-green">
      <div className="flex items-center justify-between m-auto px-5 w-full max-w-6xl">
        <div className="text-lg font-bold text-dark-gray">Claim your SHB</div>
        <Button
          className="font-semibold"
          onClick={() => toggleShowWalletModal()}
        >
          {isConnected ? 'My Account' : 'Unlock Wallet'}
        </Button>
      </div>
    </header>
  );
};

export default LayoutHeader;
