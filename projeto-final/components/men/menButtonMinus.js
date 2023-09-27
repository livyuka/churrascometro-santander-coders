const menButtonMinus = document.createElement("button");
menButtonMinus.classList.add("input-group__button--small");
menButtonMinus.innerText = "-";
menButtonMinus.addEventListener("click", () => {
    menButtonMinus.dispatchEvent(new CustomEvent(events.decrementMen, {bubbles: true}))
});
