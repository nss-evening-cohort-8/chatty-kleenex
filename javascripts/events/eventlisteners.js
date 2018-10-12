import { printToDom } from "../helpers/util.js";
import { deleteMessage, messageBuilder } from './messages.js';


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
        let userRadios =  document.getElementsByClassName("users");
        console.log(userRadios)
        for (let i = 0; i<userRadios.length; i++) {
            userRadios[i].onclick = function() {
                userName = userRadios[i].value;
                console.log(userName)
                return userName;
                            } 
            }
        }
        users();


const submit = document.getElementById('textInput');
window.addEventListener('keypress', function (e) {
    const keyCode = e.which;
    let newString = "";
    if (keyCode == 13){
        newString += `<div>`
        newString +=    `${userName}${' '}`
        newString +=    `${submit.value}`
        newString +=    `<button type="button" class="btn btn-primary m-2" id="editButton">Edit</button>`
        newString +=    `<button type="button" class="btn btn-primary m-2 deleteMessages" id="deleteButton">Delete</button>`
        newString += `<div>`;
        submit.value = '';
    }
    printToDom(newString);
    deleteMessage();
    buttonFocus();
    buttonEdit();
});



const largeText = () => {
    const makeTextLarge = document.getElementById("largeText");
    makeTextLarge.addEventListener('click', () => {
        if (makeTextLarge.checked) {
            messageArea.style.fontSize = "2.0em";
        }
        else {
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



const buttonFocus = () => {
    const editM = document.getElementById('textInput');
    const editB = document.getElementsByClassName('messageDiv');
    for (let i = 0; i < editB.length; i++) {
        editB[i].addEventListener('click', () => {
            document.getElementById('editButtons');
            editM.focus();
        })
    }
}

let messageIClicked;

let buttonEdit = () => {
    const editButtons = document.getElementsByClassName("messageDiv");
    for (let i = 0; i < editButtons.length; i++) {
        editButtons[i].addEventListener('click', (e) => {
            messageIClicked = e.currentTarget.parentNode;
        })
    }
};

// const changeMessage = () => {
//     input.addEventListener('keyup', (e) => {
//         if (e.keyCode === 13) {
//             messageIClicked.childNodes[2].innerHTML = input.value
//         }
//     }
// )}

export {buttonEdit, buttonFocus}

