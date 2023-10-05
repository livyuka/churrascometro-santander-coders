const calculateRow = document.createElement("div");
calculateRow.classList.add("row");

const calculateInputGroup = document.createElement("div");

const buttonCalculate = document.createElement("button");
buttonCalculate.classList.add("default-button");
buttonCalculate.innerText = "Calcular";
buttonCalculate.addEventListener("click", () => {
    buttonCalculate.dispatchEvent(new CustomEvent(events.calculate, {bubbles: true}))
})

const invalidInput = document.createElement("p");
invalidInput.setAttribute("id", "invalid-input");
invalidInput.innerText = "Por favor, insira somente números!";

const noInput = document.createElement("p");
noInput.setAttribute("id", "no-input");
noInput.innerText = "Por favor, selecione a quantidade de pessoas!";

calculateRow.appendChild(calculateInputGroup);
calculateInputGroup.append(invalidInput);
calculateInputGroup.append(noInput);
calculateInputGroup.append(buttonCalculate);