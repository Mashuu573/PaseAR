import { stats } from '../data/site';

export function Stats() {
  return (
    <section className="stats" aria-label="PaseAR en números">
      <div className="container">
        <div className="stats__card" data-reveal>
          {stats.map((stat) => (
            <div className="stat" key={stat.etiqueta}>
              <strong>{stat.valor}</strong>
              <span>{stat.etiqueta}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
