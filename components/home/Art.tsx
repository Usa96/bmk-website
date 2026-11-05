/*
  Illustrations drawn in SVG so the page has atmosphere before photography exists.
  Swap for approved imagery later: each sits in a fixed-ratio slot.
*/

/** Hero: a glowing arch rising from dunes at dusk. */
export function HeroArt() {
  return (
    <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full rtl:-scale-x-100" aria-hidden>
      <defs>
        <radialGradient id="sky" cx="55%" cy="35%" r="70%">
          <stop offset="0" stopColor="#4a3d33" />
          <stop offset=".45" stopColor="#2a2421" />
          <stop offset="1" stopColor="#171615" />
        </radialGradient>
        <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f6f1f0" stopOpacity=".95" />
          <stop offset="1" stopColor="#bdaba2" stopOpacity=".55" />
        </linearGradient>
        <linearGradient id="dune1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3b322c" />
          <stop offset="1" stopColor="#1d1b1a" />
        </linearGradient>
        <linearGradient id="dune2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2c2724" />
          <stop offset="1" stopColor="#191817" />
        </linearGradient>
        <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset=".55" stopColor="#21201f" stopOpacity="0" />
          <stop offset="1" stopColor="#21201f" />
        </linearGradient>
        <filter id="blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="18" /></filter>
      </defs>
      <rect width="1440" height="900" fill="url(#sky)" />
      {/* distant ridges */}
      <path d="M0 520 C 220 470 380 500 560 480 S 900 430 1120 470 S 1360 450 1440 470 V900 H0Z" fill="#2b2522" opacity=".9" />
      {/* arch glow */}
      <g transform="translate(880 190) scale(.92)">
        <path d="M0 470 V170 A150 150 0 0 1 300 170 V470" fill="none" stroke="#bdaba2" strokeWidth="26" opacity=".35" filter="url(#blur)" />
        <path d="M0 470 V170 A150 150 0 0 1 300 170 V470" fill="#191716" fillOpacity=".55" stroke="url(#glow)" strokeWidth="3" />
        <path d="M34 470 V178 A116 116 0 0 1 266 178 V470" fill="none" stroke="#bdaba2" strokeOpacity=".35" strokeWidth="1.2" />
        {/* steps */}
        {[0, 1, 2, 3, 4].map((i) => (
          <path key={i} d={`M${-30 - i * 26} ${478 + i * 12} H${330 + i * 26}`} stroke="#bdaba2" strokeOpacity={0.5 - i * 0.08} strokeWidth="1.5" />
        ))}
        {/* light path */}
        <path d="M150 470 C 150 560 40 600 -260 700" fill="none" stroke="url(#glow)" strokeWidth="2.5" opacity=".75" />
        <path d="M150 470 C 150 560 40 600 -260 700" fill="none" stroke="#bdaba2" strokeWidth="20" opacity=".18" filter="url(#blur)" />
      </g>
      {/* thin towers */}
      {[[790, 230, 300], [1205, 270, 290], [1240, 330, 220]].map(([x, y, h], i) => (
        <rect key={i} x={x} y={y} width="16" height={h} fill="none" stroke="#bdaba2" strokeOpacity=".28" />
      ))}
      {/* foreground dunes */}
      <path d="M0 640 C 260 580 520 640 760 610 S 1180 560 1440 620 V900 H0Z" fill="url(#dune1)" />
      <path d="M0 640 C 260 580 520 640 760 610 S 1180 560 1440 620" fill="none" stroke="#bdaba2" strokeOpacity=".35" strokeWidth="1.5" />
      <path d="M0 760 C 300 700 640 770 980 730 S 1300 700 1440 720 V900 H0Z" fill="url(#dune2)" />
      <path d="M0 760 C 300 700 640 770 980 730 S 1300 700 1440 720" fill="none" stroke="#bdaba2" strokeOpacity=".22" strokeWidth="1.2" />
      <rect width="1440" height="900" fill="url(#fade)" />
    </svg>
  );
}

/** A small glowing BMK tile used inside panels and cards. */
export function GlowMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" className={className} aria-hidden>
      <defs>
        <radialGradient id="gm-bg" cx="50%" cy="40%" r="70%">
          <stop offset="0" stopColor="#3a332e" />
          <stop offset="1" stopColor="#1b1a19" />
        </radialGradient>
        <linearGradient id="gm-edge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f6f1f0" stopOpacity=".9" />
          <stop offset="1" stopColor="#807068" stopOpacity=".2" />
        </linearGradient>
        <filter id="gm-blur"><feGaussianBlur stdDeviation="12" /></filter>
      </defs>
      <rect width="400" height="300" fill="url(#gm-bg)" />
      <path d="M150 250 V120 A50 50 0 0 1 250 120 V250" fill="none" stroke="#bdaba2" strokeWidth="14" opacity=".25" filter="url(#gm-blur)" />
      <path d="M150 250 V120 A50 50 0 0 1 250 120 V250" fill="#1f1d1c" stroke="url(#gm-edge)" strokeWidth="2" />
      <path d="M110 252 H290" stroke="#bdaba2" strokeOpacity=".4" />
    </svg>
  );
}
