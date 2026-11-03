import { useEffect } from 'react';
import './App.css';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { Stats } from './sections/Stats';
import { Destinos } from './sections/Destinos';
import { Features } from './sections/Features';
import { Pasos } from './sections/Pasos';
import { Redes } from './sections/Redes';
import { Descarga } from './sections/Descarga';
import { Footer } from './sections/Footer';

/** Revela los bloques a medida que entran en pantalla. */
function useRevealOnScroll() {
  useEffect(() => {
    const nodos = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

    if (!('IntersectionObserver' in window)) {
      nodos.forEach((nodo) => nodo.classList.add('is-visible'));
      return;
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (!entrada.isIntersecting) return;
          entrada.target.classList.add('is-visible');
          observador.unobserve(entrada.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    nodos.forEach((nodo) => observador.observe(nodo));
    return () => observador.disconnect();
  }, []);
}

function App() {
  useRevealOnScroll();

  // Permite entrar directo a una sección con #destinos, #comunidad, etc.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const destino = document.getElementById(id);
    if (!destino) return;
    requestAnimationFrame(() => destino.scrollIntoView({ block: 'start' }));
  }, []);

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <Navbar />

      <main id="contenido" tabIndex={-1}>
        <Hero />
        <Stats />
        <Destinos />
        <Features />
        <Pasos />
        <Redes />
        <Descarga />
      </main>

      <Footer />
    </>
  );
}

export default App;
