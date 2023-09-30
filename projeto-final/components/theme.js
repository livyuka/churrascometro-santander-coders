const divTheme = document.createElement("div");
divTheme.classList.add("theme-container")

const labelTheme = document.createElement("label");
labelTheme.classList.add("switch");

const inputTheme = document.createElement("input");
inputTheme.setAttribute("type", "checkbox");
inputTheme.setAttribute("id", "input-theme");
inputTheme.setAttribute("checked","checked");

const spanTheme = document.createElement("span");
spanTheme.classList.add("slider");

const lightTheme =  document.createElement("style");
lightTheme.innerHTML = `body {
    background-color: #8aa190;
}`;

inputTheme.addEventListener('change', () => {
    buttonCalculate.dispatchEvent(new CustomEvent(events.changeTheme, {bubbles: true}))
});

body.appendChild(divTheme);
divTheme.appendChild(labelTheme);
labelTheme.appendChild(inputTheme);
labelTheme.appendChild(spanTheme);