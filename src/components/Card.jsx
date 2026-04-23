import { THEME } from '../theme.js';

export function Card({ children, style = {}, onClick, hi = false }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: hi ? THEME.cardHi : THEME.card,
        borderRadius: 22,
        border: `1px solid ${THEME.border}`,
        padding: 20,
        cursor: onClick ? 'pointer' : 'default',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
