let currentResult = '';

function clearResult() {
    currentResult = '';
    document.getElementById('result').textContent = '0';
}

function appendToResult(value) {
    currentResult += value;
    document.getElementById('result').textContent = currentResult;
}

function calculateResult() {
    try {
        currentResult = eval(currentResult);
        document.getElementById('result').textContent = currentResult;
    } catch (error) {
        currentResult = 'Error';
        document.getElementById('result').textContent = currentResult;
    }
}
