import { printToDom } from "../helpers/util.js";


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

const largeText = () => {
    const textCheckBox = document.getElementById('largeText');
    textCheckBox.addEventListener('click', (e) => {
        if (textCheckBox.checked) {
            messageArea.style.fontSize = "40px";
        } else {
            messageArea.style.fontSize = "25px";
        }
    })
};

largeText();






    console.log('event listeners script connected')
    
    const submit = document.getElementById('textInput');
    window.addEventListener('keypress', function (e) {
        var keyCode = e.which;
        let newString = "";
        if (keyCode == 13){
            newString = submit.value;
            submit.value = '';
        }
        printToDom(newString);
    })
