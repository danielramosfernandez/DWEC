/*Piezas. En este tipo de datos se recogen las piezas que pueden servirse en un pedido. Debe
incluir la siguiente información:
o Número de pieza. Aunque son piezas al corte, se identificará cada una de ellas de
forma única con un número entero.
o Número de pedido. Pedido al que está asociada la pieza. Al ser a medida, cada pieza
solo puede pertenecer a un pedido.
o Largo: el largo de la pieza en cm.
o Ancho: el ancho de la pieza en cm.
o Grosor: el grosor de la pieza en cm.
o Color: el color del chapeado de la pieza. Si se guarda con el color “Natural” quiere
decir que no lleva chapeado.
o AmbasCaras: si deben estar chapeadas las dos caras
o Cortada: que indicará si la pieza ya ha sido cortada 

La aplicación permitirá dar de alta, baja, modificar y consultar piezas de carpintería. Se deberá
comprobar lo siguiente:
a) Que no se intenta dar de alta un número de pieza ya existente y que este es mayor o igual
que 1 no admitiendo decimales.
b) Que el número de pedido introducido ya existe en la lista de pedidos.
c) Que los tipos son adecuados a cada campo.
d) Que se tienen en cuenta los límites inferiores de los campos numéricos (en medidas, que sean
mayores que 0).*/ 
let piezas=[]; 
function registroPiezas(guarda){ 
    guarda.preventDefault(); 
    const numPieza = parseInt(document.getElementById('numPieza').value); 
    const numPedido= parseInt(document.getElementById('numPedido').value); 
    const largo = parseInt(document.getElementById('largo').value); 
    const ancho= parseInt(document.getElementById('ancho').value); 
    const color=document.getElement
}