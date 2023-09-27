const menInputGroup = document.createElement("div");

menInputGroup.classList.add("input-group");

menInputGroup.addEventListener(events.incrementMen, () => {
    let men = menInput.value;
    men++
    menInput.value = men;
});

menInputGroup.addEventListener(events.decrementMen, () => {
    let men = menInput.value;
    if (men > 0) {
        men--
        menInput.value = men;
    }
});