const kidInputGroup = document.createElement("div");
kidInputGroup.classList.add("input-group");
kidInputGroup.addEventListener(events.incrementKid, () => {
    let kid = kidInput.value;
    kid++
    kidInput.value = kid;
})
kidInputGroup.addEventListener(events.decrementKid, () => {
    let kid = kidInput.value;
    if (kid > 0) {
        kid--
        kidInput.value = kid;
    }
});