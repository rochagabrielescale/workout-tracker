import React, { useState } from 'react';
import { THEME } from '../theme.js';
import { Icon } from '../icons.jsx';
import { Mono } from '../components/Mono.jsx';
import { PageHeader } from '../components/PageHeader.jsx';
import { LIBRARY } from '../data.js';

export function LibraryScreen({ onNav }) {
  const [filter, setFilter] = useState('All');
  const muscles = ['All', 'Chest', 'Back', 'Shoulders', 'Legs', 'Biceps', 'Triceps'];
  const items = LIBRARY.filter((l) => filter === 'All' || l.muscle === filter);
  return (
    <div>
      <PageHeader
        label="EXERCISE · LIBRARY"
        title="Library"
        gradient
        right={<Mono size={10} color={THEME.textMuted}>{LIBRARY.length} EXERCISES</Mono>}
      />
      <div style={{ padding: '14px 18px 10px' }}>
        <div
          style={{
            height: 46,
            borderRadius: 23,
            background: THEME.card,
            padding: '0 16px',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          {Icon.search(THEME.textDim, 16)}
          <span style={{ color: THEME.textDim, fontSize: 14 }}>Search exercises...</span>
        </div>
      </div>
      <div style={{ padding: '0 18px 10px', overflow: 'auto', scrollbarWidth: 'none' }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {muscles.map((m) => {
            const a = m === filter;
            return (
              <button
                key={m}
                onClick={() => setFilter(m)}
                style={{
                  flexShrink: 0,
                  padding: '8px 14px',
                  borderRadius: 999,
                  background: a ? '#111' : THEME.card,
                  border: 'none',
                  color: a ? '#fff' : THEME.textMuted,
                  cursor: 'pointer',
                  fontFamily: THEME.display,
                  fontSize: 12,
                  fontWeight: 700,
                }}
              >
                {m}
              </button>
            );
          })}
        </div>
      </div>
      <div style={{ padding: '0 18px 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {items.map((x, i) => (
          <div
            key={i}
            style={{
              background: THEME.card,
              borderRadius: 18,
              padding: 14,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <div
              style={{
                width: 46,
                height: 46,
                borderRadius: 14,
                background: '#F0EDE4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: THEME.mono,
                fontSize: 9,
                color: THEME.textMuted,
                fontWeight: 700,
              }}
            >
              {x.eq.slice(0, 3).toUpperCase()}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ fontFamily: THEME.display, fontSize: 15, fontWeight: 700, color: THEME.text }}>{x.name}</div>
                <button
                  onClick={(e) => e.stopPropagation()}
                  title="Watch tutorial"
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    background: THEME.accent,
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {Icon.play('#111', 10)}
                </button>
              </div>
              <div style={{ display: 'flex', gap: 8, marginTop: 2 }}>
                <Mono size={9} color={THEME.textMuted}>{x.muscle.toUpperCase()}</Mono>
                <Mono size={9} color={THEME.textDim}>·</Mono>
                <Mono size={9} color={THEME.textDim}>{x.sets} SETS LOGGED</Mono>
              </div>
            </div>
            {x.rm && (
              <div style={{ textAlign: 'right' }}>
                <Mono size={8} color={THEME.textMuted}>1RM</Mono>
                <div style={{ fontFamily: THEME.display, fontSize: 15, fontWeight: 800, color: THEME.accentDark }}>
                  {x.rm}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
