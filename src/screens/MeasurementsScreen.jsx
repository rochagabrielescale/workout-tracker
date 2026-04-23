import { THEME } from '../theme.js';
import { Icon } from '../icons.jsx';
import { Mono } from '../components/Mono.jsx';
import { Card } from '../components/Card.jsx';
import { PageHeader } from '../components/PageHeader.jsx';
import { MEASUREMENTS } from '../data.js';
import { BwLine } from './StatsScreen.jsx';

export function MeasurementsScreen() {
  const m = MEASUREMENTS;
  return (
    <div>
      <PageHeader label="BODY · TRACKING" title="Body" />
      <div style={{ padding: '0 20px 20px' }}>
        <Card>
          <div
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Mono size={10} color={THEME.textMuted}>
              BODYWEIGHT · 12W
            </Mono>
            <Mono size={10} color={THEME.accent}>
              {m.bw.delta} LB
            </Mono>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 8 }}>
            <span
              style={{
                fontFamily: THEME.display,
                fontSize: 42,
                fontWeight: 700,
                color: THEME.text,
                letterSpacing: -1.4,
                lineHeight: 1,
              }}
            >
              {m.bw.val}
            </span>
            <Mono size={11} color={THEME.textMuted}>
              LB
            </Mono>
          </div>
          <BwLine series={m.bw.series} />
        </Card>

        <div
          style={{
            marginTop: 14,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 8,
          }}
        >
          {[
            { k: 'BODY FAT', v: m.bf.val, u: m.bf.unit, d: m.bf.delta },
            { k: 'CHEST', v: m.chest.val, u: m.chest.unit, d: m.chest.delta },
            { k: 'ARM', v: m.arm.val, u: m.arm.unit, d: m.arm.delta },
            { k: 'WAIST', v: m.waist.val, u: m.waist.unit, d: m.waist.delta },
            { k: 'THIGH', v: m.thigh.val, u: m.thigh.unit, d: m.thigh.delta },
          ].map((x, i) => (
            <div
              key={i}
              style={{
                background: THEME.card,
                borderRadius: 14,
                border: `1px solid ${THEME.border}`,
                padding: 14,
              }}
            >
              <Mono size={9} color={THEME.textMuted}>
                {x.k}
              </Mono>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 6 }}>
                <span
                  style={{
                    fontFamily: THEME.display,
                    fontSize: 22,
                    fontWeight: 700,
                    color: THEME.text,
                    letterSpacing: -0.5,
                  }}
                >
                  {x.v}
                </span>
                <Mono size={9} color={THEME.textMuted}>
                  {x.u}
                </Mono>
              </div>
              <Mono
                size={9}
                color={x.d >= 0 ? THEME.accent : '#ffb84d'}
                style={{ display: 'block', marginTop: 2 }}
              >
                {x.d > 0 ? '+' : ''}
                {x.d} · 12W
              </Mono>
            </div>
          ))}
          <button
            style={{
              background: 'transparent',
              borderRadius: 14,
              border: `1px dashed ${THEME.borderStrong}`,
              padding: 14,
              color: THEME.textMuted,
              cursor: 'pointer',
              fontFamily: THEME.mono,
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: 1,
              textTransform: 'uppercase',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
            }}
          >
            {Icon.plus('currentColor', 16)} Add
          </button>
        </div>
      </div>
    </div>
  );
}
