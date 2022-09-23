import { CONTRACT } from '../../constants/config';

const LayoutFooter = () => (
  <footer className="fixed bottom-0 left-0 right-0 flex items-center py-3 pb-10 text-center">
    <div className="justify-center m-auto px-5 w-full max-w-6xl">
      <div className="text-md dark:text-white">
        <a
          href={`https://etherscan.io/address/${CONTRACT}`}
          rel="noreferrer"
          target="_blank"
        >
          Contract
        </a>
      </div>
    </div>
  </footer>
);

export default LayoutFooter;
