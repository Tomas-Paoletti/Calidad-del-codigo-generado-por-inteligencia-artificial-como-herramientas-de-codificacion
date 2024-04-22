/*
Por cada dígito de un número se eleva al cuadrado y se concatena con el posterior
  si pasamos 9119 a través de la función, obtendremos 811181, porque 9^2 es 81 y 1^2 es 1. (81-1-1-81)
 */
//primer iteracion el codigo es correcto
  function squareAndConcatenate(number) {
    const digits = String(number).split('');
    let result = '';

    for (let i = 0; i < digits.length; i++) {
        const square = Math.pow(parseInt(digits[i]), 2);
        result += square.toString();
    }

    return result;
}

// Ejemplo de uso
const number = 9119;
const result = squareAndConcatenate(number);
console.log(result); // Output: "811181"
