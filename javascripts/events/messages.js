import {printToDom} from '../helpers/util.js'
import {editMessage, clearFix} from './eventlisteners.js'

let messages = [];

const setMessages = (newArray) => {
    messages = newArray;
};

const getMessagez = () => {
    return messages;
}

const messageBuilder = () => {
    let newString = '';
    for (let i = 0; i < messages.length; i++) {
        newString += `<div class="message">`
        newString +=    `${messages[i].user}: `
        newString +=    `<span>${messages[i].message}</span> `
        newString +=    `<font size="1">${messages[i].timestamp}</font> `
        newString +=    `<button type="button" class="btn btn-primary m-2 editMessages" id="editButton">Edit</button>`
        newString +=    `<button type="button" class="btn btn-primary m-2 deleteMessages" id="deleteButton">Delete</button>`
        newString += `</div>`

    }
    printToDom(newString, 'messageArea')
    editMessage();
    deleteMessage();
    clearFix();
};

// DELETE BUTTON

const deleteClear = () => {
    const messageZone = document.getElementsByClassName('message');
        if (messageZone.length <= [0]){
            clearButton.disabled = true;
        }
}
// deleteClear disables the clear button when the last message is deleted
const deleteMessage = () => {
    const deleteButtons = document.getElementsByClassName('deleteMessages');
    for (let i = 0; i < deleteButtons.length; i++) {
        const element = deleteButtons[i];
        element.addEventListener('click', (e) => {
            const buttonIClicked = e.target;
            const messageToDelete = buttonIClicked.parentNode;
            messageToDelete.remove();
            deleteClear();
        })
    }
}

// Limits the messages in the chatbox to 20

const messageLimit = () => {
    const allMessages = document.getElementsByClassName('message');  
    if (allMessages.length > [20]) {
        const first = allMessages.item([0]);
        first.remove();
    };
}

console.log('hello world');

export {messageBuilder, messages, setMessages, getMessagez, deleteMessage, messageLimit}
