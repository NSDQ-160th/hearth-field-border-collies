export function Mark({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M16 28c0-8 1.2-14.5 6.8-20.2"
        stroke="#2D3A2E"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M16 28c0-7.2-1.6-13.8-7.2-19.4"
        stroke="#2D3A2E"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M16.2 11.2c2.4-1.6 4.8-2 7.2-1.4"
        stroke="#C9A24A"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <path
        d="M15.6 14.4c-2.6-1.5-5.2-1.8-7.6-1.1"
        stroke="#C9A24A"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <circle cx="16" cy="7.2" r="1.15" fill="#C9A24A" />
    </svg>
  );
}
