import { THEME } from '../theme.js';
import { Icon } from '../icons.jsx';
import { Mono } from '../components/Mono.jsx';
import { Card } from '../components/Card.jsx';
import { USER, PROGRAM, TODAY_WORKOUT, STATS, MEASUREMENTS } from '../data.js';

// Today / Dashboard — two variants via prop
export function Dashboard({ variant, onNav, onStartWorkout }) {
  if (variant === 'v2') return <DashboardDataFirst onNav={onNav} onStartWorkout={onStartWorkout} />;
  return <DashboardHero onNav={onNav} onStartWorkout={onStartWorkout} />;
}

// V1 Hero: big workout card front and centre
function DashboardHero({ onNav, onStartWorkout }) {
  return (
    <div style={{ padding: '8px 20px 24px', display: 'flex', flexDirection: 'column', gap: 18 }}>
      {/* Greeting + settings */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          paddingTop: 8,
        }}
      >
        <div>
          <Mono size={10} color={THEME.textMuted}>
            FRI · APR 18
          </Mono>
          <h1
            style={{
              margin: '4px 0 0',
              fontFamily: THEME.display,
              fontSize: 30,
              fontWeight: 700,
              color: THEME.text,
              letterSpacing: -1,
              lineHeight: 1.1,
              paddingBottom: 4,
            }}
          >
            Good morning,
            <br />
            <span style={{ color: THEME.textMuted }}>{USER.name}.</span>
          </h1>
        </div>
        <button
          onClick={() => onNav('you')}
          style={{
            width: 40,
            height: 40,
            borderRadius: 12,
            background: THEME.cardElev,
            border: `1px solid ${THEME.border}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: THEME.textMuted,
            cursor: 'pointer',
          }}
        >
          {Icon.settings('currentColor', 18)}
        </button>
      </div>

      {/* Hero */}
      <div
        style={{
          background: THEME.card,
          borderRadius: 24,
          border: `1px solid ${THEME.border}`,
          padding: 20,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 1,
            background: `linear-gradient(90deg, ${THEME.accent} 0%, ${THEME.accent} 35%, transparent 100%)`,
          }}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 20,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div
              style={{ width: 6, height: 6, borderRadius: '50%', background: THEME.accent }}
            />
            <Mono size={10} color={THEME.accent}>
              TODAY'S LIFT
            </Mono>
            <Mono size={10} color={THEME.textMuted}>
              · WEEK {PROGRAM.week}
            </Mono>
          </div>
          <Mono size={10} color={THEME.textMuted}>
            DAY {PROGRAM.day}/{PROGRAM.total}
          </Mono>
        </div>
        <h2
          style={{
            margin: 0,
            fontFamily: THEME.display,
            fontSize: 32,
            fontWeight: 700,
            color: THEME.text,
            letterSpacing: -1,
          }}
        >
          {TODAY_WORKOUT.name}
        </h2>
        <div style={{ marginTop: 6, color: THEME.textMuted, fontSize: 14, fontWeight: 400 }}>
          {TODAY_WORKOUT.tags.join(' · ')}
        </div>

        <div
          style={{
            marginTop: 24,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 16,
            paddingTop: 18,
            borderTop: `1px solid ${THEME.border}`,
          }}
        >
          {[
            { k: 'EXERCISES', v: TODAY_WORKOUT.exercises, u: '' },
            { k: 'VOLUME', v: TODAY_WORKOUT.volume, u: 'LB' },
            { k: 'EST. TIME', v: TODAY_WORKOUT.estMin, u: 'MIN' },
          ].map((m, i) => (
            <div key={i}>
              <Mono size={9} color={THEME.textMuted}>
                {m.k}
              </Mono>
              <div
                style={{ marginTop: 4, display: 'flex', alignItems: 'baseline', gap: 4 }}
              >
                <span
                  style={{
                    fontFamily: THEME.display,
                    fontSize: 22,
                    fontWeight: 700,
                    color: THEME.text,
                    letterSpacing: -0.5,
                  }}
                >
                  {m.v}
                </span>
                {m.u && (
                  <Mono size={9} color={THEME.textMuted}>
                    {m.u}
                  </Mono>
                )}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={onStartWorkout}
          style={{
            marginTop: 20,
            width: '100%',
            background: THEME.accent,
            color: '#000',
            border: 'none',
            borderRadius: 100,
            padding: '16px 20px',
            fontFamily: THEME.display,
            fontSize: 15,
            fontWeight: 700,
            letterSpacing: 0.5,
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            cursor: 'pointer',
          }}
        >
          {Icon.bolt('#000', 16)} Start Workout
        </button>
      </div>

      {/* Week strip */}
      <Card>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 14,
          }}
        >
          <Mono size={10} color={THEME.textMuted}>
            THIS WEEK
          </Mono>
          <Mono size={10} color={THEME.text}>
            4/6 DONE
          </Mono>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 6 }}>
          {PROGRAM.thisWeek.map((d, i) => {
            const bg = d.today ? THEME.accent : d.done ? '#2a351a' : THEME.cardElev;
            const fg = d.today ? '#000' : d.done ? THEME.accent : THEME.textDim;
            const border = d.today ? THEME.accent : d.done ? '#3d4d1f' : THEME.border;
            return (
              <div
                key={i}
                style={{
                  aspectRatio: '1',
                  borderRadius: 10,
                  background: bg,
                  border: `1px solid ${border}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: THEME.display,
                  fontSize: 13,
                  fontWeight: 700,
                  color: fg,
                }}
              >
                {d.d}
              </div>
            );
          })}
        </div>
      </Card>

      {/* Quick stats trio */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <Card style={{ padding: 16 }} onClick={() => onNav('stats')}>
          <Mono size={9} color={THEME.textMuted}>
            STREAK
          </Mono>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 6 }}>
            <span
              style={{
                fontFamily: THEME.display,
                fontSize: 28,
                fontWeight: 700,
                color: THEME.text,
                letterSpacing: -0.5,
              }}
            >
              {STATS.streak}
            </span>
            <Mono size={9} color={THEME.textMuted}>
              DAYS
            </Mono>
          </div>
          <div
            style={{
              marginTop: 6,
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              color: THEME.accent,
              fontSize: 11,
            }}
          >
            {Icon.flame(THEME.accent, 12)}{' '}
            <Mono size={9} color={THEME.accent}>
              ON FIRE
            </Mono>
          </div>
        </Card>
        <Card style={{ padding: 16 }} onClick={() => onNav('stats')}>
          <Mono size={9} color={THEME.textMuted}>
            BODYWEIGHT
          </Mono>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 6 }}>
            <span
              style={{
                fontFamily: THEME.display,
                fontSize: 28,
                fontWeight: 700,
                color: THEME.text,
                letterSpacing: -0.5,
              }}
            >
              {MEASUREMENTS.bw.val}
            </span>
            <Mono size={9} color={THEME.textMuted}>
              LB
            </Mono>
          </div>
          <div style={{ marginTop: 6, fontSize: 11, color: THEME.accent }}>
            <Mono size={9} color={THEME.accent}>
              {MEASUREMENTS.bw.delta > 0 ? '+' : ''}
              {MEASUREMENTS.bw.delta} · 12W
            </Mono>
          </div>
        </Card>
      </div>
    </div>
  );
}

// V2 Data-first
function DashboardDataFirst({ onNav, onStartWorkout }) {
  return (
    <div style={{ padding: '8px 20px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 8,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #2a2a2a, #111)',
              border: `1px solid ${THEME.border}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: THEME.display,
              fontWeight: 700,
              fontSize: 14,
              color: THEME.text,
            }}
          >
            {USER.name[0]}
          </div>
          <div>
            <Mono size={9} color={THEME.textMuted}>
              FRI · APR 18 · W{PROGRAM.week}
            </Mono>
            <div
              style={{
                fontFamily: THEME.display,
                fontSize: 16,
                fontWeight: 600,
                color: THEME.text,
              }}
            >
              Hey, {USER.name}
            </div>
          </div>
        </div>
        <button
          onClick={() => onNav('you')}
          style={{
            width: 40,
            height: 40,
            borderRadius: 12,
            background: THEME.cardElev,
            border: `1px solid ${THEME.border}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: THEME.textMuted,
            cursor: 'pointer',
          }}
        >
          {Icon.settings('currentColor', 18)}
        </button>
      </div>

      {/* Streak hero */}
      <div
        style={{
          background: THEME.card,
          borderRadius: 24,
          border: `1px solid ${THEME.border}`,
          padding: 24,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}
        >
          <div>
            <Mono size={10} color={THEME.textMuted}>
              CURRENT STREAK
            </Mono>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 8 }}>
              <span
                style={{
                  fontFamily: THEME.display,
                  fontSize: 68,
                  fontWeight: 700,
                  color: THEME.accent,
                  letterSpacing: -2.5,
                  lineHeight: 1,
                }}
              >
                {STATS.streak}
              </span>
              <span
                style={{
                  fontFamily: THEME.display,
                  fontSize: 20,
                  fontWeight: 500,
                  color: THEME.textMuted,
                }}
              >
                days
              </span>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              alignItems: 'flex-end',
            }}
          >
            <Mono size={9} color={THEME.textMuted}>
              BEST
            </Mono>
            <span
              style={{
                fontFamily: THEME.display,
                fontSize: 18,
                fontWeight: 600,
                color: THEME.text,
              }}
            >
              31
            </span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 3, marginTop: 18 }}>
          {Array.from({ length: 28 }).map((_, i) => {
            const hot = i >= 5;
            return (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: 20,
                  borderRadius: 3,
                  background: hot ? THEME.accent : THEME.cardElev,
                  opacity: hot ? 0.3 + (i - 5) / 40 : 1,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Today workout compact */}
      <div
        style={{
          background: THEME.card,
          borderRadius: 20,
          border: `1px solid ${THEME.border}`,
          padding: 18,
          display: 'flex',
          gap: 14,
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: 14,
            background: THEME.accent,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {Icon.bolt('#000', 24)}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <Mono size={9} color={THEME.textMuted}>
            UP NEXT · DAY {PROGRAM.day}
          </Mono>
          <div
            style={{
              fontFamily: THEME.display,
              fontSize: 20,
              fontWeight: 700,
              color: THEME.text,
              letterSpacing: -0.5,
              marginTop: 2,
            }}
          >
            {TODAY_WORKOUT.name}
          </div>
          <div style={{ color: THEME.textMuted, fontSize: 12, marginTop: 2 }}>
            {TODAY_WORKOUT.exercises} exercises · ~{TODAY_WORKOUT.estMin} min
          </div>
        </div>
        <button
          onClick={onStartWorkout}
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: THEME.accent,
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {Icon.play('#000', 14)}
        </button>
      </div>

      {/* Metric grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {[
          { k: 'VOLUME · 8W', v: '175.3K', u: 'LB', d: '+12.4%' },
          { k: 'WORKOUTS', v: STATS.workouts.val, u: '', d: '+3' },
          { k: 'AVG / WK', v: STATS.avgWk.val, u: '', d: '+0.4' },
          { k: 'BODYWEIGHT', v: MEASUREMENTS.bw.val, u: 'LB', d: '-3.8' },
        ].map((m, i) => (
          <Card key={i} style={{ padding: 16 }} onClick={() => onNav('stats')}>
            <Mono size={9} color={THEME.textMuted}>
              {m.k}
            </Mono>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 6 }}>
              <span
                style={{
                  fontFamily: THEME.display,
                  fontSize: 24,
                  fontWeight: 700,
                  color: THEME.text,
                  letterSpacing: -0.5,
                }}
              >
                {m.v}
              </span>
              {m.u && (
                <Mono size={9} color={THEME.textMuted}>
                  {m.u}
                </Mono>
              )}
            </div>
            <Mono size={9} color={THEME.accent} style={{ marginTop: 4, display: 'block' }}>
              {m.d}
            </Mono>
          </Card>
        ))}
      </div>

      {/* Week dots */}
      <Card>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 14,
          }}
        >
          <Mono size={10} color={THEME.textMuted}>
            THIS WEEK
          </Mono>
          <Mono size={10} color={THEME.text}>
            4/6 DONE
          </Mono>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 6 }}>
          {PROGRAM.thisWeek.map((d, i) => {
            const bg = d.today ? THEME.accent : d.done ? '#2a351a' : THEME.cardElev;
            const fg = d.today ? '#000' : d.done ? THEME.accent : THEME.textDim;
            const border = d.today ? THEME.accent : d.done ? '#3d4d1f' : THEME.border;
            return (
              <div
                key={i}
                style={{
                  aspectRatio: '1',
                  borderRadius: 10,
                  background: bg,
                  border: `1px solid ${border}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: THEME.display,
                  fontSize: 13,
                  fontWeight: 700,
                  color: fg,
                }}
              >
                {d.d}
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
