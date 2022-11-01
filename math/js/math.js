(() => {
    'use strict'

    const getOutput = document.getElementById("main-output"),
        btnPerimSquare = document.getElementById('btnPerimSquare'),
        btnAreaSquare = document.getElementById('btnAreaSquare'),
        btnAreaTriangle = document.getElementById('btnAreaTriangle'),
        btnPerimCircle = document.getElementById('btnPerimCircle'),
        btnAreaCircle = document.getElementById('btnAreaCircle'),
        getSide = () => Number(document.getElementById ('side').value),
        getHeight = () => Number(document.getElementById ('height').value),
        getBase = () => Number(document.getElementById ('base').value),
        getRadius = () => Number(document.getElementById ('radius').value),
        perimSquare = (side) => side * 4,
        areaSquare = (side) => side ** 2,
        areaTriangle = (height, base) => height * base / 2,
        perimCircle = (radius) => 2 * Math.PI * radius,
        areaCircle = (radius) => Math.PI * (radius ** 2)
    
    btnPerimSquare.addEventListener('click', () => {
        getOutput.innerText = perimSquare(getSide())
    })
    
    btnAreaSquare.addEventListener('click', () => {
        getOutput.innerText = areaSquare(getSide())
    })
    
    btnAreaTriangle.addEventListener('click', () => {
        getOutput.innerText = areaTriangle(getHeight(), getBase())
    })
    
    btnPerimCircle.addEventListener('click', () => {
        getOutput.innerText = perimCircle(getRadius())
    })
    
    btnAreaCircle.addEventListener('click', () => {
        getOutput.innerText = areaCircle(getRadius())
    })

})()