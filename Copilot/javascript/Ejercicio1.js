/*
Por cada dígito de un número se eleva al cuadrado y se concatena con el posterior
  si pasamos 9119 a través de la función, obtendremos 811181, porque 9^2 es 81 y 1^2 es 1. (81-1-1-81)
 */
//primer iteracion el codigo es correcto
  function squareDigits(num) {
    return Number(('' + num).split('').map(function (digit) {
        return digit * digit;
    }).join(''));
}

console.log(squareDigits(9119));  // Output: 811181