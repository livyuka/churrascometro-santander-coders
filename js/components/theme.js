const divTheme = document.createElement("div");
divTheme.classList.add("theme-container");

const labelThemeText = document.createElement("label");
labelThemeText.setAttribute("id","label-theme-text")
labelThemeText.setAttribute("for", "input-theme");
labelThemeText.innerText = "Tema Escuro";

const labelTheme = document.createElement("label");
labelTheme.classList.add("switch");

const inputTheme = document.createElement("input");
inputTheme.setAttribute("type", "checkbox");
inputTheme.setAttribute("id", "input-theme");
inputTheme.setAttribute("checked","checked");

const spanTheme = document.createElement("span");
spanTheme.classList.add("slider");

const lightTheme =  document.createElement("style");

inputTheme.addEventListener('change', () => {
    inputTheme.dispatchEvent(new CustomEvent(events.changeTheme, {bubbles: true}))
});

container.appendChild(divTheme);
divTheme.appendChild(labelThemeText);
divTheme.appendChild(labelTheme);
labelTheme.appendChild(inputTheme);
labelTheme.appendChild(spanTheme);