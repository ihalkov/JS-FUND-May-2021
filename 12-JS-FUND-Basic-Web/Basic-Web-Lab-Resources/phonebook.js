const phonebook = [];

function getPhonebook() {
    return phonebook.slice();
}

function addContact(contact) {
    phonebook.push(contact);
}

module.exports = {
    getPhonebook,
    addContact
}