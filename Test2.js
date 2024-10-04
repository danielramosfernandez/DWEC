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

    
}


    /* Prueba de funcionamiento dentro de consola */ 
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


    /* Ejemplos de conversion */
function conversiones2(){ 
    let cadena ="3.1415"; 
    let nombre ="42";  
    let nom="Joan";
    let aprobado =true; 
//conversiones con boolean  
/* solo da true si hay algo */
document.write(Boolean(cadena)); 
document.write("<br/>");
document.write(Boolean(0));
document.write("<br/>"); 
document.write(Boolean(" "));
document.write("<br/>");
document.write(Boolean(null));
document.write("<br/>");
document.write(Boolean(undefined));
document.write("<br/>");

//conversiones a cadena  
/* Estamos concatenando cadenas */
document.write(String(nombre)); 
document.write("<br/>");
document.write(String(nombre)+nombre);
document.write("<br/>");
document.write(String(aprobado)); 
document.write("<br/>");

//Conversiones a numeros 
document.write(Number(nom));
document.write("<br/>");
document.write(Number (cadena)*2);
document.write("<br/>");
document.write(Number(aprobado));
document.write("<br/>");
document.write(parseInt(cadena));
document.write("<br/>");
document.write(parseFloat(cadena));
document.write("<br/>"); 

} 


function literals(){ 
    const libs= ["React", "Vue", "Angular"]; 
    document.write("<br/>");
    document.write(`Este curso trata de ${libs[0]}`);
}


function literals2(){ 
    const libs= ["React", "Vue", "Angular"];     
    const l = libs.length; 
    document.write("<br/>");
    document.write(` ${l > 1 ? `Estas ${l} bibliotecas` : "Esta biblioteca"}: ${libs.join(", ")}`);
}  

function testUnidad2_1(){ 
    let nombre; 
    let nota; 
    nombre=prompt('Escribe el nombre:','Pon tu nombre');
    nota=prompt('Escriba su nota:', '');
    if(nota >= 5){ 
        alert(nombre+ ' está aprobado con un ' + nota);
    }
}
function testTest(){ 
    let valor; 
    do{ 
        valor= prompt('Ingrese un valor entre 0 y 999: ', ''); 
        valor=parseInt(valor); 
        document.write('El valor ' + valor + 'tiene'); 
        if (valor<0 || valor >999){ 
            document.write("El número no está en rango ")
        }
        if (valor<10)
            document.write('Tiene 1 dígito'); 
        else{ 
            if(valor<100)
                document.write('Tiene 2 dígitos'); 
            else if (valor<999) 
                document.write('Tiene 3 digitos');
            else
            document.write('El número no esta en el rango elegido');
        } 
        document.write('<br>  />'); 
        
    }
    while(valor>0 && valor<=999);
}

