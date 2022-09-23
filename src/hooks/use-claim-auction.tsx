import { useEffect, useState } from 'react';
import contractJsonAbi from '../constants/brand-central-claim-auction.json';
import { CONTRACT } from '../constants/config';
import { ContractType } from '../constants/interfaces';
import useWallet from './use-wallet';

const useClaimAuction = () => {
  const { web3, address } = useWallet();
  const [contract, setContract] = useState<ContractType | null>(null);

  const getNftUri = async (id: string) => {
    const tokenId = await contract?.methods.lowerTickerToTokenId(id).call();
    let ipfsUri;

    if (tokenId) {
      ipfsUri = await contract?.methods.tokenURI(tokenId).call();
    }

    if (ipfsUri) {
      return await fetch(ipfsUri)
        .then((r) => r.json())
        .then((d) => d.image);
    } else {
      return '';
    }
  };

  useEffect(() => {
    if (web3 && address && !contract) {
      const newContract = new web3.eth.Contract(contractJsonAbi, CONTRACT);
      setContract(newContract);
    }
  }, [address, contract, web3]);

  return {
    contract,
    getNftUri
  };
};

export default useClaimAuction;
