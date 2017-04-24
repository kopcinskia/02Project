function init() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
    navigator.splashscreen.show();
    setTimeout(() => {
        navigator.splashscreen.hide()
    }, 3000)
}
