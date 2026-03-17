const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let operator = '';
let previousValue = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value >= '0' && value <= '9') {
            currentInput += value;
            display.value = currentInput;
        } else if (value === 'C') {
            currentInput = '';
            operator = '';
            previousValue = '';
            display.value = '';
        } else if (value === '=') {
            if (previousValue && operator && currentInput) {
                const result = calculate(parseFloat(previousValue), parseFloat(currentInput), operator);
                display.value = result;
                currentInput = result.toString();
                operator = '';
                previousValue = '';
            }
        } else {
            if (currentInput) {
                if (previousValue && operator) {
                    previousValue = calculate(parseFloat(previousValue), parseFloat(currentInput), operator);
                    display.value = previousValue;
                } else {
                    previousValue = currentInput;
                }
                operator = value;
                currentInput = '';
            }
        }
    });
});

function calculate(a, b, op) {
    if (op === '+') {
        return a + b;
    } else if (op === '-') {
        return a - b;
    } else if (op === '*') {
        return a * b;
    } else if (op === '/') {
        return b !== 0 ? a / b : 'Error';
    } else {
        return 0;
    }
}