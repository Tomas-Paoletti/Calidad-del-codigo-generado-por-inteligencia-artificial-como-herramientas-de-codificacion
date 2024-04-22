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
    if (matrix.length === 0) return 0;
    let dp = Array(matrix.length + 1).fill(0).map(() => Array(matrix[0].length + 1).fill(0));
    let max = 0;
    for (let i = 1; i <= matrix.length; i++) {
        for (let j = 1; j <= matrix[0].length; j++) {
            if (matrix[i - 1][j - 1] === "1") {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
                max = Math.max(max, dp[i][j]);
            }
        }
    }
    return max * max;
}

let matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]];
console.log(maximalSquare(matrix));  // Output: 4

matrix = [["0","1"],["1","0"]];
console.log(maximalSquare(matrix));  // Output: 1

matrix = [["0"]];
console.log(maximalSquare(matrix));  // Output: 0