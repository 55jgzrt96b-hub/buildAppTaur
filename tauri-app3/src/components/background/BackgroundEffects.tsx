import { COMETS } from "../../constants/background";

export function BackgroundEffects() {
  return (
    <div className="page-effects" aria-hidden="true">
      <div className="comets-layer">
        {COMETS.map((comet, index) => (
          <span
            key={index}
            className="comet"
            style={{
              top: comet.top,
              left: comet.left,
              animationDelay: comet.delay,
              animationDuration: comet.duration,
              ["--line-length" as string]: `${comet.length}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
