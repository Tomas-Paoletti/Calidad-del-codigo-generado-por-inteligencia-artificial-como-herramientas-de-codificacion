/*Mediana Continua: Los números son generados aleatoriamente y pasados a un método. Escribe un programa para encontrar y mantener el valor de la mediana a medida 
que se generan nuevos valores en C#
*/


using System;
using System.Collections.Generic;

namespace MedianaContinua
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] numeros = new int[100];
            Random rnd = new Random();
            for (int i = 0; i < numeros.Length; i++)
            {
                numeros[i] = rnd.Next(1, 100);
            }
            Array.Sort(numeros);
            Console.WriteLine("Los números generados son: ");
            foreach (int numero in numeros)
            {
                Console.Write(numero + " ");
            }
            Console.WriteLine();
            Console.WriteLine("La mediana es: " + Mediana(numeros));
            Console.ReadKey();
        }

        static double Mediana(int[] numeros)
        {
            double mediana = 0;
            if (numeros.Length % 2 == 0)
            {
                mediana = (numeros[numeros.Length / 2] + numeros[(numeros.Length / 2) - 1]) / 2.0;
            }
            else
            {
                mediana = numeros[numeros.Length / 2];
            }
            return mediana;
        }
    }
}



