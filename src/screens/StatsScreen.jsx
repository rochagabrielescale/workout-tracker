import React, { useState } from 'react';
import { THEME } from '../theme.js';
import { Icon } from '../icons.jsx';
import { Mono } from '../components/Mono.jsx';
import { PageHeader } from '../components/PageHeader.jsx';
import { Segmented } from '../components/Segmented.jsx';
import { STATS, MEASUREMENTS } from '../data.js';

export function StatsScreen({ onNav }) {
  const [range, setRange] = useState('8W');
  const maxV = Math.max(...STATS.weeks.map((w) => w.v));

  return (
    <div>
      <PageHeader
        label="PROGRESS · 8 WEEKS"
        title="Stats"
        gradient
        right={<Segmented options={['4W', '8W', '6M', '1Y']} value={range} onChange={setRange} compact />}
      />

      <div style={{ padding: '14px 18px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ background: '#111', borderRadius: 24, padding: 20, color: '#fff' }}>
          <Mono size={10} color="rgba(255,255,255,0.55)">TOTAL VOLUME · 8 WEEKS</Mono>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 8 }}>
            <span style={{ fontFamily: THEME.display, fontSize: 52, fontWeight: 800, color: '#fff', letterSpacing: -2, lineHeight: 1 }}>
              {STATS.totalVolume}K
            </span>
            <Mono size={11} color="rgba(255,255,255,0.55)">LB</Mono>
          </div>
          <div style={{ marginTop: 6, display: 'flex', alignItems: 'center', gap: 4, color: THEME.accent }}>
            {Icon.trend(THEME.accent, 12)}
            <Mono size={10} color={THEME.accent}>+{STATS.volumeDelta}%</Mono>
            <Mono size={10} color="rgba(255,255,255,0.55)">VS. PREV 8W</Mono>
          </div>

          <div style={{ marginTop: 18, display: 'flex', alignItems: 'flex-end', gap: 8, height: 110 }}>
            {STATS.weeks.map((w, i) => {
              const h = (w.v / maxV) * 100;
              return (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <div
                    style={{
                      width: '100%',
                      height: h + '%',
                      borderRadius: 6,
                      background: w.live ? THEME.accent : 'rgba(255,255,255,0.15)',
                    }}
                  />
                  <Mono size={8} color="rgba(255,255,255,0.45)">{w.w}</Mono>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
          {[
            { k: 'WORKOUTS', v: STATS.workouts.val, d: '+' + STATS.workouts.delta },
            { k: 'AVG / WK', v: STATS.avgWk.val.toFixed(1), d: '+' + STATS.avgWk.delta },
            { k: 'HRS', v: STATS.hours.val.toFixed(1), d: '+' + STATS.hours.delta },
          ].map((m, i) => (
            <div key={i} style={{ background: THEME.card, borderRadius: 18, padding: 14 }}>
              <Mono size={9} color={THEME.textMuted}>{m.k}</Mono>
              <div style={{ fontFamily: THEME.display, fontSize: 22, fontWeight: 800, color: THEME.text, letterSpacing: -0.6, marginTop: 4 }}>
                {m.v}
              </div>
              <Mono size={9} color={THEME.accentDark} style={{ marginTop: 2, display: 'block' }}>{m.d}</Mono>
            </div>
          ))}
        </div>

        <div style={{ background: THEME.card, borderRadius: 22, padding: 0, overflow: 'hidden' }}>
          <div
            style={{
              padding: '16px 18px 12px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: `1px solid ${THEME.border}`,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              {Icon.trend(THEME.textMuted, 12)}
              <Mono size={10} color={THEME.textMuted}>BIG THREE · 1RM</Mono>
            </div>
            <div style={{ color: THEME.textDim }}>{Icon.chevR('currentColor', 14)}</div>
          </div>
          {STATS.big3.map((l, i) => (
            <div
              key={i}
              style={{
                padding: '14px 18px',
                borderBottom: i < STATS.big3.length - 1 ? `1px solid ${THEME.border}` : 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ fontFamily: THEME.display, fontSize: 16, fontWeight: 700, color: THEME.text }}>{l.lift}</div>
                <Mono size={9} color={THEME.accentDark}>{l.delta} LB · 8W</Mono>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                <span style={{ fontFamily: THEME.display, fontSize: 26, fontWeight: 800, color: THEME.text, letterSpacing: -0.6 }}>
                  {l.rm}
                </span>
                <Mono size={10} color={THEME.textMuted}>LB</Mono>
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: THEME.card, borderRadius: 22, padding: 18 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Mono size={10} color={THEME.textMuted}>BODYWEIGHT · 12W</Mono>
            <Mono size={10} color={THEME.accentDark}>{MEASUREMENTS.bw.delta} LB</Mono>
          </div>
          <BwLine series={MEASUREMENTS.bw.series} />
        </div>

        <div style={{ background: THEME.card, borderRadius: 22, padding: 18, marginBottom: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              {Icon.flame(THEME.accentDark, 12)}
              <Mono size={10} color={THEME.textMuted}>CONSISTENCY</Mono>
            </div>
            <Mono size={10} color={THEME.text}>{STATS.streak} DAYS</Mono>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(14, 1fr)', gap: 3, marginTop: 8 }}>
            {Array.from({ length: 70 }).map((_, i) => {
              const active = (i * 7) % 13 > 3;
              return (
                <div
                  key={i}
                  style={{
                    aspectRatio: '1',
                    borderRadius: 3,
                    background: active ? THEME.accent : '#F0EDE4',
                    opacity: active ? 0.45 + (i % 10) / 20 : 1,
                  }}
                />
              );
            })}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
            <Mono size={8} color={THEME.textDim}>10W AGO</Mono>
            <Mono size={8} color={THEME.textDim}>TODAY</Mono>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BwLine({ series }) {
  const max = Math.max(...series);
  const min = Math.min(...series);
  const w = 310;
  const h = 70;
  const pts = series.map((v, i) => {
    const x = (i / (series.length - 1)) * w;
    const y = h - ((v - min) / (max - min || 1)) * h;
    return [x, y];
  });
  const d = pts.map((p, i) => (i === 0 ? 'M' : 'L') + p[0] + ',' + p[1]).join(' ');
  const area = d + ` L ${w},${h} L 0,${h} Z`;
  return (
    <svg width="100%" viewBox={`0 0 ${w} ${h}`} style={{ marginTop: 12, display: 'block' }}>
      <defs>
        <linearGradient id="bwgrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={THEME.accentDark} stopOpacity="0.35" />
          <stop offset="100%" stopColor={THEME.accentDark} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#bwgrad)" />
      <path d={d} fill="none" stroke={THEME.accentDark} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={pts[pts.length - 1][0]} cy={pts[pts.length - 1][1]} r="4" fill={THEME.accentDark} />
    </svg>
  );
}
