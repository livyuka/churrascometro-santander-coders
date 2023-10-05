const kidInputGroup = document.createElement("div");
kidInputGroup.classList.add("input-group");
kidInputGroup.addEventListener(events.incrementKid, () => {
    let kid = kidInput.value;
    kid++
    kidInput.value = kid;
})
kidInputGroup.addEventListener(events.decrementKid, () => {
    let kid = kidInput.value;
    if (kid > 0) {
        kid--
        kidInput.value = kid;
    }
});

const kidInput = document.createElement("input");
kidInput.setAttribute("type", "number");
kidInput.setAttribute("id", "kid");
kidInput.setAttribute("value", "0");
kidInput.classList.add("input-valid");

const kidLabel = document.createElement("label");
kidLabel.setAttribute("for", "kid");
kidLabel.innerText = "Crianças";

const kidButtonGroup = document.createElement("div");
kidButtonGroup.classList.add("button-group");

const kidButtonMinus = document.createElement("button");
kidButtonMinus.classList.add("input-group__button--small");
kidButtonMinus.innerText = "-";
kidButtonMinus.addEventListener("click", () => {
    kidButtonMinus.dispatchEvent(new CustomEvent(events.decrementKid, { bubbles: true }))
});

const kidButtonPlus = document.createElement("button");
kidButtonPlus.classList.add("input-group__button--small");
kidButtonPlus.innerText = "+";
kidButtonPlus.addEventListener("click", () => {
    kidButtonPlus.dispatchEvent(new CustomEvent(events.incrementKid, { bubbles: true }))
});

inputRow.appendChild(kidInputGroup);
kidInputGroup.appendChild(kidLabel);
kidInputGroup.appendChild(kidInput);
kidInputGroup.appendChild(kidButtonGroup);
kidButtonGroup.appendChild(kidButtonMinus);
kidButtonGroup.appendChild(kidButtonPlus);
