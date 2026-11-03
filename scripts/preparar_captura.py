"""Prepara la captura de PaseAR que se muestra dentro del mockup.

- Recorta la barra de navegación de Android del pie.
- Completa la foto de la Capilla del Milagro, que en la captura original
  había quedado con el placeholder gris.

Uso:
    python scripts/preparar_captura.py <ruta-a-la-captura.png>
"""

from pathlib import Path
import sys

from PIL import Image, ImageDraw, ImageOps

RAIZ = Path(__file__).resolve().parent.parent
ORIGEN_CAPILLA = (
    RAIZ.parents[1]
    / "pilar-turismo"
    / "assets"
    / "images"
    / "lugaresIniciales"
    / "capilla.jpeg"
)
SALIDA = RAIZ / "public" / "app-captura.webp"

# Coordenadas sobre la captura original (702 x 1600).
ALTO_UTIL = 1530
CAJA_FOTO = (49, 342, 341, 732)
RADIO_FOTO = 16


def main() -> None:
    if len(sys.argv) < 2:
        raise SystemExit("Uso: python scripts/preparar_captura.py <captura.png>")

    captura = Image.open(sys.argv[1]).convert("RGB")

    if captura.width != 702:
        raise SystemExit("La captura de referencia debe medir 702 px de ancho.")

    if ORIGEN_CAPILLA.exists():
        foto = Image.open(ORIGEN_CAPILLA).convert("RGB")
        x1, y1, x2, y2 = CAJA_FOTO
        ancho, alto = x2 - x1, y2 - y1
        foto = ImageOps.fit(
            foto,
            (ancho, alto),
            method=Image.Resampling.LANCZOS,
            centering=(0.58, 0.55),
        )
        mascara = Image.new("L", (ancho, alto), 0)
        ImageDraw.Draw(mascara).rounded_rectangle(
            (0, 0, ancho - 1, alto - 1), radius=RADIO_FOTO, fill=255
        )
        captura.paste(foto, (x1, y1), mascara)

    # La barra de navegación de Android no forma parte de la app.
    app = captura.crop((0, 0, captura.width, ALTO_UTIL))
    app = app.resize((540, 1176), Image.Resampling.LANCZOS)
    SALIDA.parent.mkdir(parents=True, exist_ok=True)
    app.save(SALIDA, "WEBP", quality=90, method=6)
    print(f"{SALIDA}: {SALIDA.stat().st_size // 1024} KB")


if __name__ == "__main__":
    main()
