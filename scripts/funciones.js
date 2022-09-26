console.log("Sesión JS03 funciones");

//++++++++++++++++++ Función declarada ++++++++++++++++
/**
 * Este es un ejemplo de una función declarada
 * (function declaration, function statement).
 * Una caracterísitica de las funciones declaradas
 * es que tiene un hoisting (elevación).
 * 
 * realiza la multiplicación de dos números
 * @param {Number} a multiplicando
 * @param {Number} b multiplicador
 * @returns resultado de la multiplicación a*b
 */
function multiplica (a, b){
    return a*b;
}

//llamado de la función declarada.
console.log("Multiplica 5*6 = "+ multiplica(5,6));

//++++++++++++++++++ Función expresada ++++++++++++++++
/**
 * Las funciones expresadas (function expressions)
 * son declaradas dentro de la asignación de una variable.
 * 
 * Estas funciones pueden ser anónimas (no tener nombre).
 * Las funciones expresadas no tienen hoisting
 */
/**
 * Sumatoria de dos números
 * @param {Number} a 
 * @param {Number} b 
 * @returns resultado de a+b
 */
const suma = function (a, b){return a+b}

console.log("el resultado de 56 + 4 = "+ suma(56, 4));

//+++++++++++++++++++++ Funciones autoinvocadas +++++++++++++

/**
 * Las funciones autoinvocadas (self-invoking functions)
 * pueden ser anónimas y se autoejecutan () en su declaración (function)()
 */
(function inicializar(){
    console.log("==========================");
    console.log("Hola crayola");
    console.log("==========================");
})();



//++++++++++++++++++++++ Funciones flecha ++++++++++++++++++

/**
 * Las funciones flecha (arrow functions) funcionan similar a las funciones declaradas
 * , pero no requieren la palabra "function" y si tienen una sola instrucción
 * y es el retorno, no requiere la instrucción "return"
 * No tienen hoisting
 */

const resta = (a, b) => a-b;
console.log ("La resta de 10 - 5 = "+ resta(10,5));


//++++++++++++++++++++++ Parámetros default +++++++++++++++++
/**
 * Funcion con parámetros inicializados
 */
function divide(a,b=0){
    return a/b;
}

console.log("La división de a/b = "+ divide(4));

//+++++++++++++++++++++ Funciones recursivas ++++++++++++++++

function factorial(num){
    if(num<=0) return 1;
    return(num*factorial(num-1))
}
console.log("Factorial de 5 = "+ factorial(5));