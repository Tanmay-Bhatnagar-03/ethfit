import { Account } from "../src/components/Account";
import { Connect } from "../src/components/Connect";
import { Connected } from "../src/components/Connected";
import { MintNFT } from "../src/components/MintNFT";
import { NetworkSwitcher } from "../src/components/NetworkSwitcher";

export function Page() {
  return (
    <>
      <h1>wagmi + Next.js + @wagmi/cli (Etherscan)</h1>

      <Connect />

      <Connected>
        <Account />
        <hr />
        <MintNFT />
        <hr />
        <NetworkSwitcher />
      </Connected>
    </>
  );
}

export default Page;
