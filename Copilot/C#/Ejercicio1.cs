/*
Por cada dígito de un número se eleva al cuadrado y se concatena con el posterior
  si pasamos 9119 a través de la función, obtendremos 811181, porque 9^2 es 81 y 1^2 es 1. (81-1-1-81)
 */

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program

    {
        static void Main(string[] args)
        {
            Console.WriteLine("Ingrese un numero");
            string numero = Console.ReadLine();
            Console.WriteLine("El resultado es: " + SquareDigits(numero));
            Console.ReadKey();
        }

        public static string SquareDigits(string n)
        {
            string resultado = "";
            foreach (char c in n)
            {
                int numero = int.Parse(c.ToString());
                resultado += (numero * numero).ToString();
            }
            return resultado;
        }
    }
}

