const alcoholicInputGroup = document.createElement("div");
alcoholicInputGroup.classList.add("input-group");
alcoholicInputGroup.addEventListener(events.incrementAlcBev, () => {
    let alcBev = parseInt(alcoholicInput.value);
    let menCount = parseInt(menInput.value);
    let womenCount = parseInt(womenInput.value);
    let totalAdult = menCount + womenCount;
    if (alcBev < totalAdult) {
        alcBev++
        alcoholicInput.value = alcBev;
        sessionStorage.setItem("alcoholicInput", alcoholicInput.value);
    }
})
alcoholicInputGroup.addEventListener(events.decrementAlcBev, () => {
    let alcBev = alcoholicInput.value;
    if (alcBev > 0) {
        alcBev--
        alcoholicInput.value = alcBev;
        sessionStorage.setItem("alcoholicInput", alcoholicInput.value);
    }
});

const alcoholicInput = document.createElement("input");
alcoholicInput.setAttribute("type", "number");
alcoholicInput.setAttribute("id", "alcohol");
alcoholicInput.setAttribute("value", "0");
alcoholicInput.setAttribute("readonly", "readonly");
alcoholicInput.classList.add("input-valid");

const alcoholicLabel = document.createElement("label");
alcoholicLabel.setAttribute("for", "alcohol");
alcoholicLabel.setAttribute("id", "alcoholicLabel");
alcoholicLabel.innerText = "Quantos adultos bebem?";

const alcoholicButtonGroup = document.createElement("div");
alcoholicButtonGroup.classList.add("button-group");

const alcoholicButtonMinus = document.createElement("button");
alcoholicButtonMinus.classList.add("input-group__button--small");
alcoholicButtonMinus.innerText = "-";
alcoholicButtonMinus.addEventListener("click", () => {
    alcoholicButtonMinus.dispatchEvent(new CustomEvent(events.decrementAlcBev, { bubbles: true }))
});

const alcoholicButtonPlus = document.createElement("button");
alcoholicButtonPlus.classList.add("input-group__button--small");
alcoholicButtonPlus.innerText = "+";
alcoholicButtonPlus.addEventListener("click", () => {
    alcoholicButtonPlus.dispatchEvent(new CustomEvent(events.incrementAlcBev, { bubbles: true }))
});

inputRow.appendChild(alcoholicInputGroup);
alcoholicInputGroup.appendChild(alcoholicLabel);
alcoholicInputGroup.appendChild(alcoholicInput);
alcoholicInputGroup.appendChild(alcoholicButtonGroup);
alcoholicButtonGroup.appendChild(alcoholicButtonMinus);
alcoholicButtonGroup.appendChild(alcoholicButtonPlus);