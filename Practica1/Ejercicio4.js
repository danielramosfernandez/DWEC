function dosCuatro(){ 
    const nombre = prompt("Nombre :"); 
    const edad= prompt("Edad: "); 
    
    if (nombre && edad){ 
    
        const diasVivo = edad * 365; 
    document.write("La persona ", nombre, " de edad ", edad, " lleva vivo: ", diasVivo, " días");
    
    }
}