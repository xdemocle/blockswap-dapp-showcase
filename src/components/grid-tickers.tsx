import Loader from './loader';
import TickerCard, { TickerType } from './ticker-card';

interface GridTickersProps {
  tickers: TickerType[];
  isLoading: boolean;
}

const GridTickers = ({ tickers, isLoading }: GridTickersProps) => (
  <section className="flex flex-wrap m-auto px-5 w-full max-w-[95rem] mt-10">
    {isLoading ? (
      <Loader message="Loading..." />
    ) : (
      tickers.map((ticker: TickerType) => (
        <TickerCard key={ticker.id} ticker={ticker} />
      ))
    )}
  </section>
);

export default GridTickers;
