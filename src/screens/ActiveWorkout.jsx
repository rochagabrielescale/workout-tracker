import React, { useState, useEffect } from 'react';
import { THEME } from '../theme.js';
import { Icon } from '../icons.jsx';
import { Mono } from '../components/Mono.jsx';
import { IconBtn } from '../components/Card.jsx';
import { ACTIVE, TODAY_WORKOUT } from '../data.js';

export function ActiveWorkout({ onExit }) {
  const [exIdx, setExIdx] = useState(0);
  const [sets, setSets] = useState(ACTIVE.list[0].sets);
  const [restSec, setRestSec] = useState(0);
  const [restTotal] = useState(120);
  const [paused, setPaused] = useState(false);
  const ex = ACTIVE.list[exIdx];

  useEffect(() => { setSets(ACTIVE.list[exIdx].sets || []); }, [exIdx]);

  useEffect(() => {
    if (restSec <= 0 || paused) return;
    const t = setTimeout(() => setRestSec((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [restSec, paused]);

  const completeSet = (i) => {
    setSets((prev) => prev.map((s, j) => (j === i ? { ...s, done: !s.done } : s)));
    if (!sets[i].done) {
      setRestSec(restTotal);
      setPaused(false);
    }
  };

  const completedCount = sets.filter((s) => s.done).length;
  const pct = sets.length ? (completedCount / sets.length) * 100 : 0;

  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <div
        style={{
          background: THEME.bgGradient,
          padding: '8px 18px 18px',
          borderBottomLeftRadius: 26,
          borderBottomRightRadius: 26,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <IconBtn onClick={onExit} size={40} bg="rgba(255,255,255,0.6)">
            {Icon.arrowL('#111', 20)}
          </IconBtn>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 6 }}>
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: THEME.danger,
                  animation: 'fpulse 1.4s ease-in-out infinite',
                }}
              />
              <Mono size={9} color={THEME.textMuted}>LIVE · {TODAY_WORKOUT.name.toUpperCase()}</Mono>
            </div>
            <div
              style={{
                fontFamily: THEME.mono,
                fontSize: 24,
                fontWeight: 700,
                color: THEME.text,
                letterSpacing: 1,
                marginTop: 2,
              }}
            >
              {ACTIVE.elapsed}
            </div>
          </div>
          <IconBtn size={40} bg="rgba(255,255,255,0.6)">
            {Icon.vol('#111', 16)}
          </IconBtn>
        </div>
      </div>

      <div style={{ padding: '16px 18px 12px', overflow: 'auto', scrollbarWidth: 'none' }}>
        <div style={{ display: 'flex', gap: 8, paddingBottom: 4 }}>
          {ACTIVE.list.map((e, i) => {
            const active = i === exIdx;
            const done = (e.sets || []).filter((s) => s.done).length;
            const tot = (e.sets || []).length || e.target;
            return (
              <button
                key={i}
                onClick={() => setExIdx(i)}
                style={{
                  minWidth: 112,
                  flexShrink: 0,
                  background: active ? '#111' : THEME.card,
                  border: 'none',
                  borderRadius: 18,
                  padding: '12px 14px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  color: active ? '#fff' : THEME.text,
                }}
              >
                <Mono size={9} color={active ? THEME.accent : THEME.textMuted}>
                  {i + 1} / {ACTIVE.list.length}
                </Mono>
                <div
                  style={{
                    fontFamily: THEME.display,
                    fontSize: 13,
                    fontWeight: 700,
                    color: active ? '#fff' : THEME.text,
                    marginTop: 2,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {e.name}
                </div>
                <Mono
                  size={9}
                  color={active ? 'rgba(255,255,255,0.55)' : THEME.textMuted}
                  style={{ marginTop: 2, display: 'block' }}
                >
                  {done}/{tot}
                </Mono>
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ padding: '0 18px', marginBottom: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Mono size={10} color={THEME.textMuted}>EXERCISE {String(exIdx + 1).padStart(2, '0')}</Mono>
          <div style={{ display: 'flex', gap: 8 }}>
            <IconBtn size={32} bg={THEME.card}>{Icon.swap(THEME.text, 14)}</IconBtn>
            <IconBtn size={32} bg={THEME.card}>{Icon.trend(THEME.text, 14)}</IconBtn>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 4, marginBottom: 2 }}>
          <h2 style={{ margin: 0, fontFamily: THEME.display, fontSize: 30, fontWeight: 800, color: THEME.text, letterSpacing: -1 }}>
            {ex.name}
          </h2>
          <button
            title="Watch tutorial"
            style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: THEME.accent,
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            {Icon.play('#111', 13)}
          </button>
        </div>
        <div style={{ color: THEME.textMuted, fontSize: 12 }}>{ex.type}</div>

        <div
          style={{
            marginTop: 12,
            padding: '12px 14px',
            borderRadius: 14,
            background: THEME.card,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Mono size={10} color={THEME.textMuted}>LAST · {ex.last.date}</Mono>
          <span style={{ fontFamily: THEME.mono, fontSize: 12, color: THEME.text, fontWeight: 600 }}>
            {ex.last.vals}
          </span>
        </div>
      </div>

      <div style={{ padding: '6px 18px 12px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '28px 1fr 1fr 40px 38px',
            gap: 10,
            padding: '6px 4px',
            alignItems: 'center',
          }}
        >
          <Mono size={9} color={THEME.textMuted}>SET</Mono>
          <Mono size={9} color={THEME.textMuted}>WEIGHT</Mono>
          <Mono size={9} color={THEME.textMuted}>REPS</Mono>
          <Mono size={9} color={THEME.textMuted}>RPE</Mono>
          <span />
        </div>
        {sets.map((s, i) => (
          <SetRow key={i} set={s} idx={i} onToggle={() => completeSet(i)} />
        ))}
        <button
          style={{
            width: '100%',
            marginTop: 8,
            padding: '12px',
            background: 'transparent',
            border: `1.5px dashed ${THEME.borderStrong}`,
            borderRadius: 14,
            color: THEME.textMuted,
            fontFamily: THEME.display,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 0.2,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
          }}
        >
          {Icon.plus('currentColor', 14)} Add Set
        </button>
      </div>

      <div style={{ padding: '0 18px 12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <Mono size={9} color={THEME.textMuted}>SESSION PROGRESS</Mono>
          <Mono size={9} color={THEME.text}>{completedCount} / {sets.length}</Mono>
        </div>
        <div style={{ height: 5, background: 'rgba(17,17,17,0.08)', borderRadius: 3, overflow: 'hidden' }}>
          <div style={{ width: pct + '%', height: '100%', background: THEME.accentDark, transition: 'width .3s' }} />
        </div>
      </div>

      {restSec > 0 && (
        <div
          style={{
            position: 'absolute',
            bottom: 16,
            left: 14,
            right: 14,
            zIndex: 30,
            background: '#111',
            borderRadius: 22,
            padding: '14px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            color: '#fff',
            boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
          }}
        >
          <div style={{ flex: 1 }}>
            <Mono size={9} color={THEME.accent}>REST TIMER</Mono>
            <div style={{ fontFamily: THEME.mono, fontSize: 24, fontWeight: 700, color: '#fff', letterSpacing: 1, marginTop: 2 }}>
              {String(Math.floor(restSec / 60)).padStart(2, '0')}:{String(restSec % 60).padStart(2, '0')}
            </div>
            <div style={{ marginTop: 6, height: 3, background: 'rgba(255,255,255,0.1)', borderRadius: 2 }}>
              <div
                style={{
                  width: (restSec / restTotal) * 100 + '%',
                  height: '100%',
                  background: THEME.accent,
                  borderRadius: 2,
                  transition: 'width 1s linear',
                }}
              />
            </div>
          </div>
          <button
            onClick={() => setPaused((p) => !p)}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {paused ? Icon.play('currentColor', 14) : Icon.pause('currentColor', 14)}
          </button>
          <button
            onClick={() => setRestSec(0)}
            style={{
              padding: '0 16px',
              height: 40,
              borderRadius: 20,
              background: THEME.accent,
              border: 'none',
              color: '#111',
              cursor: 'pointer',
              fontFamily: THEME.display,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 0.3,
            }}
          >
            Skip
          </button>
        </div>
      )}
    </div>
  );
}

function SetRow({ set, idx, onToggle }) {
  const isWarmup = set.warmup;
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '28px 1fr 1fr 40px 38px',
        gap: 10,
        padding: '10px 4px',
        alignItems: 'center',
        borderBottom: `1px solid ${THEME.border}`,
      }}
    >
      <div
        style={{
          width: 24,
          height: 24,
          borderRadius: 7,
          background: isWarmup ? '#F5E2B8' : '#F0EDE4',
          color: isWarmup ? '#A47316' : THEME.textMuted,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: THEME.mono,
          fontSize: 10,
          fontWeight: 700,
        }}
      >
        {isWarmup ? 'W' : idx}
      </div>
      <PillInput value={set.w} unit="LB" done={set.done} />
      <PillInput value={set.r} unit="" done={set.done} />
      <div
        style={{
          fontFamily: THEME.mono,
          fontSize: 11,
          color: set.done ? THEME.text : THEME.textMuted,
          textAlign: 'center',
          fontWeight: 600,
        }}
      >
        {set.rpe ? (set.rpe.match(/^\d/) ? '@' + set.rpe : set.rpe) : '—'}
      </div>
      <button
        onClick={onToggle}
        style={{
          width: 36,
          height: 36,
          borderRadius: 10,
          background: set.done ? THEME.accent : THEME.card,
          border: 'none',
          color: set.done ? '#111' : THEME.textDim,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        {Icon.check('currentColor', 16)}
      </button>
    </div>
  );
}

function PillInput({ value, unit, done }) {
  return (
    <div
      style={{
        height: 36,
        borderRadius: 10,
        background: done ? '#F0EDE4' : THEME.card,
        padding: '0 12px',
        display: 'flex',
        alignItems: 'center',
        gap: 4,
      }}
    >
      <span
        style={{
          fontFamily: THEME.display,
          fontSize: 15,
          fontWeight: 700,
          color: done ? THEME.text : THEME.textMuted,
        }}
      >
        {value}
      </span>
      {unit && <Mono size={9} color={THEME.textDim}>{unit}</Mono>}
    </div>
  );
}
