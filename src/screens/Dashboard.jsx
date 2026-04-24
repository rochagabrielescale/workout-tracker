import React from 'react';
import { THEME } from '../theme.js';
import { Icon } from '../icons.jsx';
import { Mono } from '../components/Mono.jsx';
import { IconBtn } from '../components/Card.jsx';
import { USER, PROGRAM, TODAY_WORKOUT, STATS, MEASUREMENTS } from '../data.js';

export function Dashboard({ variant, onNav, onStartWorkout }) {
  if (variant === 'v2') return <DashboardDataFirst onNav={onNav} onStartWorkout={onStartWorkout} />;
  return <DashboardHero onNav={onNav} onStartWorkout={onStartWorkout} />;
}

function DashboardHero({ onNav, onStartWorkout }) {
  return (
    <div>
      <div
        style={{
          background: THEME.bgGradient,
          padding: '20px 22px 44px',
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          position: 'relative',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: '#111',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: THEME.display,
                fontWeight: 800,
                fontSize: 16,
                boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
              }}
            >
              {USER.name[0]}
            </div>
            <div>
              <div style={{ fontFamily: THEME.display, fontSize: 13, fontWeight: 500, color: THEME.textMuted, lineHeight: 1 }}>
                Hey
              </div>
              <div style={{ fontFamily: THEME.display, fontSize: 17, fontWeight: 700, color: THEME.text, marginTop: 2 }}>
                {USER.name}
              </div>
            </div>
          </div>
          <IconBtn onClick={() => onNav('you')} size={42} bg="rgba(255,255,255,0.55)">
            {Icon.settings('#111', 18)}
          </IconBtn>
        </div>

        <div style={{ marginTop: 28 }}>
          <div style={{ fontFamily: THEME.display, fontSize: 78, fontWeight: 800, color: THEME.text, letterSpacing: -4, lineHeight: 0.9 }}>
            04.18
          </div>
          <div style={{ fontFamily: THEME.display, fontSize: 30, fontWeight: 500, color: THEME.text, letterSpacing: -1, marginTop: 2 }}>
            Friday
          </div>
        </div>
      </div>

      <div style={{ padding: '16px 18px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ background: THEME.card, borderRadius: 26, padding: 22, position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: THEME.accentDark }} />
              <Mono size={10} color={THEME.accentDark}>TODAY'S LIFT · WEEK {PROGRAM.week}</Mono>
            </div>
            <Mono size={10} color={THEME.textMuted}>DAY {PROGRAM.day}/{PROGRAM.total}</Mono>
          </div>
          <h2 style={{ margin: '10px 0 0', fontFamily: THEME.display, fontSize: 34, fontWeight: 800, color: THEME.text, letterSpacing: -1.4, lineHeight: 1 }}>
            {TODAY_WORKOUT.name}
          </h2>
          <div style={{ marginTop: 6, color: THEME.textMuted, fontSize: 14, fontWeight: 500 }}>
            {TODAY_WORKOUT.tags.join(' · ')}
          </div>

          <div
            style={{
              marginTop: 18,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: 10,
              paddingTop: 16,
              borderTop: `1px solid ${THEME.border}`,
            }}
          >
            {[
              { k: 'EXERCISES', v: TODAY_WORKOUT.exercises, u: '' },
              { k: 'VOLUME', v: TODAY_WORKOUT.volume, u: 'LB' },
              { k: 'EST. TIME', v: TODAY_WORKOUT.estMin, u: 'MIN' },
            ].map((m, i) => (
              <div key={i}>
                <Mono size={9} color={THEME.textMuted}>{m.k}</Mono>
                <div style={{ marginTop: 4, display: 'flex', alignItems: 'baseline', gap: 3 }}>
                  <span style={{ fontFamily: THEME.display, fontSize: 22, fontWeight: 800, color: THEME.text, letterSpacing: -0.6 }}>
                    {m.v}
                  </span>
                  {m.u && <Mono size={9} color={THEME.textMuted}>{m.u}</Mono>}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={onStartWorkout}
            style={{
              marginTop: 18,
              width: '100%',
              background: '#111',
              color: '#fff',
              border: 'none',
              borderRadius: 100,
              padding: '16px 20px',
              fontFamily: THEME.display,
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: 0.3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              cursor: 'pointer',
            }}
          >
            {Icon.bolt(THEME.accent, 16)} Start Workout
          </button>
        </div>

        <div style={{ background: THEME.card, borderRadius: 22, padding: 18 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <div style={{ fontFamily: THEME.display, fontSize: 15, fontWeight: 700, color: THEME.text }}>This week</div>
            <Mono size={10} color={THEME.textMuted}>4/6 DONE</Mono>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 6 }}>
            {PROGRAM.thisWeek.map((d, i) => {
              let bg = '#F0EDE4', fg = THEME.textDim;
              if (d.done) { bg = THEME.accent; fg = '#111'; }
              if (d.today) { bg = '#111'; fg = THEME.accent; }
              return (
                <div
                  key={i}
                  style={{
                    aspectRatio: '1',
                    borderRadius: 14,
                    background: bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: THEME.display,
                    fontSize: 14,
                    fontWeight: 700,
                    color: fg,
                  }}
                >
                  {d.d}
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <div
            style={{ background: '#111', borderRadius: 22, padding: 18, color: '#fff', cursor: 'pointer' }}
            onClick={() => onNav('stats')}
          >
            <Mono size={9} color="rgba(255,255,255,0.55)">STREAK</Mono>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 6 }}>
              <span style={{ fontFamily: THEME.display, fontSize: 32, fontWeight: 800, color: THEME.accent, letterSpacing: -1 }}>
                {STATS.streak}
              </span>
              <Mono size={9} color="rgba(255,255,255,0.55)">DAYS</Mono>
            </div>
            <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 4 }}>
              {Icon.flame(THEME.accent, 12)}
              <Mono size={9} color={THEME.accent}>ON FIRE</Mono>
            </div>
          </div>
          <div
            style={{ background: THEME.card, borderRadius: 22, padding: 18, cursor: 'pointer' }}
            onClick={() => onNav('stats')}
          >
            <Mono size={9} color={THEME.textMuted}>BODYWEIGHT</Mono>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 6 }}>
              <span style={{ fontFamily: THEME.display, fontSize: 32, fontWeight: 800, color: THEME.text, letterSpacing: -1 }}>
                {MEASUREMENTS.bw.val}
              </span>
              <Mono size={9} color={THEME.textMuted}>LB</Mono>
            </div>
            <div style={{ marginTop: 8 }}>
              <Mono size={9} color={THEME.accentDark}>
                {MEASUREMENTS.bw.delta > 0 ? '+' : ''}
                {MEASUREMENTS.bw.delta} · 12W
              </Mono>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardDataFirst({ onNav, onStartWorkout }) {
  return (
    <div>
      <div
        style={{
          background: THEME.bgGradient,
          padding: '20px 22px 24px',
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: '#111',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: THEME.display,
                fontWeight: 800,
                fontSize: 16,
              }}
            >
              {USER.name[0]}
            </div>
            <div>
              <Mono size={9} color={THEME.textMuted}>FRI · APR 18 · W{PROGRAM.week}</Mono>
              <div style={{ fontFamily: THEME.display, fontSize: 17, fontWeight: 700, color: THEME.text, marginTop: 2 }}>
                Hey, {USER.name}
              </div>
            </div>
          </div>
          <IconBtn onClick={() => onNav('you')} size={42} bg="rgba(255,255,255,0.55)">
            {Icon.settings('#111', 18)}
          </IconBtn>
        </div>
      </div>

      <div style={{ padding: '14px 18px 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ background: '#111', borderRadius: 26, padding: 22, color: '#fff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <Mono size={10} color="rgba(255,255,255,0.55)">CURRENT STREAK</Mono>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 6 }}>
                <span style={{ fontFamily: THEME.display, fontSize: 72, fontWeight: 800, color: THEME.accent, letterSpacing: -3, lineHeight: 1 }}>
                  {STATS.streak}
                </span>
                <span style={{ fontFamily: THEME.display, fontSize: 20, fontWeight: 500, color: 'rgba(255,255,255,0.55)' }}>
                  days
                </span>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-end' }}>
              <Mono size={9} color="rgba(255,255,255,0.55)">BEST</Mono>
              <span style={{ fontFamily: THEME.display, fontSize: 18, fontWeight: 700, color: '#fff' }}>31</span>
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
                    height: 22,
                    borderRadius: 4,
                    background: hot ? THEME.accent : 'rgba(255,255,255,0.08)',
                    opacity: hot ? 0.4 + (i - 5) / 40 : 1,
                  }}
                />
              );
            })}
          </div>
        </div>

        <div
          style={{
            background: THEME.card,
            borderRadius: 22,
            padding: 16,
            display: 'flex',
            gap: 14,
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: 54,
              height: 54,
              borderRadius: 16,
              background: THEME.accent,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            {Icon.bolt('#111', 24)}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <Mono size={9} color={THEME.textMuted}>UP NEXT · DAY {PROGRAM.day}</Mono>
            <div style={{ fontFamily: THEME.display, fontSize: 20, fontWeight: 800, color: THEME.text, letterSpacing: -0.6, marginTop: 2 }}>
              {TODAY_WORKOUT.name}
            </div>
            <div style={{ color: THEME.textMuted, fontSize: 12, marginTop: 2 }}>
              {TODAY_WORKOUT.exercises} exercises · ~{TODAY_WORKOUT.estMin} min
            </div>
          </div>
          <button
            onClick={onStartWorkout}
            style={{
              width: 42,
              height: 42,
              borderRadius: '50%',
              background: '#111',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {Icon.play('#fff', 14)}
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {[
            { k: 'VOLUME · 8W', v: '175.3K', u: 'LB', d: '+12.4%' },
            { k: 'WORKOUTS', v: STATS.workouts.val, u: '', d: '+3' },
            { k: 'AVG / WK', v: STATS.avgWk.val, u: '', d: '+0.4' },
            { k: 'BODYWEIGHT', v: MEASUREMENTS.bw.val, u: 'LB', d: '-3.8' },
          ].map((m, i) => (
            <div
              key={i}
              style={{ background: THEME.card, borderRadius: 20, padding: 16, cursor: 'pointer' }}
              onClick={() => onNav('stats')}
            >
              <Mono size={9} color={THEME.textMuted}>{m.k}</Mono>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 6 }}>
                <span style={{ fontFamily: THEME.display, fontSize: 26, fontWeight: 800, color: THEME.text, letterSpacing: -0.8 }}>
                  {m.v}
                </span>
                {m.u && <Mono size={9} color={THEME.textMuted}>{m.u}</Mono>}
              </div>
              <Mono size={9} color={THEME.accentDark} style={{ marginTop: 4, display: 'block' }}>
                {m.d}
              </Mono>
            </div>
          ))}
        </div>

        <div style={{ background: THEME.card, borderRadius: 22, padding: 18 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <div style={{ fontFamily: THEME.display, fontSize: 15, fontWeight: 700, color: THEME.text }}>This week</div>
            <Mono size={10} color={THEME.textMuted}>4/6 DONE</Mono>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 6 }}>
            {PROGRAM.thisWeek.map((d, i) => {
              let bg = '#F0EDE4', fg = THEME.textDim;
              if (d.done) { bg = THEME.accent; fg = '#111'; }
              if (d.today) { bg = '#111'; fg = THEME.accent; }
              return (
                <div
                  key={i}
                  style={{
                    aspectRatio: '1',
                    borderRadius: 14,
                    background: bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: THEME.display,
                    fontSize: 14,
                    fontWeight: 700,
                    color: fg,
                  }}
                >
                  {d.d}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
