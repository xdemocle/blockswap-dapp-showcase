# blockswap-dapp-showcase

Blockswap Dapp Showcase Metamask, WallletConnect, NFT list.

_This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)._

## Quickstart

Create in the root of the project a file called `.env.local` with content as example below:

```bash
REACT_APP_INFURA_KEY=<your infura key>
REACT_APP_CONTRACT=0x4ea67aebb61f7ff6e15e237c8b79d29c41f750fd
REACT_APP_SUBGRAPHS=https://api.thegraph.com/subgraphs/name/vince0656/brand-central
```

First command to install dependencies:

```bash
npm install
```

Lunch command below to start local development:

```bash
npm start
```

## Architecture

The DAPP showcase handle state management trough standard React Context API. It doesn't use any third party libraries for handling wallet connections and Web3.js instantiation. A simple React Custom Hook (mentioned below `use-claim-auction.tsx`), provide connection to the "auction" contract using the web3 instance previously created underneath during user's wallet connection attempt.

Folders structure as below:

```bash
+public # public and static folder
-src
  +assets # all static assets
  +components # all components
  -connectors # all wallet connector adapters
    meta-mask.ts
    wallet-connect.ts
  +constants # all web app constants and static json abi
  +helpers # helper functions collection
  -hooks # hooks collection
    use-claim-auction.tsx # react hook for the main auction contract
    use-global.tsx # global actions
    use-wallet.tsx # react web3 and wallet hook
  -providers # all providers
    global.tsx # global provider for generic actions
    wallet.tsx # web3 and wallet provider
  +styles # minimal style with tailwindcss
```

Contract available at: [https://etherscan.io/address/0x4ea67aebb61f7ff6e15e237c8b79d29c41f750fd#code](https://etherscan.io/address/0x4ea67aebb61f7ff6e15e237c8b79d29c41f750fd#code)

### Application flow

Once the user has connected his wallet to the DAPP, the App component will load trough an axios call to the subgraphs, the required tickers needed to populate our grid-tickers component. Once the GraphQL query has been executed and meanwhile items are populating the grid, each TickerCard component will run asyncronously an extra calls to the IPFS blockchain (with `use-claim-auction.tsx` hook) to retrieve the NFT item that will be shown inside the TickerCard as picture.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
