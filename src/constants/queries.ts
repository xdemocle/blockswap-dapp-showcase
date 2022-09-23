export const QUERY_TICKERS = `
    query Tickers {
      tickers(first: 50, orderBy: biddingEnd, orderDirection: desc) {
        id
        shbBid
        bidder
        biddingEnd
        numberOfBidsReceived
        imageURI
        shbClaimed
      }
    }
`;
