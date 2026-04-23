import { THEME } from '../theme.js';
import { Icon } from '../icons.jsx';

export function BottomNav({ active, onNav }) {
  const tabs = [
    { id: 'today', label: 'Today', icon: Icon.home },
    { id: 'train', label: 'Train', icon: Icon.train },
    { id: 'stats', label: 'Stats', icon: Icon.chart },
    { id: 'library', label: 'Library', icon: Icon.book },
    { id: 'you', label: 'You', icon: Icon.user },
  ];
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        paddingBottom: 24,
        paddingTop: 10,
        background:
          'linear-gradient(180deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.95) 40%, #0a0a0a 100%)',
        display: 'flex',
        justifyContent: 'space-around',
      }}
    >
      {tabs.map((t) => {
        const isActive = active === t.id;
        return (
          <button
            key={t.id}
            onClick={() => onNav(t.id)}
            style={{
              background: 'none',
              border: 'none',
              padding: '6px 4px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
              color: isActive ? THEME.accent : THEME.textDim,
              cursor: 'pointer',
            }}
          >
            {t.icon('currentColor', 22)}
            <span
              style={{
                fontFamily: THEME.mono,
                fontSize: 9,
                letterSpacing: 1.2,
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              {t.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
