const womenInputGroup = document.createElement("div");
womenInputGroup.classList.add("input-group");
womenInputGroup.addEventListener(events.incrementWomen, () => {
    let women = womenInput.value;
    women++
    womenInput.value = women;
    sessionStorage.setItem("womenInput", womenInput.value);

})
womenInputGroup.addEventListener(events.decrementWomen, () => {
    let women = womenInput.value;
    if (women > 0) {
        women--
        womenInput.value = women;
        sessionStorage.setItem("womenInput", womenInput.value);
    }
});

const womenInput = document.createElement("input");
womenInput.setAttribute("type", "number");
womenInput.setAttribute("id", "women");
womenInput.setAttribute("value", "0");
womenInput.setAttribute("readonly", "readonly");
womenInput.classList.add("input-valid");

const womenLabel = document.createElement("label");
womenLabel.setAttribute("for", "women");
womenLabel.innerText = "Mulheres";

const womenButtonGroup = document.createElement("div");
womenButtonGroup.classList.add("button-group");

const womenButtonMinus = document.createElement("button");
womenButtonMinus.classList.add("input-group__button--small");
womenButtonMinus.innerText = "-";
womenButtonMinus.addEventListener("click", () => {
    womenButtonMinus.dispatchEvent(new CustomEvent(events.decrementWomen, { bubbles: true }))
});

const womenButtonPlus = document.createElement("button");
womenButtonPlus.classList.add("input-group__button--small");
womenButtonPlus.innerText = "+";
womenButtonPlus.addEventListener("click", () => {
    womenButtonPlus.dispatchEvent(new CustomEvent(events.incrementWomen, { bubbles: true }))
});

inputRow.appendChild(womenInputGroup);
womenInputGroup.appendChild(womenLabel);
womenInputGroup.appendChild(womenInput);
womenInputGroup.appendChild(womenButtonGroup);
womenButtonGroup.appendChild(womenButtonMinus);
womenButtonGroup.appendChild(womenButtonPlus);