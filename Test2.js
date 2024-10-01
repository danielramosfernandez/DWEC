function testUnidad2(){
    var cadena= "abc\n";
    var cadena2= String("abc\n");
    var cadena3= new String("abc\n");
    //console.log(typeof "abc");
    document.write(typeof cadena); 
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
}