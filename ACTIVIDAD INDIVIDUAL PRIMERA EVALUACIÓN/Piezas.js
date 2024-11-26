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
class pieza{ 
    constructor(numPieza,numPedido,largo,ancho,grosor,color,ambasCaras,cortada){
        this.numPieza=numPieza; 
        this.numPedido=numPedido; 
        this.largo=largo; 
        this.ancho=ancho; 
        this.grosor=grosor; 
        this.color=color; 
        this.ambasCaras=ambasCaras; 
        this.cortada=cortada;
    }
} 
class gestionPiezas{ 
    constructor(){ 
        this.piezas=[]; 
    }
    alta(numPieza,numPedido,largo,ancho,grosor,color,ambasCaras,cortada){ 
        let nuevaPieza=new pieza(numPieza,numPedido,largo,ancho,grosor,color,ambasCaras,cortada);
        this.piezas.push(nuevaPieza); 
    }
    baja(numPieza){ 
        this.piezas=this.piezas.filter(u=>u.numPieza!==numPieza); 
    } 
    consulta(numPieza){ 
        let u=this.piezas.find(u=>u.numPieza===numPieza); 
        u?document.write('Pieza encontrada'):document.write('Pieza no encontrada');
    }
}