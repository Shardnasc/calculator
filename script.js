
let currentInput = '';
let hasDecimal = false;
//Resulting output and allowing decimals
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
//For %
function appendPercentage() {
    if (currentInput === '') {
        return; // Only calculate percentage if there's an input
    }

    const percentageValue = (parseFloat(currentInput) / 100).toString();
    currentInput = percentageValue;
    document.getElementById('result').value = percentageValue;
}

// Clear result
function clearResult() {
    currentInput = '';
    hasDecimal = false;
    document.getElementById('result').value = '';
}
//Reults for the input
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
