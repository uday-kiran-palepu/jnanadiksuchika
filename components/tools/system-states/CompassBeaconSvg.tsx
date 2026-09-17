export function CompassBeaconSvg({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      fill="none"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="100" r="88" stroke="#00609b" strokeOpacity="0.25" strokeWidth="2" />
      <circle cx="100" cy="100" r="72" stroke="#9acbff" strokeOpacity="0.5" strokeWidth="1.5" />
      <path
        d="M100 28 L118 100 L100 172 L82 100 Z"
        fill="#fc8b33"
        opacity="0.9"
      />
      <path
        d="M100 172 L118 100 L100 28 L82 100 Z"
        fill="#00609b"
        opacity="0.85"
      />
      <circle cx="100" cy="100" r="10" fill="#f59e0b" />
      <circle cx="100" cy="100" r="4" fill="#ffffff" />
      <text fill="#974800" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" x="92" y="24">
        N
      </text>
      <text fill="#00609b" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" x="168" y="104">
        E
      </text>
      <text fill="#465d7b" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" x="92" y="188">
        S
      </text>
      <text fill="#00609b" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" x="22" y="104">
        W
      </text>
    </svg>
  );
}
