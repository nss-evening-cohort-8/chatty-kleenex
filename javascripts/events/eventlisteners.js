import { printToDom } from "../helpers/util.js";
import {deleteMessage} from './messages.js';


// Dark Theme Function 
const darkTheme = () => {
    const darkCheckBox = document.getElementById('darkTheme');
    darkCheckBox.addEventListener('click', (e) => {
        if (darkCheckBox.checked) {
            messageArea.style.backgroundColor = "darkgray";
            messageArea.style.color = "white";
        } else {
            messageArea.style.backgroundColor = "white";
            messageArea.style.color = "black";
        }
    })
};
darkTheme();


    console.log('event listeners script connected')
    
const submit = document.getElementById('textInput');
window.addEventListener('keypress', function (e) {
    const keyCode = e.which;
    let newString = "";
    if (keyCode == 13){
        newString += `<div>`
        newString +=    `Default_User: `
        newString +=    `<span>${submit.value}</span>`
        newString +=    `<button type="button" class="btn btn-primary m-2 editMessages" id="editButton">Edit</button>`
        newString +=    `<button type="button" class="btn btn-primary m-2 deleteMessages" id="deleteButton">Delete</button>`
        newString += `<div>`;
        submit.value = '';
    }
    printToDom(newString);
    deleteMessage();
    editMessage();
});

const largeText = () => {
    const makeTextLarge = document.getElementById("largeText");
    makeTextLarge.addEventListener('click', () => {
    if(makeTextLarge.checked){
        messageArea.style.fontSize = "2.0em";  
    }
    else{
        messageArea.style.fontSize = "1.0em";
    }
    })
};
largeText();

// Clear Button Functionality //

let clearButton = document.getElementById('clearButton');

const clearBox = () => {
    document.getElementById('messageArea').innerHTML = '';
}

clearButton.addEventListener('click', clearBox);

// EDIT BUTTON 

const editMessage = () => {
    const editButtons = document.getElementsByClassName('editMessages');
    for (let i = 0; i < editButtons.length; i++) {
        const editer = editButtons[i]; 
        editer.addEventListener('click', (e) => {
            const messageIClicked = e.target;
            console.log(messageIClicked);
            const toDelete = messageIClicked.parentNode;
            console.log(toDelete);

            const messageToEdit = messageIClicked.parentNode.childNodes[1];
            console.log(messageToEdit);
            submit.value = messageToEdit.innerHTML;
            toDelete.remove();

        })
    }
}

editMessage();

