import React from 'react';
import { THEME } from '../theme.js';

export function Segmented({ options, value, onChange, compact = false }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        background: 'rgba(17,17,17,0.06)',
        borderRadius: 999,
        padding: 3,
      }}
    >
      {options.map((o) => {
        const active = value === o;
        return (
          <button
            key={o}
            onClick={() => onChange(o)}
            style={{
              fontFamily: THEME.display,
              fontSize: compact ? 11 : 12,
              fontWeight: 700,
              letterSpacing: 0.2,
              padding: compact ? '5px 12px' : '7px 14px',
              borderRadius: 999,
              border: 'none',
              cursor: 'pointer',
              background: active ? '#111' : 'transparent',
              color: active ? '#fff' : THEME.textMuted,
            }}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}
