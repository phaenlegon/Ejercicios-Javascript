const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];

let Pequeña = [ ];
let Mediana = [ ];
let Grande = [ ];
for (let duracion of movies) {
   if (duracion.durationInMinutes < 100){
       Pequeña.push(duracion);
    } else if(duracion.durationInMinutes <= 100  || duracion.durationInMinutes< 200){
        Mediana.push(duracion);
    }else{
        Grande.push(duracion)
    }
}


console.log("Películas pequeñas: ",Pequeña);
console.log("Películas medianas: ",Mediana);
console.log("Películas grandes: ",Grande);