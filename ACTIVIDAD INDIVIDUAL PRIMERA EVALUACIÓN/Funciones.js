import { Pedidos } from "./objetos"; 
import { Piezas } from "./objetos";
//Recuerda preguntarle al profe si lo prefiere los dos objetos 
//En una línea de código o así.  
var pedidos; 
var piezas; 

function almacenar(){ 
    /* En esta función lo que estoy haciendo es guardar  
       la información en unos arrays llamados PEDIDOS y 
       PIEZAS, ambos arrays están declarados en la parte 
       de arriba con los var */
    localStorage.setItem("pedidos",JSON.stringify(pedidos)); 
    localStorage.setItem("lineas".JSON.stringify(piezas));
} 

function almacenadas(){ 
    /* Dentro de esta función creo un par de PEDIDOS y 
       y de PIEZAS y las guardo en los respectivos arrays. */ 
       pedidos=[]; //numPedido-cliente-fechaPedido-procesado-servido
       piezas=[];//numPieza-numPedi-largo-ancho-grosor-color-ambasCaras-cortada

       //aqui introduzco dos PEDIDOS con su informacion
       pedidos.push(new Pedidos(1,"Daniel","27/11/2024",true,true)); 
       pedidos.push(new Pedidos(2,"Cesar","26/11/2024",true,false));  
       //y aqui de dos PIEZAS para estos pedidos 
       piezas.push(new Piezas(1,2,130,50,20,"Roble",false,true)); 
       piezas.push(new Piezas(2,1,230,100,30,"Abedúl",true,true)); 
       //A continuación lo guardamos en almacenar 
        almacenar(); 
} 
function reiniciar(){ 
    //Aqui reinicio el alamacenamiento de PIEZAS y PEDIDOS 
    localStorage.removeItem("pedidos"); 
    //y ahora llamamos al metodo anterior para almacenar la nueva información 
    almacenadas(); 
}
function recuperacionPedidos(){ 
    //Dentro de este metodo lo que har´e será almacenar la información que se introdujo en almacenadas 
    //recuperamos los PEDIDOS
    return JSON.parse(localStorage.getItem("pedidos")); 
}
function recuperacionPiezas(){ 
      //y ahora recuperamos las PIEZAS
    return JSON.parse(localStorage.getItem("piezas")); 
} 
function comparadorPedidos(pe1,pe2){  
    //Este metodo tiene la función de ordenar los PEDIDOS segun el orden del numero
    if(pe1.numPedido>pe2.numPedido) return 1; 
    else if(pe1.numPedido<pe2.numPedido)return -1; 
    else return 0; 
} 
function comparadorPiezas(pi1,pi2){ 
    //Esta función ordenara las PIEZAS
    if(pi1.numPedido>pi2.numPedido) return 1; 
    else if(pi1.numPedido<pi2.numPedido)return -1; 
    else return 0; 
} 
const pedidoExistente=(numero)=>{ 
    //Este metodo sirve para comprobar si ya tengo algun PEDIDO existente
    if (!pedidos) pedidos=recuperacionPedidos(); 
    return pedidos.some(pe => pe.numPedido===numero); 
} 
const piezaExistente=(numero)=>{  
    //Este metodo comprueba si ya hay una PIEZA existente
    if(!piezas) piezas=recuperacionPiezas(); 
    return piezas.some(pi=>pi.numPieza===numero); 
} 
const getPedidoPorNum=()=>recuperacionPedidos().find((pe)=>pe.numPedido===numero);//busca los PEDIDOS en base al numero de pedido
const getPiezaPorNum=()=>recuperacionPiezas().find((pi)=>pi.numPieza===numero);//busca las PIEZAS en base al numero identificador de la pieza

function nuevoPedidos(numPedido,cliente,fechaPedido,procesado,servido){  
    //Esta función se encarga de crear  nuevos PEDIDOS
    if(!pedidos) pedidos= recuperacionPedidos(); 
    pedidos.push(new Pedidos(numPedido,cliente,fechaPedido,procesado,servido)); 
    pedidos.sort(comparadorPedidos); 
    almacenar(); 
}
function nuevasPiezas(numPieza,numPedi,largo,ancho,grosor,color,ambasCaras,cortada){
    //Esta función se encarga de crear nuevas PIEZAS
    if(!piezas) piezas =recuperacionPiezas(); 
    piezas.push(new Piezas(numPieza,numPedi,largo,ancho,grosor,color,ambasCaras,cortada)); 
    piezas.sort(comparadorPiezas); 
    almacenar(); 
}
function eliminado_Pedido_Por_NumeroPedido(num){  
    //Aqui elimino un PEDIDO en funcion de su número
    if(!pedidos) pedidos=recuperacionPedidos(); 
    pedidos=pedidos.filter((pe)=> pe.numPedido !== num); 
    almacenar();
}
function elminado_Piezas_Por_NumeroPieza(num){ 
    //Por otra parte en esta otra funcion se elimina la PIEZA en funcion de su número identificativo 
    if(!piezas) piezas=recuperacionPiezas(); 
    piezas=piezas.filter((pi)=>pi.numPieza !== num); 
    almacenar(); 
}
function modificar_Pedidos_Por_NumPedido(nuNumPedido,nuCliente,nuFechaPedido,nuProcesado,nuServido){  
    //Gracias a esta funcion se podra modificar los PEDIDOS y se accedera a ella introduciendo el numero de pedido
    if(!pedidos) pedidos=recuperacionPedidos(); 
    let PeDiDo = pedidos.find((pe)=>pe.numPedido===nuNumPedido); 

    if(PeDiDo){ 
        PeDiDo.cliente=nuCliente; 
        PeDiDo.fechaPedido=nuFechaPedido; 
        PeDiDo.procesado=nuProcesado; 
        PeDiDo.servido=nuServido; 
        almacenar(); 
    } 
}
function modificar_Piezas_Por_NumPieza(nuNumPieza,nuNumPedi,nuLargo,nuAncho,nuGrosor,nuColor,nuAmbasCaras,nuCortada){  
    //Al igual que en el metodo anterior esta función modificara una PIEZA usando su número de identificación para localizarlo 
    if(!piezas) piezas=recuperacionPiezas(); 
    let PiEzAs = piezas.find((pi)=>pi.numPieza===nuNumPieza); 

    if(PiEzAs){ 
        PiEzAs.nuNumPedi=nuNumPedi; 
        PiEzAs.largo=nuLargo; 
        PiEzAs.ancho=nuAncho; 
        PiEzAs.grosor=nuGrosor;
        PiEzAs.color=nuColor; 
        PiEzAs.ambasCaras=nuAmbasCaras; 
        PiEzAs.cortada=nuCortada; 
        almacenar(); 
    } 
}
const cargaPieza = function(){  
    //Esta funcion se encarga de crear la tabla de las PIEZAS
    let piezas = recuperacionPiezas(); 
    let tblBody = document.getElementById("tblPieza").appendChild("tbody"); 
    
    if(!tblBody){ 
        tblBody=document.createElement("tbody"); 
        document.getElementById("tblPieza").appendChild("tbody"); 
    }
    tblBody.innerHTML=""; 
    piezas.forEach((pi1)=>{
        let fila=document.createElement("tr"); 
        let tdNumeroPieza=document.createElement("td"); 
        tdNumeroPieza.textContent=pi1.numPieza; 
        let tdNumeroPedido=document.createElement("td"); 
        tdNumeroPedido.textContent=pi1.numPedi; 
        let tdLargo=document.createElement("td"); 
        tdLargo.textContent=pi1.largo; 
        let tdAncho=document.createElement("td"); 
        tdAncho.textContent=pi1.ancho; 
        let tdGrosor=document.createElement("td"); 
        tdGrosor.textContent=pi1.grosor; 
        let tdColor=document.createElement("td"); 
        tdColor.textContent=pi1.color; 

        fila.appendChild(tdNumeroPieza); 
        fila.appendChild(tdNumeroPedido); 
        fila.appendChild(tdLargo); 
        fila.appendChild(tdAncho); 
        fila.appendChild(tdGrosor); 
        fila.appendChild(tdColor);
    });
}
const importarFunciones=()=>{  
    /* Este metodo se encargara de darle un "window" a todos los metodos y const 
       dando la posibilidad de que estos puedan ser llamados desde cualquier otro 
       archivo */

    window.almacenar=almacenar; //almacenar PEDIDOS y PIEZAS

    window.almacenadas=almacenadas;//cargar PIEZAS Y PEDIDOS directamente en el codigo 

    window.reiniciar=reiniciar;//reinicio de almacenamiento de PIEZAS y PEDIDOS 

    window.recuperacionPedidos=recuperacionPedidos;//se almacena la nueva informacion de PEDIDOS

    window.recuperacionPiezas=recuperacionPiezas;//almacena la nueva información de PIEZAS 

    window.comparadorPedidos=comparadorPedidos;//ordena por orden numerico los PEDIDOS 

    window.comparadorPiezas=comparadorPiezas;//ordena por orden numerico las PIEZAS 

    window.pedidoExistente=pedidoExistente;//comprueba que no haya PEDIDOS existentes 

    window.piezaExistente=piezaExistente;//comprueba que no haya PIEZAS existentes 

    window.getPedidoPorNum=getPedidoPorNum;//Se busca el PEDIDO a traves de su numero

    window.getPiezaPorNum=getPiezaPorNum;//Se busca la PIEZA a traves de su numero

    window.nuevoPedidos=nuevoPedidos;//Se crean nuevos PENDIDOS 

    window.nuevasPiezas=nuevasPiezas;//Se crean nuevas PIEZAS

    window.eliminado_Pedido_Por_NumeroPedido=eliminado_Pedido_Por_NumeroPedido;//Se eliminan PEDIDOS en base a su numero 

    window.elminado_Piezas_Por_NumeroPieza=elminado_Piezas_Por_NumeroPieza;//Se eliminan PIEZAS en base a su numero identificativo

    window.modificar_Pedidos_Por_NumPedido=modificar_Pedidos_Por_NumPedido;//sirve para modificiar PEDIDOS

    window.modificar_Piezas_Por_NumPieza=modificar_Piezas_Por_NumPieza;//se modifica las PIEZAS

    window.cargaPieza=cargaPieza;//Sirve para cargar PIEZAS en una tabla


}