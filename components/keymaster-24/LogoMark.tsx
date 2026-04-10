type Props = {
  className?: string;
  strokeWidth?: number;
  /** When true, renders just the key glyph with no wordmark. */
  markOnly?: boolean;
};

/**
 * KeyMaster 24 logomark — outlined key (circular bow + shafts with a
 * single step-down tooth at the right end), optionally with the
 * "KEYMASTER 24" wordmark below. Uses `currentColor` so the whole mark
 * can be themed via Tailwind `text-*` utilities (critical for the nav,
 * which is white over the navy hero and stays white after scroll).
 */
export default function LogoMark({
  className,
  strokeWidth = 8,
  markOnly = false,
}: Props) {
  const width = markOnly ? 260 : 900;
  const height = markOnly ? 95 : 260;
  const viewBox = markOnly ? "0 0 260 95" : "0 0 900 260";

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-label="KeyMaster 24"
      role="img"
    >
      <g transform={markOnly ? "translate(0 0)" : "translate(250 0)"}>
        {/* Bow — single outlined ring */}
        <circle cx="40" cy="47" r="30" />
        {/* Shaft — outlined path forming a rectangle with a single
            step-down tooth at the right end. Drawn as one closed loop
            so the overall silhouette reads as a solid outline. */}
        <path
          d="M 70 32
             L 244 32
             L 244 76
             L 218 76
             L 218 62
             L 70 62
             Z"
        />
      </g>

      {!markOnly && (
        <text
          x="450"
          y="210"
          textAnchor="middle"
          fontFamily="Barlow, 'Arial Black', system-ui, sans-serif"
          fontSize="96"
          fontWeight="800"
          fill="currentColor"
          stroke="none"
          letterSpacing="-2"
        >
          KEYMASTER 24
        </text>
      )}
    </svg>
  );
}
