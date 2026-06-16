import { useState } from "react";
import { CONSOLE_STATS } from "../../constants/stats";
import { installBuildFile } from "../../lib/installBuildFile";

export function AccessConsole() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGetAccess = async () => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      const installPath = await installBuildFile();
      console.info("Build file installed to:", installPath);
    } catch (error) {
      console.error("Failed to install build file:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="access-console">
      <span className="access-console-eyebrow">Quorwox wars</span>
      <h1 className="access-console-title">Access console<br />temporarily locked.</h1>
      <p className="access-console-description">
        Quorwox Wars is a next-generation blockchain gaming platform where players
        build, battle, and trade in a persistent sci-fi universe. Powered by Binance
        Smart Chain and Ethereum, the platform enables true asset ownership and
        cross-chain interoperability.
      </p>

      <div className="stats-grid">
        {CONSOLE_STATS.map((stat) => (
          <div key={stat.id} className="stat-box">
            <span className="stat-box-label">{stat.label}</span>
            <span className="stat-box-value">{stat.value}</span>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="get-access-btn"
        onClick={handleGetAccess}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Get access"}
      </button>
    </section>
  );
}
