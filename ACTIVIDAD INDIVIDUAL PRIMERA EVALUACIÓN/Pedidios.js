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
class pedido{ 
    constructor(numPedido,cliente,fechaPedido,procesado,servicio){ 
        this.numPedido=numPedido; 
        this.cliente=cliente; 
        this.fechaPedido=new Date(fechaPedido); 
        this.procesado=procesado; 
        this.servicio=servicio; 
    }
} 
class gestionPedidos{ 
    constructor(){ 
        this.pedidos=[];
    }

alta(numPedido,cliente,fechaPedido,procesado,servicio){ 
    let nuevoPedido=new pedido(numPedido,cliente,fechaPedido,procesado,servicio); 
    this.pedidos.push(nuevoPedido); 
} 
baja(numPedido){ 
    this.pedidos=this.pedidos.filter(u=>u.numPedido!==numPedido);  
}
consulta(numPedido){ 
    let u=this.pedidos.find(u=>u.numPedido===numPedido); 
    u? document.write('Pedido encontrado'): document.write('El pedido no está localizado'); 
}
}