const menInputGroup = document.createElement("div");
menInputGroup.classList.add("input-group");
menInputGroup.addEventListener(events.incrementMen, () => {
    let men = menInput.value;
    men++
    menInput.value = men;
    sessionStorage.setItem("menInput", menInput.value);
});
menInputGroup.addEventListener(events.decrementMen, () => {
    let men = menInput.value;
    if (men > 0) {
        men--
        menInput.value = men;
        sessionStorage.setItem("menInput", menInput.value);
    }
});

const menInput = document.createElement("input");
menInput.setAttribute("type", "number");
menInput.setAttribute("id", "men");
menInput.setAttribute("value", "0");
menInput.setAttribute("readonly", "readonly");
menInput.classList.add("input-valid");

const menLabel = document.createElement("label");
menLabel.setAttribute("for", "men");
menLabel.innerText = "Homens";

const menButtonGroup = document.createElement("div");
menButtonGroup.classList.add("button-group");

const menButtonMinus = document.createElement("button");
menButtonMinus.classList.add("input-group__button--small");
menButtonMinus.innerText = "-";
menButtonMinus.addEventListener("click", () => {
    menButtonMinus.dispatchEvent(new CustomEvent(events.decrementMen, {bubbles: true}))
});

const menButtonPlus = document.createElement("button");
menButtonPlus.classList.add("input-group__button--small");
menButtonPlus.innerText = "+";
menButtonPlus.addEventListener("click", () => {
    menButtonPlus.dispatchEvent(new CustomEvent(events.incrementMen, {bubbles: true}))
});

inputRow.appendChild(menInputGroup);
menInputGroup.appendChild(menLabel);
menInputGroup.appendChild(menInput);
menInputGroup.appendChild(menButtonGroup);
menButtonGroup.appendChild(menButtonMinus);
menButtonGroup.appendChild(menButtonPlus);