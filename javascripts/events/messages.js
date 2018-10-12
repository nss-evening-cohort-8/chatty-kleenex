import { printToDom } from '../helpers/util.js'

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


// const messageInput = document.getElementById('textInput');
// const editM = document.getElementsByClassName('messageDiv');
// const editMessage = () => {
//     for (let i = 0; i < editM.length; i++) {
//         editM[i].messages.addEventListener('click', () => {
//                 document.getElementById('editButton');
//                 messageInput.focus();
//             }
//         )}
//     };

const editM = document.document.getElementsByClassName('messageDiv');
const editMessage = () => {
   for (let i = 0; i < editM.length; i++) {
    editM.addEventListener('input',  () => {
        const messageInput = document.getElementById('textInput').value;
        const messageEdited = messageInput.
    })
   }
}


export { messageBuilder, messages, setMessages, getMessagez, deleteMessage, editMessage }