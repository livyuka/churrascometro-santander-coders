const calculator = document.createElement("div");
calculator.classList.add("calculator");

calculator.addEventListener(events.calculate, () => {
    calculateItems();
    calculator.removeChild(inputRow);
    calculator.removeChild(calculateRow);
    calculator.appendChild(formRow);
    calculator.appendChild(registerRow);
    checkRegister();
});

calculator.addEventListener(events.register, () => {
    const customer = {
        name: nameInput.value,
        email: emailInput.value,
        cep: postalCodeInput.value
    };

    api.getAddressByPostalCode(postalCodeInput.value)
        .then((response) => {
            localStorage.setItem("customer", JSON.stringify({...customer,response}));
            calculator.removeChild(formRow);
            calculator.removeChild(registerRow);
            calculator.appendChild(resultRow);
            calculator.appendChild(recalculateRow);
        })
        .catch((error) => {
            console.log(error);
            document.getElementById("errorPostalCode").style.visibility = "visible";
        })
});

calculator.addEventListener(events.recalculate, () => {
    calculator.removeChild(resultRow);
    calculator.removeChild(recalculateRow);
    calculator.appendChild(inputRow);
    calculator.appendChild(calculateRow);
    menInput.value = 0;
    womenInput.value = 0;
    kidInput.value = 0;
    alcoholicInput.value = 0;
    sessionStorage.removeItem("men");
    sessionStorage.removeItem("women");
    sessionStorage.removeItem("kid");
    sessionStorage.removeItem("alcoholic");
});

container.appendChild(calculator);

calculator.appendChild(inputRow);