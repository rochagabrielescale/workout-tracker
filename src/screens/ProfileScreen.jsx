import React from 'react';
import { THEME } from '../theme.js';
import { Icon } from '../icons.jsx';
import { Mono } from '../components/Mono.jsx';
import { PageHeader } from '../components/PageHeader.jsx';
import { USER, PROGRAM, CAL_MONTH, HISTORY, MEASUREMENTS } from '../data.js';

export function ProfileScreen({ onSubNav, variant, setVariant }) {
  const rows = [
    { id: 'calendar', label: 'Program Calendar', icon: Icon.cal, detail: CAL_MONTH },
    { id: 'history', label: 'Workout History', icon: Icon.history, detail: HISTORY.length + ' SESSIONS' },
    { id: 'body', label: 'Body Measurements', icon: Icon.body, detail: MEASUREMENTS.bw.val + ' LB' },
  ];
  return (
    <div>
      <PageHeader label="PROFILE · SETTINGS" title="You" gradient />
      <div style={{ padding: '14px 18px 20px' }}>
        <div style={{ background: THEME.card, borderRadius: 22, padding: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{
              width: 60, height: 60, borderRadius: '50%',
              background: '#111', color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: THEME.display, fontWeight: 800, fontSize: 22,
            }}>{USER.name[0]}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: THEME.display, fontSize: 22, fontWeight: 800, color: THEME.text, letterSpacing: -0.6 }}>{USER.name}</div>
              <Mono size={9} color={THEME.textMuted}>{PROGRAM.name.toUpperCase()} · WK {PROGRAM.week}</Mono>
            </div>
          </div>
          <div style={{
            marginTop: 16, paddingTop: 14, borderTop: `1px solid ${THEME.border}`,
            display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12,
          }}>
            {[
              { k: 'AGE', v: USER.age },
              { k: 'HEIGHT', v: `5'${USER.height - 60}"` },
              { k: 'WEIGHT', v: USER.bw + ' LB' },
            ].map((s, i) => (
              <div key={i}>
                <Mono size={8} color={THEME.textMuted}>{s.k}</Mono>
                <div style={{ fontFamily: THEME.display, fontSize: 15, fontWeight: 700, color: THEME.text, marginTop: 2 }}>{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 18 }}>
          <Mono size={10} color={THEME.textMuted} style={{ paddingLeft: 4 }}>TOOLS</Mono>
          <div style={{ marginTop: 10, background: THEME.card, borderRadius: 20, overflow: 'hidden' }}>
            {rows.map((r, i) => (
              <button key={r.id} onClick={() => onSubNav(r.id)} style={{
                width: '100%', padding: '14px 16px', background: 'transparent',
                border: 'none', cursor: 'pointer',
                borderBottom: i < rows.length - 1 ? `1px solid ${THEME.border}` : 'none',
                display: 'flex', alignItems: 'center', gap: 12, textAlign: 'left',
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10, background: 'rgba(184,155,240,0.22)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: THEME.accentDark,
                }}>{r.icon('currentColor', 16)}</div>
                <div style={{ flex: 1, fontFamily: THEME.display, fontSize: 15, fontWeight: 600, color: THEME.text }}>{r.label}</div>
                <Mono size={9} color={THEME.textMuted}>{r.detail}</Mono>
                <div style={{ color: THEME.textDim }}>{Icon.chevR('currentColor', 12)}</div>
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 18 }}>
          <Mono size={10} color={THEME.textMuted} style={{ paddingLeft: 4 }}>DASHBOARD STYLE</Mono>
          <div style={{ marginTop: 10, display: 'flex', gap: 8 }}>
            {[
              { id: 'v1', label: 'Hero' },
              { id: 'v2', label: 'Data-first' },
            ].map(v => (
              <button key={v.id} onClick={() => setVariant(v.id)} style={{
                flex: 1, padding: '14px', background: variant === v.id ? '#111' : THEME.card,
                borderRadius: 16, border: 'none',
                color: variant === v.id ? '#fff' : THEME.text, cursor: 'pointer',
                fontFamily: THEME.display, fontSize: 13, fontWeight: 700,
              }}>{v.label}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
