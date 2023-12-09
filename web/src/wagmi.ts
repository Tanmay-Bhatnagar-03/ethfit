import { configureChains, createConfig } from 'wagmi'
import { celo, celoAlfajores} from 'wagmi/chains'
// import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
// import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
// import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { OktoConnector } from "@okto_wallet/okto-connect-sdk";

import { publicProvider } from 'wagmi/providers/public'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [celo,celoAlfajores],
  [
    publicProvider(),
  ],
)
const config = createConfig({
  autoConnect: true,
  connectors: [
    new OktoConnector({
      chains,
      options: {
        projectId: `${process.env.WALLET_CONNECT_PROJECT_ID}`,
        metadata: {
          name: "ethfit",
          description: "DAPP_DESCRIPTION",
          url: "DAPP_URL",
          icons: ["DAPP_ICON"],
        },
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
 });

 new OktoConnector({
  chains,
  options: {
    projectId: `${process.env.WALLET_CONNECT_PROJECT_ID}`,
    metadata: {
      name: "DAPP_NAME",
      description: "DAPP_DESCRIPTION",
      url: "DAPP_URL",
      icons: ["DAPP_ICON"],
    },
  },
});
