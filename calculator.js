const calculator = document.createElement("div");
calculator.classList.add("calculator");

calculator.addEventListener(events.calculate, () => {
    validateInput();
    calculateItems();
    removeInputPage();
    addRegisterPage();
    checkRegister();
});

calculator.addEventListener(events.recalculate, () => {
    removeResultPage();
    addInputPage();
    menInput.value = 0;
    womenInput.value = 0;
    kidInput.value = 0;
    alcoholicInput.value = 0;
    sessionStorage.removeItem("menInput");
    sessionStorage.removeItem("womenInput");
    sessionStorage.removeItem("kidInput");
    sessionStorage.removeItem("alcoholicInput");
});

container.appendChild(calculator);