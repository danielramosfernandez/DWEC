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
    if (!nombre || peso <= 0 || altura <= 0) {
        alert("Datos inválidos.");
        return;
    }
    personas.push(new Persona(nombre, peso, altura));
    mostrarPersonas();
}

function modificarPersona(nombre, nuevoPeso, nuevaAltura) {
    const persona = personas.find(p => p.nombre === nombre);
    if (persona) {
        persona.peso = nuevoPeso;
        persona.altura = nuevaAltura;
        mostrarPersonas();
    } else {
        alert("Persona no encontrada.");
    }
}

function calcularIMC() {
    personasFueraDeRango.length = 0; 
    let tbodyPersonas = document.querySelector("#tablaPersonas tbody");
    let tbodyFueraDeRango = document.querySelector("#tablaFueraDeRango tbody");

    tbodyPersonas.innerHTML = "";
    tbodyFueraDeRango.innerHTML = "";

    personas.forEach(persona => {
        const imc = persona.peso / (persona.altura ** 2);
        let categoria;
        if (imc <= 18.48) categoria = "Demasiado delgada";
        else if (imc <= 24.99) categoria = "Peso normal";
        else categoria = "Demasiado obesa";

        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${persona.nombre}</td><td>${persona.peso}</td><td>${persona.altura}</td><td>${imc.toFixed(2)}</td><td>${categoria}</td>`;
        tbodyPersonas.appendChild(tr);

        if (categoria !== "Peso normal") {
            personasFueraDeRango.push(new IMC(persona.nombre, imc.toFixed(2)));
            let trFueraDeRango = document.createElement("tr");
            trFueraDeRango.innerHTML = `<td>${persona.nombre}</td><td>${imc.toFixed(2)}</td>`;
            tbodyFueraDeRango.appendChild(trFueraDeRango);
        }
    });
}

function mostrarPersonas() {
    let tbody = document.querySelector("#tablaPersonas tbody");
    tbody.innerHTML = "";
    personas.forEach(persona => {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${persona.nombre}</td><td>${persona.peso}</td><td>${persona.altura}</td>`;
        tbody.appendChild(tr);
    });
}

// Eventos
document.getElementById("formAñadir").addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    añadirPersona(nombre, peso, altura);
    e.target.reset();
});

document.getElementById("formModificar").addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("modNombre").value;
    const nuevoPeso = parseFloat(document.getElementById("modPeso").value);
    const nuevaAltura = parseFloat(document.getElementById("modAltura").value);
    modificarPersona(nombre, nuevoPeso, nuevaAltura);
    e.target.reset();
});
