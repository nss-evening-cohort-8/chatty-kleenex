import {printToDom} from '../helpers/util.js'

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
        newString += `<div>`
        newString +=    `${messages[i].user}: `
        newString +=    `${messages[i].message} `
        newString +=    `${messages[i].timestamp} `
        newString +=    `<button type="button" class="btn btn-primary m-2 editMessages" id="editButton">Edit</button>`
        newString +=    `<button type="button" class="btn btn-primary m-2 deleteMessages" id="deleteButton">Delete</button>`
        newString += `</div>`

    }
    printToDom(newString, 'messageArea')
    counter++;
    editMessage();
    deleteMessage();
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

// Messing with editing 

const editMessage = () => {
    const editButtons = document.getElementsByClassName('editMessages');
    for (let i = 0; i < editButtons.length; i++) {
        const editer = editButtons[i]; 
        editer.addEventListener('click', (e) => {
            const messageIClicked = '';
        })
    }
}


export {messageBuilder, messages, setMessages, getMessagez, deleteMessage}