console.log('hi');

const darkTheme = () => {
    const darkCheckBox = document.getElementById('darkTheme');
    darkCheckBox.addEventListener('checked', (e) => {
        console.log('its working');
    });
};