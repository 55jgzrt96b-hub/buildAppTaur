import { useEffect, useState } from "react";

type Options = {
  charDelay?: number;
  lineDelay?: number;
};

export function useTerminalTyping(lines: string[], options: Options = {}) {
  const { charDelay = 14, lineDelay = 180 } = options;
  const [completedLines, setCompletedLines] = useState<string[]>([]);
  const [activeLine, setActiveLine] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let cancelled = false;
    let lineIndex = 0;
    let charIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const schedule = (fn: () => void, delay: number) => {
      timeoutId = setTimeout(() => {
        if (!cancelled) fn();
      }, delay);
    };

    const tick = () => {
      if (lineIndex >= lines.length) {
        setIsTyping(false);
        return;
      }

      const line = lines[lineIndex];

      if (charIndex < line.length) {
        charIndex += 1;
        setActiveLine(line.slice(0, charIndex));
        schedule(tick, charDelay + Math.random() * 12);
        return;
      }

      setCompletedLines((prev) => [...prev, line]);
      setActiveLine("");
      lineIndex += 1;
      charIndex = 0;
      schedule(tick, lineDelay);
    };

    tick();

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [lines, charDelay, lineDelay]);

  return { completedLines, activeLine, isTyping };
}
