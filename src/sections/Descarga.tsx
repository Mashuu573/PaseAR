import { Android, Download, MapPin, Sparkles } from '../components/Icons';

/**
 * Pegá acá el link directo al APK.
 * Ejemplo: 'https://tudominio.com/descargas/pasear.apk'
 */
const APK_URL = '';

export function Descarga() {
  return (
    <section className="section download" id="descargar">
      <div className="container">
        <div className="download__card" data-reveal>
          <div className="download__copy">
            <p className="eyebrow eyebrow--light">
              <Android size={14} />
              Para Android
            </p>
            <h2>
              Llevá PaseAR
              <br />
              en el bolsillo.
            </h2>
            <p>
              Descargá el APK y empezá a recorrer Pilar desde tu teléfono. Sin tiendas ni
              vueltas.
            </p>

            <div className="apk">
              {APK_URL ? (
                <a
                  className="apk__button"
                  href={APK_URL}
                  download="pasear.apk"
                  aria-label="Descargar PaseAR para Android en formato APK"
                >
                  <span className="apk__icon">
                    <Android size={24} />
                  </span>
                  <span className="apk__text">
                    <small>Descarga directa</small>
                    <strong>Descargar APK</strong>
                  </span>
                  <Download size={20} />
                </a>
              ) : (
                <div className="apk__button is-pending" aria-disabled="true">
                  <span className="apk__icon">
                    <Android size={24} />
                  </span>
                  <span className="apk__text">
                    <small>Muy pronto</small>
                    <strong>Descargar APK</strong>
                  </span>
                  <Download size={20} />
                </div>
              )}
              <p className="apk__note">Android · Instalación manual</p>
            </div>
          </div>

          <div className="download__visual" aria-hidden="true">
            <span className="download__sun" />
            <span className="download__ring" />
            <img
              className="download__logo"
              src="/pasear-logo.png"
              alt=""
              width={320}
              height={320}
            />
            <span className="download__chip download__chip--a">
              <MapPin size={14} />
              18 lugares
            </span>
            <span className="download__chip download__chip--b">
              <Sparkles size={14} />
              Guía con IA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
