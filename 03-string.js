// Cadenas de caracteres
// es que para escribir una cadena
// '' comillas simples
// "" comillas dobles
// `` back ticks

const saludo = "Hola mundo, soy "
const nombre = "K'onhin "
const edad = 26

// Un mensaje directo en el console.log
// Concatenacion
console.log(saludo + nombre + "tengo " + edad)

// Interpolacion
console.log(`${saludo}${nombre}tengo ${edad}`)

const resultadoTexto = `${saludo}${nombre}tengo ${edad}`
console.log(resultadoTexto)

// Propiedad String.length
// Cuenta los caracteres a partir de 1
// Es decirnos la cantidad de caracteres de algo
console.log("Amo JS".length) // 6

const texto = "Codeando duro" // 13
console.log(texto.length)

// Agregar string a una variable vacia
let contenedorVacio = ""

contenedorVacio += "Agregando texto nuevo"
console.log(contenedorVacio)

contenedorVacio += " mas otro texto aparte"
console.log(contenedorVacio)

// Metodos de los string
// String.charAt(n)
// Acceder a un caracter en una cadena
const otroSaludo = "Que onda amigos"

// las posiciones se comienzan a contar de 0
console.log(otroSaludo.charAt(0)) // Q

const mentor = "Konhin"
console.log(mentor.charAt(0)) // K
console.log(mentor.charAt(1)) // o
console.log(mentor.charAt(2)) // n
console.log(mentor.charAt(3)) // h
console.log(mentor.charAt(4)) // i
console.log(mentor.charAt(5)) // n

// Bracket notatio - un numero indexado
// acceder a los caracteres
console.log(mentor[0]) // K

// Encontrar la posicion de una subcadena
// String.indexOf('subcadena')
const mensaje = "No estes triste amigo mio, se invreible amigo"

console.log(mensaje.indexOf("triste")) // 9
console.log(mensaje.indexOf("ext")) // -1 - no encontro la sub cadena
// Distingue mayusculas y minisculas
console.log(mensaje.indexOf("Triste")) // -1
console.log(mensaje.indexOf("amigo")) // 16

// String.lastIndexOf('subcadena')
console.log(mensaje.lastIndexOf("amigo")) // 16

// String.repeat(n)
const palabra = "no"

console.log(palabra.repeat(3))
console.log("$".repeat(5))

// Obtener o substraer una subcadena de un string
// String.substring(posicionInicial, numeroCaracteres)
const otroMsj = "Disfrutando del codigo con Javascript"
console.log(otroMsj.substring(0, 11)) // Disfrutando
const subcadena = otroMsj.substring(0, 11)
console.log(subcadena)

// String.substr(posicionInicial, numeroCaracteres)
// Podemos agregar un valor negativo
const otroMsj2 = "Disfrutando del codigo con Javascript"
console.log(otroMsj2.substr(0, 11)) // Disfrutando
console.log(otroMsj2.substr(-3)) // ipt

// String.slice(posicionInicial, numeroCaracteres)
const otroMsj3 = "Disfrutando del codigo con Javascript"
console.log(otroMsj3.slice(0, 11)) // Disfrutando
console.log(otroMsj3.slice(-3)) // ipt
console.log(otroMsj3.slice(-4, -1)) // Disfrutando

// Validar si una cadena de texto inicia con ciertos caracteres
// String.startWith('texto')
// Booleano, si o de no, true o false
const nuevoText = "Codeando con metodos de los string"
console.log(nuevoText.startsWith("Codeando")) // true
console.log(nuevoText.startsWith("codeando")) // false
console.log(nuevoText.startsWith("con")) // false

//  Validar si una cadena de texto termina con cierta palabra o caracter
// Sring.endsWith('cadena')
const nuevoText2 = "Codeando con metodos de los string"
console.log(nuevoText2.endsWith("string")) // true
console.log(nuevoText2.endsWith("String")) // false
console.log(nuevoText2.endsWith("metodos")) // false

// Para ver si una cadena de texto incluye o no una palabra o caracter
// String.includes('palabra', posicion)
const stringNuevo = "Ya casi llegamos, por favor persiste"
console.log(stringNuevo.includes("favor")) // true
console.log(stringNuevo.includes("Favor")) // false
console.log(stringNuevo.includes("Ya", 1)) // false
