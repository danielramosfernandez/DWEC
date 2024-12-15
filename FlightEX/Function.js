class Vuelo{ 
    constructor(codigo,numeroPlazas,importeBillete){ 
        this.codigo=codigo; 
        this.numeroPlazas=numeroPlazas; 
        this.importeBillete=importeBillete; 
}
} 
class VueloMuyRentable{ 
    constructor(codigoVuelo,ingresoEstimado){ 
        this.codigoVuelo=codigoVuelo; 
        this.ingresoEstimado=ingresoEstimado;
    }
}  

const vuelos=[]; 
const vuelosMuyRentables=[];

function anyadirVuelo(codigo,numeroPlazas,importeBillete){ 
    if (!codigo || numeroPlazas<=0 || importeBillete<=0){ 
        alert("Los datos introducidos son erroneos "); 
        return;
    }
    vuelos.push({codigo,numeroPlazas,importeBillete}); 
    mostrarVuelos(); 
} 


function modificarVuelos(codigo,nuevaPlaza,nuevoImporte){ 
    const vueel = vuelos.find(p => p.codigo === codigo);
    if (vueel) {
        vueel.numeroPlaza =nuevaPlaza;
        vueel.importeBillete =nuevoImporte; 
        mostrarVuelos();
    } else {
        alert("PVuelo no encontrado.");
    }
}

function calcularImporte(){ 
    vuelosMuyRentables.length=0; 
    $('#tablaVuelos tbody').empty(); 
    $('#tablaMuyRentables tbody').empty(); 

    vuelos.forEach(vuelo =>{ 
        const ingreso = vuelo.numeroPlazas*vuelo.importeBillete; 
        let categoria; 
        if (ingreso<=10000) categoria= "Poco rentable"; 
        else if (ingreso>=10000 && ingreso <=20000)categoria="Rentable"; 
        else categoria ="Muy Rentable";   
        $('#tablaVuelos tbody'). append(` 
            <tr>
            <td>${vuelo.codigo}</td>
            <td>${vuelo.numeroPlazas}</td>
            <td>${vuelo.importeBillete}</td>
            <td>${ingreso.toFixed(2)}</td>
            <td>${categoria}</td>
            </tr>
            `) 
            if (categoria !== "Rentable"){ 
                vuelosMuyRentables.push({codigoVuelo: vuelo.codigo, ingresoEstimado:ingreso.toFixed(2) })
                $('#tablaMuyRentales tbody').append(`
                    <tr> 
                    <td>${vuelo.codigo}</td>
                    <td>${ingreso.toFixed(2)}</td>
                    </tr>
                    `)
            }
    })
} 
function mostrarVuelos(){ 
    $('#tablaVuelos tbody').empty(); 
    vuelos.forEach(vuelo =>{ 
        $('#tablaVuelos tbody').append(`
            <tr> 
            <td>${vuelo.codigo}</td> 
            <td>${vuelo.numeroPlazas}</td> 
            <td>${vuelo.importeBillete}</td> 
            </tr>
            `)
    })
} 
$('#formAnyadir').submit(function(e) {
    e.preventDefault();
    const codigo = $('#codigo').val();
    const numeroPlazas = parseFloat($('#numeroPlazas').val());
    const importeBillete = parseFloat($('#importeBillete').val());
    anyadirVuelo(codigo, numeroPlazas, importeBillete);
    $(this).trigger('reset');
});
$('#formModificar').submit(function(e) {
    e.preventDefault();
    const codigo = $('#modCodigo').val();
    const nuevaPlaza   = parseFloat($('#modnumeroPlazas').val());
    const nuevoImporte = parseFloat($('#modimporteBillete').val());
    modificarVuelos(codigo,nuevaPlaza, nuevoImporte);
    $(this).trigger('reset');
});


$('#calcularIngresos').click(function(){ 
    calcularImporte();
});