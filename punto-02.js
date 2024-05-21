// Completa la función operation para que realice las 4 operaciones básicas: suma, resta, multiplicacion y division. Dicha funcion debe tomar 3 argumentos: el operador, el primer valor y el segundo valor, además debe retornar el resultado.

function operation( operator, firstValue, secondValue ) {
     let result; 

    switch (operator) {
        case '+':
            result = firstValue + secondValue;
            
            break;
        case "-":
            result = firstValue - secondValue;
        
            break;
        case "*":
            result = firstValue * secondValue;
            
            break;
        case "/":
            if ( secondValue == 0 ) {
                alert ( 'No se puede dividir entre 0' );
                break;
            } 
                
                result = firstValue / secondValue;
            
            break;
                    
        default:
            alert ( "Opción inválida. Inténtalo nuevamente." );

        }

    return result;
}

console.log ( operation ('+', 3, 6) );
console.log ( operation ('-', 7, 3) );
console.log ( operation ('*', 9, 9) );
console.log ( operation ('/', 15, 3) );
