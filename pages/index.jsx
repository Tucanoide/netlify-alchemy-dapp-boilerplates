import styles from "../styles/Home.module.css";
import InstructionsComponent from "../components/InstructionsComponent";
import TokenBalancesDisplay from "./components/tokensBalanceDisplay.jsx";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <InstructionsComponent></InstructionsComponent>
        <TokensBalanceDisplay address={"vitalik.eth"} chain={"ETH_MAINNET"}/>
      </main>
    </div>
  );
}
