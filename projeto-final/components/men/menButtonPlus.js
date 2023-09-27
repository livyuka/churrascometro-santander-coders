const menButtonPlus = document.createElement("button");
menButtonPlus.classList.add("input-group__button--small");
menButtonPlus.innerText = "+";
menButtonPlus.addEventListener("click", () => {
    menButtonPlus.dispatchEvent(new CustomEvent(events.incrementMen, {bubbles: true}))
});