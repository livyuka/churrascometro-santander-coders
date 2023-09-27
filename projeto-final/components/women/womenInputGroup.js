const womenInputGroup = document.createElement("div");
womenInputGroup.classList.add("input-group");
womenInputGroup.addEventListener(events.incrementWomen, () => {
    let women = womenInput.value;
    women++
    womenInput.value = women;
})
womenInputGroup.addEventListener(events.decrementWomen, () => {
    let women = womenInput.value;
    if (women > 0) {
        women--
        womenInput.value = women;
    }
});