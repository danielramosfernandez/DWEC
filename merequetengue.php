class Piezas {
    constructor(numPieza, numPedi, largo, ancho, grosor, color, ambasCaras, cortada) {
        this.numPieza = numPieza;
        this.numPedi = numPedi;
        this.largo = largo;
        this.ancho = ancho;
        this.grosor = grosor;
        this.color = color;
        this.ambasCaras = ambasCaras;
        this.cortada = cortada;

        // Calcular superficie y volumen automáticamente
        this.superficie = this.calcularSuperficie();
        this.volumen = this.calcularVolumen();
    }

    calcularSuperficie() {
        // Superficie de ambas caras
        return this.largo * this.ancho * (this.ambasCaras ? 2 : 1);
    }

    calcularVolumen() {
        // Volumen: Largo x Ancho x Grosor
        return this.largo * this.ancho * this.grosor;
    }
}

let piezas = JSON.parse(localStorage.getItem("piezas"));
if (!Array.isArray(piezas)) {
    piezas = [];
    localStorage.setItem("piezas", JSON.stringify(piezas));
}

function guardarPiezas() {
    localStorage.setItem("piezas", JSON.stringify(piezas));
}

function visualizarPiezas() {
    const tbody = document.querySelector("#tablaPedidos tbody");
    tbody.innerHTML = "";

    piezas.forEach(pieza => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${pieza.numPieza}</td>
            <td>${pieza.numPedi}</td>
            <td>${pieza.largo} cm</td>
            <td>${pieza.ancho} cm</td>
            <td>${pieza.grosor} cm</td>
            <td>${pieza.color}</td>
            <td>${pieza.superficie.toFixed(2)} cm²</td>
            <td>${pieza.volumen.toFixed(2)} cm³</td>
            <td>${pieza.ambasCaras ? "Sí" : "No"}</td>
            <td>${pieza.cortada ? "Sí" : "No"}</td>
        `;
        tbody.appendChild(tr);
    });
}

function añadirPieza(numPieza, numPedi, largo, ancho, grosor, color, ambasCaras, cortada) {
    if (!Number.isInteger(numPedi)) {
        alert("El número de pedido debe ser entero");
        return;
    }
    if (!Number.isInteger(numPieza)) {
        alert("El número de pieza debe ser entero");
        return;
    }
    if (!largo || !ancho || !grosor || !color || ambasCaras === undefined || cortada === undefined) {
        alert("Datos inválidos. Por favor, introduzca los datos correctos");
        return;
    }
    const nuevaPieza = new Piezas(numPieza, numPedi, largo, ancho, grosor, color, ambasCaras, cortada);
    piezas.push(nuevaPieza);
    guardarPiezas();
    visualizarPiezas();
}

function eliminarPieza() {
    const numPieza = parseInt(document.getElementById("numPiezaEliminar").value, 10);
    if (!numPieza) {
        alert("Por favor, ingrese un número de pieza correcto para eliminar");
        return;
    }
    const index = piezas.findIndex(p => p.numPieza === numPieza);
    if (index === -1) {
        alert(`No se encuentra la pieza con el número ${numPieza}`);
        return;
    }
    piezas.splice(index, 1);
    guardarPiezas();
    visualizarPiezas();
    alert(`Pieza con número ${numPieza} eliminada correctamente`);
    document.getElementById("numPiezaEliminar").value = "";
}

function modificarPieza() {
    const numPieza = parseInt(document.getElementById("modNumPieza").value, 10);
    const nuevoLargo = parseFloat(document.getElementById("modLargo").value);
    const nuevoAncho = parseFloat(document.getElementById("modAncho").value);
    const nuevoGrosor = parseFloat(document.getElementById("modGrosor").value);
    const nuevoColor = document.getElementById("modColor").value;

    if (!numPieza || !nuevoLargo || !nuevoAncho || !nuevoGrosor || !nuevoColor) {
        alert("Datos inválidos. Por favor, complete todos los campos");
        return;
    }

    const pieza = piezas.find(p => p.numPieza === numPieza);
    if (!pieza) {
        alert("No hay ninguna pieza con ese número");
        return;
    }

    // Modificar datos y recalcular superficie y volumen
    pieza.largo = nuevoLargo;
    pieza.ancho = nuevoAncho;
    pieza.grosor = nuevoGrosor;
    pieza.color = nuevoColor;
    pieza.superficie = pieza.calcularSuperficie();
    pieza.volumen = pieza.calcularVolumen();

    guardarPiezas();
    visualizarPiezas();
    alert(`La pieza con número ${numPieza} fue modificada correctamente`);
}

function formularioModificacion(numPieza) {
    const pieza = piezas.find(p => p.numPieza === numPieza);
    if (!pieza) {
        alert(`No se puede encontrar la pieza con número ${numPieza}`);
        return;
    }
    document.getElementById("modNumPieza").value = pieza.numPieza;
    document.getElementById("modLargo").value = pieza.largo;
    document.getElementById("modAncho").value = pieza.ancho;
    document.getElementById("modGrosor").value = pieza.grosor;
    document.getElementById("modColor").value = pieza.color;

    document.getElementById("modificarPiezaBtn").style.display = 'inline-block';
    document.getElementById("eliminarPiezaBtn").style.display = 'inline-block';
}

document.addEventListener("DOMContentLoaded", () => {
    visualizarPiezas();
});

document.getElementById("formularioModificacion").addEventListener("submit", (e) => {
    e.preventDefault();
    const numPieza = parseInt(document.getElementById("numPieza").value, 10);
    const largo = parseFloat(document.getElementById("largo").value);
    const ancho = parseFloat(document.getElementById("ancho").value);
    const grosor = parseFloat(document.getElementById("grosor").value);
    const color = document.getElementById("color").value;

    añadirPieza(numPieza, largo, ancho, grosor, color);
    e.target.reset();
});
