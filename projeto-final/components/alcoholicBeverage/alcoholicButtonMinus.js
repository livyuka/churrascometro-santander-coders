const alcoholicButtonMinus = document.createElement("button");
alcoholicButtonMinus.classList.add("input-group__button--small");
alcoholicButtonMinus.innerText = "-";
alcoholicButtonMinus.addEventListener("click", () => {
    alcoholicButtonMinus.dispatchEvent(new CustomEvent(events.decrementAlcBev, {bubbles: true}))
});