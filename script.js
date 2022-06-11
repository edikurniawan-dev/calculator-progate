const calculatorScreen = document.querySelector('.calculator-screen');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equalSign = document.querySelector('.equal-sign');
const clearBtn = document.querySelector('.all-clear');
const decimal = document.querySelector('.decimal');

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
});

clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
});

decimal.addEventListener('click', (e) => {
    inputDecimal(e.target.value);
    updateScreen(currentNumber);
});

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return;
    }
    currentNumber += dot;
};

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
};

const updateScreen = (number) => {
    calculatorScreen.value = number;
};

const calculate = () => {
    let result = '';
    switch (calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            break;
    }
    currentNumber = result;
    calculationOperator = '';
};

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
};

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber;
    }
    prevNumber = currentNumber;
    calculationOperator = operator;
    currentNumber = '0';
};

operators.forEach((operator) => {
    operator.addEventListener('click', (e) => {
        inputOperator(e.target.value);
    });
});

numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        inputNumber(e.target.innerText);
        updateScreen(e.target.value);
    });
});
