import {
    ThirdwebProvider,
    ConnectWallet,
    metamaskWallet,
    coinbaseWallet,
    walletConnect,
    localWallet,
    paperWallet,
  } from "@thirdweb-dev/react";
  
  export default function Wallet() {
    return (
      <ThirdwebProvider
        activeChain="polygon"
        clientId="af1f1328e1af3a405cd64852cf857418"
        supportedWallets={[
          metamaskWallet(),
          coinbaseWallet(),
          walletConnect(),
          localWallet(),
          paperWallet({
            paperClientId: "af9e1026-4ede-4605-9c5f-32676c7f9c94",
          }),
        ]}
      >
        <ConnectWallet theme={"dark"} />
      </ThirdwebProvider>
    );
  }