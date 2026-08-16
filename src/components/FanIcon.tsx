export default function FanIcon({
  className,
  ...rest
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
      {...rest}
    >
      {/* Stylised lotus fan — matches the wordmark motif in the PDF */}
      <g
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M32 28 L4 28" />
        <path d="M32 28 L60 28" />
        {[...Array(9)].map((_, i) => {
          const angle = -180 + (i * 180) / 8;
          const rad = (angle * Math.PI) / 180;
          const x2 = 32 + 26 * Math.cos(rad);
          const y2 = 28 + 26 * Math.sin(rad);
          return (
            <line
              key={i}
              x1={32}
              y1={28}
              x2={x2}
              y2={y2}
            />
          );
        })}
        <path d="M6 28 Q32 -6 58 28" />
      </g>
    </svg>
  );
}
