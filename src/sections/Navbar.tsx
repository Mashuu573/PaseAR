import { useEffect, useState } from 'react';
import { Logo } from '../components/Logo';
import { Close, Download, Menu } from '../components/Icons';

const links = [
  { href: '#destinos', label: 'Destinos' },
  { href: '#funciones', label: 'Funciones' },
  { href: '#comunidad', label: 'Comunidad' },
  { href: '#como-funciona', label: 'Cómo funciona' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const anterior = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = anterior;
    };
  }, [open]);

  useEffect(() => {
    const escritorio = window.matchMedia('(min-width: 901px)');
    const alCambiar = (evento: MediaQueryListEvent) => {
      if (evento.matches) setOpen(false);
    };
    escritorio.addEventListener('change', alCambiar);
    return () => escritorio.removeEventListener('change', alCambiar);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`.trim()}>
      <div className="container nav__inner">
        <Logo onClick={close} />

        <nav className="nav__links" aria-label="Navegación principal">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a className="btn btn--nav" href="#descargar">
            <Download size={15} />
            Descargar
          </a>
          <button
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="nav-mobile"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <Close size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {open && (
        <>
          <div className="nav__scrim" onClick={close} aria-hidden="true" />
          <nav className="nav__mobile" id="nav-mobile" aria-label="Navegación móvil">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={close}>
                {link.label}
              </a>
            ))}
            <a className="btn btn--nav" href="#descargar" onClick={close}>
              <Download size={16} />
              Descargar PaseAR
            </a>
          </nav>
        </>
      )}
    </header>
  );
}
