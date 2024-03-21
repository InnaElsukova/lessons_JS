function log(msg) {
    let logEl = document.getElementById("log")
    if (!logEl) {
        logEl = document.createElement("pre")
        logEl.id = "log"
        document.body.appendChild(logEl)
    }
    logEl.innerText += msg + "\n"
}