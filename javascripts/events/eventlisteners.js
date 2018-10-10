    console.log('event listeners script connected')
    
    const submit = document.getElementById('textInput');
    window.addEventListener('keypress', function (e) {
        var keyCode = e.which;
        if (keyCode == 13){
            console.log (submit.value);
        }
    })
