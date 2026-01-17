let currentTheme = {
    background: 'white',
    text: 'black'
};

function applyTheme() {
    const bgSelect = document.getElementById('bgColor').value;
    const textSelect = document.getElementById('textColor').value;

    document.body.style.backgroundColor = bgSelect;
    document.body.style.color = textSelect;

    currentTheme.background = bgSelect;
    currentTheme.text = textSelect;

    displayThemeStatus();
}

function resetTheme() {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';

    document.getElementById('bgColor').value = 'white';
    document.getElementById('textColor').value = 'black';

    currentTheme = {
        background: 'white',
        text: 'black'
    };

    displayThemeStatus();
}

function displayThemeStatus() {
    const log = document.getElementById('currentThemeLog');
    log.innerText = "Current Theme Object:\n" + JSON.stringify(currentTheme, null, 2);
}
