import React from 'react';
import { THEME } from '../theme.js';

export function Card({ children, style = {}, onClick, dark = false }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: dark ? THEME.cardDark : THEME.card,
        color: dark ? THEME.textOnDark : THEME.text,
        borderRadius: 24,
        padding: 20,
        cursor: onClick ? 'pointer' : 'default',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function IconBtn({ children, onClick, size = 40, bg, fg, style = {} }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        background: bg || 'rgba(255,255,255,0.7)',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: fg || THEME.text,
        backdropFilter: 'blur(10px)',
        ...style,
      }}
    >
      {children}
    </button>
  );
}
