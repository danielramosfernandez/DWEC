/* Pedidos almacenará pedidos realizados por los clientes. Se deben utilizar los tipos de datos
más adecuados a cada campo (entero, decimal, booleano, cadena, etc.). Debe incluir la
siguiente información:
o Número de pedido: el número único que identifica al pedido.
o Cliente: nombre y apellidos del cliente, que permitirá al menos 50 caracteres.
o Fecha de pedido: la fecha de realización del pedido.
o Procesado: que indicará si el pedido ya ha sido procesado de forma completa
o Servido: que indicará si el pedido ya ha sido servido al cliente. 

Se permitirá dar de alta, baja, modificar y consultar pedidos. Se deberá comprobar lo siguiente:
a) Que no se intenta dar de alta un número de pedido ya existente y que este es mayor o igual
que 1 no admitiendo decimales.
b) Que los tipos son adecuados a cada campo.
c) Que la fecha de pedido tiene un formato correcto.
d) Que la fecha de pedido no es posterior al día en el que se registra.
*/ 
//!PEDIDOS
export class Pedidos {
    constructor(numPedido, cliente, fechaPedido, procesado, servido) {
      this.NumPedido = numPedido;
      this.Cliente = cliente;
      this.FechaPedido = fechaPedido;
      this.Procesado = procesado;
      this.Servido = servido;
    }
  
    //!En este setter se valida el numero del pedido
    set NumPedido(valor) {
      if (!Number.isInteger(valor) || valor < 1) { //!Se comprueba que el número es entero y mayor de uno 
        alert("El número de pedido debe ser un entero mayor o igual que 1."); //!Si lo es se 
      }
      this.numPedido = valor;
    }
  
    get NumPedido() {
      return this.numPedido;
    }
  
    // Validación para el cliente (máx. 50 caracteres)
    set Cliente(valor) {
      if (typeof valor !== "string" || valor.trim().length === 0 || valor.length > 50) {
        alert ("El nombre del cliente debe ser una cadena de hasta 50 caracteres.");
      }
      this.cliente = valor.trim();
    }
  
    get Cliente() {
      return this.cliente;
    }
  
    // Validación de la fecha de pedido
    set FechaPedido(valor) {
      const fechaActual = new Date();
      const fechaIngresada = new Date(valor);
      if (
        isNaN(fechaIngresada) ||
        fechaIngresada > fechaActual
      ) {
        alert ("La fecha de pedido debe tener un formato válido y no ser posterior a hoy.");
      }
      this.fechaPedido = fechaIngresada;
    }
  
    get FechaPedido() {
      return this.fechaPedido;
    }
  
    // Booleano para procesado
    set Procesado(valor) {
      if (typeof valor !== "boolean") {
        alert ("Procesado debe ser un valor booleano.");
      }
      this.procesado = valor;
    }
  
    get Procesado() {
      return this.procesado;
    }
  
    // Booleano para servido
    set Servido(valor) {
      if (typeof valor !== "boolean") {
        alert ("Servido debe ser un valor booleano.");
      }
      this.servido = valor;
    }
  
    get Servido() {
      return this.servido;
    }
  }
  
//TODO: PIEZAS
export class Piezas {
    constructor(numPieza, numPedi, largo, ancho, grosor, color, ambasCaras, cortada) {
      this.NumPieza = numPieza;
      this.NumPedi = numPedi;
      this.Largo = largo;
      this.Ancho = ancho;
      this.Grosor = grosor;
      this.Color = color;
      this.AmbasCaras = ambasCaras;
      this.Cortada = cortada;
    }
  
    // Validación para número de pieza
    set NumPieza(valor) {
      if (!Number.isInteger(valor) || valor < 1) {
        alert ("El número de pieza debe ser un entero mayor o igual que 1.");
      }
      this.numPieza = valor;
    }
  
    get NumPieza() {
      return this.numPieza;
    }
  
    // Validación para el número de pedido asociado
    set NumPedi(valor) {
      if (!Number.isInteger(valor) || valor < 1) {
        alert ("El número de pedido asociado debe ser un entero mayor o igual que 1.");
      }
      this.numPedi = valor;
    }
  
    get NumPedi() {
      return this.numPedi;
    }
  
    // Validaciones para largo, ancho y grosor (deben ser números positivos)
    set Largo(valor) {
      if (typeof valor !== "number" || valor <= 0) {
        alert ("El largo debe ser un número positivo.");
      }
      this.largo = valor;
    }
  
    get Largo() {
      return this.largo;
    }
  
    set Ancho(valor) {
      if (typeof valor !== "number" || valor <= 0) {
        alert ("El ancho debe ser un número positivo.");
      }
      this.ancho = valor;
    }
  
    get Ancho() {
      return this.ancho;
    }
  
    set Grosor(valor) {
      if (typeof valor !== "number" || valor <= 0) {
        alert ("El grosor debe ser un número positivo.");
      }
      this.grosor = valor;
    }
  
    get Grosor() {
      return this.grosor;
    }
  
    // Validación de color (cadena no vacía)
    set Color(valor) {
      if (typeof valor !== "string" || valor.trim() === "") {
        alert ("El color debe ser una cadena no vacía.");
      }
      this.color = valor.trim();
    }
  
    get Color() {
      return this.color;
    }
  
    // Booleanos para ambasCaras y cortada
    set AmbasCaras(valor) {
      if (typeof valor !== "boolean") {
        alert ("Ambas caras debe ser un valor booleano.");
      }
      this.ambasCaras = valor;
    }
  
    get AmbasCaras() {
      return this.ambasCaras;
    }
  
    set Cortada(valor) {
      if (typeof valor !== "boolean") {
        alert ("Cortada debe ser un valor booleano.");
      }
      this.cortada = valor;
    }
  
    get Cortada() {
      return this.cortada;
    }
  }
  