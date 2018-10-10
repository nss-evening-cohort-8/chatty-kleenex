import { printToDom } from "../helpers/util.js";

console.log('hi');

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
    console.log('event listeners script connected')
    
    const submit = document.getElementById('textInput');
    window.addEventListener('keypress', function (e) {
        var keyCode = e.which;
        let newString = "";
        if (keyCode == 13){
            console.log (submit.value);
            newString = submit.value;
            submit.value = '';
        }
        printToDom(newString);
    })
