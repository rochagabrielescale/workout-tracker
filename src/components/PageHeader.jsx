import React from 'react';
import { THEME } from '../theme.js';
import { Mono } from './Mono.jsx';

export function PageHeader({ label, title, right, gradient = false }) {
  return (
    <div
      style={{
        padding: gradient ? '20px 22px 30px' : '12px 22px 18px',
        background: gradient ? THEME.bgGradient : 'transparent',
        borderBottomLeftRadius: gradient ? 30 : 0,
        borderBottomRightRadius: gradient ? 30 : 0,
        marginBottom: gradient ? 4 : 0,
        position: 'relative',
      }}
    >
      {label && (
        <div style={{ marginBottom: 4 }}>
          <Mono size={10} color={THEME.textMuted}>
            {label}
          </Mono>
        </div>
      )}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <h1
          style={{
            margin: 0,
            fontFamily: THEME.display,
            fontSize: 44,
            fontWeight: 800,
            color: THEME.text,
            letterSpacing: -1.8,
            lineHeight: 1,
          }}
        >
          {title}
        </h1>
        {right}
      </div>
    </div>
  );
}
