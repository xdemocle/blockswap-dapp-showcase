import useGlobal from '../../hooks/use-global';
import Button from '../button';
import Layout from '../layout';
import Modal from '../modal';

const App = () => {
  const { showWalletModal, setShowWalletModal, toggleShowWalletModal } =
    useGlobal();

  return (
    <>
      <Layout>
        <Button
          className="font-semibold bg-button-color hover:bg-button-color-hover mx-auto mt-[256px]"
          prepend={<div className="mr-2">🔓</div>}
          onClick={() => toggleShowWalletModal()}
        >
          Unlock Wallet
        </Button>
      </Layout>

      {showWalletModal && (
        <Modal>
          <Modal.Main>main</Modal.Main>
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
      )}
    </>
  );
};

export default App;
