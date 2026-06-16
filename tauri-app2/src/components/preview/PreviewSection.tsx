import { BotRuntime } from "./BotRuntime";
import { SignalSources } from "./SignalSources";
import { StatusGrid } from "./StatusGrid";

export function PreviewSection() {
  return (
    <section className="preview-section">
      <BotRuntime />
      <StatusGrid />
      <SignalSources />
    </section>
  );
}
