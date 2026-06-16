import { COMETS, STARS } from "../../constants/background";

export function BackgroundEffects() {
  return (
    <div className="page-effects" aria-hidden="true">
      <div className="page-glow" />

      <div className="stars-layer">
        {STARS.map((star) => (
          <span
            key={`${star.left}-${star.top}`}
            className="star"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>

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
            }}
          />
        ))}
      </div>
    </div>
  );
}
