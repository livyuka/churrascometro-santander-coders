function lightThemeCheck() {
    const lightThemeOn = localStorage.getItem("theme");
    if (lightThemeOn){
        inputTheme.removeAttribute("checked");
        document.body.classList.toggle("light-theme");
        labelThemeText.innerText = "Tema Claro";
    }
}