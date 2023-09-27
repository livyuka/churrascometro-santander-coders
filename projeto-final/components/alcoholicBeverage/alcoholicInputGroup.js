const alcoholicInputGroup = document.createElement("div");
alcoholicInputGroup.classList.add("input-group");
alcoholicInputGroup.addEventListener(events.incrementAlcBev, () => {
    let alcBev = parseInt(alcoholicInput.value);
    let menCount = parseInt(menInput.value);
    let womenCount = parseInt(womenInput.value);
    let totalAdult = menCount + womenCount;
    if (alcBev < totalAdult){
        alcBev++
        alcoholicInput.value = alcBev;
    }
})
alcoholicInputGroup.addEventListener(events.decrementAlcBev, () => {
    let alcBev = alcoholicInput.value;
    if (alcBev > 0) {
        alcBev--
        alcoholicInput.value = alcBev;
    }
});