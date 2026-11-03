import type { CSSProperties } from 'react';

/** Retraso escalonado para las animaciones de entrada. */
export function revealDelay(ms: number): CSSProperties {
  return { '--reveal-delay': `${ms}ms` } as CSSProperties;
}
