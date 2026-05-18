interface FaceLogoProps {
  size?: number;
  className?: string;
}

export function FaceLogo({ size = 40, className = "" }: FaceLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Tamil News Hub logo"
    >
      <title>Tamil News Hub logo</title>
      {/* Outer circle */}
      <circle
        cx="20"
        cy="20"
        r="19"
        stroke="oklch(0.7 0.18 200)"
        strokeWidth="1.5"
        fill="oklch(0.18 0.01 260)"
      />
      {/* Head shape */}
      <ellipse
        cx="20"
        cy="18"
        rx="9"
        ry="10"
        fill="oklch(0.7 0.18 200)"
        opacity="0.15"
      />
      <ellipse
        cx="20"
        cy="18"
        rx="9"
        ry="10"
        stroke="oklch(0.7 0.18 200)"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Left eye */}
      <circle cx="16.5" cy="16" r="1.5" fill="oklch(0.7 0.18 200)" />
      {/* Right eye */}
      <circle cx="23.5" cy="16" r="1.5" fill="oklch(0.7 0.18 200)" />
      {/* Smile arc */}
      <path
        d="M15.5 21 Q20 25.5 24.5 21"
        stroke="oklch(0.65 0.2 30)"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Bottom accent bar */}
      <line
        x1="14"
        y1="32"
        x2="26"
        y2="32"
        stroke="oklch(0.65 0.2 30)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
