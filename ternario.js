
let clima = "Soleado"

const llevoParaguas = ( tipoClima )=>{

    // if( tipoClima === "Lluvioso"){
    //     return "si llevalo"
    // }else{
    //     return "No, no hace falta"
    //} 

    //condicion ? "verdadero" : "falso"
    //return tipoClima === "Lluvioso" ? "si llevalo" : "No, no hace falta"
    return tipoClima === "Lluvioso" && "si llevalo"
}

let condicionFinal= llevoParaguas(clima)
console.log( condicionFinal )
