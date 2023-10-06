const recalculateInputGroup = document.createElement("div");

const buttonRecalculate = document.createElement("button");
buttonRecalculate.classList.add("default-button");
buttonRecalculate.innerText = "Novo Cálculo";
buttonRecalculate.addEventListener("click", () => {
    buttonRecalculate.dispatchEvent(new CustomEvent(events.recalculate, {bubbles: true}))
})

const recalculateRow = document.createElement("div");
recalculateRow.classList.add("row");

recalculateRow.appendChild(recalculateInputGroup);
recalculateInputGroup.appendChild(buttonRecalculate);