import { ArrowUpRight, Instagram, MapPin } from '../components/Icons';
import { redes } from '../data/social';
import { revealDelay } from '../utils/reveal';

const fotos = [
  {
    src: '/lugares/capilla.jpg',
    alt: 'Capilla del Milagro de Nuestra Señora de Luján, en Zelaya',
    tag: 'Zelaya',
  },
  {
    src: '/lugares/reserva.jpg',
    alt: 'Reserva Natural Municipal del Pilar',
    tag: 'Naturaleza',
  },
  {
    src: '/lugares/plaza.jpg',
    alt: 'Plaza 12 de Octubre de noche',
    tag: 'De noche',
  },
];

export function Redes() {
  const instagram = redes[0];

  return (
    <section className="section social" id="comunidad">
      <div className="container social__inner">
        <div className="social__copy" data-reveal>
          <p className="eyebrow">
            <Instagram size={14} />
            Comunidad
          </p>
          <h2>
            Seguinos.
            <br />
            <span>Argentina se comparte.</span>
          </h2>
          <p>
            Lugares nuevos, planes de fin de semana y fotos de Argentina que no siempre
            entran en la app. La conversación sigue en redes.
          </p>

          <div className="social__links">
            {redes.map((red) => {
              const Icono = red.icono;
              return (
                <a
                  className="social-link"
                  key={red.id}
                  href={red.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="social-link__icon">
                    <Icono size={18} />
                  </span>
                  <span className="social-link__name">
                    <strong>{red.nombre}</strong>
                    <small>{red.usuario}</small>
                  </span>
                  <ArrowUpRight size={16} />
                </a>
              );
            })}
          </div>

          <p className="social__tag">
            Etiquetá a <strong>{instagram.usuario}</strong> y mostranos tu paseo.
          </p>
        </div>

        <div className="social__gallery" data-reveal style={revealDelay(100)}>
          <div className="social__grid">
            {fotos.map((foto) => (
              <a
                className="social-tile"
                key={foto.src}
                href={instagram.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Ver ${foto.alt} en Instagram`}
              >
                <img
                  src={foto.src}
                  alt={foto.alt}
                  loading="lazy"
                  decoding="async"
                />
                <span className="social-tile__tag">
                  <MapPin size={11} />
                  {foto.tag}
                </span>
              </a>
            ))}

            <a
              className="social-tile social-tile--brand"
              href={instagram.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Seguir a PaseAR en Instagram"
            >
              <ArrowUpRight className="social-tile__arrow" size={16} />
              <img src="/pasear-logo.png" alt="" width={84} height={84} loading="lazy" />
              <span>
                Seguinos en Instagram
                <strong>{instagram.usuario}</strong>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
