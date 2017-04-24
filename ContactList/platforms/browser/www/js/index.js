function init() {
    document.addEventListener('deviceready', onDeviceReady, false)
}

function onDeviceReady() {

    let options = new ContactFindOptions()
    options.filter = ''
    options.multiple = true
    let filter = ['displayName']
    navigator.contacts.find(filter, onSuccess, onError, options)
}

function onSuccess(contacts) {
    document.querySelector('h1').innerText = 'Number of your contacts: (' + (contacts.length - 1) + ')'
    for (var i = 0; i < contacts.length; i++) {
        let contact = document.createElement('li')

        cotactText = document.createTextNode(
            'Name: ' + contacts[i].name.formatted + '\n' + 'Phone number: ' + contacts[i].phoneNumbers[0].value
        )
        contact.appendChild(cotactText)

        document.querySelector('ul').appendChild(contact)
    }
}

function onError(contactError) {
    alert('coś tu nie gra!!!')
}
