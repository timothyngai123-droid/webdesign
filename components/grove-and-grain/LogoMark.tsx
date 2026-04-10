type Props = {
  className?: string;
  strokeWidth?: number;
};

/**
 * Grove & Grain mark — a single wheat ear with a leaf, drawn from the
 * brand logo. Uses `currentColor` so the stroke can be themed via
 * Tailwind text color utilities.
 */
export default function LogoMark({ className, strokeWidth = 5 }: Props) {
  return (
    <svg
      viewBox="0 0 220 320"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {/* Main stem */}
      <path d="M110 22 L110 270" />
      {/* Top bud */}
      <path d="M110 10 C94 34 94 56 110 68 C126 56 126 34 110 10 Z" />
      {/* Pair 1 */}
      <path d="M110 76 C86 72 62 90 52 114 C78 112 98 98 110 84 Z" />
      <path d="M110 76 C134 72 158 90 168 114 C142 112 122 98 110 84 Z" />
      {/* Pair 2 */}
      <path d="M110 120 C84 116 56 136 44 162 C74 160 98 144 110 128 Z" />
      <path d="M110 120 C136 116 164 136 176 162 C146 160 122 144 110 128 Z" />
      {/* Pair 3 */}
      <path d="M110 168 C80 164 48 186 34 214 C70 212 98 192 110 174 Z" />
      <path d="M110 168 C140 164 172 186 186 214 C150 212 122 192 110 174 Z" />
      {/* Leaf on lower-left of stem */}
      <path d="M110 222 C72 216 30 234 12 264 C46 292 86 278 110 238 Z" />
      {/* Leaf veins */}
      <path d="M110 236 L16 266" />
      <path d="M82 232 L32 272" />
      <path d="M58 240 L22 272" />
      <path d="M36 250 L16 268" />
    </svg>
  );
}
