function initiate() {
    const menNumber = sessionStorage.getItem("men");
    const womenNumber = sessionStorage.getItem("women");
    const kidNumber = sessionStorage.getItem("kid");
    const alcoholicNumber = sessionStorage.getItem("alcoholic")
    if (menNumber) {
        menInput.value = menNumber;
    }
    if (womenNumber) {
        womenInput.value = womenNumber;
    }
    if (kidNumber) {
        kidInput.value = kidNumber;
    }
    if (alcoholicNumber) {
        alcoholicInput.value = alcoholicNumber;
    }
}