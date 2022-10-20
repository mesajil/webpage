

alert("Hello!")
let name = prompt("Enter your name")
let age = Number(prompt("Enter your age"))

document.write("<h1>Title</h1>")
document.write("Name: ", name, "<br>")
document.write("Age: ", age, "<br>")
document.write(5 + 5 + '5', "<br>")
document.write(!9 == 0, "<br>")

let n1 = Number(prompt("NUMERO 1"))
let n2 = Number(prompt("NUMERO 2"))

document.write("COCIENTE: ", Math.floor(n1 / n2),"<br>")
document.write("RESIDUO: ", n1 % n2,"<br>")

let vv = Number(prompt("VALOR DE VENTA"))
let igv = vv * 19 / 100

document.write("Valor de venta: ", vv,"<br>")
document.write("IGV: ", igv,"<br>")
document.write(`Precio de venta: ${vv + igv}`,"<br>")

