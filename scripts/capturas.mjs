import fs from 'node:fs/promises';

const BASE = 'http://127.0.0.1:4173/';
const OUT = 'shots';
const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function obtenerPagina() {
  for (let i = 0; i < 40; i += 1) {
    try {
      const lista = await (await fetch('http://127.0.0.1:9222/json')).json();
      const pagina = lista.find((t) => t.type === 'page');
      if (pagina) return pagina;
    } catch {
      // Edge todavía no abrió el puerto.
    }
    await esperar(300);
  }
  throw new Error('No se encontró la página de Edge.');
}

const pagina = await obtenerPagina();
const ws = new WebSocket(pagina.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  ws.onopen = resolve;
  ws.onerror = reject;
});

let siguienteId = 0;
const pendientes = new Map();

ws.onmessage = (evento) => {
  const mensaje = JSON.parse(evento.data);
  if (mensaje.id && pendientes.has(mensaje.id)) {
    const { resolve, reject } = pendientes.get(mensaje.id);
    pendientes.delete(mensaje.id);
    if (mensaje.error) reject(new Error(mensaje.error.message));
    else resolve(mensaje.result);
  }
};

function enviar(method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = (siguienteId += 1);
    pendientes.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params }));
  });
}

async function evaluar(expression) {
  const resultado = await enviar('Runtime.evaluate', {
    expression,
    awaitPromise: true,
    returnByValue: true,
  });
  return resultado.result?.value;
}

async function esperarContenido() {
  await evaluar(`(async () => {
    try { await document.fonts.ready; } catch {}
    await Promise.all([...document.images].map((img) =>
      img.complete ? Promise.resolve() : new Promise((resolve) => {
        img.addEventListener('load', resolve, { once: true });
        img.addEventListener('error', resolve, { once: true });
      })
    ));
    return true;
  })()`);
  await esperar(600);
}

async function ir(selector) {
  await evaluar(`(() => {
    const el = document.querySelector(${JSON.stringify(selector)});
    if (!el) return 0;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo(0, y);
    return y;
  })()`);
  await esperar(950);
}

async function captura(nombre, extra = {}) {
  const { data } = await enviar('Page.captureScreenshot', {
    format: 'png',
    fromSurface: true,
    ...extra,
  });
  await fs.writeFile(`${OUT}/${nombre}.png`, Buffer.from(data, 'base64'));
  console.log(`ok ${nombre}`);
}

async function revelarTodo() {
  await evaluar(`document.querySelectorAll('[data-reveal]').forEach((n) => n.classList.add('is-visible'))`);
  await esperar(300);
}

async function capturaCompleta(nombre, ancho) {
  await revelarTodo();
  await evaluar('window.scrollTo(0, 0)');
  await esperar(500);
  const metricas = await enviar('Page.getLayoutMetrics');
  const alto = Math.ceil((metricas.cssContentSize ?? metricas.contentSize).height);
  await captura(nombre, {
    captureBeyondViewport: true,
    clip: { x: 0, y: 0, width: ancho, height: alto, scale: 1 },
  });
  console.log(`alto ${alto}`);
}

async function viewport(ancho, alto, mobile) {
  await enviar('Emulation.setDeviceMetricsOverride', {
    width: ancho,
    height: alto,
    deviceScaleFactor: 1,
    mobile,
  });
  await enviar('Page.navigate', { url: BASE });
  await esperar(1800);
  await esperarContenido();
}

await fs.mkdir(OUT, { recursive: true });
await enviar('Page.enable');
await enviar('Runtime.enable');

// Escritorio
await viewport(1440, 1000, false);
await captura('desktop-hero');
await ir('#destinos');
await captura('desktop-destinos');
await ir('#funciones');
await captura('desktop-funciones');
await ir('#como-funciona');
await captura('desktop-pasos');
await ir('#comunidad');
await captura('desktop-comunidad');
await ir('#descargar');
await captura('desktop-descarga');
await evaluar('window.scrollTo(0, document.body.scrollHeight)');
await esperar(900);
await captura('desktop-footer');
await capturaCompleta('desktop-full', 1440);

// Probar el formulario de la lista de espera
await ir('#descargar');
await evaluar(`(() => {
  const input = document.querySelector('#waitlist-email');
  const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
  setter.call(input, 'hola@ejemplo.com');
  input.dispatchEvent(new Event('input', { bubbles: true }));
  return true;
})()`);
await esperar(250);
await evaluar(`document.querySelector('.waitlist button')?.click()`);
await esperar(600);
await captura('desktop-waitlist-ok');

// Mobile
await viewport(390, 844, true);
await captura('mobile-hero');
await evaluar(`document.querySelector('.nav__toggle')?.click()`);
await esperar(500);
await captura('mobile-menu');
await evaluar(`document.querySelector('.nav__toggle')?.click()`);
await esperar(300);
await ir('#destinos');
await captura('mobile-destinos');
await ir('#funciones');
await captura('mobile-funciones');
await ir('#como-funciona');
await captura('mobile-pasos');
await ir('#comunidad');
await captura('mobile-comunidad');
await ir('#descargar');
await captura('mobile-descarga');
await evaluar('window.scrollTo(0, document.body.scrollHeight)');
await esperar(900);
await captura('mobile-footer');
await capturaCompleta('mobile-full', 390);

// Tablet
await viewport(820, 1180, false);
await captura('tablet-hero');
await ir('#destinos');
await captura('tablet-destinos');
await ir('#descargar');
await captura('tablet-descarga');

// Laptop chico
await viewport(1024, 900, false);
await captura('laptop-hero');
await ir('#destinos');
await captura('laptop-destinos');

// Mobile chico
await viewport(320, 800, true);
await captura('small-hero');
await ir('#descargar');
await captura('small-descarga');

// Laptop grande
await viewport(1280, 900, false);
await captura('desktop-1280-hero');

ws.close();
console.log('listo');
