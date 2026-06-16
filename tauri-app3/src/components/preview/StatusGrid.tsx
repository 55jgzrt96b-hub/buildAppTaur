import { STATUS_CARDS } from "../../constants/preview";

export function StatusGrid() {
  return (
    <div className="status-grid">
      {STATUS_CARDS.map((card) => (
        <div key={card.id} className="status-card">
          <div className="status-card-top">
            <img className="status-card-icon" src={card.icon} alt="" />
            <div className="status-card-title-container">
            <span className="status-card-title">{card.title}</span>
            <span className="status-live">{card.status}</span>
            </div>
          </div>
          <div className="status-card-metric">
            <span className="status-card-label">{card.label}</span>
            <span className="status-card-value">{card.value}</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${card.progress}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}
