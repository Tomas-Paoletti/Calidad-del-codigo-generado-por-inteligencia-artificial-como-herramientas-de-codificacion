/*Mediana Continua: Los números son generados aleatoriamente y pasados a un método. Escribe un programa para encontrar y mantener el valor de la mediana a medida 
que se generan nuevos valores en C#
*/

using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        List<int> numeros = new List<int>();
        Random rand = new Random();

        Console.WriteLine("Generando números aleatorios y calculando la mediana continua. Presiona cualquier tecla para detener.");

        while (!Console.KeyAvailable)
        {
            int nuevoNumero = rand.Next(1, 101); // Genera un número aleatorio del 1 al 100
            InsertarOrdenado(numeros, nuevoNumero);
            double mediana = CalcularMediana(numeros);
            Console.WriteLine($"Nuevo número generado: {nuevoNumero}, Mediana actual: {mediana}");
        }
    }

    static void InsertarOrdenado(List<int> lista, int numero)
    {
        int indice = lista.BinarySearch(numero);
        if (indice < 0)
        {
            lista.Insert(~indice, numero);
        }
        else
        {
            lista.Insert(indice, numero);
        }
    }

    static double CalcularMediana(List<int> lista)
    {
        int count = lista.Count;
        if (count % 2 == 0)
        {
            int mid1 = lista[(count / 2) - 1];
            int mid2 = lista[count / 2];
            return (mid1 + mid2) / 2.0;
        }
        else
        {
            return lista[count / 2];
        }
    }
}

