import { BrandingSection } from "./components/branding/BrandingSection";
import { TradingChartGraphic } from "./components/background/TradingChartGraphic";
import { RegistrationForm } from "./components/registration/RegistrationForm";
import "./App.css";

function App() {
  return (
    <div className="page">
      <TradingChartGraphic />
      <div className="layout">
        <BrandingSection />
        <RegistrationForm />
      </div>
    </div>
  );
}

export default App;
