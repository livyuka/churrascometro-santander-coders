const body = document.querySelector("body");

const style = document.createElement("style");
style.textContent = `body {
    background-image: url(./background.jpg); 
}`

document.head.appendChild(style);

const app = document.querySelector("app");

const container = document.createElement("div");
container.classList.add("container");

const h1 = document.createElement("h1");
h1.innerText = "Churrascômetro";

function initiate() {
    const menNumber = sessionStorage.getItem("men");
    const womenNumber = sessionStorage.getItem("women");
    const kidNumber = sessionStorage.getItem("kid");
    const alcoholicNumber = sessionStorage.getItem("alcoholic")
    if (menNumber) {
        menInput.value = menNumber;
    }
    if (womenNumber) {
        womenInput.value = womenNumber;
    }
    if (kidNumber) {
        kidInput.value = kidNumber;
    }
    if (alcoholicNumber) {
        alcoholicInput.value = alcoholicNumber;
    }
}

function checkRegister() {
    const nameInput = localStorage.getItem("name");
    const emailInput = localStorage.getItem("email");
    const cityInput = localStorage.getItem("city");
    if (nameInput && emailInput && cityInput) {
        calculator.removeChild(formRow);
        calculator.removeChild(registerRow);
        calculator.appendChild(resultRow);
        calculator.appendChild(recalculateRow);
    }
}

// Append code -------------------------------------
container.appendChild(h1);
container.appendChild(calculator);

calculator.appendChild(inputRow);

inputRow.appendChild(menInputGroup);
menInputGroup.appendChild(menLabel);
menInputGroup.appendChild(menInput);
menInputGroup.appendChild(menButtonGroup);
menButtonGroup.appendChild(menButtonMinus);
menButtonGroup.appendChild(menButtonPlus);

inputRow.appendChild(womenInputGroup);
womenInputGroup.appendChild(womenLabel);
womenInputGroup.appendChild(womenInput);
womenInputGroup.appendChild(womenButtonGroup);
womenButtonGroup.appendChild(womenButtonMinus);
womenButtonGroup.appendChild(womenButtonPlus);

inputRow.appendChild(kidInputGroup);
kidInputGroup.appendChild(kidLabel);
kidInputGroup.appendChild(kidInput);
kidInputGroup.appendChild(kidButtonGroup);
kidButtonGroup.appendChild(kidButtonMinus);
kidButtonGroup.appendChild(kidButtonPlus);

inputRow.appendChild(alcoholicInputGroup);
alcoholicInputGroup.appendChild(alcoholicLabel);
alcoholicInputGroup.appendChild(alcoholicInput);
alcoholicInputGroup.appendChild(alcoholicButtonGroup);
alcoholicButtonGroup.appendChild(alcoholicButtonMinus);
alcoholicButtonGroup.appendChild(alcoholicButtonPlus);

calculateRow.appendChild(calculateInputGroup);
calculateInputGroup.append(buttonCalculate);

calculator.appendChild(calculateRow);

// calculator.appendChild(formRow);
formRow.appendChild(formInputGroup);
formInputGroup.appendChild(headerForm);
formInputGroup.appendChild(nameInput);
formInputGroup.appendChild(emailInput);
formInputGroup.appendChild(cityInput);

// calculator.appendChild(registerRow);
registerRow.appendChild(registerInputGroup);
registerInputGroup.appendChild(buttonRegister);

resultRow.appendChild(totalPeopleInputGroup);
totalPeopleInputGroup.appendChild(totalPeopleTitle);
totalPeopleInputGroup.appendChild(totalPeople);

resultRow.appendChild(tableInputGroup);
tableInputGroup.appendChild(table);
table.appendChild(captionTable);
table.appendChild(tableHead);
tableHead.appendChild(firstTableRow);
firstTableRow.appendChild(firstTableHead);
firstTableRow.appendChild(secondTableHead);
table.appendChild(tableBody);
tableBody.appendChild(secondTableRow);
secondTableRow.appendChild(firstTableData);
secondTableRow.appendChild(secondTableData);
tableBody.appendChild(thirdTableRow);
thirdTableRow.appendChild(thirdTableData);
thirdTableRow.appendChild(forthTableData);
recalculateRow.appendChild(recalculateInputGroup);
recalculateInputGroup.appendChild(buttonRecalculate)

app.appendChild(container);

initiate();