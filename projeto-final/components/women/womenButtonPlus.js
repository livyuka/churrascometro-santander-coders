const womenButtonPlus = document.createElement("button");
womenButtonPlus.classList.add("input-group__button--small");
womenButtonPlus.innerText = "+";
womenButtonPlus.addEventListener("click", () => {
    womenButtonPlus.dispatchEvent(new CustomEvent(events.incrementWomen, {bubbles: true}))
});