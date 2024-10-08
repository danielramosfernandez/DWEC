
function dosDiez(){ 
    let num = parseInt(prompt("Introduce un número para iniciar la cuenta atrás"));
    if (isNaN(num)||num<=0){ 
        alert("Ingrese un número mayor a 0.");
    }else{ 
        while (num>=0){ 
            document.write("Número actual ",num)
            num--; 
        }
        alert("Cuenta atras ")
    }

}