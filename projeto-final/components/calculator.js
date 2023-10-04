const calculator = document.createElement("div");
calculator.classList.add("calculator");

calculator.addEventListener(events.calculate, () => {
    const numberMen = menInput.value;
    const numberWomen = womenInput.value;
    const numberKid = kidInput.value;
    const fatorPicanhaMen = 0.2
    const fatorPicanhaWomen = 0.15
    const fatorPicanhaKid = 0.1
    const fatorFraldinhaMen = 0.3
    const fatorFraldinhaWomen = 0.2
    const fatorFraldinhaKid = 0.1
    let picanhaQtd = numberMen * fatorPicanhaMen + numberWomen * fatorPicanhaWomen + numberKid * fatorPicanhaKid;
    let fraldinhaQtd = numberMen * fatorFraldinhaMen + numberWomen * fatorFraldinhaWomen + numberKid * fatorFraldinhaKid;
    totalPeople.innerHTML = "Homens: " + numberMen + "<br />" + "Mulheres: " + numberWomen + "<br />" + "Crianças: " + numberKid + "<br />" + "Adultos que bebem: " + alcoholicInput.value;
    firstTableData.innerText = "Picanha"
    secondTableData.innerText = picanhaQtd.toFixed(1) + " Kg";
    thirdTableData.innerText = "Fraldinha"
    forthTableData.innerText = fraldinhaQtd.toFixed(1) + " Kg";
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

    console.log("register funcionando");

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

    // localStorage.setItem("name", nameInput.value);
    // localStorage.setItem("email", emailInput.value);
    // localStorage.setItem("city", cityInput.value);
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