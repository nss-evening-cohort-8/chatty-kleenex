import { printToDom } from "../helpers/util.js";

const darkTheme = () => {
    const darkCheckBox = document.getElementById('darkTheme');
    darkCheckBox.addEventListener('click', (e) => {
        if (darkCheckBox.checked) {
            messageArea.style.backgroundColor = "darkgray";
        } else {
            messageArea.style.backgroundColor = "white";
        }
    })
};
darkTheme();
    
const submit = document.getElementById('textInput');
window.addEventListener('keypress', function (e) {
    var keyCode = e.which;
    let newString = "";
    if (keyCode == 13){
        newString = submit.value;
        submit.value = '';
    }
    printToDom(newString);
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

