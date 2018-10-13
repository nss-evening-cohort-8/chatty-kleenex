import { printToDom } from "../helpers/util.js";
<<<<<<< HEAD
import { deleteMessage, messageBuilder } from './messages.js';
=======
import {deleteMessage, messageLimit} from './messages.js';
>>>>>>> master


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

<<<<<<< HEAD
let userName = "";
const users = () => {
    let userRadios = document.getElementsByClassName("users");
    console.log(userRadios)
    for (let i = 0; i < userRadios.length; i++) {
        userRadios[i].onclick = function () {
            userName = userRadios[i].value;
            console.log(userName)
            return userName;
=======
    let userName = "";
    const users = () => {
        let userRadios =  document.getElementsByClassName("users");
        for (let i = 0; i<userRadios.length; i++) {
            userRadios[i].onclick = function() {
                userName = userRadios[i].value;
                return userName;
                            } 
            }
>>>>>>> master
        }
    }
}
users();


const submit = document.getElementById('textInput');
window.addEventListener('keypress', function (e) {
    const keyCode = e.which;
    let newString = "";
<<<<<<< HEAD
    if (keyCode == 13) {
        newString += `<div>`
        newString += `${userName}${' '}`
        newString += `<span>${submit.value}</span>`
        newString += `<button type="button" class="btn btn-primary m-2 editMessages" id="editButton">Edit</button>`
        newString += `<button type="button" class="btn btn-primary m-2 deleteMessages" id="deleteButton">Delete</button>`
=======
    if (keyCode == 13){
        newString += `<div class='message'>`
        newString +=    `${userName}${' '}`
        newString +=    `<span>${submit.value}</span>`
        newString +=    `<button type="button" class="btn btn-primary m-2 editMessages" id="editButton">Edit</button>`
        newString +=    `<button type="button" class="btn btn-primary m-2 deleteMessages" id="deleteButton">Delete</button>`
>>>>>>> master
        newString += `<div>`;
        submit.value = '';
    }
    printToDom(newString);
    deleteMessage();
    messageLimit();
    editMessage();
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


//modal themes
// let whut = document.getElementById('themessss');
// let pageBody = document.getElementById("bodyId");
// let firstTheme = document.getElementById('themeGreen') ;




// const chooseTheme = () => {
//     const greenCheckBox = document.getElementById('themeGreen');
//     greenCheckBox.addEventListener('click', (e) => {
//         if (greenCheckBox.checked) {
//             bodyId.style.backgroundColor = "green";
//             bodyId.style.color = "white";
//         } else {
//             bodyId.style.backgroundColor = "white";
//             bodyId.style.color = "black";
//         }
//     })
// };
// chooseTheme();

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

export { editMessage }

const chooseTheme = () => {
    const greenThemeBox = document.getElementById('themeGreen');
    greenThemeBox.addEventListener('click', () => {
        if (greenThemeBox.checked) {
            console.log('break?');
            document.getElementById('bodyId').classList.add('theme1');
        }
    })
}
chooseTheme();