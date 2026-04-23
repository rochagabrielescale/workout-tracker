import { THEME } from '../theme.js';
import { Mono } from './Mono.jsx';

export function PageHeader({ label, title, right }) {
  return (
    <div style={{ padding: '12px 20px 16px' }}>
      {label && (
        <div style={{ marginBottom: 6 }}>
          <Mono size={10} color={THEME.textMuted}>
            {label}
          </Mono>
        </div>
      )}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <h1
          style={{
            margin: 0,
            fontFamily: THEME.display,
            fontSize: 36,
            fontWeight: 700,
            color: THEME.text,
            letterSpacing: -1.2,
            lineHeight: 1,
          }}
        >
          {title}
        </h1>
        {right}
      </div>
    </div>
  );
}
