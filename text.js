'use strict';

const textEditor = document.getElementById('editor');

window.addEventListener('load', () => {
    renderFonts();

    document.getElementById('font-size').selectedIndex = 2;
})

function execute(cmd, value) {
    document.execCommand(cmd, false, value); 
    textEditor.focus();
}

function renderFonts() {
    let fontsTag = document.getElementById('fonts');

    for (let n=0; n<fontsTag.length; n++) {
        fontsTag[n].style.fontFamily = fontsTag[n].value;
    }
}

