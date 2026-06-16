import { BackgroundEffects } from "./components/background/BackgroundEffects";
import { AccessConsole } from "./components/console/AccessConsole";
import { IntelSidebar } from "./components/intel/IntelSidebar";
import "./App.css";

function App() {
  return (
    <div className="app">
      <BackgroundEffects />
      <div className="app-layout">
        <IntelSidebar />
        <AccessConsole />
      </div>
    </div>
  );
}

export default App;
