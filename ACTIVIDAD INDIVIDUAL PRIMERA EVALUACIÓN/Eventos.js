// Obtener los controles del formulario
const controlesPedidos = () => { 
  //!Controlador para los pedidos
  const txtNumPedido = document.getElementById("txtNumPedido"); 
  const cbCliente = document.getElementById("cbCliente"); 
  const txtFechaPedido = document.getElementById("txtFechaPedido"); 
  const btnProcesado = document.getElementById("btnProcesado"); 
  const btnServido = document.getElementById("btnServido"); 
  const btnAnyadir = document.getElementById("btnAnyadir");
  const btnEliminar = document.getElementById("btnEliminar");
  const btnModificar = document.getElementById("btnModificar");
  const editPedido = document.getElementById("editPedido");

  return {
      txtNumPedido, 
      cbCliente, 
      txtFechaPedido, 
      btnProcesado, 
      btnServido, 
      btnAnyadir, 
      btnEliminar, 
      btnModificar, 
      editPedido
  };
};

const showAnyadirPedidoEvt = () => {  
  //!Constante que sirve para mostrar la función de añadir pedido
  const { editPedido } = controlesPedidos();
  if (editPedido) { 
      enableActions(false); 
      editPedido.style.display = "block"; 
      const hijos = editPedido.childNodes; 
      for (let h of hijos) { 
          h.value = ""; 
          h.disabled = false;
      }
  }
};

const showEditarPedidoEvt = () => { 
  //!Constante para mostrar la función de modificación de pedido
  const { txtNumPedido, editPedido } = controlesPedidos();
  let num = prompt("Introduce el número de pedido", ""); 
  if (isNaN(num)) { 
      alert("El número introducido no es válido"); 
  } else if (num) { 
      num = parseInt(num); 
      if (!pedidoExistente(num)) { 
          alert("El pedido que has introducido no existe"); 
      } else if (editPedido) { 
          editPedido.style.display = "block"; 
          txtNumPedido.disabled = true; 
          txtNumPedido.value = num; 
          enableActions(false); 
      }
  }
};

const enableActions = (enabled) => {
  const { btnProcesado, btnServido } = controlesPedidos();
  btnProcesado.disabled = !enabled; 
  btnServido.disabled = !enabled; 
};

const accionPedidoEvt = () => {
  const { txtNumPedido, cbCliente, txtFechaPedido, btnProcesado, btnServido } = controlesPedidos();
  if (txtNumPedido) {
      let numPedido = parseInt(txtNumPedido.value);
      if (isNaN(numPedido)) {
          alert("El número de pedido no es válido");
      } else if (numPedido < 1) {
          alert("El número de pedido debe ser mayor o igual a 1");
      } else if (txtFechaPedido.value == "") {
          alert("La fecha de pedido no es válida");
      } else if (!esFechaValida(txtFechaPedido.value)) {
          alert("La fecha de pedido no tiene un formato correcto o es posterior al día actual");
      } else {
          if (pedidoExistente(numPedido)) {
              alert("El número de pedido ya existe");
          } else {
              insertarPedido(
                  numPedido,
                  cbCliente.value,
                  txtFechaPedido.value,
                  btnProcesado.checked,
                  btnServido.checked
              );
          }
          limpiaFormPedido();
          enableActions(true);
          loadData();
      }
  }
};

const limpiaFormPedido = () => {
  const { editPedido } = controlesPedidos();
  const hijos = editPedido.childNodes;
  for (let h of hijos) {
      h.value = "";
      h.checked = false;  // Para checkboxes como "procesado" o "servido"
  }
  editPedido.style.display = "none";
};

const eliminarPedidosEvt = () => { 
  //!Función para eliminar pedidos
  let numPedido = prompt("Introduce número de pedido");
  numPedido = parseInt(numPedido);

  if (isNaN(numPedido)) {
      alert("El número de pedido introducido no es válido");
  } else {
      eliminarPedidoPorNumero(numPedido);
  }
  loadData();
};

const modificarPedidosEvt = () => { 
  //!Función para modificar pedidos
  let pedidos = getPedidos();
  console.log(pedidos);
  loadData();
};

const loadEvents = () => { 
  //!Carga los eventos de añadir, eliminar y modificar
  const { btnAnyadir, btnEliminar, btnModificar } = controlesPedidos();
  if (btnAnyadir) btnAnyadir.addEventListener("click", accionPedidoEvt, false);
  if (btnEliminar) btnEliminar.addEventListener("click", eliminarPedidosEvt, false);
  if (btnModificar) btnModificar.addEventListener("click", showEditarPedidoEvt, false);
};

// Funciones auxiliares

const esFechaValida = (fecha) => { 
  //!Comprueba si la fecha introducida es válida
  const fechaRegex = /^\d{4}-\d{2}-\d{2}$/;  // Formato YYYY-MM-DD
  if (!fechaRegex.test(fecha)) return false;

  const fechaObj = new Date(fecha);
  const fechaActual = new Date();

  return fechaObj <= fechaActual;
};

const eliminarPedidoPorNumero = (numPedido) => {
  //!Función para eliminar pedido por número
  console.log("Eliminando pedido con número: " + numPedido);
};

const insertarPedido = (numPedido, cliente, fechaPedido, procesado, servido) => {
  //!Función para insertar un pedido
  console.log("Insertando nuevo pedido:", numPedido, cliente, fechaPedido, procesado, servido);
};

const getPedidos = () => {
  //!Función para obtener los pedidos
  return [
      { numPedido: 1, cliente: "Juan Pérez", fechaPedido: "2024-12-01", procesado: true, servido: false },
      { numPedido: 2, cliente: "Ana Gómez", fechaPedido: "2024-12-02", procesado: false, servido: true },
  ];
};

const pedidoExistente = (numPedido) => {
  //!Función para verificar si un pedido existe
  const pedidos = getPedidos();
  return pedidos.some(pedido => pedido.numPedido === numPedido);
};

const loadData = () => {
  //*Función para cargar o actualizar los datos
  console.log("Datos cargados o actualizados");
};

// Para las piezas

const controlesPiezas = () => { 
  //!Controlador para las piezas
  const txtNumPieza = document.getElementById("txtNumPieza"); 
  const cbNumPedi = document.getElementById("cbNumPedi"); 
  const cbLargo = document.getElementById("cbLargo"); 
  const cbAncho = document.getElementById("cbAncho"); 
  const cbGrosor = document.getElementById("cbGrosor"); 
  const txtColor = document.getElementById("txtColor");
  const btnAmbasCaras = document.getElementById("btnAmbasCaras");
  const btnCortada = document.getElementById("btnCortada");
  const btnAnyadirPieza = document.getElementById("btnAnyadirPieza");
  const btnEliminarPieza = document.getElementById("btnEliminarPieza");
  const btnModificarPieza = document.getElementById("btnModificarPieza");
  const editPieza = document.getElementById("editPieza");

  return {
      txtNumPieza,
      cbNumPedi,
      cbLargo,
      cbAncho,
      cbGrosor,
      txtColor,
      btnAmbasCaras,
      btnCortada,
      btnAnyadirPieza,
      btnEliminarPieza,
      btnModificarPieza,
      editPieza
  };
};

const showAnyadirPiezaEvt = () => {  
  const { editPieza } = controlesPiezas();
  if (editPieza) { 
      enableActions(false); 
      editPieza.style.display = "block"; 
      const hijos = editPieza.childNodes; 
      for (let h of hijos) { 
          h.value = ""; 
          h.disabled = false;
      }
  }
};

const showEditarPiezaEvt = () => { 
  const { txtNumPieza, editPieza } = controlesPiezas();
  let num = prompt("Introduce el número de la pieza", ""); 
  if (isNaN(num)) { 
      alert("El número introducido no es válido"); 
  } else if (num) { 
      num = parseInt(num); 
      if (!piezaExistente(num)) { 
          alert("La pieza que has introducido no existe"); 
      } else if (editPieza) { 
          editPieza.style.display = "block"; 
          txtNumPieza.disabled = true; 
          txtNumPieza.value = num; 
          enableActions(false); 
      }
  }
};

const accionPiezaEvt = () => {
  const { txtNumPieza, cbNumPedi, cbLargo, cbAncho, cbGrosor, txtColor, btnAmbasCaras, btnCortada } = controlesPiezas();
  
  let numPieza = parseInt(txtNumPieza.value);
  
  if (isNaN(numPieza) || numPieza < 1) {
      alert("El número de pieza no es válido o debe ser mayor o igual a 1");
      return;
  }

  if (cbNumPedi.value.trim() === "") {
      alert("Debe seleccionar un número de pedido");
      return;
  }

  if (cbLargo.value.trim() === "" || cbAncho.value.trim() === "" || cbGrosor.value.trim() === "") {
      alert("Largo, ancho y grosor son obligatorios");
      return;
  }

  if (txtColor.value.trim() === "") {
      alert("Debe especificar un color");
      return;
  }

  // Aquí puedes agregar la validación de si la pieza ya existe
  if (piezaExistente(numPieza)) {
      alert("El número de pieza ya existe");
      return;
  }

  insertarPieza(
      numPieza,
      cbNumPedi.value,
      cbLargo.value,
      cbAncho.value,
      cbGrosor.value,
      txtColor.value,
      btnAmbasCaras.checked,
      btnCortada.checked
  );

  limpiaFormPieza();
  habilitarAcciones(true);
  cargarDatosPiezas();
};

const limpiaFormPieza = () => {
  const { editPieza } = controlesPiezas();
  const hijos = editPieza.childNodes;
  for (let h of hijos) {
      h.value = "";       // Reinicia valores de input, select, textarea
      h.checked = false;  // Reinicia checkboxes y radios
  }
  editPieza.style.display = "none";
};

const eliminarPiezasEvt = () => { 
  //! Función para eliminar piezas por número
  let numPieza = prompt("Introduce el número de la pieza");
  numPieza = parseInt(numPieza);

  if (isNaN(numPieza)) {
      alert("El número de pieza introducido no es válido");
  } else {
      eliminarPiezaPorNumero(numPieza);
  }
  cargarDatosPiezas();
};

const modificarPiezasEvt = () => { 
  //! En esta constante se controla la función para modificar piezas
  let piezas = getPiezas();
  console.log(piezas);
  cargarDatosPiezas();
};

const loadEventsPiezas = () => { 
  //! Carga los eventos de añadir, eliminar y modificar piezas
  const { btnAnyadirPieza, btnEliminarPieza, btnModificarPieza } = controlesPiezas();
  if (btnAnyadirPieza) btnAnyadirPieza.addEventListener("click", accionPiezaEvt, false);
  if (btnEliminarPieza) btnEliminarPieza.addEventListener("click", eliminarPiezasEvt, false);
  if (btnModificarPieza) btnModificarPieza.addEventListener("click", showEditarPiezaEvt, false);
};

const eliminarPiezaPorNumero = (numPieza) => {
  //! Función para eliminar pieza por número
  console.log("Eliminando pieza con número: " + numPieza);
};

const insertarPieza = (numPieza, numPedido, largo, ancho, grosor, color, ambasCaras, cortada) => {
  //! Función para insertar una pieza
  console.log("Insertando nueva pieza:", numPieza, numPedido, largo, ancho, grosor, color, ambasCaras, cortada);
};

const getPiezas = () => {
  //! Función para obtener las piezas
  return [
      { numPieza: 1, numPedido: 101, largo: 200, ancho: 100, grosor: 2, color: "Rojo", ambasCaras: true, cortada: false },
      { numPieza: 2, numPedido: 102, largo: 150, ancho: 75, grosor: 3, color: "Azul", ambasCaras: false, cortada: true },
  ];
};

const piezaExistente = (numPieza) => {
  //! Función para verificar si una pieza existe
  const piezas = getPiezas();
  return piezas.some(pieza => pieza.numPieza === numPieza);
};

const cargarDatosPiezas = () => {
  //* Función para cargar o actualizar los datos de piezas
  console.log("Datos de piezas cargados o actualizados");
}; 
