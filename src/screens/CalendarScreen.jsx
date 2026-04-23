import { THEME } from '../theme.js';
import { Icon } from '../icons.jsx';
import { Mono } from '../components/Mono.jsx';
import { Card } from '../components/Card.jsx';
import { PageHeader } from '../components/PageHeader.jsx';
import { CAL_MONTH, CAL_DAYS } from '../data.js';

export function CalendarScreen() {
  const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const pad = 3; // April 2026 starts on Wednesday
  const cells = [...Array(pad).fill(null), ...CAL_DAYS];
  while (cells.length % 7 !== 0) cells.push(null);
  return (
    <div>
      <PageHeader
        label={'PROGRAM · ' + CAL_MONTH}
        title="Calendar"
        right={
          <div style={{ display: 'flex', gap: 6 }}>
            <button
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: THEME.cardElev,
                border: `1px solid ${THEME.border}`,
                color: THEME.textMuted,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {Icon.chevL('currentColor', 14)}
            </button>
            <button
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: THEME.cardElev,
                border: `1px solid ${THEME.border}`,
                color: THEME.textMuted,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {Icon.chevR('currentColor', 14)}
            </button>
          </div>
        }
      />
      <div style={{ padding: '0 20px 20px' }}>
        <Card>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: 6,
              marginBottom: 10,
            }}
          >
            {weekdays.map((d, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <Mono size={9} color={THEME.textDim}>
                  {d}
                </Mono>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 6 }}>
            {cells.map((c, i) => {
              if (!c) return <div key={i} />;
              let bg = THEME.cardElev,
                fg = THEME.textDim,
                border = THEME.border;
              if (c.type === 'done') {
                bg = '#2a351a';
                fg = THEME.accent;
                border = '#3d4d1f';
              }
              if (c.type === 'today') {
                bg = THEME.accent;
                fg = '#000';
                border = THEME.accent;
              }
              if (c.type === 'rest') {
                bg = THEME.cardElev;
                fg = THEME.textDim;
              }
              if (c.type === 'planned') {
                bg = THEME.card;
                fg = THEME.textMuted;
                border = THEME.borderStrong;
              }
              return (
                <div
                  key={i}
                  style={{
                    aspectRatio: '1',
                    borderRadius: 8,
                    background: bg,
                    border: `1px solid ${border}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: THEME.display,
                    fontSize: 12,
                    fontWeight: 600,
                    color: fg,
                    position: 'relative',
                  }}
                >
                  {c.d}
                  {c.type === 'planned' && (
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 4,
                        width: 4,
                        height: 4,
                        borderRadius: '50%',
                        background: THEME.textMuted,
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
              { c: '#2a351a', bd: '#3d4d1f', l: 'DONE' },
              { c: THEME.accent, bd: THEME.accent, l: 'TODAY' },
              { c: THEME.card, bd: THEME.borderStrong, l: 'PLANNED' },
              { c: THEME.cardElev, bd: THEME.border, l: 'REST' },
            ].map((k, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 3,
                    background: k.c,
                    border: `1px solid ${k.bd}`,
                  }}
                />
                <Mono size={8} color={THEME.textMuted}>
                  {k.l}
                </Mono>
              </div>
            ))}
          </div>
        </Card>

        <div style={{ marginTop: 14 }}>
          <Mono size={10} color={THEME.textMuted}>
            UPCOMING
          </Mono>
          <div
            style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8 }}
          >
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
                  borderRadius: 12,
                  border: `1px solid ${THEME.border}`,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <Mono size={9} color={THEME.textMuted}>
                    {u.d}
                  </Mono>
                  <div
                    style={{
                      fontFamily: THEME.display,
                      fontSize: 14,
                      fontWeight: 600,
                      color: THEME.text,
                      marginTop: 2,
                    }}
                  >
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
