const kidButtonMinus = document.createElement("button");
kidButtonMinus.classList.add("input-group__button--small");
kidButtonMinus.innerText = "-";
kidButtonMinus.addEventListener("click", () => {
    kidButtonMinus.dispatchEvent(new CustomEvent(events.decrementKid, {bubbles: true}))
});
