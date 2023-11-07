const numeroFibonacci = parseInt(input("Intruduzca la cantidad de numeros de la sucesión de Fibonacci que desea ver: "));

if (isNaN(numeroFibonacci)){
    console.log("Introduzca un numero: ")
} else {
    function Fibonacci(numeroFibonacci) {
        const fib = [0, 1];

        for (let i = 2; i <= numeroFibonacci; i++) {
            fib[i] = fib[i-1] + fib[i-2];
        }

        return fib;
    }

    console.log(Fibonacci(numeroFibonacci)); 
}
/*quiero que almacene el resultado de cada iteracion en un array y lo muestre en pantalla cuando llegue a la cifra que introdujo el user,, como hago esooooooooo aaa*/ 