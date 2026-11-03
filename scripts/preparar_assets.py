"""Prepara los assets del landing a partir de la app PaseAR / Pilar Turismo.

- Recorta el logo y le deja las esquinas transparentes.
- Genera favicon y apple-touch-icon.
- Optimiza las fotos de los lugares para la web.
"""

from pathlib import Path

from PIL import Image, ImageDraw

RAIZ = Path(__file__).resolve().parent.parent
ORIGEN = RAIZ.parents[1] / "pilar-turismo" / "assets" / "images"
PUBLIC = RAIZ / "public"
LUGARES = PUBLIC / "lugares"


def logo_transparente() -> Image.Image:
    logo = Image.open(ORIGEN / "logos" / "logoapp.png").convert("RGB")
    # Relleno desde las esquinas: todo el blanco exterior al cuadrado azul
    # pasa a ser transparente sin tocar la cinta blanca interior.
    mascara = logo.copy()
    for esquina in [(0, 0), (logo.width - 1, 0), (0, logo.height - 1),
                    (logo.width - 1, logo.height - 1)]:
        ImageDraw.floodfill(mascara, esquina, (255, 0, 255), thresh=18)

    resultado = logo.convert("RGBA")
    pixeles = resultado.load()
    pixeles_mascara = mascara.load()
    for y in range(resultado.height):
        for x in range(resultado.width):
            if pixeles_mascara[x, y] == (255, 0, 255):
                pixeles[x, y] = (0, 0, 0, 0)
    return resultado


def guardar_logo(logo: Image.Image) -> None:
    logo.resize((512, 512), Image.LANCZOS).save(PUBLIC / "pasear-logo.png")
    logo.resize((180, 180), Image.LANCZOS).save(PUBLIC / "apple-touch-icon.png")
    logo.resize((64, 64), Image.LANCZOS).save(PUBLIC / "favicon.png")


def optimizar_foto(nombre: str, ancho_max: int = 1400) -> None:
    foto = Image.open(ORIGEN / "lugaresIniciales" / nombre).convert("RGB")
    if foto.width > ancho_max:
        alto = round(foto.height * ancho_max / foto.width)
        foto = foto.resize((ancho_max, alto), Image.LANCZOS)
    destino = LUGARES / f"{Path(nombre).stem}.jpg"
    foto.save(destino, "JPEG", quality=82, optimize=True, progressive=True)
    print(f"{destino.name}: {destino.stat().st_size // 1024} KB")


if __name__ == "__main__":
    LUGARES.mkdir(parents=True, exist_ok=True)
    logo = logo_transparente()
    guardar_logo(logo)
    print("logo: listo")
    for foto in [
        "capilla.jpeg",
        "parroquia.jpeg",
        "reserva.jpeg",
        "palacio.jpeg",
        "plaza.jpeg",
    ]:
        optimizar_foto(foto)
