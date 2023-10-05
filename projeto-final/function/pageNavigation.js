function addInputPage() {
    calculator.appendChild(inputRow);
    calculator.appendChild(calculateRow);
}

function removeInputPage() {
    calculator.removeChild(inputRow);
    calculator.removeChild(calculateRow);
}

function addRegisterPage() {
    calculator.appendChild(formRow);
    calculator.appendChild(registerRow);
}

function removeRegisterPage() {
    calculator.removeChild(formRow);
    calculator.removeChild(registerRow);
}

function addResultPage() {
    calculator.appendChild(resultRow);
    calculator.appendChild(recalculateRow);
}

function removeResultPage() {
    calculator.removeChild(resultRow);
    calculator.removeChild(recalculateRow);
}