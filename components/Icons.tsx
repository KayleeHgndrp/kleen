import type { CSSProperties } from "react";

interface IconProps {
  size?: number;
  stroke?: string;
  width?: number;
  className?: string;
  style?: CSSProperties;
}

/** The KLEEN steering-wheel mark, used as logo + watermark throughout. */
export function SteeringWheel({
  size = 64,
  stroke = "var(--petrol)",
  width = 3.6,
  className,
  style,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke={stroke}
      strokeWidth={width}
      className={className}
      style={style}
    >
      <circle cx="32" cy="32" r="27" />
      <circle cx="32" cy="32" r="7" />
      <line x1="32" y1="9" x2="32" y2="25" />
      <line x1="12.6" y1="43" x2="26" y2="35.5" />
      <line x1="51.4" y1="43" x2="38" y2="35.5" />
    </svg>
  );
}

export function Check({ size = 14, stroke = "var(--teal)", width = 3, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export function ArrowRight({ size = 16, stroke = "#062024", width = 2.6, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export function Phone({ size = 16, stroke = "var(--teal)", width = 2.3, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function WhatsApp({ size = 18, fill = "#062024", style }: { size?: number; fill?: string; style?: CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} style={style}>
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.8 14.16c-.25.69-1.43 1.32-1.96 1.36-.5.05-1.14.07-1.84-.12-.42-.13-.97-.31-1.67-.61-2.94-1.27-4.86-4.23-5.01-4.43-.15-.2-1.2-1.59-1.2-3.04 0-1.44.76-2.15 1.02-2.45.27-.3.59-.37.79-.37.2 0 .39 0 .57.01.18.01.43-.07.67.51.25.6.84 2.07.91 2.22.07.15.12.32.02.52-.1.2-.15.32-.3.49-.15.17-.31.39-.45.52-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.02 1.12 1 2.07 1.31 2.37 1.46.3.15.47.12.64-.07.17-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.71.81 2 .96.3.15.5.22.57.35.07.12.07.72-.18 1.41z" />
    </svg>
  );
}

export function Pin({ size = 14, stroke = "var(--teal-2)", width = 2.2, fill = "none", innerFill, style }: IconProps & { fill?: string; innerFill?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" fill={innerFill} />
    </svg>
  );
}

export function Clock({ size = 15, stroke = "var(--teal)", width = 2.2, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={width} strokeLinecap="round" style={style}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

export function Plus({ size = 22, stroke = "var(--teal-2)", width = 2.4, className, style }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
