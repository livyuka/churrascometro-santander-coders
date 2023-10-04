function checkRegister() {
    // const nameInput = localStorage.getItem("name");
    // const emailInput = localStorage.getItem("email");
    // const cityInput = localStorage.getItem("city");
    const customer = localStorage.getItem("customer");
    if (customer) {
        calculator.removeChild(formRow);
        calculator.removeChild(registerRow);
        calculator.appendChild(resultRow);
        calculator.appendChild(recalculateRow);
        sendPromotionalEmail();
    }
}