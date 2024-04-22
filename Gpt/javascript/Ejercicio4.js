//Cuadrado Maximo
//Se te proporciona una matriz binaria de mxn llena de 0s y 1s. Encuentra el cuadrado más grande que contenga solo 1s y devuelve su área.
//Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
//Output: 4
//Input: matrix = [["0","1"],["1","0"]]
//Output: 1
//Input: matrix = [["0"]]
//Output: 0
//primer iteracion se creo  correctamente mejor el codigo que con gpt ya que mantuvo la misma estructura de input no dio de por si las matrices 

function maximalSquare(matrix) {
    if (!matrix || matrix.length === 0) return 0;

    const rows = matrix.length;
    const cols = matrix[0].length;

    // Crear una matriz auxiliar para almacenar los tamaños de los cuadrados más grandes encontrados
    const dp = Array.from(Array(rows + 1), () => Array(cols + 1).fill(0));
    let maxSquare = 0;

    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            if (matrix[i - 1][j - 1] === "1") {
                // Calcular el tamaño del cuadrado como el mínimo entre los valores dp[i-1][j], dp[i][j-1] y dp[i-1][j-1] + 1
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
                maxSquare = Math.max(maxSquare, dp[i][j]); // Actualizar el tamaño máximo del cuadrado
            }
        }
    }

    return maxSquare * maxSquare; // Devolver el área del cuadrado más grande
}

// Ejemplos de uso
let matrix1 = [
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
];
console.log(maximalSquare(matrix1)); // Output: 4

let matrix2 = [
    ["0", "1"],
    ["1", "0"]
];
console.log(maximalSquare(matrix2)); // Output: 1

let matrix3 = [
    ["0"]
];
console.log(maximalSquare(matrix3)); // Output: 0
