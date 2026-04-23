import { useEffect, useState } from 'react';
import { THEME } from '../theme.js';
import { StatusBar } from './StatusBar.jsx';
import { BottomNav } from './BottomNav.jsx';

// Returns true when the viewport is small enough to render full-screen (no phone frame).
function useIsMobileViewport() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth <= 500 : false
  );
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 500);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return isMobile;
}

// Desktop: scale the 390x844 phone shell to fit the viewport.
function useDesktopScale(enabled) {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    if (!enabled) {
      setScale(1);
      return;
    }
    const onResize = () => {
      const s = Math.min(window.innerWidth / 450, window.innerHeight / 920, 1);
      setScale(s);
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [enabled]);
  return scale;
}

export function Phone({ children, showNav = true, active, onNav }) {
  const isMobile = useIsMobileViewport();
  const scale = useDesktopScale(!isMobile);

  // Full-screen mode for phones / PWA
  if (isMobile) {
    return (
      <div
        style={{
          minHeight: '100vh',
          width: '100%',
          background: THEME.bg,
          color: THEME.text,
          fontFamily: THEME.display,
          position: 'relative',
        }}
      >
        <div
          style={{
            minHeight: '100vh',
            paddingTop: 'max(12px, env(safe-area-inset-top))',
            paddingBottom: showNav
              ? 'calc(78px + env(safe-area-inset-bottom))'
              : 'env(safe-area-inset-bottom)',
            overflow: 'auto',
            scrollbarWidth: 'none',
          }}
        >
          {children}
        </div>
        {showNav && (
          <div
            style={{
              position: 'fixed',
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 40,
              paddingBottom: 'max(16px, env(safe-area-inset-bottom))',
            }}
          >
            <BottomNavWrapper active={active} onNav={onNav} />
          </div>
        )}
      </div>
    );
  }

  // Desktop: render inside a phone bezel
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'radial-gradient(ellipse at 50% 30%, #0d0d0d 0%, #050505 60%)',
        padding: 20,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <WordMark />
      <div style={{ transform: `scale(${scale})`, transformOrigin: 'center center' }}>
        <div
          style={{
            width: 390,
            height: 844,
            borderRadius: 48,
            overflow: 'hidden',
            position: 'relative',
            background: THEME.bg,
            boxShadow:
              '0 40px 100px rgba(216,255,61,0.06), 0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px #1a1a1a',
            fontFamily: THEME.display,
          }}
        >
          {/* dynamic island */}
          <div
            style={{
              position: 'absolute',
              top: 11,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 118,
              height: 34,
              borderRadius: 20,
              background: '#000',
              zIndex: 50,
            }}
          />
          <StatusBar />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              paddingTop: 54,
              paddingBottom: showNav ? 78 : 0,
              overflow: 'auto',
              scrollbarWidth: 'none',
            }}
          >
            {children}
          </div>
          {showNav && <BottomNav active={active} onNav={onNav} />}
        </div>
      </div>
    </div>
  );
}

// Mobile nav — uses static position instead of absolute, but same visual
function BottomNavWrapper({ active, onNav }) {
  return <BottomNav active={active} onNav={onNav} />;
}

function WordMark() {
  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 24,
          left: 28,
          display: 'flex',
          alignItems: 'baseline',
          gap: 2,
          fontFamily: "'Inter Tight', sans-serif",
          letterSpacing: -0.5,
        }}
      >
        <span style={{ fontSize: 20, fontWeight: 800, color: '#fff' }}>FORGE</span>
        <span style={{ fontSize: 20, fontWeight: 800, color: THEME.accent }}>.</span>
      </div>
      <div
        style={{
          position: 'fixed',
          top: 28,
          left: 130,
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 10,
          letterSpacing: 1.4,
          textTransform: 'uppercase',
          color: '#5a5a5a',
        }}
      >
        STRENGTH TRACKER
      </div>
    </>
  );
}
