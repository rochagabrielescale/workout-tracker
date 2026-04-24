import React from 'react';
import { THEME } from '../theme.js';
import { Icon } from '../icons.jsx';
import { Mono } from '../components/Mono.jsx';
import { PageHeader } from '../components/PageHeader.jsx';
import { IconBtn } from '../components/Card.jsx';
import { CAL_MONTH, CAL_DAYS } from '../data.js';

export function CalendarScreen() {
  const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const pad = 3;
  const cells = [...Array(pad).fill(null), ...CAL_DAYS];
  while (cells.length % 7 !== 0) cells.push(null);
  return (
    <div>
      <PageHeader
        label={'PROGRAM · ' + CAL_MONTH}
        title="Calendar"
        gradient
        right={
          <div style={{ display: 'flex', gap: 6 }}>
            <IconBtn size={34} bg="rgba(255,255,255,0.6)">{Icon.chevL('#111', 14)}</IconBtn>
            <IconBtn size={34} bg="rgba(255,255,255,0.6)">{Icon.chevR('#111', 14)}</IconBtn>
          </div>
        }
      />
      <div style={{ padding: '14px 18px 20px' }}>
        <div style={{ background: THEME.card, borderRadius: 22, padding: 18 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 6, marginBottom: 10 }}>
            {weekdays.map((d, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <Mono size={9} color={THEME.textDim}>{d}</Mono>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 6 }}>
            {cells.map((c, i) => {
              if (!c) return <div key={i} />;
              let bg = '#F0EDE4', fg = THEME.textDim;
              if (c.type === 'done') { bg = THEME.accent; fg = '#111'; }
              if (c.type === 'today') { bg = '#111'; fg = THEME.accent; }
              if (c.type === 'rest') { bg = '#F0EDE4'; fg = THEME.textDim; }
              if (c.type === 'planned') { bg = 'rgba(184,155,240,0.22)'; fg = THEME.accentDark; }
              return (
                <div
                  key={i}
                  style={{
                    aspectRatio: '1',
                    borderRadius: 12,
                    background: bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: THEME.display,
                    fontSize: 13,
                    fontWeight: 700,
                    color: fg,
                    position: 'relative',
                  }}
                >
                  {c.d}
                  {c.type === 'planned' && (
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 5,
                        width: 4,
                        height: 4,
                        borderRadius: '50%',
                        background: THEME.accentDark,
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          <div
            style={{
              marginTop: 14,
              paddingTop: 14,
              borderTop: `1px solid ${THEME.border}`,
              display: 'flex',
              gap: 14,
              flexWrap: 'wrap',
            }}
          >
            {[
              { c: THEME.accent, l: 'DONE' },
              { c: '#111', l: 'TODAY' },
              { c: 'rgba(184,155,240,0.22)', l: 'PLANNED' },
              { c: '#F0EDE4', l: 'REST' },
            ].map((k, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 12, height: 12, borderRadius: 4, background: k.c }} />
                <Mono size={8} color={THEME.textMuted}>{k.l}</Mono>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 16 }}>
          <Mono size={10} color={THEME.textMuted}>UPCOMING</Mono>
          <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              { d: 'MON · APR 20', n: 'Push Day B' },
              { d: 'TUE · APR 21', n: 'Pull Day B' },
              { d: 'WED · APR 22', n: 'Legs Day' },
            ].map((u, i) => (
              <div
                key={i}
                style={{
                  padding: 14,
                  background: THEME.card,
                  borderRadius: 16,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <Mono size={9} color={THEME.textMuted}>{u.d}</Mono>
                  <div style={{ fontFamily: THEME.display, fontSize: 15, fontWeight: 700, color: THEME.text, marginTop: 2 }}>
                    {u.n}
                  </div>
                </div>
                <div style={{ color: THEME.textDim }}>{Icon.chevR('currentColor', 14)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
