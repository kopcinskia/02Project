function init() {
    document.addEventListener('deviceready', onDeviceReady, false)
}

function onDeviceReady() {
    navigator.notification.beep(1)
}

function sendSms() {
    let number = document.getElementById('numberTxt').value
    let message = document.getElementById('messageTxt').value
    console.log('number: ' + number + ', message: ' + message)

    let options = {
        replaceLineBreaks: false,
        android: {
            intent: 'INTENT'
        }
    }

    function success() {
        navigator.notification.alert('Message sent successfully')
    }

    function error() {
        navigator.notification.alert('Sending failed: ' + e)
    }

    sms.send(number, message, options, success, error)
}
