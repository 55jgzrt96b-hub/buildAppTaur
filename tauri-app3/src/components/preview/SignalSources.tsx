import { SIGNAL_SOURCES } from "../../constants/preview";
import { StatusDot } from "../icons/StatusDot";

export function SignalSources() {
  return (
    <div className="signals">
      <div className="signals-title">Signal Sources</div>
      <div className="signals-grid">
        {SIGNAL_SOURCES.map((source) => (
          <div key={source.name} className="signal-card">
            <img className="signal-icon" src={source.icon} alt={source.name} />
            <div className="signal-name-container">
              <span className="signal-name">{source.name}</span>
              <span className="signal-live">
                <StatusDot size="sm" />
                Live
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
