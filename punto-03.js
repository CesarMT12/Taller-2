// En una granja remota, un grupo de ovejas se encuentra en peligro. Están encerradas en diferentes corrales, algunas sanas y salvas, pero otras enfermas o incluso enfrentando la amenaza de un lobo feroz. Tu misión, como programador experto, es crear un programa en JavaScript que te ayude a rescatar a las ovejas vivas y preparar el terreno para su futuro bienestar.


// La siguiente lista corrales representa los corrales.

// Cada posición en la lista contiene un string que indica el estado de un animal:

// oveja: Oveja sana y salva.
// muerta: Oveja que necesita ser removida del corral.
// lobo: ¡Un peligro para las ovejas!
// '': Un espacio libre en el corral.

    const corrales = [
        [ 'oveja', 'oveja', '', 'oveja', '' ],
        [ 'oveja', 'oveja', 'oveja', 'oveja', '' ],
        [ 'oveja', 'muerta', 'lobo', '', 'muerta' ]
    ]

//Contar las ovejas vivas: Recorre cada corral y determina cuántas ovejas sanas y salvas hay en total.


function liveSheep( pen ){
    return pen.filter ( animal => animal == 'oveja').length;
    
}

console.log ('La cantidad de ovejas sanas en el corral es de:',  liveSheep ( corrales.flat()), 'ovejas')

 //Contar los espacios libres: Identifica cuántos espacios vacíos hay en los corrales, considerando que los espacios con animales muertos también deben ser liberados.

function freeSpots ( pen ){
    return pen.filter ( spot => spot == '' || spot == 'muerta').length;
}

console.log ( 'La cantidad de espacios libres es de', freeSpots ( corrales.flat()), 'espacios, contando los espacios en donde hay ovejas muertas')

//  //Neutralizar al lobo: Si encuentras un lobo en algún corral, elimínalo (imagina que lo conviertes en una útil chaqueta de piel) y cuenta el espacio que deja libre como si estuviera vacío.

function findWolf ( pen ) {
const updatePens = [];

for ( const spot of pen ){
const updatePen = spot.map( animal => {
    if ( animal == 'lobo' || animal == 'muerta'){
        return '';
    }
    else { 
        return animal 
    }            
});

updatePens.push( updatePen );

}

return updatePens; 
}

const updatePens = findWolf ( corrales );
console.log ( 'El nuevo corral habiendo sacado al lobo y a las ovejas muertas, sería:', updatePens );

function freeSpots ( pen ){
    return pen.filter ( spot => spot === '').length;
}

    console.log ( 'La cantidad de lugares libres en los corrales es de:', freeSpots ( updatePens.flat()), 'espacios')


//Incorporar nuevas ovejas: Utiliza el dinero obtenido por eliminar lobos para comprar 2 nuevas ovejas por cada uno. Busca espacios libres en los corrales para colocarlas y aumentar la población ovina.

// for ( i = 0; i < corrales.length; i++ ){
//     if( i = '' ){
//         // corrales.replace ( '', 'oveja' )
//     }
//     else{

//     }
// }

// console.log( corrales )