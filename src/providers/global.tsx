import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from 'react';

export interface GlobalContextProps {
  showWalletModal: boolean;
  setShowWalletModal: Dispatch<SetStateAction<boolean>>;
  toggleShowWalletModal: () => void;
}

export const GlobalContext = createContext<GlobalContextProps>(
  {} as GlobalContextProps
);

interface GlobalProps {
  children: ReactNode;
}

const GlobalProvider = ({ children }: GlobalProps) => {
  const [showWalletModal, setShowWalletModal] = useState(false);

  const toggleShowWalletModal = () => {
    setShowWalletModal(!showWalletModal);
  };

  return (
    <GlobalContext.Provider
      value={{ showWalletModal, setShowWalletModal, toggleShowWalletModal }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
