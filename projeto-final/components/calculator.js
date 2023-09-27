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
    totalPeople.innerHTML ="Homens: " + numberMen + "<br />" + "Mulheres: " + numberWomen + "<br />" + "Crianças: " + numberKid + "<br />" + "Adultos que bebem: " + alcoholicInput.value;
    firstTableData.innerText = "Picanha"
    secondTableData.innerText = picanhaQtd.toFixed(1) + " Kg";
    thirdTableData.innerText = "Fraldinha"
    forthTableData.innerText = fraldinhaQtd.toFixed(1) + " Kg";
    calculator.removeChild(firstRow);
    calculator.removeChild(secondRow);
    calculator.appendChild(thirdRow);
    calculator.appendChild(forthRow);
    // forthRow.appendChild(buttonCalculate);
});

calculator.addEventListener(events.recalculate, () => {
    calculator.removeChild(thirdRow);
    calculator.removeChild(forthRow);
    calculator.appendChild(firstRow);
    calculator.appendChild(secondRow);
})
