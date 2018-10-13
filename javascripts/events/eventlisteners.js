import { printToDom } from "../helpers/util.js";
import {deleteMessage, messageLimit} from './messages.js';


let words = [];

const setMessages = (newArray) => {
    words = newArray;
};

const getMessagez = () => {
    return words;
}


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

    let userName = "";
    const users = () => {
        let userRadios =  document.forms["usersForm"].elements["users"];
        for (let i = 0; i<userRadios.length; i++) {
            userRadios[i].onclick = function() {
                userName = userRadios[i].value;
                return userName;
                            } 
            }
        }
        users();

let submit = document.getElementById('textInput');        
const userMessage = () => {
window.addEventListener('keypress', function (e) {
    const keyCode = e.which;
    let newString = "";
    if (keyCode == 13){
        newString += `<div class='message'>`
        newString +=    `${userName}${' '}`
        newString +=    `<span>${submit.value}</span>`
        newString +=    `<button type="button" class="btn btn-primary m-2 editMessages" id="editButton">Edit</button>`
        newString +=    `<button type="button" class="btn btn-primary m-2 deleteMessages" id="deleteButton">Delete</button>`
        newString += `<div>`;
        badWords();
        submit.value = '';
    }
    printToDom(newString);
    deleteMessage();
    messageLimit();
    editMessage();
});
} 
userMessage();

// BAD WORDS
const badWords = () => {
const message = submit.value;
console.log(message);
for (let i = 0; i < words.length; i++) {
    if(message.includes(words[i])){
        const alertWord = words[i];
        alert("You typed " + alertWord + " so you are rewarded with a prize");
    }
}
}

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
            const toDelete = messageIClicked.parentNode;
            const messageToEdit = messageIClicked.parentNode.childNodes[1];
            submit.value = messageToEdit.innerHTML;
            toDelete.remove();
        })
    }
}
 
export {editMessage,setMessages,getMessagez,badWords}

