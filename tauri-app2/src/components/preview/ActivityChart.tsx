export function ActivityChart() {
  return (
    <svg className="activity-chart" viewBox="0 0 400 120" preserveAspectRatio="none">
      <defs>
        <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2ee4c5" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#2ee4c5" stopOpacity="0" />
        </linearGradient>
        <filter id="dotGlow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {[40, 80, 120, 160, 200, 240, 280, 320, 360].map((x) => (
        <rect key={x} x={x} y="20" width="8" height="90" fill="#1a2a2e" opacity="0.6" />
      ))}

      <path
        d="M0,75 L30,68 L60,72 L90,55 L120,60 L150,42 L180,48 L210,35 L240,40 L270,28 L300,32 L330,22 L360,30 L400,18"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        opacity="0.7"
      />

      <path
        d="M0,80 L30,70 L60,65 L90,58 L120,52 L150,45 L180,50 L210,38 L240,42 L270,30 L300,35 L330,25 L360,28 L400,20 L400,120 L0,120 Z"
        fill="url(#chartGlow)"
      />

      <path
        d="M0,80 L30,70 L60,65 L90,58 L120,52 L150,45 L180,50 L210,38 L240,42 L270,30 L300,35 L330,25 L360,28 L400,20"
        fill="none"
        stroke="#2ee4c5"
        strokeWidth="2"
      />

      {[
        [90, 58],
        [150, 45],
        [210, 38],
        [270, 30],
        [330, 25],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="4" fill="#2ee4c5" filter="url(#dotGlow)" />
      ))}
    </svg>
  );
}
