const womenButtonMinus = document.createElement("button");
womenButtonMinus.classList.add("input-group__button--small");
womenButtonMinus.innerText = "-";
womenButtonMinus.addEventListener("click", () => {
    womenButtonMinus.dispatchEvent(new CustomEvent(events.decrementWomen, {bubbles: true}))
});