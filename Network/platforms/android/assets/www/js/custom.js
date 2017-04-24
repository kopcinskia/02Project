// cordova-plugin-network-information
// https://www.npmjs.com/package/cordova-plugin-network-information

const init = () => {
    document.addEventListener('deviceready', onDeviceReady, false)
    document.addEventListener('online', sayOnline, false)
    document.addEventListener('offline', sayOffline, false)
}

const onDeviceReady = () => {
    navigator.notification.beep(1)
}

const checkNetworkType = () => {
    const network = navigator.connection.type

    let states = {}

    states[Connection.UNKNOWN] = 'Unknown connection'
    states[Connection.ETHERNET] = 'Ethernet connection'
    states[Connection.WIFI] = 'WiFi connection'
    states[Connection.CELL_2G] = 'Cell 2G connection'
    states[Connection.CELL_3G] = 'Cell 3G connection'
    states[Connection.CELL_4G] = 'Cell 4G connection'
    states[Connection.CELL] = 'Cell generic connection'
    states[Connection.NONE] = 'No network connection'

    let el = document.getElementById('networkInfo')
    el.innerHTML = 'Connection type: ' + states[network]
}

const sayOnline = () => {
    let el = document.getElementById('isOnline')
    el.textContent = 'Online'
    el.classList.toggle('red', false)
    el.classList.toggle('green', true)

    checkNetworkType()
}

const sayOffline = () => {
    let el = document.getElementById('isOnline')
    el.textContent = 'Offline'
    el.classList.toggle('green', false)
    el.classList.toggle('red', true)

    checkNetworkType()
}
