function log(msg) {
    let logEl = document.getElementById("log")
    if (!logEl) {
        logEl = document.createElement("pre")
        logEl.id = "log"
        document.body.appendChild(logEl)
    }
    logEl.innerText += msg + "\n"
}

function generateRandomArray(min = 1, max = 10000, count = 10) {
    let randArray = []
    for (let i = 0; i < count; i++) {
        randArray.push(min + Math.floor(Math.random() * (max - min + 1)))
    }
    return randArray
}

function generateRandom2dArray(rowCount = 6, colCount = 6, minValue = 1, maxValue = 10) {
    let rand2dArray = []
    for(let row = 1; row <= rowCount; row++)
        rand2dArray.push(generateRandomArray(minValue, maxValue, colCount))
    return rand2dArray
}