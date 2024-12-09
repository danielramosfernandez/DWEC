// Clases para Pedido y Pieza
class Pedido {
    constructor(numPedido, cliente, fecha) {
        this.numPedido = numPedido;
        this.cliente = cliente;
        this.fecha = fecha;
    }
}

class Pieza {
    constructor(numPieza, pedidoAsociado, largo, ancho, grosor, color) {
        this.numPieza = numPieza;
        this.pedidoAsociado = pedidoAsociado;
        this.largo = largo;
        this.ancho = ancho;
        this.grosor = grosor;
        this.color = color;
    }
}

// Gestión de LocalStorage
function guardarEnStorage(clave, datos) {
    localStorage.setItem(clave, JSON.stringify(datos));
}

function cargarDeStorage(clave) {
    const datos = localStorage.getItem(clave);
    return datos ? JSON.parse(datos) : [];
}

// Funciones de pedidos
const pedidos = cargarDeStorage('pedidos');

function agregarPedido(pedido) {
    pedidos.push(pedido);
    guardarEnStorage('pedidos', pedidos);
    mostrarPedidos();
}

function mostrarPedidos() {
    const listaPedidos = document.getElementById('listaPedidos');
    if (!listaPedidos) return; // Página actual no muestra pedidos
    listaPedidos.innerHTML = '';
    pedidos.forEach(pedido => {
        const li = document.createElement('li');
        li.textContent = `Pedido ${pedido.numPedido}: ${pedido.cliente}, Fecha: ${pedido.fecha}`;
        listaPedidos.appendChild(li);
    });
}

// Funciones de piezas
const piezas = cargarDeStorage('piezas');

function agregarPieza(pieza) {
    piezas.push(pieza);
    guardarEnStorage('piezas', piezas);
    mostrarPiezas();
}

function mostrarPiezas() {
    const listaPiezas = document.getElementById('listaPiezas');
    if (!listaPiezas) return; // Página actual no muestra piezas
    listaPiezas.innerHTML = '';
    piezas.forEach(pieza => {
        const li = document.createElement('li');
        li.textContent = `Pieza ${pieza.numPieza}: Pedido ${pieza.pedidoAsociado}, Dimensiones: ${pieza.largo}x${pieza.ancho}x${pieza.grosor}, Color: ${pieza.color}`;
        listaPiezas.appendChild(li);
    });
}

// Detalles del pedido
function mostrarDetalles(numPedido) {
    const tabla = document.getElementById('detalleTabla');
    if (!tabla) return;
    tabla.innerHTML = '';

    const piezasFiltradas = piezas.filter(p => p.pedidoAsociado === numPedido);
    piezasFiltradas.forEach(pieza => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${pieza.numPieza}</td>
            <td>${pieza.largo}</td>
            <td>${pieza.ancho}</td>
            <td>${pieza.grosor}</td>
            <td>${pieza.color}</td>
            <td>${pieza.largo * pieza.ancho}</td>
            <td>${pieza.largo * pieza.ancho * pieza.grosor}</td>
        `;
        tabla.appendChild(fila);
    });
}

// Manejadores de eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarPedidos();
    mostrarPiezas();

    const pedidoForm = document.getElementById('pedidoForm');
    if (pedidoForm) {
        pedidoForm.addEventListener('submit', e => {
            e.preventDefault();
            const numPedido = parseInt(document.getElementById('numPedido').value);
            const cliente = document.getElementById('cliente').value;
            const fecha = document.getElementById('fecha').value;

            if (pedidos.some(p => p.numPedido === numPedido)) {
                alert('El número de pedido ya existe.');
                return;
            }

            const nuevoPedido = new Pedido(numPedido, cliente, fecha);
            agregarPedido(nuevoPedido);
            pedidoForm.reset();
        });
    }

    const piezaForm = document.getElementById('piezaForm');
    if (piezaForm) {
        piezaForm.addEventListener('submit', e => {
            e.preventDefault();
            const numPieza = parseInt(document.getElementById('numPieza').value);
            const pedidoAsociado = parseInt(document.getElementById('pedidoAsociado').value);
            const largo = parseFloat(document.getElementById('largo').value);
            const ancho = parseFloat(document.getElementById('ancho').value);
            const grosor = parseFloat(document.getElementById('grosor').value);
            const color = document.getElementById('color').value;

            if (!pedidos.some(p => p.numPedido === pedidoAsociado)) {
                alert('El número de pedido no existe.');
                return;
            }

            const nuevaPieza = new Pieza(numPieza, pedidoAsociado, largo, ancho, grosor, color);
            agregarPieza(nuevaPieza);
            piezaForm.reset();
        });
    }

    const detalleForm = document.getElementById('detalleForm');
    if (detalleForm) {
        detalleForm.addEventListener('submit', e => {
            e.preventDefault();
            const numPedido = parseInt(document.getElementById('numPedidoDetalle').value);
            mostrarDetalles(numPedido);
        });
    }
});
