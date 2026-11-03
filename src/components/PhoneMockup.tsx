/**
 * Mockup del teléfono con una captura real de la app.
 * El contorno, el notch y las órbitas son del landing; el contenido es la
 * pantalla de inicio de PaseAR tal como se ve en el dispositivo.
 */
export function PhoneMockup() {
  return (
    <div className="phone-wrap">
      <div className="phone-orbit phone-orbit--one" aria-hidden="true" />
      <div className="phone-orbit phone-orbit--two" aria-hidden="true" />

      <div
        className="phone"
        role="img"
        aria-label="Captura de la pantalla de inicio de PaseAR con lugares históricos y populares de Pilar"
      >
        <span className="phone__notch" aria-hidden="true" />
        <div className="phone__screen">
          <img
            className="phone__captura"
            src="/app-captura.webp"
            alt=""
            width={540}
            height={1176}
            fetchPriority="high"
          />
        </div>
      </div>
    </div>
  );
}
