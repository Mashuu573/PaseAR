import { ArrowUp, Mail, MapPin } from '../components/Icons';
import { Logo } from '../components/Logo';
import { redes } from '../data/social';
import { lugares } from '../data/site';

const enlacesApp = [
  { href: '#destinos', label: 'Destinos' },
  { href: '#funciones', label: 'Funciones' },
  { href: '#comunidad', label: 'Comunidad' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#descargar', label: 'Descargar' },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo />
            <p>
              Tu guía para descubrir Buenos Aires. Historia, naturaleza y sabores
              en un solo paseo.
            </p>
            <a className="footer__mail" href="mailto:pasear.02@gmail.com">
              <Mail size={15} />
              pasear.02@gmail.com
            </a>

            <nav className="footer__social" aria-label="Redes sociales de PaseAR">
              {redes.map((red) => {
                const Icono = red.icono;
                return (
                  <a
                    key={red.id}
                    href={red.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${red.nombre} de PaseAR`}
                  >
                    <Icono size={16} />
                  </a>
                );
              })}
            </nav>
          </div>

          <nav className="footer__nav" aria-label="Enlaces del pie">
            <div>
              <h3>La app</h3>
              {enlacesApp.map((enlace) => (
                <a key={enlace.href} href={enlace.href}>
                  {enlace.label}
                </a>
              ))}
            </div>
            <div>
              <h3>En Pilar</h3>
              {lugares.map((lugar) => (
                <a key={lugar.id} href={`#lugar-${lugar.id}`}>
                  {lugar.corto}
                </a>
              ))}
            </div>
            <div>
              <h3>Contacto</h3>
              <a href="mailto:pasear.02@gmail.com">Escribinos</a>
              <span className="footer__place">
                <MapPin size={13} />
                Pilar, Buenos Aires
              </span>
            </div>
          </nav>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} PaseAR. Hecho con sol en Pilar.</span>
          <a href="#inicio">
            Volver arriba
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
