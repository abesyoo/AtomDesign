import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>ボタン</PrimaryButton>
      <PrimaryButton>検索</PrimaryButton>
      <SecondaryButton>aaa</SecondaryButton>
    </div>
  );
}
