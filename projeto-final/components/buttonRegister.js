const registerInputGroup = document.createElement("div");

const buttonRegister = document.createElement("button");
buttonRegister.classList.add("default-button");
buttonRegister.innerText = "Cadastrar";
buttonRegister.addEventListener("click", () => {
    buttonRegister.dispatchEvent(new CustomEvent(events.register, { bubbles: true }))
});

const registerRow = document.createElement("div");
registerRow.classList.add("row");

registerRow.appendChild(registerInputGroup);
registerInputGroup.appendChild(buttonRegister);
