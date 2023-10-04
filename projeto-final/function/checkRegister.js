function checkRegister() {
    const customer = localStorage.getItem("customer");
    if (customer) {
        calculator.removeChild(formRow);
        calculator.removeChild(registerRow);
        calculator.appendChild(resultRow);
        calculator.appendChild(recalculateRow);
        sendPromotionalEmail();
    }
}