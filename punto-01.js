// Crea una función para que calcule el promedio de al menos 3 notas y que retorne el valor de la letra asociada:

// Calificación	Equivalente en letras
// Entre 4.8 <= 5.0	E = Excelente
// Entre 4.5 < 4.8	MB = Muy bueno
// Entre 4.0 < 4.4	B = Bueno
// Entre 3.5 < 4.0	A = Aprobado
// Entre 0 < 3.5	R = Reprobado

function calculateAverage ( notes ) { 

    const add = notes.reduce ( ( result, note ) => result + note, 0 )
    const average = add / notes.length;

    if ( average >= 4.8 && average <= 5.0 ){ 
        return 'E = Excelente'
    }
    else if ( average >= 4.5 && average < 4.8 ){
        return 'MB = Muy Bueno'
    }
    else if ( average >= 4.0 && average < 4.5 ){
        return 'B = Bueno'
    }
    else if ( average >= 3.5 && average < 4.0 ){
        return 'A = Aprobado'
    }
    else {
        return 'R = Reprobado'
    }

}



const optionNotes = [ ];
let option;

do { 
    const note = parseFloat ( prompt ( 'Ingrese una nota entre 0 y 5' ) );

    optionNotes.push ( note )
    option = prompt ( '¿Desea ingresar otra nota? "Si/No"' )
} while ( option.toLowerCase () === 'si' )

const result = calculateAverage ( optionNotes );
alert ( `El estudiante ha sido ${ result }`)

