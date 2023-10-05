const calculateInputGroup = document.createElement("div");

const buttonCalculate = document.createElement("button");
buttonCalculate.classList.add("default-button");
buttonCalculate.innerText = "Calcular";
buttonCalculate.addEventListener("click", () => {
    buttonCalculate.dispatchEvent(new CustomEvent(events.calculate, {bubbles: true}))
})

const calculateRow = document.createElement("div");
calculateRow.classList.add("row");

calculator.appendChild(calculateRow);
calculateRow.appendChild(calculateInputGroup);
calculateInputGroup.append(buttonCalculate);