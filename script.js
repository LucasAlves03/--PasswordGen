// Get the necessary elements
let passwordLengthInput = document.getElementById('password-length');
let rangeValueOutput = document.getElementById('range-value');
let includeNumbersCheckbox = document.getElementById('includeNumbers');
let includeSymbolsCheckbox = document.getElementById('includeSymbols');
let generateBtn = document.getElementById('generate-btn');
let CopyBtn = document.getElementById('copy-btn');
let passwordOutput = document.getElementById('password-output');
let popup = document.getElementById('popup');

// Event listener for password length input
passwordLengthInput.addEventListener('input', function() {
    let rangeValue = passwordLengthInput.value;
    rangeValueOutput.textContent = rangeValue;
    generatePasswordAndDisplay(rangeValue);
});

// Event listener for generate button
generateBtn.addEventListener('click', function() {
    let rangeValue = passwordLengthInput.value;
    generatePasswordAndDisplay(rangeValue);
});

// Event listener for copy button
CopyBtn.addEventListener('click', function() {
    copyPasswordToClipboard(passwordOutput.value);
});

// Function to copy password to clipboard
function copyPasswordToClipboard(password) {
    navigator.clipboard.writeText(password)
        .then(function() {
            showPopup('Senha copiada com sucesso!');
        })
        .catch(function(error) {
            showPopup('Erro ao copiar a senha: ' + error);
        });
}

// Function to display the popup
function showPopup(message) {
    popup.textContent = message;
    popup.style.display = 'block';
    setTimeout(function() {
        popup.style.display = 'none';
    }, 2000);
}

// Function to generate password and display it
function generatePasswordAndDisplay(length) {
    let includeNumbers = includeNumbersCheckbox.checked;
    let includeSymbols = includeSymbolsCheckbox.checked;
    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) {
        charset += '0123456789';
    }
    if (includeSymbols) {
        charset += '!@#$%^&*()-_=+';
    }
let password = '';
    for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    passwordOutput.value = password;
}
