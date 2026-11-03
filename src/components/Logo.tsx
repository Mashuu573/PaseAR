type LogoProps = {
  className?: string;
  onClick?: () => void;
};

/**
 * Marca de PaseAR: el ícono original de la app + wordmark.
 * Los colores se heredan del contenedor mediante --brand-ink / --brand-accent.
 */
export function Logo({ className = '', onClick }: LogoProps) {
  return (
    <a
      href="#inicio"
      className={`brand ${className}`.trim()}
      aria-label="PaseAR, volver al inicio"
      onClick={onClick}
    >
      <span className="brand__icon">
        <img src="/pasear-logo.png" alt="" width={44} height={44} />
      </span>
      <span className="brand__word">
        Pase<span>AR</span>
      </span>
    </a>
  );
}
