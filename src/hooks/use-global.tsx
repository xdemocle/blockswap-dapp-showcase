import { useContext } from 'react';
import { GlobalContext, GlobalContextProps } from '../providers/global';

const useGlobal = (): GlobalContextProps => {
  return useContext(GlobalContext);
};

export default useGlobal;
