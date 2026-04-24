import React from 'react';
import { THEME } from '../theme.js';
import { Icon } from '../icons.jsx';

export function BottomNav({ active, onNav, fixed = false }) {
  const tabs = [
    { id: 'today', label: 'Home', icon: Icon.home },
    { id: 'stats', label: 'Stats', icon: Icon.chart },
    { id: 'library', label: 'Library', icon: Icon.book },
    { id: 'you', label: 'Profile', icon: Icon.user },
  ];
  return (
    <div
      style={{
        position: fixed ? 'fixed' : 'absolute',
        bottom: fixed ? 'max(16px, env(safe-area-inset-bottom))' : 18,
        left: 20,
        right: 20,
        zIndex: 40,
        height: 64,
        borderRadius: 40,
        background: '#111',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        boxShadow: '0 12px 30px rgba(0,0,0,0.2)',
        padding: '0 6px',
      }}
    >
      {tabs.map((t) => {
        const isActive = active === t.id || (t.id === 'today' && active === 'train');
        return (
          <button
            key={t.id}
            onClick={() => onNav(t.id)}
            style={{
              background: isActive ? THEME.accent : 'transparent',
              border: 'none',
              padding: isActive ? '10px 18px' : '10px',
              borderRadius: 30,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 6,
              color: isActive ? '#111' : 'rgba(255,255,255,0.7)',
              cursor: 'pointer',
              transition: 'all .2s',
            }}
          >
            {t.icon('currentColor', 20)}
            {isActive && (
              <span
                style={{
                  fontFamily: THEME.display,
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: -0.2,
                }}
              >
                {t.label}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
