import { THEME } from '../theme.js';

export function Segmented({ options, value, onChange, compact = false }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        background: THEME.cardElev,
        borderRadius: 999,
        padding: 3,
        border: `1px solid ${THEME.border}`,
      }}
    >
      {options.map((o) => {
        const active = value === o;
        return (
          <button
            key={o}
            onClick={() => onChange(o)}
            style={{
              fontFamily: THEME.mono,
              fontSize: compact ? 10 : 11,
              fontWeight: 600,
              letterSpacing: 1,
              textTransform: 'uppercase',
              padding: compact ? '4px 10px' : '6px 12px',
              borderRadius: 999,
              border: 'none',
              cursor: 'pointer',
              background: active ? THEME.accent : 'transparent',
              color: active ? '#000' : THEME.textMuted,
            }}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}
