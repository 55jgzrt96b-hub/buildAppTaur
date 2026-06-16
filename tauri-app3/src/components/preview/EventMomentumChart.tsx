import { ActivityChart } from "./ActivityChart";

export function EventMomentumChart() {
  return (
    <div className="preview-card chart-card">
      <div className="chart-header">
        <span className="chart-label">Event momentum</span>
        <span className="chart-badge">+7.4%</span>
      </div>
      <ActivityChart />
    </div>
  );
}
