import "./App.css";
import { MainScreen } from "@components/MainScreen";
import Logo from "@assets/logo.svg";

export const App = () => {
  return (
    <div className="app">
      <img src={Logo} alt="logo" className="logo" />
      <MainScreen />
    </div>
  );
};
