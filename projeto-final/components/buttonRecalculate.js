const recalculateInputGroup = document.createElement("div");
recalculateInputGroup.classList.add("input-group");

const buttonRecalculate = document.createElement("button");
buttonRecalculate.classList.add("input-group__button--big");
buttonRecalculate.innerText = "Novo Cálculo";
buttonRecalculate.addEventListener("click", () => {
    buttonRecalculate.dispatchEvent(new CustomEvent(events.recalculate, {bubbles: true}))
})

const recalculateRow = document.createElement("div");
recalculateRow.classList.add("row");

recalculateRow.appendChild(recalculateInputGroup);
recalculateInputGroup.appendChild(buttonRecalculate);