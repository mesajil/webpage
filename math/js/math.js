
const getSide = () => Number(document.getElementById ('side').value)
const getHeight = () => Number(document.getElementById ('height').value)
const getBase = () => Number(document.getElementById ('base').value)
const getRadius = () => Number(document.getElementById ('radius').value)
const perimSquare = (side) => side * 4
const areaSquare = (side) => side ** 2
const areaTriangle = (height, base) => height * base / 2
const perimCircle = (radius) => 2 * Math.PI * radius
const areaCircle = (radius) => Math.PI * (radius ** 2)


function calculatePerimSquare () {
    document.getElementById("main-output").innerText = perimSquare(getSide())
}

function calculateAreaSquare () {
    document.getElementById("main-output").innerText = areaSquare(getSide())
}

function calculateAreaTriangle () {
    document.getElementById("main-output").innerText = areaTriangle(getHeight(), getBase())
}

function calculatePerimCircle () {
    document.getElementById("main-output").innerText = perimCircle(getRadius())
}

function calculateAreaCircle () {
    document.getElementById("main-output").innerText = areaCircle(getRadius())
}