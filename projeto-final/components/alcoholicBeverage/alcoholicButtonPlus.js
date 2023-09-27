const alcoholicButtonPlus = document.createElement("button");
alcoholicButtonPlus.classList.add("input-group__button--small");
alcoholicButtonPlus.innerText = "+";
alcoholicButtonPlus.addEventListener("click", () => {
    alcoholicButtonPlus.dispatchEvent(new CustomEvent(events.incrementAlcBev, {bubbles: true}))
});