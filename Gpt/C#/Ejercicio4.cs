//Cuadrado Maximo
//Se te proporciona una matriz binaria de mxn llena de 0s y 1s. Encuentra el cuadrado más grande que contenga solo 1s y devuelve su área.
//Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
//Output: 4
//Input: matrix = [["0","1"],["1","0"]]
//Output: 1
//Input: matrix = [["0"]]
//Output: 0
//primer iteracion con gpt el codigo es correcto:
using System;
public class Solution {
    public int MaximalSquare(char[][] matrix) {
        if (matrix == null || matrix.Length == 0) return 0;
        int m = matrix.Length;
        int n = matrix[0].Length;
        int[,] dp = new int[m + 1, n + 1];
        int max = 0;
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (matrix[i - 1][j - 1] == '1') {
                    dp[i, j] = Math.Min(Math.Min(dp[i, j - 1], dp[i - 1, j]), dp[i - 1, j - 1]) + 1;
                    max = Math.Max(max, dp[i, j]);
                }
            }
        }
        return max * max;
    }
}
public class Program {
    public static void Main() {
        Solution solution = new Solution();

        char[][] matrix1 = new char[][] {
            new char[] {'1', '0', '1', '0', '0'},
            new char[] {'1', '0', '1', '1', '1'},
            new char[] {'1', '1', '1', '1', '1'},
            new char[] {'1', '0', '0', '1', '0'}
        };
        Console.WriteLine(solution.MaximalSquare(matrix1));  // Output: 4

        char[][] matrix2 = new char[][] {
            new char[] {'0', '1'},
            new char[] {'1', '0'}
        };
        Console.WriteLine(solution.MaximalSquare(matrix2));  // Output: 1

        char[][] matrix3 = new char[][] {
            new char[] {'0'}
        };
        Console.WriteLine(solution.MaximalSquare(matrix3));  // Output: 0
    }
}