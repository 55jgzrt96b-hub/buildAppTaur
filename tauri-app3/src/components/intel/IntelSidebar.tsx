import { INTEL_ITEMS } from "../../constants/intel";
import { IntelCard } from "./IntelCard";

export function IntelSidebar() {
  return (
    <aside className="intel-sidebar">
      <header className="intel-sidebar-header">
        <span className="intel-sidebar-eyebrow">Dispatch</span>
        <h2 className="intel-sidebar-title">Quorwox intel</h2>
      </header>
      <div className="intel-list">
        {INTEL_ITEMS.map((item) => (
          <IntelCard key={item.id} item={item} />
        ))}
      </div>
    </aside>
  );
}
