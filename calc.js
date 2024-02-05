document.addEventListener('DOMContentLoaded', function () {
    const output = document.querySelector('.calculator__output');
    const keys = document.querySelector('.calculator__keys');

    keys.addEventListener('click', function (e) {
        if (e.target.matches('button')) {
            const key = e.target;
            const keyValue = key.textContent;
            const displayedNum = output.textContent;

            if (key.classList.contains('calculator__key--operator')) {
                // Handle operator keys (+, -, ×, ÷)
                handleOperator(keyValue);
            } else if (keyValue === 'AC') {
                // Handle clear (AC) key
                clearCalculator();
            } else if (keyValue === '=') {
                // Handle equals (=) key
                calculateResult();
            } else {
                // Handle numeric and decimal keys
                appendToDisplay(keyValue);
            }
        }
    });

    function appendToDisplay(value) {
        output.textContent += value;
    }

    function clearCalculator() {
        output.textContent = '0';
    }

    function calculateResult() {
        try {
            output.textContent = eval(output.textContent);
        } catch (error) {
            output.textContent = 'Error';
        }
    }

    function handleOperator(operator) {
        const displayedNum = output.textContent;

        if (displayedNum !== '0') {
            appendToDisplay(operator);
        }
    }
});


