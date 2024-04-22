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

class MaximalSquareFinder
{
    public int MaximalSquare(char[][] matrix)
    {
        if (matrix == null || matrix.Length == 0)
            return 0;

        int rows = matrix.Length;
        int cols = matrix[0].Length;
        int[][] dp = new int[rows + 1][];

        for (int i = 0; i <= rows; i++)
            dp[i] = new int[cols + 1];

        int maxSquare = 0;

        for (int i = 1; i <= rows; i++)
        {
            for (int j = 1; j <= cols; j++)
            {
                if (matrix[i - 1][j - 1] == '1')
                {
                    dp[i][j] = Math.Min(dp[i - 1][j], Math.Min(dp[i][j - 1], dp[i - 1][j - 1])) + 1;
                    maxSquare = Math.Max(maxSquare, dp[i][j]);
                }
            }
        }

        return maxSquare * maxSquare;
    }
}

class Program
{
    static void Main(string[] args)
    {
        char[][] matrix1 = {
            new char[] {'1', '0', '1', '0', '0'},
            new char[] {'1', '0', '1', '1', '1'},
            new char[] {'1', '1', '1', '1', '1'},
            new char[] {'1', '0', '0', '1', '0'}
        };

        char[][] matrix2 = {
            new char[] {'0', '1'},
            new char[] {'1', '0'}
        };

        char[][] matrix3 = {
            new char[] {'0'}
        };

        MaximalSquareFinder finder = new MaximalSquareFinder();
        Console.WriteLine("Output for matrix1: " + finder.MaximalSquare(matrix1)); // Output: 4
        Console.WriteLine("Output for matrix2: " + finder.MaximalSquare(matrix2)); // Output: 1
        Console.WriteLine("Output for matrix3: " + finder.MaximalSquare(matrix3)); // Output: 0
    }
}
