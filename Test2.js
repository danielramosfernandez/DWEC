function testUnidad2(){
    var cadena= "abc";
    var cadena2= String("abc");
    var cadena3= new String("abc");
    //console.log(typeof "abc");
    document.write(typeof cadena); 
    /* Document en javascript es lo mismo que un system out en java */
    document.write("<br/>");
    document.write(typeof cadena2); 
    document.write("<br/>");
    document.write(typeof cadena3); 
    document.write("<br/>");
    document.write(typeof cadena3.valueOf());
    document.write("<br/>"); 
    let longitud =10; 
    longitud="10"; 
    document.write(typeof longitud); 
    
    if(cadena == "abc"){ 
     var x = 10;
    }
    document.write("<br/>");
    document.write(x); 
    document.write("<br/>"); 

    /* Prueba de funcionamiento dentro de consola */ 
}
function bloques(){
let extLet=1; 
let extVar=1; 
if(true){ 
    let intLet=1; 
    let intVar=1; 
    
    console.log("Dentro del bloque"); 
    console.log("extLet: ", extLet); 
    console.log("extVar: ", extVar); 
    console.log("intLet: ", intLet); 
    console.log("intVar: ", intVar); 
}
    console.log("Fuera del bloque");
    console.log("extLet: ", extLet); 
    console.log("extVar: ", extVar); 
    console.log("intLet: ", intLet); 
    console.log("intVar: ", intVar);  
}
    /* Conversión de tipos */
function animales(){
let animal = "Aguila";  //String 
let numPatas= 2; //Numero

document.write(animal+numPatas); // el resultado va a ser Aguila2
}

