import { useState } from 'react';
import { THEME } from '../theme.js';
import { Icon } from '../icons.jsx';
import { Mono } from '../components/Mono.jsx';
import { Card } from '../components/Card.jsx';
import { Segmented } from '../components/Segmented.jsx';
import { STATS, MEASUREMENTS } from '../data.js';

export function StatsScreen() {
  const [range, setRange] = useState('8W');
  const maxV = Math.max(...STATS.weeks.map((w) => w.v));

  return (
    <div>
      <div style={{ padding: '12px 20px 16px' }}>
        <div
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}
        >
          <div>
            <Mono size={10} color={THEME.textMuted}>
              PROGRESS · 8 WEEKS
            </Mono>
            <h1
              style={{
                margin: '6px 0 0',
                fontFamily: THEME.display,
                fontSize: 36,
                fontWeight: 700,
                color: THEME.text,
                letterSpacing: -1.2,
                lineHeight: 1,
              }}
            >
              Stats
            </h1>
          </div>
          <Segmented options={['4W', '8W', '6M', '1Y']} value={range} onChange={setRange} compact />
        </div>
      </div>

      {/* Volume chart */}
      <div style={{ padding: '0 20px', marginBottom: 14 }}>
        <Card>
          <div
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Mono size={10} color={THEME.textMuted}>
              TOTAL VOLUME · 8 WEEKS
            </Mono>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 10 }}>
            <span
              style={{
                fontFamily: THEME.display,
                fontSize: 46,
                fontWeight: 700,
                color: THEME.text,
                letterSpacing: -1.6,
                lineHeight: 1,
              }}
            >
              {STATS.totalVolume}K
            </span>
            <Mono size={11} color={THEME.textMuted}>
              LB
            </Mono>
          </div>
          <div
            style={{
              marginTop: 6,
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              color: THEME.accent,
            }}
          >
            {Icon.trend(THEME.accent, 12)}
            <Mono size={10} color={THEME.accent}>
              +{STATS.volumeDelta}%
            </Mono>
            <Mono size={10} color={THEME.textMuted}>
              VS. PREV 8W
            </Mono>
          </div>

          <div
            style={{
              marginTop: 22,
              display: 'flex',
              alignItems: 'flex-end',
              gap: 8,
              height: 120,
            }}
          >
            {STATS.weeks.map((w, i) => {
              const h = (w.v / maxV) * 100;
              return (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: h + '%',
                      borderRadius: 4,
                      background: w.live ? THEME.accent : '#3a3a3a',
                      border: `1px solid ${w.live ? THEME.accent : '#4a4a4a'}`,
                    }}
                  />
                  <Mono size={8} color={THEME.textDim}>
                    {w.w}
                  </Mono>
                </div>
              );
            })}
          </div>
        </Card>
      </div>

      {/* Trio stats */}
      <div
        style={{
          padding: '0 20px',
          marginBottom: 14,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: 8,
        }}
      >
        {[
          { k: 'WORKOUTS', v: STATS.workouts.val, d: '+' + STATS.workouts.delta },
          { k: 'AVG / WK', v: STATS.avgWk.val.toFixed(1), d: '+' + STATS.avgWk.delta },
          { k: 'HRS', v: STATS.hours.val.toFixed(1), d: '+' + STATS.hours.delta },
        ].map((m, i) => (
          <div
            key={i}
            style={{
              background: THEME.card,
              borderRadius: 16,
              border: `1px solid ${THEME.border}`,
              padding: 14,
            }}
          >
            <Mono size={9} color={THEME.textMuted}>
              {m.k}
            </Mono>
            <div
              style={{
                fontFamily: THEME.display,
                fontSize: 22,
                fontWeight: 700,
                color: THEME.text,
                letterSpacing: -0.5,
                marginTop: 4,
              }}
            >
              {m.v}
            </div>
            <Mono size={9} color={THEME.accent} style={{ marginTop: 2, display: 'block' }}>
              {m.d}
            </Mono>
          </div>
        ))}
      </div>

      {/* Big Three */}
      <div style={{ padding: '0 20px', marginBottom: 14 }}>
        <Card style={{ padding: 0 }}>
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
              <Mono size={10} color={THEME.textMuted}>
                BIG THREE · 1RM
              </Mono>
            </div>
            <div style={{ color: THEME.textDim }}>{Icon.chevR('currentColor', 14)}</div>
          </div>
          {STATS.big3.map((l, i) => (
            <div
              key={i}
              style={{
                padding: '14px 18px',
                borderBottom:
                  i < STATS.big3.length - 1 ? `1px solid ${THEME.border}` : 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: THEME.display,
                    fontSize: 16,
                    fontWeight: 600,
                    color: THEME.text,
                  }}
                >
                  {l.lift}
                </div>
                <Mono size={9} color={THEME.accent}>
                  {l.delta} LB · 8W
                </Mono>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                <span
                  style={{
                    fontFamily: THEME.display,
                    fontSize: 26,
                    fontWeight: 700,
                    color: THEME.text,
                    letterSpacing: -0.6,
                  }}
                >
                  {l.rm}
                </span>
                <Mono size={10} color={THEME.textMuted}>
                  LB
                </Mono>
              </div>
            </div>
          ))}
        </Card>
      </div>

      {/* Bodyweight mini */}
      <div style={{ padding: '0 20px', marginBottom: 14 }}>
        <Card>
          <div
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Mono size={10} color={THEME.textMuted}>
              BODYWEIGHT · 12W
            </Mono>
            <Mono size={10} color={THEME.accent}>
              {MEASUREMENTS.bw.delta} LB
            </Mono>
          </div>
          <BwLine series={MEASUREMENTS.bw.series} />
        </Card>
      </div>

      {/* Consistency */}
      <div style={{ padding: '0 20px 20px' }}>
        <Card>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 10,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              {Icon.flame(THEME.accent, 12)}
              <Mono size={10} color={THEME.textMuted}>
                CONSISTENCY
              </Mono>
            </div>
            <Mono size={10} color={THEME.text}>
              {STATS.streak} DAYS
            </Mono>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(14, 1fr)',
              gap: 3,
              marginTop: 8,
            }}
          >
            {consistencyCells.map((active, i) => (
              <div
                key={i}
                style={{
                  aspectRatio: '1',
                  borderRadius: 2,
                  background: active ? THEME.accent : THEME.cardElev,
                  opacity: active ? 0.3 + (i % 10) / 20 : 1,
                }}
              />
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
            <Mono size={8} color={THEME.textDim}>
              10W AGO
            </Mono>
            <Mono size={8} color={THEME.textDim}>
              TODAY
            </Mono>
          </div>
        </Card>
      </div>
    </div>
  );
}

// stable consistency pattern (keeps SSR/CSR consistent on re-render)
const consistencyCells = (() => {
  const out = [];
  let seed = 1234;
  for (let i = 0; i < 70; i++) {
    // simple LCG
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    out.push(seed / 0x7fffffff > 0.32);
  }
  return out;
})();

export function BwLine({ series }) {
  const max = Math.max(...series),
    min = Math.min(...series);
  const w = 310,
    h = 70;
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
          <stop offset="0%" stopColor={THEME.accent} stopOpacity="0.25" />
          <stop offset="100%" stopColor={THEME.accent} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#bwgrad)" />
      <path
        d={d}
        fill="none"
        stroke={THEME.accent}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={pts[pts.length - 1][0]}
        cy={pts[pts.length - 1][1]}
        r="3"
        fill={THEME.accent}
      />
    </svg>
  );
}
