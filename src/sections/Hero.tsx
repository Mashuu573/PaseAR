import { Apple, ArrowRight, Check, Download, MapPin, Sun } from '../components/Icons';
import { PhoneMockup } from '../components/PhoneMockup';

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__sun" />
        <svg
          className="hero__route"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <path
            d="M-60 700C180 630 220 420 490 405c235-13 260 185 500 125 205-51 275-235 520-275"
            stroke="rgba(255,255,255,.18)"
            strokeWidth="2"
            strokeDasharray="7 11"
            strokeLinecap="round"
          />
          <circle cx="490" cy="405" r="6" fill="#ffc83d" opacity=".85" />
          <circle cx="987" cy="530" r="4.5" fill="#bfe9ff" opacity=".7" />
          <circle cx="1284" cy="307" r="5" fill="#ffc83d" opacity=".55" />
        </svg>
      </div>

      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow eyebrow--glass">
            <Sun size={14} />
            Turismo en Argentina
          </p>

          <h1>
            Paseá 
            <br />
            <span className="hero__line">
              a tu ritmo.
              <svg
                className="hero__underline"
                viewBox="0 0 320 18"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M4 12.5C84 4.5 196 4 316 9.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="hero__lead">
            Historia, naturaleza y sabores en una sola app. Mapa, guía con IA y clima en
            vivo para armar tu paseo ideal, sin vueltas.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#descargar">
              <Download size={18} />
              Descargar PaseAR
            </a>
            <a className="btn btn--ghost" href="#destinos">
              Explorar lugares
              <ArrowRight size={18} />
            </a>
          </div>

          <ul className="hero__meta">
            <li>
              <Check size={14} />
              Gratis
            </li>
            <li>
              <Apple size={13} />
              iOS y Android
            </li>
            <li>
              <MapPin size={14} />
              Hecha en Pilar
            </li>
          </ul>
        </div>

        <div className="hero__visual">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
