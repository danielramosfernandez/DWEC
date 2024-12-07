// Asignar los controles de la interfaz de usuario para pedidos
const controlesPedidos = () => {
  const txtNumPedido = document.getElementById("txtNumPedido");
  const cbCliente = document.getElementById("cbCliente");
  const txtFechaPedido = document.getElementById("txtFechaPedido");
  const btnProcesado = document.getElementById("btnProcesado");
  const btnServido = document.getElementById("btnServido");
  const btnAnyadir = document.getElementById("btnAnyadir");
  const btnEliminar = document.getElementById("btnEliminar");
  const btnModificar = document.getElementById("btnModificar");

  return {
      txtNumPedido,
      cbCliente,
      txtFechaPedido,
      btnProcesado,
      btnServido,
      btnAnyadir,
      btnEliminar,
      btnModificar,
  };
};

const accionPedidoEvt = () => {
  const { txtNumPedido, cbCliente, txtFechaPedido, btnProcesado, btnServido } = controlesPedidos();

  const numPedido = parseInt(txtNumPedido.value);
  if (isNaN(numPedido) || numPedido < 1) {
      alert("Número de pedido no válido");
      return;
  }

  if (pedidoExistente(numPedido)) {
      alert("El pedido ya existe");
  } else {
      nuevoPedidos(numPedido, cbCliente.value, txtFechaPedido.value, btnProcesado.checked, btnServido.checked);
      loadData(); // Recargar la tabla después de añadir el pedido
  }
};


// Función para eliminar un pedido
const eliminarPedidoEvt = () => {
  const numPedido = prompt("Introduce el número de pedido a eliminar:");
  if (numPedido) {
      eliminar_Pedido_Por_NumeroPedido(parseInt(numPedido));
      loadData(); // Recarga la tabla después de eliminar el pedido
  }
};

// Función para modificar un pedido
const accionModificarPedidoEvt = () => {
  const { txtNumPedido, cbCliente, txtFechaPedido, btnProcesado, btnServido } = controlesPedidos();

  const numPedido = parseInt(txtNumPedido.value);
  if (isNaN(numPedido) || numPedido < 1) {
      alert("Número de pedido no válido");
      return;
  }

  modificar_Pedidos_Por_NumPedido(numPedido, cbCliente.value, txtFechaPedido.value, btnProcesado.checked, btnServido.checked);
  loadData(); // Recarga la tabla después de modificar el pedido
};

// Asignar eventos a los botones de Pedidos
const loadEvents = () => {
  const { btnAnyadir, btnEliminar, btnModificar } = controlesPedidos();
  btnAnyadir.addEventListener("click", accionPedidoEvt);
  btnEliminar.addEventListener("click", eliminarPedidoEvt);
  btnModificar.addEventListener("click", accionModificarPedidoEvt);
};

const loadData = () => {
  const pedidos = recuperacionPedidos(); // Obtener pedidos desde localStorage
  const tblBody = document.getElementById("tblBodyPedidos");

  tblBody.innerHTML = ""; // Limpiar la tabla antes de llenarla

  pedidos.forEach(pedido => {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${pedido.NumPedido}</td>
          <td>${pedido.Cliente}</td>
          <td>${pedido.FechaPedido}</td>
          <td>${pedido.Procesado ? "Sí" : "No"}</td>
          <td>${pedido.Servido ? "Sí" : "No"}</td>
      `;
      tblBody.appendChild(row); // Añadir la fila a la tabla
  });
};


// Funciones para piezas
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
  };
};

// Función para añadir una pieza
const accionPiezaEvt = () => {
  const { txtNumPieza, cbNumPedi, cbLargo, cbAncho, cbGrosor, txtColor, btnAmbasCaras, btnCortada } = controlesPiezas();

  const numPieza = parseInt(txtNumPieza.value);
  if (isNaN(numPieza) || numPieza < 1) {
      alert("Número de pieza no válido");
      return;
  }

  if (piezaExistente(numPieza)) {
      alert("La pieza ya existe");
  } else {
      nuevasPiezas(numPieza, cbNumPedi.value, parseFloat(cbLargo.value),
          parseFloat(cbAncho.value), parseFloat(cbGrosor.value), txtColor.value,
          btnAmbasCaras.checked, btnCortada.checked);
      cargaPieza(); // Recarga la tabla después de añadir la pieza
  }
};

// Función para eliminar una pieza
const eliminarPiezaEvt = () => {
  const numPieza = prompt("Introduce el número de pieza a eliminar:");
  if (numPieza) {
      eliminar_Pieza_Por_NumeroPieza(parseInt(numPieza));
      cargaPieza(); // Recarga la tabla después de eliminar la pieza
  }
};

// Función para modificar una pieza
const accionModificarPiezaEvt = () => {
  const { txtNumPieza, cbNumPedi, cbLargo, cbAncho, cbGrosor, txtColor, btnAmbasCaras, btnCortada } = controlesPiezas();

  const numPieza = parseInt(txtNumPieza.value);
  if (isNaN(numPieza) || numPieza < 1) {
      alert("Número de pieza no válido");
      return;
  }

  modificar_Piezas_Por_NumPieza(numPieza, cbNumPedi.value, parseFloat(cbLargo.value),
      parseFloat(cbAncho.value), parseFloat(cbGrosor.value), txtColor.value,
      btnAmbasCaras.checked, btnCortada.checked);
  cargaPieza(); // Recarga la tabla después de modificar la pieza
};

const { btnAnyadir, btnEliminar, btnModificar } = controlesPedidos();
btnAnyadir.addEventListener("click", accionPedidoEvt);
btnEliminar.addEventListener("click", eliminarPedidoEvt);
btnModificar.addEventListener("click", accionModificarPedidoEvt);
