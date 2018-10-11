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
        newString += `<div class="message">`
        newString +=    `${messages[i].user}: `
        newString +=    `${messages[i].message} `
        newString +=    `${messages[i].timestamp} `
        newString +=    `<button type="button" class="btn btn-primary m-2" id="editButton">Edit</button>`
        newString +=    `<button type="button" class="btn btn-primary m-2 deleteMessages" id="deleteButton">Delete</button>`
        newString += `</div>`

    }
    printToDom(newString, 'messageArea')
    counter++;
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

const messageLimit = () => {
    const allMessages = document.getElementsByClassName('message')
    
    if (allMessages.length < [20]) {
        console.log('This is less than 20')
    } else {
        // const removeFirst = messageArray.shift();
        // const newArray = removeFirst.join('<div>');
        // return newArray;
        console.log('This is more than 20')
    }
}


export {messageBuilder, messages, setMessages, getMessagez, deleteMessage, messageLimit}
