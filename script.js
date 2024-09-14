let display = document.getElementById('display');
let expression = '';

function appendToDisplay(value) {
    if (value === '^') {
        expression += '**'; 
    } else {
        expression += value;
    }
    display.value = expression;
}

function clearDisplay() {
    expression = '';
    display.value = '';
}

function deleteChar() {
    expression = expression.slice(0, -1);
    display.value = expression;
}

function calculate() {
    try {
        expression = expression.replace(/sin/g, 'Math.sin')
                               .replace(/cos/g, 'Math.cos')
                               .replace(/tan/g, 'Math.tan');

        display.value = eval(expression);
        expression = display.value; 
    } catch (error) {
        display.value = 'Error';
        expression = '';
    }
}
