type P = { className?: string; size?: number };
const base = (size = 20) => ({ width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true });

export const ArrowRight = ({ className = "", size }: P) => (
  <svg {...base(size ?? 16)} className={`rtl:rotate-180 ${className}`}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const ArrowUp = ({ className, size }: P) => (<svg {...base(size)} className={className}><path d="M12 19V5M6 11l6-6 6 6" /></svg>);
export const ArrowDown = ({ className, size }: P) => (<svg {...base(size)} className={className}><path d="M12 5v14M6 13l6 6 6-6" /></svg>);
export const Search = ({ className, size }: P) => (<svg {...base(size)} className={className}><circle cx="11" cy="11" r="6.5" /><path d="m20 20-4.2-4.2" /></svg>);
export const Globe = ({ className, size }: P) => (<svg {...base(size)} className={className}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" /></svg>);
export const Menu = ({ className, size }: P) => (<svg {...base(size)} className={className}><path d="M4 7h16M4 12h16M4 17h16" /></svg>);
export const Doc = ({ className, size }: P) => (<svg {...base(size)} className={className}><path d="M7 3h7l5 5v13H7z" /><path d="M14 3v5h5M10 13h6M10 17h4" /></svg>);
export const Chart = ({ className, size }: P) => (<svg {...base(size)} className={className}><path d="M4 20V4M4 20h16" /><path d="m7 15 4-4 3 3 5-6" /></svg>);
export const Board = ({ className, size }: P) => (<svg {...base(size)} className={className}><circle cx="8" cy="8" r="2.5" /><circle cx="16" cy="8" r="2.5" /><path d="M3.5 18c.6-2.8 2.4-4.3 4.5-4.3s3.9 1.5 4.5 4.3M11.5 18c.6-2.8 2.4-4.3 4.5-4.3s3.9 1.5 4.5 4.3" /></svg>);
export const Shield = ({ className, size }: P) => (<svg {...base(size)} className={className}><path d="M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6z" /><path d="m9 12 2 2 4-4" /></svg>);
export const Megaphone = ({ className, size }: P) => (<svg {...base(size)} className={className}><path d="M4 10v4h3l7 4V6L7 10z" /><path d="M17.5 9.5a4 4 0 0 1 0 5M9 14.5 10 20" /></svg>);
export const Check = ({ className, size }: P) => (<svg {...base(size)} className={className}><path d="m5 12 4.5 4.5L19 7" /></svg>);

/** BMK monogram tile. Stands in for the logo file until it is supplied. */
export const Mark = ({ className = "", light = true }: { className?: string; light?: boolean }) => (
  <span className={`grid h-10 w-10 place-items-center rounded-xl border font-display text-[13px] font-bold tracking-wider ${light ? "border-sand/60 text-ivory" : "border-onyx text-onyx"} ${className}`} aria-hidden>
    BMK
  </span>
);
