import { useState } from 'react';
import { THEME } from '../theme.js';
import { Icon } from '../icons.jsx';
import { Mono } from '../components/Mono.jsx';
import { PageHeader } from '../components/PageHeader.jsx';
import { LIBRARY } from '../data.js';

export function LibraryScreen() {
  const [filter, setFilter] = useState('All');
  const muscles = ['All', 'Chest', 'Back', 'Shoulders', 'Legs', 'Biceps', 'Triceps'];
  const items = LIBRARY.filter((l) => filter === 'All' || l.muscle === filter);
  return (
    <div>
      <PageHeader
        label="EXERCISE · LIBRARY"
        title="Library"
        right={
          <Mono size={10} color={THEME.textMuted}>
            {LIBRARY.length} EXERCISES
          </Mono>
        }
      />
      <div style={{ padding: '0 20px 12px' }}>
        <div
          style={{
            height: 42,
            borderRadius: 12,
            background: THEME.card,
            border: `1px solid ${THEME.border}`,
            padding: '0 14px',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          {Icon.search(THEME.textDim, 16)}
          <span style={{ color: THEME.textDim, fontSize: 13 }}>Search exercises...</span>
        </div>
      </div>
      <div style={{ padding: '0 20px 12px', overflow: 'auto', scrollbarWidth: 'none' }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {muscles.map((m) => {
            const a = m === filter;
            return (
              <button
                key={m}
                onClick={() => setFilter(m)}
                style={{
                  flexShrink: 0,
                  padding: '7px 12px',
                  borderRadius: 999,
                  background: a ? THEME.accent : THEME.card,
                  border: `1px solid ${a ? THEME.accent : THEME.border}`,
                  color: a ? '#000' : THEME.textMuted,
                  cursor: 'pointer',
                  fontFamily: THEME.mono,
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: 1,
                  textTransform: 'uppercase',
                }}
              >
                {m}
              </button>
            );
          })}
        </div>
      </div>
      <div
        style={{ padding: '0 20px 20px', display: 'flex', flexDirection: 'column', gap: 8 }}
      >
        {items.map((x, i) => (
          <div
            key={i}
            style={{
              background: THEME.card,
              borderRadius: 14,
              border: `1px solid ${THEME.border}`,
              padding: 14,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                background: THEME.cardElev,
                border: `1px solid ${THEME.border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: THEME.mono,
                fontSize: 9,
                color: THEME.textMuted,
                fontWeight: 600,
              }}
            >
              {x.eq.slice(0, 3).toUpperCase()}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div
                  style={{
                    fontFamily: THEME.display,
                    fontSize: 15,
                    fontWeight: 600,
                    color: THEME.text,
                  }}
                >
                  {x.name}
                </div>
                <button
                  onClick={(e) => e.stopPropagation()}
                  title="Watch tutorial"
                  style={{
                    width: 22,
                    height: 22,
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
                  {Icon.play('#000', 10)}
                </button>
              </div>
              <div style={{ display: 'flex', gap: 8, marginTop: 2 }}>
                <Mono size={9} color={THEME.textMuted}>
                  {x.muscle.toUpperCase()}
                </Mono>
                <Mono size={9} color={THEME.textDim}>
                  ·
                </Mono>
                <Mono size={9} color={THEME.textDim}>
                  {x.sets} SETS LOGGED
                </Mono>
              </div>
            </div>
            {x.rm && (
              <div style={{ textAlign: 'right' }}>
                <Mono size={8} color={THEME.textMuted}>
                  1RM
                </Mono>
                <div
                  style={{
                    fontFamily: THEME.display,
                    fontSize: 15,
                    fontWeight: 700,
                    color: THEME.accent,
                  }}
                >
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
