import { Pedidos, Piezas } from "./objetos"; 

var pedidos = [];
var piezas = [];

function almacenar() {
    localStorage.setItem("pedidos", JSON.stringify(pedidos)); // Guardar pedidos en localStorage
    localStorage.setItem("piezas", JSON.stringify(piezas)); // Guardar piezas (si aplica)
}

function almacenadas() {
    pedidos = [];
    piezas = [];

    pedidos.push(new Pedidos(1, "Daniel", "2024-11-27", true, true));
    pedidos.push(new Pedidos(2, "Cesar", "2024-11-26", true, false));

    piezas.push(new Piezas(1, 2, 130, 50, 20, "Roble", false, true));
    piezas.push(new Piezas(2, 1, 230, 100, 30, "Abedúl", true, true));

    almacenar();
}

function reiniciar() {
    localStorage.removeItem("pedidos");
    localStorage.removeItem("piezas");
    almacenadas();
}

function recuperacionPedidos() {
    return JSON.parse(localStorage.getItem("pedidos")) || []; // Recuperar pedidos desde localStorage
}


function recuperacionPiezas() {
    return JSON.parse(localStorage.getItem("piezas")) || [];
}

function comparadorPedidos(pe1, pe2) {
    return pe1.NumPedido - pe2.NumPedido;
}

function comparadorPiezas(pi1, pi2) {
    return pi1.NumPieza - pi2.NumPieza;
}

const pedidoExistente = (numero) => {
    if (!pedidos) pedidos = recuperacionPedidos();
    return pedidos.some(pe => pe.NumPedido === numero);
};

const piezaExistente = (numero) => {
    if (!piezas) piezas = recuperacionPiezas();
    return piezas.some(pi => pi.NumPieza === numero);
};

function nuevoPedidos(numPedido, cliente, fechaPedido, procesado, servido) {
    if (!pedidos) pedidos = recuperacionPedidos();
    const nuevoPedido = new Pedidos(numPedido, cliente, fechaPedido, procesado, servido);
    pedidos.push(nuevoPedido);
    pedidos.sort((a, b) => a.NumPedido - b.NumPedido);
    almacenar();
}

function modificar_Pedidos_Por_NumPedido(numPedido, cliente, fechaPedido, procesado, servido) {
    if (!pedidos) pedidos = recuperacionPedidos();
    let pedido = pedidos.find(p => p.NumPedido === numPedido);
    if (pedido) {
        pedido.Cliente = cliente;
        pedido.FechaPedido = fechaPedido;
        pedido.Procesado = procesado;
        pedido.Servido = servido;
        almacenar();
    } else {
        alert("Pedido no encontrado");
    }
}

function eliminar_Pedido_Por_NumeroPedido(num) {
    if (!pedidos) pedidos = recuperacionPedidos();
    pedidos = pedidos.filter(pe => pe.NumPedido !== num);
    almacenar();
}

function nuevasPiezas(numPieza, numPedi, largo, ancho, grosor, color, ambasCaras, cortada) {
    if (!piezas) piezas = recuperacionPiezas();
    const nuevaPieza = new Piezas(numPieza, numPedi, largo, ancho, grosor, color, ambasCaras, cortada);
    piezas.push(nuevaPieza);
    piezas.sort((a, b) => a.NumPieza - b.NumPieza);
    almacenar();
}

function modificar_Piezas_Por_NumPieza(numPieza, numPedi, largo, ancho, grosor, color, ambasCaras, cortada) {
    if (!piezas) piezas = recuperacionPiezas();
    let pieza = piezas.find(p => p.NumPieza === numPieza);
    if (pieza) {
        pieza.NumPedi = numPedi;
        pieza.Largo = largo;
        pieza.Ancho = ancho;
        pieza.Grosor = grosor;
        pieza.Color = color;
        pieza.AmbasCaras = ambasCaras;
        pieza.Cortada = cortada;
        almacenar();
    } else {
        alert("Pieza no encontrada");
    }
}

function eliminar_Pieza_Por_NumeroPieza(num) {
    if (!piezas) piezas = recuperacionPiezas();
    piezas = piezas.filter(pi => pi.NumPieza !== num);
    almacenar();
}

function cargaPieza() {
    let piezas = recuperacionPiezas();
    let tblBody = document.getElementById("tblPieza").querySelector("tbody");
    if (!tblBody) {
        tblBody = document.createElement("tbody");
        document.getElementById("tblPieza").appendChild(tblBody);
    }

    tblBody.innerHTML = "";
    piezas.forEach(pi1 => {
        let fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${pi1.NumPieza}</td>
            <td>${pi1.NumPedi}</td>
            <td>${pi1.Largo}</td>
            <td>${pi1.Ancho}</td>
            <td>${pi1.Grosor}</td>
            <td>${pi1.Color}</td>`;
        tblBody.appendChild(fila);
    });
}
function nuevoPedidos(numPedido, cliente, fechaPedido, procesado, servido) {
    if (!pedidos) pedidos = recuperacionPedidos();
    const nuevoPedido = new Pedidos(numPedido, cliente, fechaPedido, procesado, servido);
    pedidos.push(nuevoPedido); // Añadir el pedido a la lista
    pedidos.sort((a, b) => a.NumPedido - b.NumPedido); // Ordenar los pedidos
    almacenar(); // Guardar los datos en localStorage
}

const importarFunciones = () => {
    window.nuevoPedidos = nuevoPedidos;
    window.modificar_Pedidos_Por_NumPedido = modificar_Pedidos_Por_NumPedido;
    window.eliminar_Pedido_Por_NumeroPedido = eliminar_Pedido_Por_NumeroPedido;
    window.nuevasPiezas = nuevasPiezas;
    window.modificar_Piezas_Por_NumPieza = modificar_Piezas_Por_NumPieza;
    window.eliminar_Pieza_Por_NumeroPieza = eliminar_Pieza_Por_NumeroPieza;
    window.cargaPieza = cargaPieza;
};
