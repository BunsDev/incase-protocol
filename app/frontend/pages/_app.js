import * as React from 'react';
import NextHead from 'next/head';
import '../styles/globals.css';

// Imports
import { chain, createClient, WagmiConfig, configureChains } from 'wagmi';
// import { alchemyProvider } from 'wagmi/providers/alchemy';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { publicProvider } from 'wagmi/providers/public';

import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';

import { useIsMounted } from '../hooks';

// Get environment variables
// const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID;
// const infuraId = process.env.NEXT_PUBLIC_INFURA_ID;

const hardhatChain = {
  id: 31337,
  name: 'Hardhat',
  nativeCurrency: {
    decimals: 18,
    name: 'Hardhat',
    symbol: 'HARD',
  },
  network: 'hardhat',
  rpcUrls: {
    default: 'http://127.0.0.1:8545',
  },
  testnet: true,
};

const { chains, provider } = configureChains(
  [chain.polygonMumbai],
  // [alchemyProvider({ alchemyId }), publicProvider()]
  [
    // jsonRpcProvider({ rpc: () => ({ http: 'https://rpc.ankr.com/eth_goerli' }) }),
    jsonRpcProvider({ rpc: () => ({ http: 'https://dimensional-patient-arrow.matic-testnet.discover.quiknode.pro/b0d1a3580a1576c880015164cf6cb5ded2496f25/' }) }),
  // publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Expir3',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const App = ({ Component, pageProps }) => {
  const isMounted = useIsMounted();

  if (!isMounted) return null;
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider coolMode chains={chains}>
        <NextHead>
          <title>Expir3</title>
        </NextHead>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default App;
