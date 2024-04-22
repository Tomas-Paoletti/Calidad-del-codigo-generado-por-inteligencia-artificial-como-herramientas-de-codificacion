 /* si pasamos 9119 a través de la función, obtendremos 811181, porque 9^2 es 81 y 1^2 es 1. (81-1-1-81)
 */
using System;
using System.Text;

class Program
{
    static string SquareAndConcatenateDigits(int num)
    {
        string numStr = num.ToString();
        StringBuilder result = new StringBuilder();

        for (int i = 0; i < numStr.Length - 1; i++)
        {
            int digit = int.Parse(numStr[i].ToString());
            int squared = digit * digit;
            result.Append(squared);
        }

        // Agregamos el último dígito al resultado elevado al cuadrado
        int lastDigit = int.Parse(numStr[numStr.Length - 1].ToString());
        int lastSquared = lastDigit * lastDigit;
        result.Append(lastSquared);

        return result.ToString();
    }

    static void Main()
    {
        int inputNumber = 9119;
        string result = SquareAndConcatenateDigits(inputNumber);
        Console.WriteLine(result);
    }
}



