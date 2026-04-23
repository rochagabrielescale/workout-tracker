import { THEME } from '../theme.js';
import { Icon } from '../icons.jsx';
import { Mono } from '../components/Mono.jsx';
import { PageHeader } from '../components/PageHeader.jsx';
import { HISTORY } from '../data.js';

export function HistoryScreen() {
  return (
    <div>
      <PageHeader label="LOG · 28 DAYS" title="History" />
      <div
        style={{ padding: '0 20px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}
      >
        {HISTORY.map((h, i) => (
          <div
            key={i}
            style={{
              background: THEME.card,
              borderRadius: 16,
              border: `1px solid ${THEME.border}`,
              padding: 16,
              display: 'flex',
              alignItems: 'center',
              gap: 14,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 10,
                background: THEME.cardElev,
                border: `1px solid ${THEME.border}`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Mono size={8} color={THEME.textMuted}>
                {h.day}
              </Mono>
              <div
                style={{
                  fontFamily: THEME.display,
                  fontSize: 14,
                  fontWeight: 700,
                  color: THEME.text,
                }}
              >
                {h.date.split(' ')[1]}
              </div>
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
                  {h.name}
                </div>
                {h.prs > 0 && (
                  <div
                    style={{
                      padding: '2px 6px',
                      borderRadius: 4,
                      background: '#2a351a',
                      color: THEME.accent,
                      fontFamily: THEME.mono,
                      fontSize: 8,
                      fontWeight: 700,
                      letterSpacing: 1,
                    }}
                  >
                    PR ×{h.prs}
                  </div>
                )}
              </div>
              <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
                <Mono size={9} color={THEME.textMuted}>
                  {h.dur} MIN
                </Mono>
                <Mono size={9} color={THEME.textDim}>
                  ·
                </Mono>
                <Mono size={9} color={THEME.textMuted}>
                  {h.vol} LB
                </Mono>
              </div>
            </div>
            <div style={{ color: THEME.textDim }}>{Icon.chevR('currentColor', 14)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
