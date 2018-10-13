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

    let userName = "";
    const users = () => {
        let userRadios =  document.forms["usersForm"].elements["users"];
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


let inputvalues = [];
console.log(inputvalues);
const messageArray = () => {

const submit = document.getElementById('textInput');
window.addEventListener('keypress', function (e) {
    let newString = "";
    const keyCode = e.which;
    if (keyCode == 13){
        inputvalues.push(submit.value);
        submit.value ='';
        for (let i=0; i<inputvalues.length; i++){        
        newString += `<div>`
        newString +=    `${userName}${' '}`
        newString +=    `${i}${inputvalues[i]}`
        newString +=    `<button type="button" class="btn btn-primary m-2" id="editButton">Edit</button>`
        newString +=    `<button type="button" class="btn btn-primary m-2 deleteMessages" id="deleteButton">Delete</button>`
        newString += `<div>`;
        }
    }
    printToDom(newString);
    deleteMessage();
});

}
messageArray();

// const submit = document.getElementById('textInput');
// window.addEventListener('keypress', function (e) {
//     var keyCode = e.which;
//     let inputvalues = [];
//     if (keyCode == 13){
//         inputvalues.push(submit.value);
//     }
// for (i=0; i<inputvalues.length; i++){
//     console.log(inputvalues[0]);
// }
//     // printToDom(inputvalues);
// });

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