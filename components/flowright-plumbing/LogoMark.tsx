type Props = {
  className?: string;
  /** When true, renders just the droplet mark without the wordmark. */
  markOnly?: boolean;
  /** Stroke width for the droplet outline. */
  strokeWidth?: number;
};

/**
 * FlowRight logomark — a water droplet with a subtle inner highlight.
 * Uses `currentColor` for the outline so the mark can be themed via
 * Tailwind `text-*` utilities. The wordmark is rendered as SVG text
 * (DM Sans) so it stays crisp on the dark canvas.
 */
export default function LogoMark({
  className,
  markOnly = false,
  strokeWidth = 3.5,
}: Props) {
  if (markOnly) {
    return (
      <svg
        width={64}
        height={64}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-label="FlowRight Plumbing"
        role="img"
      >
        <path d="M32 8 C 42 22, 52 32, 52 42 A 20 20 0 1 1 12 42 C 12 32, 22 22, 32 8 Z" />
        <path
          d="M24 42 A 8 8 0 0 0 32 50"
          strokeWidth={strokeWidth * 0.65}
          opacity="0.55"
        />
      </svg>
    );
  }

  return (
    <svg
      width={260}
      height={64}
      viewBox="0 0 260 64"
      fill="none"
      className={className}
      aria-label="FlowRight Plumbing"
      role="img"
    >
      <g
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M32 8 C 42 22, 52 32, 52 42 A 20 20 0 1 1 12 42 C 12 32, 22 22, 32 8 Z" />
        <path
          d="M24 42 A 8 8 0 0 0 32 50"
          strokeWidth={strokeWidth * 0.65}
          opacity="0.55"
        />
      </g>
      <text
        x="68"
        y="36"
        fontFamily="var(--font-dm-sans), system-ui, sans-serif"
        fontSize="22"
        fontWeight="700"
        fill="currentColor"
        letterSpacing="-0.5"
      >
        FlowRight
      </text>
      <text
        x="68"
        y="52"
        fontFamily="var(--font-inter), system-ui, sans-serif"
        fontSize="9"
        fontWeight="500"
        fill="currentColor"
        opacity="0.6"
        letterSpacing="1.8"
      >
        PLUMBING &amp; HEATING
      </text>
    </svg>
  );
}
