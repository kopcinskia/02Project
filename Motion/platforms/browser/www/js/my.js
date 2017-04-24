function init() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
    navigator.notification.beep(1)
    navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}

function onSuccess(acceleration) {
    document.getElementById('motionInfo').innerText = (
        'Acceleration X: ' + acceleration.x + '\n' + '\n' +
        'Acceleration Y: ' + acceleration.y + '\n' + '\n' +
        'Acceleration Z: ' + acceleration.z + '\n' + '\n' +
        'Timestamp: ' + acceleration.timestamp + '\n'
    );
}

function onError() {
    document.getElementById('motionInfo').innerText('Error!')
}

let options = {
    frequency: 3000
}
