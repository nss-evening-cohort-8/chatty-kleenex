import { printToDom } from '../helpers/util.js'
import {buttonFocus} from './eventlisteners.js'

let messages = [];
let counter = 0;

const setMessages = (newArray) => {
    messages = newArray;
};

const getMessagez = () => {
    return messages;
}

const messageBuilder = () => {
    let newString = '';
    for (let i = 0; i < messages.length; i++) {
        newString += `<div class="messageDiv">`
        newString += `${messages[i].user}: `
        newString += `${messages[i].message} `
        newString += `${messages[i].timestamp} `
        newString += `<button type="button" class="btn btn-primary m-2 editMessages" id="editButton">Edit</button>`
        newString += `<button type="button" class="btn btn-primary m-2 deleteMessages" id="deleteButton">Delete</button>`
        newString += `</div>`

    }
    printToDom(newString, 'messageArea')
    counter++;
    deleteMessage();
    buttonFocus();
};

// Messing with deleting 
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





export { messageBuilder, messages, setMessages, getMessagez, deleteMessage }


