import { THEME } from '../theme.js';

export function StatusBar({ time = '9:41' }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        height: 54,
        padding: '18px 28px 0',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        pointerEvents: 'none',
      }}
    >
      <span
        style={{ fontFamily: THEME.display, fontSize: 15, fontWeight: 600, color: '#fff' }}
      >
        {time}
      </span>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        <svg width="16" height="10" viewBox="0 0 16 10">
          <rect x="0" y="6" width="2.5" height="4" rx="0.5" fill="#fff" />
          <rect x="4" y="4" width="2.5" height="6" rx="0.5" fill="#fff" />
          <rect x="8" y="2" width="2.5" height="8" rx="0.5" fill="#fff" />
          <rect x="12" y="0" width="2.5" height="10" rx="0.5" fill="#fff" />
        </svg>
        <svg width="14" height="10" viewBox="0 0 14 10">
          <path
            d="M7 2.5c1.9 0 3.6.8 4.9 2l.9-1A8.3 8.3 0 007 1a8.3 8.3 0 00-5.8 2.5l.9 1A6.8 6.8 0 017 2.5z"
            fill="#fff"
          />
          <path
            d="M7 5.5c1.2 0 2.3.5 3 1.3l1-1A5.3 5.3 0 007 4a5.3 5.3 0 00-4 1.8l1 1C4.7 6 5.8 5.5 7 5.5z"
            fill="#fff"
          />
          <circle cx="7" cy="8.5" r="1.2" fill="#fff" />
        </svg>
        <svg width="24" height="11" viewBox="0 0 24 11">
          <rect
            x="0.5"
            y="0.5"
            width="20"
            height="10"
            rx="2.5"
            stroke="#fff"
            strokeOpacity="0.5"
            fill="none"
          />
          <rect x="2" y="2" width="17" height="7" rx="1.5" fill="#fff" />
          <path d="M22 3.5v4c0.7-.3 1.2-.8 1.2-2s-.5-1.7-1.2-2z" fill="#fff" fillOpacity="0.5" />
        </svg>
      </div>
    </div>
  );
}
