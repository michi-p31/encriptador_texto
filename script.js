let originalText = '';

function encryptText() {
    let text = document.getElementById('text-input').value;
    originalText = text;
    let encryptedText = text.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
    document.getElementById('output-text').value = encryptedText;
}
function decryptText() {
    let encryptedText = document.getElementById('output-text').value;
    let decryptedText = encryptedText.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 1)).join('');
    document.getElementById('output-text').value = decryptedText;
}
function copyText() {
    let outputText = document.getElementById('output-text');
    outputText.select();
    outputText.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert('Texto copiado: ' + outputText.value);
}
