
const perimSquare = (side) => side * 4
const areaSquare = (side) => side ** 2

function calculatePerimSquare () {
    let side = Number(document.getElementById ('side').value)
    document.getElementById("main-output").innerText = perimSquare(side)
}
