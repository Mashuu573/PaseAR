import { ArrowRight, ArrowUpRight, MapPin } from '../components/Icons';
import { lugares } from '../data/site';
import { revealDelay } from '../utils/reveal';

export function Destinos() {
  return (
    <section className="section destinos" id="destinos">
      <div className="container">
        <header className="section__head" data-reveal>
          <div>
            <p className="eyebrow">
              <MapPin size={14} />
              Para empezar a recorrer
            </p>
            <h2>
              Argentina tiene
              <br />
              mucho para mostrar.
            </h2>
          </div>
          <div className="section__head-side">
            <p>
              Cuatro paradas para arrancar. En la app vas a encontrar 18 lugares con su
              historia, su dirección y cómo llegar.
            </p>
            <a className="text-link" href="#descargar">
              Ver todos en la app
              <ArrowRight size={16} />
            </a>
          </div>
        </header>

        <div className="places">
          {lugares.map((lugar, index) => (
            <article
              className="place"
              id={`lugar-${lugar.id}`}
              key={lugar.id}
              data-reveal
              style={revealDelay(index * 80)}
            >
              <img
                src={lugar.imagen}
                alt={lugar.alt}
                loading="lazy"
                decoding="async"
                style={lugar.posicion ? { objectPosition: lugar.posicion } : undefined}
              />
              <span className="place__cat">{lugar.categoria}</span>
              <span className="place__num" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="place__body">
                <h3>{lugar.nombre}</h3>
                <p>{lugar.descripcion}</p>
                <a
                  className="place__cta"
                  href="#descargar"
                  aria-label={`Ver ${lugar.nombre} en la app`}
                >
                  Ver en la app
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
