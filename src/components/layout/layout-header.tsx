import useGlobal from '../../hooks/use-global';
import Button from '../button';

const LayoutHeader = () => {
  const { toggleShowWalletModal } = useGlobal();

  return (
    <header className="flex items-center py-3 bg-light-green">
      <div className="flex items-center justify-between m-auto px-5 w-full max-w-6xl">
        <div className="text-lg font-bold text-dark-gray">
          Blockswap Network
        </div>
        <Button
          className="font-semibold"
          onClick={() => toggleShowWalletModal()}
        >
          Unlock Wallet
        </Button>
      </div>
    </header>
  );
};

export default LayoutHeader;
