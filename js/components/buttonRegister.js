const registerInputGroup = document.createElement("div");

const registerRow = document.createElement("div");
registerRow.classList.add("row");

const buttonRegister = document.createElement("button");
buttonRegister.classList.add("default-button");
buttonRegister.innerText = "Cadastrar";
buttonRegister.addEventListener("click", () => {
    buttonRegister.dispatchEvent(new CustomEvent(events.register, { bubbles: true }))
});

const navContainer = document.createElement("div");
navContainer.setAttribute("id", "nav-container");

const backNav = document.createElement("button");
backNav.setAttribute("id", "back-nav");
backNav.innerText = "Voltar";
backNav.addEventListener("click", () => {
    backNav.dispatchEvent(new CustomEvent(events.backNav, { bubbles: true }))
});

const skipRegister = document.createElement("button");
skipRegister.setAttribute("id", "skip-register");
skipRegister.innerText = "Pular";
skipRegister.addEventListener("click", () => {
    skipRegister.dispatchEvent(new CustomEvent(events.skipRegister, { bubbles: true }))
});

registerRow.appendChild(registerInputGroup);
registerInputGroup.appendChild(buttonRegister);
registerRow.appendChild(navContainer);
navContainer.appendChild(backNav);
navContainer.appendChild(skipRegister);

