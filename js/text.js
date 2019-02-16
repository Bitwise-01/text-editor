'use strict';

const textEditor = document.getElementById('editor');

window.addEventListener('load', () => {
    keypress();
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

    document.getElementById('fonts').selectedIndex = 2;
    textEditor.style.fontFamily = fontsTag[2].value;
}

function keypress() {
    document.addEventListener('keydown', (e) => {
        if (e.shiftKey && e.keyCode == 9) {
            execute('outdent');
            return;
        }
        
        if (!e.shiftKey && e.keyCode == 9) {
            execute('indent');
            e.preventDefault();
        }      
    })
}
