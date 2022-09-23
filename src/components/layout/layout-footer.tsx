import { CONTRACT } from '../../constants/config';

const LayoutFooter = () => (
  <footer className="flex items-center mt-20 py-3 pb-10 text-center">
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
