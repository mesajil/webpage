

alert("Hello!")
let name = prompt("Enter your name")
let age = Number(prompt("Enter your age"))

document.write("<h1>Title</h1>")
document.write("Name: ", name, "<br>")
document.write("Age: ", age, "<br>")
document.write(5 + 5 + '5', "<br>")
document.write(!9 == 0, "<br>")

// Problem 1 

let consumo = 300, descuento, igv, total, total_pagar

descuento = (consumo <= 100)? consumo * 0.1 : (consumo <= 200)? consumo * 0.2 : consumo * 0.3

total = consumo - descuento 
igv = total * 0.19
total_pagar = total + igv

document.write(`CONSUMO: ${consumo}`,"<br>")
document.write(`DESCUENTO: ${descuento}`,"<br>")
document.write(`MONTO CON DSCTO: ${total}`, "<br>")
document.write(`IGV: ${igv.toFixed(2)}`, "<br>")
document.write(`PRECIO DE VENTA: ${total_pagar.toFixed(2)}`,"<br>")

// Problem 2
let A_pares = [], A_inpares = [], random, number
for (let i = 1; i <= 9; i ++) {
    random = Math.floor(Math.random() * 101)
    number = i * random
    // document.write (`${i} X ${random} = ${number}<br>`)
    if (number % 2 == 0) A_pares.push(number)
    else A_inpares.push(number)
}
document.write ("IMPARES: ", A_inpares, "<br>")
document.write ("PARES: ", A_pares, "<br>")

// Función que suma N números

let sum = (...numbers) => {
    total = 0
    for (e of numbers)
        total += e
    return total
}
document.write (`SUM: ${sum(20, 20)}<br>`)

// Is Prime

let prime = (n) => {
    for (let i = 2; i < n; i ++)
        if (n % i == 0) return false
    return true
}

document.write (`PRIME: ${prime(18)}<br>`)