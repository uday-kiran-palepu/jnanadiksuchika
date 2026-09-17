export function KakinadaRadarMap() {
  return (
    <div className="relative w-full h-72 rounded-xl bg-inverse-surface overflow-hidden p-space-md flex flex-col justify-between shadow-inner">
      <svg
        className="absolute inset-0 w-full h-full opacity-40"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 500 300"
        aria-hidden
      >
        <defs>
          <pattern id="grid-dots" height="24" patternUnits="userSpaceOnUse" width="24">
            <circle cx="2" cy="2" fill="#9acbff" opacity="0.3" r="1" />
          </pattern>
          <radialGradient cx="68%" cy="58%" id="kakinada-pulse" r="45%">
            <stop offset="0%" stopColor="#fc8b33" stopOpacity="0.6" />
            <stop offset="40%" stopColor="#0079c2" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#283044" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect fill="url(#grid-dots)" height="100%" width="100%" />
        <rect fill="url(#kakinada-pulse)" height="100%" width="100%" />
        <path
          d="M 380 0 Q 350 70 340 120 T 320 190 T 290 300"
          fill="none"
          stroke="#9acbff"
          strokeDasharray="4 4"
          strokeWidth="1.5"
        />
        <line
          stroke="#fc8b33"
          strokeDasharray="2 3"
          strokeOpacity="0.8"
          strokeWidth="1.5"
          x1="340"
          x2="180"
          y1="175"
          y2="160"
        />
        <line
          stroke="#9acbff"
          strokeDasharray="3 3"
          strokeOpacity="0.6"
          strokeWidth="1.2"
          x1="340"
          x2="170"
          y1="175"
          y2="230"
        />
        <line
          stroke="#9acbff"
          strokeDasharray="2 2"
          strokeOpacity="0.6"
          strokeWidth="1.2"
          x1="340"
          x2="370"
          y1="175"
          y2="110"
        />
        <line
          stroke="#9acbff"
          strokeDasharray="4 4"
          strokeOpacity="0.4"
          strokeWidth="1"
          x1="340"
          x2="160"
          y1="175"
          y2="40"
        />
        <circle cx="340" cy="175" fill="none" r="28" stroke="#fc8b33" strokeOpacity="0.4" strokeWidth="1" />
        <circle
          cx="340"
          cy="175"
          fill="none"
          r="54"
          stroke="#0079c2"
          strokeDasharray="4 4"
          strokeOpacity="0.3"
          strokeWidth="0.75"
        />
        <circle cx="340" cy="175" fill="#fc8b33" r="5" />
        <circle cx="340" cy="175" fill="none" r="10" stroke="#fc8b33" strokeOpacity="0.7" strokeWidth="1.5" />
        <circle cx="180" cy="160" fill="#9acbff" r="3" />
        <circle cx="170" cy="230" fill="#9acbff" r="3" />
        <circle cx="370" cy="110" fill="#9acbff" r="2.5" />
        <circle cx="160" cy="40" fill="#9acbff" r="3" />
      </svg>
      <div className="relative z-10 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-inverse-surface/80 text-secondary-fixed-dim text-caption font-caption uppercase tracking-wider backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-secondary-container" />
          HQ Node: Kakinada (AP-01)
        </span>
        <span className="text-caption font-caption text-surface-dim font-mono">16.9891°N 82.2475°E</span>
      </div>
      <div className="relative z-10 p-space-xs rounded bg-inverse-surface/85 backdrop-blur-sm flex items-center justify-between font-label-sm text-label-sm text-surface-dim">
        <span className="flex items-center gap-1 text-surface-bright">
          <span className="material-symbols-outlined text-[16px] text-primary-fixed-dim">hub</span>
          Pan-India Fiber &amp; Bare-Metal Remote Mesh Active
        </span>
        <span className="text-secondary-fixed-dim font-mono hidden sm:inline">12.4ms avg ping</span>
      </div>
    </div>
  );
}
