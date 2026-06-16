type StatusDotProps = {
  size?: "sm" | "md";
};

export function StatusDot({ size = "md" }: StatusDotProps) {
  return <span className={`status-dot${size === "sm" ? " status-dot--sm" : ""}`} />;
}
