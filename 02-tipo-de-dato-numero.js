// TIPOS DE DATOS

// 1- Numero
// a) Declarar Variable con const
// Una variable que no va a cambiar su valor una vez asignado
// Una variable de datos no mutable
const numero1 = 30

// b) Declarar la variable con let
// Una variable que si puede cambiar su valor
// Una variable de datos mutables
let edad = 26
edad = 27
console.log(edad)

// Tu debes de crear variables con const siempre que sea posible

// Expresiones aritmeticas
// adicion +
console.log(5 + 10) // 15
// resta -
console.log(10 - 5) // 5
// multiplicacion *
console.log(10 * 2) // 20
// division /
console.log(10 / 10) // 1

// Operadores avanzados
// Exponente
console.log(2 ** 3) // 2 * 2 * 2 = 8

// Modulo %
console.log(10 % 2) // 10 / 2 = 5 el residuo 0 - par

console.log(7 % 2) // 7 / 2 = 3 el residuo 1

// Operadores de asignacion
let edad2 = 25

edad2 = edad2 + 1 // 26
edad2 += 1 // 27
edad2++ // 28 - el ++ siempre le va a sumar una unidad

edad2 = edad2 - 1 // 27
edad2 -= 1 // 26
edad2-- // 25 - el -- siempre le va a sumar una unidad

// Multriplicacion
const variableParaAsigacion = 1
variableParaAsigacion = variableParaAsigacion * 2
console.log()
variableParaAsigacion *= 1
// Division
variableParaAsigacion = variableParaAsigacion / 2
variableParaAsigacion /= 1
// Modulo
variableParaAsigacion = variableParaAsigacion % 2
variableParaAsigacion %= 1
// Exponentes
variableParaAsigacion = variableParaAsigacion ** 2
variableParaAsigacion **= 1

// Parentesis nombrar variables
// camelCase
const miVariable = 35
const estaEsOtraVariable = 40

// no deben empezar con numeros
// simbolos como _ $

// Jerarquia de operaciones
const operacion = 10 + (5 * 2 ** 3) / 4 - 6

console.log(operacion) // 14

//
