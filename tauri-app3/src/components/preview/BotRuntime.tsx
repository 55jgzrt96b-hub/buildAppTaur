import { useEffect, useRef } from "react";
import { LOG_LINES } from "../../constants/preview";
import { useTerminalTyping } from "../../hooks/useTerminalTyping";
import { StatusDot } from "../icons/StatusDot";

export function BotRuntime() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const { completedLines, activeLine, isTyping } = useTerminalTyping(LOG_LINES);

  useEffect(() => {
    const terminal = terminalRef.current;
    if (terminal) {
      terminal.scrollTop = terminal.scrollHeight;
    }
  }, [completedLines, activeLine]);

  return (
    <div className="preview-card">
      <div className="runtime-header">
        <div className="runtime-title">
          <StatusDot />
          Vantoro bot runtime
        </div>
        <span className="runtime-badge">All systems operational</span>
      </div>
      <div className="terminal" ref={terminalRef}>
        {completedLines.map((line, index) => (
          <div key={`${index}-${line}`} className="terminal-line">
            {line}
          </div>
        ))}
        {(isTyping || activeLine) && (
          <div className="terminal-line terminal-line--active">
            {activeLine}
            <span className="terminal-cursor" aria-hidden="true" />
          </div>
        )}
      </div>
    </div>
  );
}
