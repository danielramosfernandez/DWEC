document.getElementById('formPieza').addEventListener('submit', function(e) {
    e.preventDefault();
    const numeroPieza = document.getElementById('numeroPieza').value;
    const numeroPedidoPieza = document.getElementById('numeroPedidoPieza').value;
    const largo = document.getElementById('largo').value;

    // Validación y almacenamiento en LocalStorage
    if (numeroPieza > 0 && numeroPedidoPieza > 0) {
        let piezas = localStorage.getItem('piezas') ? localStorage.getItem('piezas').split(',') : [];
        
        if (!piezas.includes(numeroPieza)) {
            piezas.push(numeroPieza);
            localStorage.setItem('piezas', piezas.join(','));
            alert('Pieza guardada correctamente.');
            mostrarPiezas();
        } else {
            alert('El número de pieza ya existe.');
        }
    } else {
        alert('El número de pieza y pedido deben ser mayores que 0.');
    }
});

function mostrarPiezas() {
    const listaPiezas = document.getElementById('listaPiezas');
    listaPiezas.innerHTML = '';
    const piezas = localStorage.getItem('piezas') ? localStorage.getItem('piezas').split(',') : [];
    piezas.forEach(p => {
        listaPiezas.innerHTML += `<p>Pieza ${p}</p>`;
    });
}

mostrarPiezas();
