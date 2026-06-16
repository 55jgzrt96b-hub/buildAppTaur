export type CometConfig = {
  top: string;
  left: string;
  delay: string;
  duration: string;
  length: number;
};

function createComets(count: number): CometConfig[] {
  return Array.from({ length: count }, (_, index) => ({
    top: `${((index * 23 + 2) % 72)}%`,
    left: `${8 + ((index * 37 + 5) % 90)}%`,
    delay: `${((index * 0.41) % 6.5).toFixed(2)}s`,
    duration: `${(2.2 + (index % 7) * 0.4).toFixed(2)}s`,
    length: 50 + (index % 6) * 14,
  }));
}

export const COMETS = createComets(30);
