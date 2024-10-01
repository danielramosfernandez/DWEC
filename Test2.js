function testUnidad2(){
    var cadena= "abc\n";
    var cadena2= String("abc\n");
    var cadena3= new String("abc\n");
    document.write(typeof cadena); 
    document.write("<br/>")
    document.write(typeof cadena2); 

    document.write(typeof cadena3); 

    document.write(typeof cadena3.valueOf());
}