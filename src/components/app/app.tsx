import axios from 'axios';
import { useEffect, useState } from 'react';
import { SUBGRAPHS } from '../../constants/config';
import { QUERY_TICKERS } from '../../constants/queries';
import useGlobal from '../../hooks/use-global';
import useWallet from '../../hooks/use-wallet';
import Button from '../button';
import GridTickers from '../grid-tickers';
import Layout from '../layout';
import WalletModal from '../wallet-modal';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tickers, setTickers] = useState([]);
  const { showWalletModal, toggleShowWalletModal } = useGlobal();
  const { isConnected } = useWallet();

  const getTickers = async () => {
    setIsLoading(true);

    const response = await axios({
      url: SUBGRAPHS,
      method: 'post',
      data: {
        query: QUERY_TICKERS
      }
    });

    setTickers(response.data.data.tickers);
    setIsLoading(false);
  };

  useEffect(() => {
    if (isConnected) {
      getTickers();
    } else {
      setTickers([]);
    }
  }, [isConnected]);

  return (
    <>
      <Layout>
        {!isConnected ? (
          <Button
            className="font-semibold bg-button-color hover:bg-button-color-hover mx-auto mt-[256px]"
            prepend={<div className="mr-2">🔓</div>}
            onClick={() => toggleShowWalletModal()}
          >
            Unlock Wallet
          </Button>
        ) : (
          <GridTickers isLoading={isLoading} tickers={tickers} />
        )}
      </Layout>

      {showWalletModal && <WalletModal />}
    </>
  );
};

export default App;
