import {printToDom} from '../helpers/util.js'
import {editMessage} from './eventlisteners.js'

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
        newString +=    `${messages[i].timestamp} `
        newString +=    `<button type="button" class="btn btn-primary m-2 editMessages" id="editButton">Edit</button>`
        newString +=    `<button type="button" class="btn btn-primary m-2 deleteMessages" id="deleteButton">Delete</button>`
        newString += `</div>`

    }
    printToDom(newString, 'messageArea')
    editMessage();
    deleteMessage();
};

// DELETE BUTTON

const deleteMessage = () => {
    const deleteButtons = document.getElementsByClassName('deleteMessages');
    for (let i = 0; i < deleteButtons.length; i++) {
        const element = deleteButtons[i];
        element.addEventListener('click', (e) => {
            const buttonIClicked = e.target;
            const messageToDelete = buttonIClicked.parentNode;
            messageToDelete.remove();
        })
    }
}

const messageLimit = () => {
    const allMessages = document.getElementsByClassName('message')    
    if (allMessages.length > [20]) {
        const first = allMessages.item([0]);
        first.remove();
    };
}


export {messageBuilder, messages, setMessages, getMessagez, deleteMessage, messageLimit}
