const kidButtonPlus = document.createElement("button");
kidButtonPlus.classList.add("input-group__button--small");
kidButtonPlus.innerText = "+";
kidButtonPlus.addEventListener("click", () => {
    kidButtonPlus.dispatchEvent(new CustomEvent(events.incrementKid, {bubbles: true}))
});