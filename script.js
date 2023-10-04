let currentInput = '';
let hasDecimal = false;

function appendToResult(value) {
    if (value === '.' && hasDecimal) {
        return; // Allow only one decimal point
    }
    
    if (currentInput === '0' && value !== '.') {
        currentInput = ''; // Remove leading zero
    }

    currentInput += value;
    document.getElementById('result').value = currentInput;
    
    if (value === '.') {
        hasDecimal = true;
    }
}

//Clear result
function clearResult() {
    currentInput = '';
    hasDecimal = false;
    document.getElementById('result').value = '';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('result').value = currentInput;
        hasDecimal = currentInput.includes('.');
    } catch (error) {
        currentInput = '';
        document.getElementById('result').value = 'Error';
    }
}
