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
    editPedido,
  };
};

// Función para mostrar el formulario de añadir pedido
const showAnyadirPedidoEvt = () => {
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

// Función para habilitar o deshabilitar los botones de acción
const enableActions = (enabled) => {
  const { btnProcesado, btnServido } = controlesPedidos();
  btnProcesado.disabled = !enabled;
  btnServido.disabled = !enabled;
};

// Función para manejar el evento de añadir un pedido
const accionPedidoEvt = () => {
  const { txtNumPedido, cbCliente, txtFechaPedido, btnProcesado, btnServido } = controlesPedidos();

  if (txtNumPedido) {
    let numPedido = parseInt(txtNumPedido.value);
    if (isNaN(numPedido)) {
      alert("El número de pedido no es válido");
    } else if (numPedido < 1) {
      alert("El número de pedido debe ser mayor o igual a 1");
    } else if (txtFechaPedido.value === "") {
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

// Función para limpiar el formulario de pedidos
const limpiaFormPedido = () => {
  const { editPedido } = controlesPedidos();
  const hijos = editPedido.childNodes;
  for (let h of hijos) {
    h.value = "";
    h.checked = false; // Para checkboxes como "procesado" o "servido"
  }
  editPedido.style.display = "none";
};

// Función para eliminar pedidos
const eliminarPedidosEvt = () => {
  let numPedido = prompt("Introduce número de pedido");
  numPedido = parseInt(numPedido);

  if (isNaN(numPedido)) {
    alert("El número de pedido introducido no es válido");
  } else {
    eliminarPedidoPorNumero(numPedido);
  }
  loadData();
};

// Función para insertar un pedido
const insertarPedido = (numPedido, cliente, fechaPedido, procesado, servido) => {
  console.log("Insertando nuevo pedido:", numPedido, cliente, fechaPedido, procesado, servido);
};

// Función para comprobar si un pedido existe
const pedidoExistente = (numPedido) => {
  const pedidos = getPedidos();
  return pedidos.some((pedido) => pedido.numPedido === numPedido);
};

// Función para obtener los pedidos
const getPedidos = () => {
  return [
    { numPedido: 1, cliente: "Juan Pérez", fechaPedido: "2024-12-01", procesado: true, servido: false },
    { numPedido: 2, cliente: "Ana Gómez", fechaPedido: "2024-12-02", procesado: false, servido: true },
  ];
};

// Función para validar la fecha
const esFechaValida = (fecha) => {
  const fechaRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!fechaRegex.test(fecha)) return false;

  const fechaObj = new Date(fecha);
  const fechaActual = new Date();

  return fechaObj <= fechaActual;
};

// Función para cargar los datos
const loadData = () => {
  console.log("Datos cargados o actualizados");
};

// Asignar eventos
const loadEvents = () => {
  const { btnAnyadir, btnEliminar, btnModificar } = controlesPedidos();
  if (btnAnyadir) btnAnyadir.addEventListener("click", showAnyadirPedidoEvt, false);
  if (btnEliminar) btnEliminar.addEventListener("click", eliminarPedidosEvt, false);
};

// Piezas

const controlesPiezas = () => {
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
    editPieza,
  };
};

// Función para mostrar el formulario de añadir pieza
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

// Función para manejar el evento de añadir una pieza
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

// Función para limpiar el formulario de piezas
const limpiaFormPieza = () => {
  const { editPieza } = controlesPiezas();
  const hijos = editPieza.childNodes;
  for (let h of hijos) {
    h.value = "";
    h.checked = false;
  }
  editPieza.style.display = "none";
};

// Función para insertar una pieza
const insertarPieza = (numPieza, numPedido, largo, ancho, grosor, color, ambasCaras, cortada) => {
  console.log("Insertando nueva pieza:", numPieza, numPedido, largo, ancho, grosor, color, ambasCaras, cortada);
};

// Función para verificar si una pieza existe
const piezaExistente = (numPieza) => {
  const piezas = getPiezas();
  return piezas.some((pieza) => pieza.numPieza === numPieza);
};

// Función para obtener las piezas
const getPiezas = () => {
  return [
    { numPieza: 1, numPedido: 1, largo: 100, ancho: 50, grosor: 5, color: "Rojo", ambasCaras: true, cortada: false },
    { numPieza: 2, numPedido: 2, largo: 120, ancho: 60, grosor: 6, color: "Azul", ambasCaras: false, cortada: true },
  ];
};

// Función para cargar los datos de piezas
const cargarDatosPiezas = () => {
  console.log("Datos de piezas cargados");
};

// Asignar eventos a los botones de piezas
const loadEventsPiezas = () => {
  const { btnAnyadirPieza, btnEliminarPieza, btnModificarPieza } = controlesPiezas();
  if (btnAnyadirPieza) btnAnyadirPieza.addEventListener("click", showAnyadirPiezaEvt, false);
  if (btnEliminarPieza) btnEliminarPieza.addEventListener("click", eliminarPiezasEvt, false);
};

