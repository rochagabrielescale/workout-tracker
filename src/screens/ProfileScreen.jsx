import { THEME } from '../theme.js';
import { Icon } from '../icons.jsx';
import { Mono } from '../components/Mono.jsx';
import { Card } from '../components/Card.jsx';
import { PageHeader } from '../components/PageHeader.jsx';
import { USER, PROGRAM, CAL_MONTH, HISTORY, MEASUREMENTS } from '../data.js';

export function ProfileScreen({ onSubNav, variant, setVariant }) {
  const rows = [
    { id: 'calendar', label: 'Program Calendar', icon: Icon.cal, detail: CAL_MONTH },
    {
      id: 'history',
      label: 'Workout History',
      icon: Icon.history,
      detail: HISTORY.length + ' SESSIONS',
    },
    {
      id: 'body',
      label: 'Body Measurements',
      icon: Icon.body,
      detail: MEASUREMENTS.bw.val + ' LB',
    },
  ];
  return (
    <div>
      <PageHeader label="PROFILE · SETTINGS" title="You" />
      <div style={{ padding: '0 20px 20px' }}>
        <Card>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #2a2a2a, #111)',
                border: `1px solid ${THEME.border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: THEME.display,
                fontWeight: 700,
                fontSize: 20,
                color: THEME.text,
              }}
            >
              {USER.name[0]}
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontFamily: THEME.display,
                  fontSize: 20,
                  fontWeight: 700,
                  color: THEME.text,
                  letterSpacing: -0.5,
                }}
              >
                {USER.name}
              </div>
              <Mono size={9} color={THEME.textMuted}>
                {PROGRAM.name.toUpperCase()} · WK {PROGRAM.week}
              </Mono>
            </div>
          </div>
          <div
            style={{
              marginTop: 16,
              paddingTop: 14,
              borderTop: `1px solid ${THEME.border}`,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: 12,
            }}
          >
            {[
              { k: 'AGE', v: USER.age },
              { k: 'HEIGHT', v: `5'${USER.height - 60}"` },
              { k: 'WEIGHT', v: USER.bw + ' LB' },
            ].map((s, i) => (
              <div key={i}>
                <Mono size={8} color={THEME.textMuted}>
                  {s.k}
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
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div style={{ marginTop: 18 }}>
          <Mono size={10} color={THEME.textMuted} style={{ paddingLeft: 4 }}>
            TOOLS
          </Mono>
          <div
            style={{
              marginTop: 10,
              background: THEME.card,
              borderRadius: 16,
              border: `1px solid ${THEME.border}`,
              overflow: 'hidden',
            }}
          >
            {rows.map((r, i) => (
              <button
                key={r.id}
                onClick={() => onSubNav(r.id)}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  borderBottom:
                    i < rows.length - 1 ? `1px solid ${THEME.border}` : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  textAlign: 'left',
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: THEME.cardElev,
                    border: `1px solid ${THEME.border}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: THEME.accent,
                  }}
                >
                  {r.icon('currentColor', 16)}
                </div>
                <div
                  style={{
                    flex: 1,
                    fontFamily: THEME.display,
                    fontSize: 15,
                    fontWeight: 500,
                    color: THEME.text,
                  }}
                >
                  {r.label}
                </div>
                <Mono size={9} color={THEME.textMuted}>
                  {r.detail}
                </Mono>
                <div style={{ color: THEME.textDim }}>{Icon.chevR('currentColor', 12)}</div>
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 18 }}>
          <Mono size={10} color={THEME.textMuted} style={{ paddingLeft: 4 }}>
            DASHBOARD STYLE
          </Mono>
          <div style={{ marginTop: 10, display: 'flex', gap: 8 }}>
            {[
              { id: 'v1', label: 'Hero' },
              { id: 'v2', label: 'Data-first' },
            ].map((v) => (
              <button
                key={v.id}
                onClick={() => setVariant(v.id)}
                style={{
                  flex: 1,
                  padding: '14px',
                  background: variant === v.id ? THEME.accent : THEME.card,
                  borderRadius: 12,
                  border: `1px solid ${variant === v.id ? THEME.accent : THEME.border}`,
                  color: variant === v.id ? '#000' : THEME.text,
                  cursor: 'pointer',
                  fontFamily: THEME.mono,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 1,
                  textTransform: 'uppercase',
                }}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
