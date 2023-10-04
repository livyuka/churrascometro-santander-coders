const body = document.querySelector("body");

const style = document.createElement("style");
style.textContent = `body {
    background-color: #3F373C; 
}`

const app = document.querySelector("app");

const container = document.createElement("div");
container.classList.add("container");

const h1 = document.createElement("h1");
h1.innerText = "Churrascômetro";

container.addEventListener(events.changeTheme, () => {
    if (inputTheme.checked) {
        console.log("Checkbox is checked..");
        document.head.appendChild(style);
        document.head.removeChild(lightTheme);
        localStorage.removeItem("lightTheme")
    } else {
        console.log("Checkbox is not checked..");
        document.head.appendChild(lightTheme);
        document.head.removeChild(style);
        localStorage.setItem("lightTheme","on")
    }
});

document.head.appendChild(style);
app.appendChild(container);

container.appendChild(h1);

const inputRow = document.createElement("div");
inputRow.classList.add("row");