import React from 'react';
import { THEME } from '../theme.js';

export function Mono({ children, size = 10, color, tracking = 1.2, weight = 500, style = {} }) {
  return (
    <span
      style={{
        fontFamily: THEME.mono,
        fontSize: size,
        letterSpacing: tracking,
        color: color || THEME.textMuted,
        textTransform: 'uppercase',
        fontWeight: weight,
        ...style,
      }}
    >
      {children}
    </span>
  );
}

export function Label({ n, title, color }) {
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <Mono size={10} color={color || THEME.accentDark}>
        {n}
      </Mono>
      <Mono size={10} color={THEME.textMuted}>
        {title}
      </Mono>
    </div>
  );
}
