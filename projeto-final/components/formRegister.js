const formInputGroup = document.createElement("div");
formInputGroup.classList.add("input-form-group");

const headerForm = document.createElement("p");
headerForm.setAttribute("id", "header-form");
headerForm.textContent = "Nessa casa sempre tem novidades! Cadastre seu e-mail. Fique por perto para saber dos novos cortes e linhas especiais, das promoções e novas receitas que experimentamos."

const nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("id", "name");
nameInput.setAttribute("placeholder", "Seu nome");
nameInput.classList.add("input-form");

const emailInput = document.createElement("input");
emailInput.setAttribute("type", "email");
emailInput.setAttribute("id", "email");
emailInput.setAttribute("placeholder", "email@email.com");
emailInput.classList.add("input-form");

const cityInput = document.createElement("input");
cityInput.setAttribute("type", "text");
cityInput.setAttribute("id", "city");
cityInput.setAttribute("placeholder", "São Paulo");
cityInput.classList.add("input-form");

