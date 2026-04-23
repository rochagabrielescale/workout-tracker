import { useEffect, useState } from 'react';
import { THEME } from '../theme.js';
import { Icon } from '../icons.jsx';
import { Mono } from '../components/Mono.jsx';
import { ACTIVE, TODAY_WORKOUT } from '../data.js';

export function ActiveWorkout({ onExit }) {
  const [exIdx, setExIdx] = useState(0);
  const [sets, setSets] = useState(ACTIVE.list[0].sets);
  const [restSec, setRestSec] = useState(0);
  const [restTotal] = useState(120);
  const [paused, setPaused] = useState(false);
  const ex = ACTIVE.list[exIdx];

  useEffect(() => {
    setSets(ACTIVE.list[exIdx].sets || []);
  }, [exIdx]);

  useEffect(() => {
    if (restSec <= 0 || paused) return;
    const t = setTimeout(() => setRestSec((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [restSec, paused]);

  const completeSet = (i) => {
    const wasDone = sets[i].done;
    setSets((prev) => prev.map((s, j) => (j === i ? { ...s, done: !s.done } : s)));
    if (!wasDone) {
      setRestSec(restTotal);
      setPaused(false);
    }
  };

  const completedCount = sets.filter((s) => s.done).length;
  const pct = sets.length ? (completedCount / sets.length) * 100 : 0;

  return (
    <div style={{ position: 'relative', minHeight: '100%' }}>
      {/* Top bar */}
      <div
        style={{
          padding: '8px 20px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <button
          onClick={onExit}
          style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            background: THEME.cardElev,
            border: `1px solid ${THEME.border}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: THEME.textMuted,
            cursor: 'pointer',
          }}
        >
          {Icon.close('currentColor', 16)}
        </button>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: '#ff4d4d',
                animation: 'fpulse 1.4s ease-in-out infinite',
              }}
            />
            <Mono size={9} color={THEME.textMuted}>
              LIVE · {TODAY_WORKOUT.name.toUpperCase()}
            </Mono>
          </div>
          <div
            style={{
              fontFamily: THEME.mono,
              fontSize: 22,
              fontWeight: 600,
              color: THEME.text,
              letterSpacing: 1,
              marginTop: 2,
            }}
          >
            {ACTIVE.elapsed}
          </div>
        </div>
        <button
          style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            background: THEME.cardElev,
            border: `1px solid ${THEME.border}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: THEME.textMuted,
            cursor: 'pointer',
          }}
        >
          {Icon.vol('currentColor', 16)}
        </button>
      </div>

      {/* Exercise pill tabs */}
      <div
        style={{ padding: '0 20px', marginBottom: 16, overflow: 'auto', scrollbarWidth: 'none' }}
      >
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
                  minWidth: 108,
                  flexShrink: 0,
                  background: active ? 'transparent' : THEME.card,
                  border: active
                    ? `1.5px solid ${THEME.accent}`
                    : `1px solid ${THEME.border}`,
                  borderRadius: 14,
                  padding: '10px 12px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  color: THEME.text,
                }}
              >
                <Mono size={9} color={active ? THEME.accent : THEME.textMuted}>
                  {i + 1} / {ACTIVE.list.length}
                </Mono>
                <div
                  style={{
                    fontFamily: THEME.display,
                    fontSize: 13,
                    fontWeight: 600,
                    color: THEME.text,
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
                  color={active ? THEME.accent : THEME.textMuted}
                  style={{ marginTop: 2, display: 'block' }}
                >
                  {done}/{tot}
                </Mono>
              </button>
            );
          })}
        </div>
      </div>

      {/* Current exercise */}
      <div style={{ padding: '0 20px', marginBottom: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Mono size={10} color={THEME.textMuted}>
            EXERCISE {String(exIdx + 1).padStart(2, '0')}
          </Mono>
          <div style={{ display: 'flex', gap: 8 }}>
            <button
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: THEME.cardElev,
                border: `1px solid ${THEME.border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: THEME.textMuted,
                cursor: 'pointer',
              }}
            >
              {Icon.swap('currentColor', 14)}
            </button>
            <button
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: THEME.cardElev,
                border: `1px solid ${THEME.border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: THEME.textMuted,
                cursor: 'pointer',
              }}
            >
              {Icon.trend('currentColor', 14)}
            </button>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginTop: 4,
            marginBottom: 2,
          }}
        >
          <h2
            style={{
              margin: 0,
              fontFamily: THEME.display,
              fontSize: 28,
              fontWeight: 700,
              color: THEME.text,
              letterSpacing: -0.8,
            }}
          >
            {ex.name}
          </h2>
          <button
            title="Watch tutorial"
            style={{
              width: 30,
              height: 30,
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
            {Icon.play('#000', 13)}
          </button>
        </div>
        <div style={{ color: THEME.textMuted, fontSize: 12 }}>{ex.type}</div>

        {/* Last time reference */}
        <div
          style={{
            marginTop: 14,
            padding: '10px 14px',
            borderRadius: 10,
            background: THEME.cardElev,
            border: `1px solid ${THEME.border}`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Mono size={10} color={THEME.textMuted}>
            LAST · {ex.last.date}
          </Mono>
          <span
            style={{
              fontFamily: THEME.mono,
              fontSize: 12,
              color: THEME.text,
              fontWeight: 500,
            }}
          >
            {ex.last.vals}
          </span>
        </div>
      </div>

      {/* Set table */}
      <div style={{ padding: '6px 20px 12px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '28px 1fr 1fr 40px 38px',
            gap: 10,
            padding: '6px 4px',
            alignItems: 'center',
          }}
        >
          <Mono size={9} color={THEME.textMuted}>
            SET
          </Mono>
          <Mono size={9} color={THEME.textMuted}>
            WEIGHT
          </Mono>
          <Mono size={9} color={THEME.textMuted}>
            REPS
          </Mono>
          <Mono size={9} color={THEME.textMuted}>
            RPE
          </Mono>
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
            border: `1px dashed ${THEME.borderStrong}`,
            borderRadius: 12,
            color: THEME.textMuted,
            fontFamily: THEME.mono,
            fontSize: 11,
            letterSpacing: 1.2,
            textTransform: 'uppercase',
            fontWeight: 600,
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

      {/* Session progress */}
      <div style={{ padding: '0 20px 12px' }}>
        <div
          style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}
        >
          <Mono size={9} color={THEME.textMuted}>
            SESSION PROGRESS
          </Mono>
          <Mono size={9} color={THEME.text}>
            {completedCount} / {sets.length}
          </Mono>
        </div>
        <div
          style={{
            height: 4,
            background: THEME.cardElev,
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: pct + '%',
              height: '100%',
              background: THEME.accent,
              transition: 'width .3s',
            }}
          />
        </div>
      </div>

      {/* Rest timer overlay */}
      {restSec > 0 && (
        <div
          style={{
            position: 'fixed',
            bottom: 'max(16px, env(safe-area-inset-bottom))',
            left: 16,
            right: 16,
            zIndex: 30,
            background: THEME.card,
            border: `1px solid ${THEME.accent}`,
            borderRadius: 18,
            padding: '14px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            boxShadow: '0 10px 30px rgba(216,255,61,0.12)',
            maxWidth: 420,
            margin: '0 auto',
          }}
        >
          <div style={{ flex: 1 }}>
            <Mono size={9} color={THEME.accent}>
              REST TIMER
            </Mono>
            <div
              style={{
                fontFamily: THEME.mono,
                fontSize: 24,
                fontWeight: 600,
                color: THEME.text,
                letterSpacing: 1,
                marginTop: 2,
              }}
            >
              {String(Math.floor(restSec / 60)).padStart(2, '0')}:
              {String(restSec % 60).padStart(2, '0')}
            </div>
            <div
              style={{
                marginTop: 6,
                height: 3,
                background: THEME.cardElev,
                borderRadius: 2,
              }}
            >
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
              background: THEME.cardElev,
              border: `1px solid ${THEME.border}`,
              color: THEME.text,
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
              padding: '0 14px',
              height: 40,
              borderRadius: 20,
              background: THEME.accent,
              border: 'none',
              color: '#000',
              cursor: 'pointer',
              fontFamily: THEME.mono,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: 'uppercase',
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
        opacity: set.done ? 1 : 0.95,
      }}
    >
      <div
        style={{
          width: 22,
          height: 22,
          borderRadius: 6,
          background: isWarmup ? '#3a2e14' : THEME.cardElev,
          border: `1px solid ${isWarmup ? '#5a4820' : THEME.border}`,
          color: isWarmup ? '#ffb84d' : THEME.textMuted,
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
          fontWeight: 500,
        }}
      >
        {set.rpe ? (set.rpe.match(/^\d/) ? '@' + set.rpe : set.rpe) : '—'}
      </div>
      <button
        onClick={onToggle}
        style={{
          width: 34,
          height: 34,
          borderRadius: 8,
          background: set.done ? '#2a351a' : THEME.cardElev,
          border: `1px solid ${set.done ? '#4dff9f' : THEME.border}`,
          color: set.done ? THEME.success : THEME.textDim,
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
        height: 34,
        borderRadius: 8,
        background: THEME.cardElev,
        border: `1px solid ${THEME.border}`,
        padding: '0 10px',
        display: 'flex',
        alignItems: 'center',
        gap: 4,
      }}
    >
      <span
        style={{
          fontFamily: THEME.display,
          fontSize: 15,
          fontWeight: 600,
          color: done ? THEME.text : THEME.textMuted,
        }}
      >
        {value}
      </span>
      {unit && (
        <Mono size={9} color={THEME.textDim}>
          {unit}
        </Mono>
      )}
    </div>
  );
}
