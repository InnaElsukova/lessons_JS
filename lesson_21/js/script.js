function log(msg) {
    let logEl = document.getElementById("log")
    if (!logEl) {
        logEl = document.createElement("pre")
        logEl.id = "log"
        document.body.appendChild(logEl)
    }
    logEl.innerText += msg + "\n"
}

function writeLog(message) {
    let parentContainer = document.getElementById('log')
    let messageContainer = document.createElement('div')
    messageContainer.innerText = message
    parentContainer.append(messageContainer)
}

function generateRandomArray(min = 1, max = 10000, count = 10) {
    let randArray = []
    for (let i = 0; i < count; i++) {
        randArray.push(min + Math.floor(Math.random() * (max - min + 1)))
    }
    return randArray
}