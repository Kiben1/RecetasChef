let discografia=[
    {
        nombre:"PAVO",
        anio:2018,
        descripcion:["arrina","caldo de pollo ","aceite","cebolla","champiñones"]
    },
    {
        nombre :"Flan de Manzana",
        anio:2021,
        descripcion:[
            "Azúcar moreno","canela ","huevo","Azucar blanca"
        ]
    }
]
function buscar(){
    const nam = document.getElementById('nombre').value;
    const name=nam.toLowerCase();
    let  nombre;
    let  año;
    let  descripcion;
    
   
    for ( let i = 0; i < discografia.length; i++){
        let aux=discografia[i].nombre.toLowerCase();

        if( aux== name){
            nombre = discografia[i].nombre;
            año = discografia[i].anio;
            descripcion = discografia[i].descripcion; //;
            document.getElementById('title').innerText= "Plato: "+nombre; 
            document.getElementById('año').innerText= "Año de Lanzamiento "+año; 
            //mostrando los ingredientes
            const lista  = document.getElementById('descripcion');
            const ul = document.createElement('ul');
            for (let i = 0; i < descripcion.length; i++) {
                const li = document.createElement('li');
                li.textContent = descripcion[i]; 
                ul.appendChild(li); 
            } 
            lista.appendChild(ul);
            break;
        }else{
            window.alert("no se encontro");
        }
    }
   
    
}
/**
 * validacion de entra de busqueda -(Indistinto Mayus minus y espacio)
 * validacion si existe el nombre de receta buscar
 * solucionar todos los incovenientes que puedan tener al testear la funcionalidad()
*/