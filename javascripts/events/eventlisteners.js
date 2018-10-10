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