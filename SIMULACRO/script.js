// Clases y arrays
class Persona {
    constructor(nombre, peso, altura) {
        this.nombre = nombre;
        this.peso = peso;
        this.altura = altura;
    }
}

class IMC {
    constructor(nombre, imc) {
        this.nombre = nombre;
        this.imc = imc;
    }
}

const personas = [];
const personasFueraDeRango = [];

// Funciones para manejar personas e IMC
function añadirPersona(nombre, peso, altura) {
    if (!nombre || peso <= 0 || peso > 500 || altura <= 0 || altura > 3) {
        alert("Datos inválidos. Verifique el peso (0-500kg) y la altura (0-3m).");
        return;
    }
    if (personas.some(p => p.nombre.toLowerCase() === nombre.toLowerCase())) {
        alert("Ya existe una persona con este nombre.");
        return;
    }
    personas.push(new Persona(nombre, peso, altura));
    guardarDatos();
    mostrarPersonas();
}

function modificarPersona(nombre, nuevoPeso, nuevaAltura) {
    const persona = personas.find(p => p.nombre === nombre);
    if (persona) {
        if (nuevoPeso <= 0 || nuevoPeso > 500 || nuevaAltura <= 0 || nuevaAltura > 3) {
            alert("Datos inválidos. Verifique el peso (0-500kg) y la altura (0-3m).");
            return;
        }
        persona.peso = nuevoPeso;
        persona.altura = nuevaAltura;
        guardarDatos();
        mostrarPersonas();
    } else {
        alert("Persona no encontrada.");
    }
}

function calcularIMC() {
    personasFueraDeRango.length = 0;
    const $tbodyPersonas = $("#tablaPersonas tbody");
    const $tbodyFueraDeRango = $("#tablaFueraDeRango tbody");

    $tbodyPersonas.empty();
    $tbodyFueraDeRango.empty();

    personas.forEach(persona => {
        const imc = persona.peso / (persona.altura ** 2);
        let categoria;
        if (imc <= 18.48) categoria = "Demasiado delgada";
        else if (imc <= 24.99) categoria = "Peso normal";
        else categoria = "Demasiado obesa";

        const $tr = $("<tr>").html(
            `<td>${persona.nombre}</td>
             <td>${persona.peso}</td>
             <td>${persona.altura}</td>
             <td>${imc.toFixed(2)}</td>
             <td>${categoria}</td>`
        );
        $tbodyPersonas.append($tr);

        if (categoria !== "Peso normal") {
            personasFueraDeRango.push(new IMC(persona.nombre, imc.toFixed(2)));
            const $trFueraDeRango = $("<tr>").html(
                `<td>${persona.nombre}</td><td>${imc.toFixed(2)}</td>`
            );
            $tbodyFueraDeRango.append($trFueraDeRango);
        }
    });
}

function mostrarPersonas() {
    const $tbody = $("#tablaPersonas tbody");
    $tbody.empty();
    personas.forEach(persona => {
        const $tr = $("<tr>").html(
            `<td>${persona.nombre}</td><td>${persona.peso}</td><td>${persona.altura}</td>`
        );
        $tbody.append($tr);
    });
}

// Guardar y cargar datos en localStorage
function guardarDatos() {
    localStorage.setItem("personas", JSON.stringify(personas));
}

function cargarDatos() {
    const datosGuardados = JSON.parse(localStorage.getItem("personas"));
    if (datosGuardados) {
        datosGuardados.forEach(p => personas.push(new Persona(p.nombre, p.peso, p.altura)));
        mostrarPersonas();
    }
}

function borrarDatos() {
    if (confirm("¿Está seguro de borrar todos los datos?")) {
        localStorage.removeItem("personas");
        personas.length = 0;
        mostrarPersonas();
        alert("Datos eliminados correctamente.");
    }
}

// Eventos
$(document).ready(function () {
    // Cargar datos al inicio
    cargarDatos();

    // Añadir persona
    $("#formAñadir").on("submit", function (e) {
        e.preventDefault();
        const nombre = $("#nombre").val();
        const peso = parseFloat($("#peso").val());
        const altura = parseFloat($("#altura").val());
        añadirPersona(nombre, peso, altura);
        this.reset();
    });

    // Modificar persona
    $("#formModificar").on("submit", function (e) {
        e.preventDefault();
        const nombre = $("#modNombre").val();
        const nuevoPeso = parseFloat($("#modPeso").val());
        const nuevaAltura = parseFloat($("#modAltura").val());
        modificarPersona(nombre, nuevoPeso, nuevaAltura);
        this.reset();
    });

    // Borrar datos
    $("#borrarDatos").on("click", borrarDatos);
});
