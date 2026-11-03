import type { ComponentType } from 'react';
import { ArrowRight, CloudSun, Globe, Map, Sparkles, type IconProps } from '../components/Icons';
import { revealDelay } from '../utils/reveal';

type Feature = {
  icono: ComponentType<IconProps>;
  titulo: string;
  texto: string;
  tag: string;
};

const features: Feature[] = [
  {
    icono: Map,
    titulo: 'Mapa y rutas',
    texto:
      'Ubicá cada lugar y llegá como más te guste: caminando, en bici o en auto.',
    tag: 'Rutas y distancias',
  },
  {
    icono: Sparkles,
    titulo: 'Guía virtual con IA',
    texto:
      'Preguntale qué hacer hoy y recibí recomendaciones de alguien que conoce Pilar.',
    tag: 'Disponible 24/7',
  },
  {
    icono: CloudSun,
    titulo: 'Clima y planes',
    texto: 'Consultá el pronóstico y descubrí qué planes van mejor con cada día.',
    tag: 'Sol, lluvia o nublado',
  },
  {
    icono: Globe,
    titulo: 'En tu idioma',
    texto: 'Español e inglés, para que recorrer Pilar no tenga barreras.',
    tag: 'ES / EN',
  },
];

export function Features() {
  return (
    <section className="section features" id="funciones">
      <div className="container features__grid">
        <div className="features__intro" data-reveal>
          <p className="eyebrow">
            <Sparkles size={14} />
            Pensada para pasear
          </p>
          <h2>
            Todo lo que necesitás,
            <br />
            en un solo lugar.
          </h2>
          <p>
            No es un listado de lugares: es la app que te acompaña desde que tenés ganas
            de salir hasta que volvés a casa.
          </p>
          <a className="text-link" href="#como-funciona">
            Ver cómo funciona
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="features__cards">
          {features.map((feature, index) => {
            const Icono = feature.icono;
            return (
              <article
                className="feature"
                key={feature.titulo}
                data-reveal
                style={revealDelay(index * 70)}
              >
                <span className="feature__icon">
                  <Icono size={22} />
                </span>
                <h3>{feature.titulo}</h3>
                <p>{feature.texto}</p>
                <span className="feature__tag">{feature.tag}</span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
