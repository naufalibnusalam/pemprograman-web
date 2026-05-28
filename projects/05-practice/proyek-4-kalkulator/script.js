/* ========================================
   Proyek 4: Kalkulator — Script
   Konsep: Variabel, Fungsi, Logika Kondisional, DOM
   ======================================== */

// DOM Elements
const resultDisplay = document.getElementById('result');
const expressionDisplay = document.getElementById('expression');
const buttons = document.querySelectorAll('.btn-calc');

// Calculator State
let currentOperand = '0';
let previousOperand = '';
let currentOperation = null;
let shouldResetScreen = false;

// Format numbers for display (e.g., adding commas for thousands)
function formatNumber(num) {
    if (num === '-' || num === '') return num;
    const stringNum = num.toString();
    const integerDigits = parseFloat(stringNum.split('.')[0]);
    const decimalDigits = stringNum.split('.')[1];
    let integerDisplay;
    
    if (isNaN(integerDigits)) {
        integerDisplay = '';
    } else {
        integerDisplay = integerDigits.toLocaleString('id-ID', { maximumFractionDigits: 0 });
    }

    if (decimalDigits != null) {
        return `${integerDisplay},${decimalDigits}`;
    } else {
        return integerDisplay;
    }
}

// Clean number for calculations (remove formatting)
function parseFormattedNumber(str) {
    // Replace Indonesian comma with dot for JS calculation
    return str.toString().replace(/,/g, '.');
}

// Update the display
function updateDisplay() {
    resultDisplay.textContent = formatNumber(currentOperand);
    
    if (currentOperation != null) {
        expressionDisplay.textContent = `${formatNumber(previousOperand)} ${currentOperation}`;
    } else {
        expressionDisplay.textContent = '';
    }

    // Dynamic font size adjustment for large numbers
    if (currentOperand.length > 10) {
        resultDisplay.style.fontSize = '32px';
    } else if (currentOperand.length > 7) {
        resultDisplay.style.fontSize = '40px';
    } else {
        resultDisplay.style.fontSize = '48px';
    }
}

// Clear everything
function clear() {
    currentOperand = '0';
    previousOperand = '';
    currentOperation = null;
    shouldResetScreen = false;
    removeActiveOperators();
}

// Backspace (delete last character)
function backspace() {
    if (shouldResetScreen) return;
    
    if (currentOperand.length === 1 || (currentOperand.length === 2 && currentOperand.startsWith('-'))) {
        currentOperand = '0';
    } else {
        currentOperand = currentOperand.slice(0, -1);
    }
}

// Append a number
function appendNumber(number) {
    if (shouldResetScreen) {
        currentOperand = '';
        shouldResetScreen = false;
    }
    
    if (currentOperand === '0') {
        currentOperand = number;
    } else {
        // Limit input length
        if (currentOperand.length < 15) {
            currentOperand += number;
        }
    }
}

// Append decimal point
function appendDecimal() {
    if (shouldResetScreen) {
        currentOperand = '0';
        shouldResetScreen = false;
    }
    // In Indonesian format, decimal is comma, but in logic we use dot
    if (!currentOperand.includes('.')) {
        currentOperand += '.';
    }
}

// Handle operator clicks
function handleOperator(operator) {
    if (currentOperand === 'Error') clear();
    
    if (currentOperation !== null && !shouldResetScreen) {
        calculate();
    }
    
    previousOperand = currentOperand;
    currentOperation = operator;
    shouldResetScreen = true;
}

// Handle percentage
function handlePercent() {
    if (currentOperand === 'Error' || currentOperand === '0') return;
    
    const value = parseFloat(parseFormattedNumber(currentOperand));
    currentOperand = (value / 100).toString();
}

// Calculate the result
function calculate() {
    if (currentOperation === null || shouldResetScreen) return;
    
    let computation;
    const prev = parseFloat(parseFormattedNumber(previousOperand));
    const current = parseFloat(parseFormattedNumber(currentOperand));
    
    if (isNaN(prev) || isNaN(current)) return;
    
    switch (currentOperation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '×':
            computation = prev * current;
            break;
        case '÷':
            if (current === 0) {
                clear();
                currentOperand = 'Error';
                updateDisplay();
                return;
            }
            computation = prev / current;
            break;
        default:
            return;
    }
    
    // Round to prevent JS float precision issues (e.g., 0.1 + 0.2)
    computation = Math.round(computation * 10000000000) / 10000000000;
    
    currentOperand = computation.toString();
    currentOperation = null;
    previousOperand = '';
    shouldResetScreen = true;
    removeActiveOperators();
}

// Visual feedback for active operator
function removeActiveOperators() {
    buttons.forEach(btn => btn.classList.remove('active'));
}

function setActiveOperator(operatorBtn) {
    removeActiveOperators();
    operatorBtn.classList.add('active');
}

// Button Click Event Listeners
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Add click animation
        button.classList.add('btn-animating');
        setTimeout(() => button.classList.remove('btn-animating'), 300);

        const action = button.dataset.action;
        const value = button.dataset.value;

        switch (action) {
            case 'number':
                appendNumber(value);
                updateDisplay();
                break;
            case 'operator':
                handleOperator(value);
                setActiveOperator(button);
                updateDisplay();
                break;
            case 'decimal':
                appendDecimal();
                updateDisplay();
                break;
            case 'clear':
                clear();
                updateDisplay();
                break;
            case 'backspace':
                backspace();
                updateDisplay();
                break;
            case 'percent':
                handlePercent();
                updateDisplay();
                break;
            case 'equals':
                calculate();
                updateDisplay();
                break;
        }
    });
});

// Keyboard Support
window.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) {
        appendNumber(e.key);
        updateDisplay();
    }
    if (e.key === '.' || e.key === ',') {
        appendDecimal();
        updateDisplay();
    }
    if (e.key === '=' || e.key === 'Enter') {
        e.preventDefault();
        calculate();
        updateDisplay();
    }
    if (e.key === 'Backspace') {
        backspace();
        updateDisplay();
    }
    if (e.key === 'Escape') {
        clear();
        updateDisplay();
    }
    if (e.key === '+' || e.key === '-') {
        handleOperator(e.key);
        updateDisplay();
    }
    if (e.key === '*' || e.key === 'x') {
        handleOperator('×');
        updateDisplay();
    }
    if (e.key === '/') {
        e.preventDefault(); // Prevent quick search in Firefox
        handleOperator('÷');
        updateDisplay();
    }
    if (e.key === '%') {
        handlePercent();
        updateDisplay();
    }
});

// Initialize Display
updateDisplay();
