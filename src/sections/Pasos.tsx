import { ArrowRight, Sun } from '../components/Icons';
import { pasos } from '../data/site';
import { revealDelay } from '../utils/reveal';

export function Pasos() {
  return (
    <section className="section steps" id="como-funciona">
      <div className="container">
        <header className="section__head section__head--center" data-reveal>
          <p className="eyebrow eyebrow--light">
            <Sun size={14} />
            Así de simple
          </p>
          <h2>
            De la idea al paseo
            <br />
            en tres pasos.
          </h2>
          <p className="steps__lead">
            Sin planillas ni vueltas: abrís la app, elegís y salís a disfrutar.
          </p>
        </header>

        <ol className="steps__list">
          {pasos.map((paso, index) => (
            <li
              className="step"
              key={paso.titulo}
              data-reveal
              style={revealDelay(index * 90)}
            >
              <span className="step__num" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{paso.titulo}</h3>
              <p>{paso.texto}</p>
            </li>
          ))}
        </ol>

        <div className="steps__cta" data-reveal>
          <a className="btn btn--sun" href="#descargar">
            Quiero probarla
            <ArrowRight size={18} />
          </a>
          <span>Gratis, sin vueltas.</span>
        </div>
      </div>
    </section>
  );
}
