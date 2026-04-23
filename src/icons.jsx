// Inline icon set — never external
export const Icon = {
  bolt: (c = 'currentColor', s = 16) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" fill={c} />
    </svg>
  ),
  check: (c = 'currentColor', s = 16) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12l5 5L20 7"
        stroke={c}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  plus: (c = 'currentColor', s = 16) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M12 5v14M5 12h14" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  minus: (c = 'currentColor', s = 16) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14" stroke={c} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  chevR: (c = 'currentColor', s = 14) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path
        d="M9 6l6 6-6 6"
        stroke={c}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  chevL: (c = 'currentColor', s = 14) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path
        d="M15 6l-6 6 6 6"
        stroke={c}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  close: (c = 'currentColor', s = 16) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M6 6l12 12M18 6L6 18" stroke={c} strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  settings: (c = 'currentColor', s = 18) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="3" stroke={c} strokeWidth="1.8" />
      <path
        d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"
        stroke={c}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  search: (c = 'currentColor', s = 18) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="7" stroke={c} strokeWidth="2" />
      <path d="M20 20l-3.5-3.5" stroke={c} strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  play: (c = 'currentColor', s = 14) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M6 4l14 8-14 8V4z" fill={c} />
    </svg>
  ),
  pause: (c = 'currentColor', s = 14) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <rect x="6" y="4" width="4" height="16" fill={c} />
      <rect x="14" y="4" width="4" height="16" fill={c} />
    </svg>
  ),
  vol: (c = 'currentColor', s = 18) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M4 9v6h4l5 4V5L8 9H4z" fill={c} />
      <path d="M16 8c1.5 1.5 1.5 6.5 0 8" stroke={c} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  flame: (c = 'currentColor', s = 14) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2s4 4 4 8a4 4 0 01-8 0c0-2 1-3 2-4-1 3 2 3 2 0 0-2-1-3 0-4z M6 14a6 6 0 0012 0c0 4-3 8-6 8s-6-4-6-8z"
        fill={c}
      />
    </svg>
  ),
  trend: (c = 'currentColor', s = 14) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path
        d="M3 17l6-6 4 4 8-8M15 7h6v6"
        stroke={c}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  swap: (c = 'currentColor', s = 16) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path
        d="M7 4l-4 4 4 4M3 8h14M17 20l4-4-4-4M21 16H7"
        stroke={c}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  note: (c = 'currentColor', s = 16) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M4 4h16v12l-4 4H4V4z" stroke={c} strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M20 16h-4v4" stroke={c} strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  ),
  home: (c = 'currentColor', s = 22) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path
        d="M3 11l9-7 9 7v10h-6v-6h-6v6H3V11z"
        stroke={c}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  ),
  train: (c = 'currentColor', s = 22) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="9" width="3" height="6" rx="1" fill={c} />
      <rect x="19" y="9" width="3" height="6" rx="1" fill={c} />
      <rect x="5" y="10" width="2" height="4" fill={c} />
      <rect x="17" y="10" width="2" height="4" fill={c} />
      <rect x="7" y="11" width="10" height="2" fill={c} />
    </svg>
  ),
  chart: (c = 'currentColor', s = 22) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path
        d="M4 20V10M10 20V4M16 20v-8M22 20H2"
        stroke={c}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  book: (c = 'currentColor', s = 22) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path
        d="M4 4h7a3 3 0 013 3v13a2 2 0 00-2-2H4V4zM20 4h-7a3 3 0 00-3 3v13a2 2 0 012-2h8V4z"
        stroke={c}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  ),
  user: (c = 'currentColor', s = 22) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke={c} strokeWidth="1.8" />
      <path d="M4 21c0-4 4-7 8-7s8 3 8 7" stroke={c} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  cal: (c = 'currentColor', s = 18) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="16" rx="2" stroke={c} strokeWidth="1.8" />
      <path d="M3 10h18M8 3v4M16 3v4" stroke={c} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  history: (c = 'currentColor', s = 18) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path
        d="M3 12a9 9 0 109-9 9 9 0 00-6 2.3L3 8"
        stroke={c}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M3 3v5h5M12 7v5l3 2"
        stroke={c}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  body: (c = 'currentColor', s = 18) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="5" r="2.5" stroke={c} strokeWidth="1.8" />
      <path
        d="M12 8v6M7 11l5-2 5 2M8 22l4-8 4 8"
        stroke={c}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  video: (c = 'currentColor', s = 18) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="6" width="13" height="12" rx="2" stroke={c} strokeWidth="1.8" />
      <path d="M16 10l5-2v8l-5-2v-4z" stroke={c} strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  ),
  filter: (c = 'currentColor', s = 16) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M3 5h18M6 12h12M10 19h4" stroke={c} strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
};
