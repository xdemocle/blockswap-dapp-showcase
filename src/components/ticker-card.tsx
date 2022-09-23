import { useEffect, useState } from 'react';
import { getErcShortAddress } from '../helpers';
import useClaimAuction from '../hooks/use-claim-auction';
import useWallet from '../hooks/use-wallet';

export type TickerType = {
  id: string;
  shbBid: string;
  bidder: string;
  biddingEnd: string;
  numberOfBidsReceived: string;
  imageURI: string;
  shbClaimed: string;
};

interface TickerCardProps {
  ticker: TickerType;
}

const TickerCard = ({ ticker }: TickerCardProps) => {
  const { getNftUri, contract } = useClaimAuction();
  const [imgNtfUri, setImgNftUri] = useState(undefined);

  const getImageUri = async (id: string) => {
    const imgUri = await getNftUri(id);

    if (imgUri) {
      setImgNftUri(imgUri);
    }
  };

  useEffect(() => {
    if (ticker && contract) {
      getImageUri(ticker.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ticker, contract]);

  return (
    <div className="w-full sm:w-[50%] md:w-[33.33%] lg:w-[25%] xl:w-[20%]">
      <div className="flex flex bg-white dark:bg-card-dark dark:text-card-dark-text dark:border-0 dark:shadow-lg rounded-md border-solid border flex flex-col justify-between flex-1 py-4 px-8 mx-3 mb-8 text-sm">
        {imgNtfUri ? (
          <div className="text-green-punk-2">
            <img
              src={imgNtfUri}
              alt="NFT"
              height="128"
              className="h-[128px] mx-auto mb-3"
              style={{ width: 'auto' }}
            />
          </div>
        ) : (
          <div className="font-lcd text-green-punk-2 text-3xl text-center py-[3.25rem]">
            {ticker.id}
          </div>
        )}

        <div className="font-lcd text-green-punk-2 mb-2 whitespace-nowrap">
          {ticker.id}
        </div>

        <div className="mb-2 whitespace-nowrap">
          Bid Count:{' '}
          <span className="text-lightest-gray">
            {ticker.numberOfBidsReceived}
          </span>
        </div>

        <div className="mb-2 whitespace-nowrap">
          Winning bid:{' '}
          <span className="text-lightest-gray font-medium">
            {parseFloat(String(Number(ticker.shbBid) / 1000000000000000000))
              .toFixed(2)
              .replace(/\.0+$/, '')}
          </span>
        </div>

        <div className="mb-2 whitespace-nowrap">
          End Block:{' '}
          <span className="text-lightest-gray font-medium">
            {ticker.biddingEnd}
          </span>
        </div>

        <div className="mb-2 whitespace-nowrap">
          Winner:{' '}
          <span className="text-lightest-gray font-medium">
            <a
              href={`https://etherscan.io/address/${ticker.bidder}`}
              rel="noreferrer"
              target="_blank"
            >
              {getErcShortAddress(ticker.bidder)}
            </a>
          </span>
        </div>

        <div className="mb-6 whitespace-nowrap">
          Time Left:{' '}
          <span className="text-green-punk font-semibold">Finished</span>
        </div>
      </div>
    </div>
  );
};

export default TickerCard;
