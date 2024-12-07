document.getElementById('formPedido').addEventListener('submit', function(e) {
    e.preventDefault();
    const numeroPedido = document.getElementById('numeroPedido').value;
    const cliente = document.getElementById('cliente').value;
    const fechaPedido = document.getElementById('fechaPedido').value;

    // Validación y almacenamiento en LocalStorage
    if (numeroPedido > 0) {
        let pedidos = localStorage.getItem('pedidos') ? localStorage.getItem('pedidos').split(',') : [];
        
        if (!pedidos.includes(numeroPedido)) {
            pedidos.push(numeroPedido);
            localStorage.setItem('pedidos', pedidos.join(','));
            alert('Pedido guardado correctamente.');
            mostrarPedidos();
        } else {
            alert('El número de pedido ya existe.');
        }
    } else {
        alert('El número de pedido debe ser mayor que 0.');
    }
});

function mostrarPedidos() {
    const listaPedidos = document.getElementById('listaPedidos');
    listaPedidos.innerHTML = '';
    const pedidos = localStorage.getItem('pedidos') ? localStorage.getItem('pedidos').split(',') : [];
    pedidos.forEach(p => {
        listaPedidos.innerHTML += `<p>Pedido ${p}</p>`;
    });
}

mostrarPedidos();
