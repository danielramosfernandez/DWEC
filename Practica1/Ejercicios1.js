function dosUno(){
alert("Hola mundo");
}

function dosDos(){ 
document.write("Hola mundo"); 
}

function dosTres(){ 
let num1=10; 
let num2=5; 
let divi=0; 
divi=num1/num2; 
document.write("El resultado es ", divi);
} 

function dosCuatro(){ 
const nombre = prompt("Nombre :"); 
const edad= prompt("Edad: "); 

if (nombre && edad){ 

    const diasVivo = edad * 365; 
document.write("La persona ", nombre, " de edad ", edad, " lleva vivo: ", diasVivo, " días");

}


}