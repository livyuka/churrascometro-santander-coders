function lightThemeCheck() {
    const lightThemeOn = localStorage.getItem("lightTheme");
    if (lightThemeOn){
        document.head.appendChild(lightTheme);
        document.head.removeChild(style);
        inputTheme.removeAttribute("checked");
    }
}