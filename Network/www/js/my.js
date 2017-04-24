function init() {
    document.addEventListener('offline', sayOffline, false)
    document.addEventListener('online', sayOnline, false)
}

function checkConnection() {
    let workState = navigator.connection.type

    let states = {}
    states[Connection.UNKNOWN] = 'Unknown connection'
    states[Connection.ETHERNET] = 'Ethernet connection'
    states[Connection.WIFI] = 'WiFi connection'
    states[Connection.CELL_2G] = 'Cell 2G connection'
    states[Connection.CELL_3G] = 'Cell 3G connection'
    states[Connection.CELL_4G] = 'Cell 4G connection'
    states[Connection.CELL] = 'Cell generic connection'
    states[Connection.NONE] = 'No network connection'

    let info = document.getElementById('networkType')
    info.innerHTML = 'Conection type: ' + states[workState]
}

function sayOnline() {
    let info = document.getElementById('On/Offline')
    info.textContent = 'Online'
    info.classList.toggle('green', true)
    info.classList.toggle('red', false)

    checkConnection()
}

function sayOffline() {
    let info = document.getElementById('On/Offline')
    info.textContent = 'Offline'
    info.classList.toggle('green', false)
    info.classList.toggle('red', true)

    checkConnection()
}
