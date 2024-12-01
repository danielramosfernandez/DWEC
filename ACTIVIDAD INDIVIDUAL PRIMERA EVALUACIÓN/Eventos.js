// Obtener los controles del formulario
const controlesPedidos = () => { 
    const txtNumPedido = document.getElementById("txtNumPedido"); 
    const cbCliente = document.getElementById("cbCliente"); 
    const txtFechaPedido = document.getElementById("txtFechaPedido"); 
    const btnProcesado = document.getElementById("btnProcesado"); 
    const btnServido = document.getElementById("btnServido"); 
    const btnAnyadir = document.getElementById("btnAnyadir");
    const btnEliminar = document.getElementById("btnEliminar");
    const btnModificar = document.getElementById("btnModificar");
    const editPedido = document.getElementById("editPedido");
};

const showAnyadirPedidoEvt = function () { 
    if (editPedido) { 
        enableActions(false); 
        editPedido.style = "display:block;"; 
        const hijos = editPedido.childNodes; 
        for (let h of hijos) { 
            h.value = ""; 
            h.disabled = "";
        }
    }
};

const showEditarPedidoEvt = () => { 
    let num = prompt("Introduce el número de pedido", ""); 
    if (isNaN(num)) { 
        alert("El número introducido no es válido"); 
    } else if (num) { 
        num = parseInt(num); 
        if (!pedidoExistente(num)) { 
            alert("El pedido que has introducido no existe"); 
        } else if (editPedido) { 
            editPedido.style = "display:block;"; 
            txtNumPedido.disabled = "disabled"; 
            txtNumPedido.value = num; 
            enableActions(false); 
        }
    }
};

const enableActions = (enabled) => {
    btnProcesado.disabled = !Boolean(enabled); 
    btnServido.disabled = !Boolean(enabled); 
};

const accionPedidoEvt = () => {
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
        if (existePedido(numPedido)) {
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
    const hijos = editPedido.childNodes;
    for (let h of hijos) {
      h.value = "";
      h.checked = false;  // Para checkboxes como "procesado" o "servido"
    }
    editPedido.style = "display:none;";
};

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

const modificarPedidosEvt = () => {
    let pedidos = getPedidos();
    console.log(pedidos);
    loadData();
};

const loadEvents = () => {
    if (btnAnyadir) btnAnyadir.addEventListener("click", accionPedidoEvt, false);
    if (btnEliminar) btnEliminar.addEventListener("click", eliminarPedidosEvt, false);
    if (btnModificar) btnModificar.addEventListener("click", showEditarPedidoEvt, false);
};

// Funciones auxiliares

const esFechaValida = (fecha) => {
    const fechaRegex = /^\d{4}-\d{2}-\d{2}$/;  // Formato YYYY-MM-DD
    if (!fechaRegex.test(fecha)) return false;

    const fechaObj = new Date(fecha);
    const fechaActual = new Date();

    return fechaObj <= fechaActual;
};

const eliminarPedidoPorNumero = (numPedido) => {
    // Función para eliminar un pedido por su número
    console.log("Eliminando pedido con número: " + numPedido);
};

const insertarPedido = (numPedido, cliente, fechaPedido, procesado, servido) => {
    // Función para insertar un pedido
    console.log("Insertando nuevo pedido:", numPedido, cliente, fechaPedido, procesado, servido);
};

const getPedidos = () => {
    // Función para obtener los pedidos
    return [
      { numPedido: 1, cliente: "Juan Pérez", fechaPedido: "2024-12-01", procesado: true, servido: false },
      { numPedido: 2, cliente: "Ana Gómez", fechaPedido: "2024-12-02", procesado: false, servido: true },
    ];
};

const pedidoExistente = (numPedido) => {
    // Comprobar si el pedido existe (esto puede ser una llamada a la base de datos o comprobación en una lista)
    const pedidos = getPedidos();
    return pedidos.some(pedido => pedido.numPedido === numPedido);
};

const loadData = () => {
    // Función para cargar o actualizar los datos
    console.log("Datos cargados o actualizados");
};
