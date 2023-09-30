function checkRegister() {
    const nameInput = localStorage.getItem("name");
    const emailInput = localStorage.getItem("email");
    const cityInput = localStorage.getItem("city");
    if (nameInput && emailInput && cityInput) {
        calculator.removeChild(formRow);
        calculator.removeChild(registerRow);
        calculator.appendChild(resultRow);
        calculator.appendChild(recalculateRow);
        sendPromotionalEmail();
    }
}