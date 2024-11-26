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
let pedidos=[]; 

function registroPedidos(guardado){ 
    guardado.preventDefault();//Uso esta función para evitar que el navegador haga alguna interrupcion como una recarga 
    const numPedido = parseInt(document.getElementById('numero').value); 
    const cliente =document.getElementById('cliente').value;    
    const fechaPedido = document.getElementById('fechaPedido').value;  
    const procesado = document.getElementById('procesado').checked; 
    const servido= document.getElementById('servido').checked; 

    registrarPedido({numPedido,cliente,fechaPedido,procesado,servido}); 
} 
function guradarPedidos(){
    localStorage.setItem('Pedidos', JSON.stringify(Pedidos)); 
}  
function alta(pedidosAgregado){ 
    if (pedidos.find(u=>u.numPedido===pedidosAgregado.numPedido)){ 
        return alert("El pedido ya fue registrado anteriormente"); 

    }
    if(pedidosAgregado.numPedido<1|| numPedido.isInteger(pedidosAgregado.numPedido)){ 
        return alert('El número de pedido debe ser mayor de 1 y no puede ser dedcimal'); 
    } 
    pedidos.push(pedidosAgregado); 
    guradarPedidos(); 
    alert("Se ha agregado correctamente un pedido"); 
}
function baja(numPedido){ 
    const num =pedidos.findIndex(u=>u.numPedido===numPedido); 
    if (num!==-1){ 
        pedidos.splice(num,1); 
        guradarPedidos(); 
        alert('El pedido ${numPedido} fue eliminado de manera correcta'); 
    }else{ 
        alert('No se ha podido encontrar el pedido con número ${numPedido}'); 
    }
} 
function modificado(guardado){ 
    guardado.preventDefault(); 
    const numPedido = parseInt(document.getElementById('numero').value); 
    const cliente =document.getElementById('cliente').value;    
    const fechaPedido = document.getElementById('fechaPedido').value;  
    const procesado = document.getElementById('procesado').checked; 
    const servido= document.getElementById('servido').checked;  
    

const modificado=pedidos.findIndex(u=>u.numPedido===numPedido); 
if (modificado===-1){
    alert('El pedido que esta siendo modificado no existe. Por favor introduzca uno correcto'); 
    return; 
}
 pedidos[modificado]={numPedido,cliente,fechaPedido,procesado,servido}; 
 localStorage.setItem('pedidos',JSON.stringify(pedidos)); 

 alert('Se ha modificado correctamente el pedido');
    
} 
