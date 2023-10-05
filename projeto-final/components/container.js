const body = document.querySelector("body");

const style = document.createElement("style");

const app = document.querySelector("app");

const container = document.createElement("div");
container.classList.add("container");

const h1 = document.createElement("h1");
h1.innerText = "Churrascômetro";

const textInputPage = document.createElement("h3");
textInputPage.innerHTML = "Precisa de uma ajudinha com o churrasco? :)"  + "<br />" + "<br />" + "Quantos pessoas vão participar?"

container.addEventListener(events.changeTheme, () => {
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        labelThemeText.innerText = "Tema Claro";
        localStorage.setItem("theme", "light-theme")
    }else{
        labelThemeText.innerText = "Tema Escuro";
        localStorage.removeItem("theme")
    }
});

container.addEventListener(events.register, () => {
    checkName();
    checkEmail();
    checkPostalCode();
});

container.addEventListener(events.backNav, () => {
    removeRegisterPage();
    addInputPage();
});

container.addEventListener(events.skipRegister, () => {
    removeRegisterPage();
    addResultPage();
});

document.head.appendChild(style);
app.appendChild(container);

container.appendChild(h1);

const inputRow = document.createElement("div");
inputRow.classList.add("row-first");