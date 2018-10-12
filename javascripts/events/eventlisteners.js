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
        newString += `<div class="messageDiv>`
        newString +=    `Default_User: `
        newString +=    `${submit.value}`
        newString +=    `<button type="button" class="btn btn-primary m-2 editButtons" id="editButton">Edit</button>`
        newString +=    `<button type="button" class="btn btn-primary m-2 deleteMessages" id="deleteButton">Delete</button>`
        newString += `<div>`;
        submit.value = '';
    }
    printToDom(newString);
    deleteMessage();
    buttonFocus();
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


//edit message



const editM = document.getElementById('textInput');
//focusing button onto input
const buttonFocus = () => {
    const editB = document.getElementsByClassName('messageDiv');
    for (let i = 0; i < editB.length; i++) {
        editB[i].addEventListener('click', 
       ()=> {
        document.getElementById('editButtons');
        editM.focus();
        })
    }
}


// const editMessage = () => {
//     const elementM = e.target.closest('.messageDiv').id;
//     const currentCharacter = messages.find(x => x.id === elementM);
//     for (let i = 0; i < elementM.length; i++) {

//     }
// }

export {buttonFocus}

