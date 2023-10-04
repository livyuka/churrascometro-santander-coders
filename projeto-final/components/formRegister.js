const formInputGroup = document.createElement("div");
formInputGroup.classList.add("input-form-group");

const formRegister = document.createElement("form");

const headerForm = document.createElement("p");
headerForm.setAttribute("id", "header-form");
headerForm.textContent = "Nessa casa sempre tem novidades! Cadastre seu e-mail. Fique por perto para saber dos novos cortes e linhas especiais, das promoções e novas receitas que experimentamos."

const nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("id", "name");
nameInput.setAttribute("placeholder", "Digite seu nome");
nameInput.classList.add("input-form");

const emailInput = document.createElement("input");
emailInput.setAttribute("type", "email");
emailInput.setAttribute("id", "email");
emailInput.setAttribute("placeholder", "Digite seu email");
emailInput.classList.add("input-form");

const postalCodeInput = document.createElement("input");
postalCodeInput.setAttribute("type", "number");
postalCodeInput.setAttribute("id", "postal-code");
postalCodeInput.setAttribute("placeholder", "Digite seu CEP");
postalCodeInput.classList.add("input-form");

const postalCodeNotFound = document.createElement("p");
postalCodeNotFound.setAttribute("id", "errorPostalCode");
postalCodeNotFound.innerText = "Por favor, insira um CEP válido!";

const divConsentInput = document.createElement("div");
divConsentInput.setAttribute("id", "consent-input")

const consentInput = document.createElement("input");
consentInput.setAttribute("type", "checkbox");
consentInput.setAttribute("id", "consent-checkbox");
consentInput.setAttribute("name", "consentInput");
consentInput.setAttribute("checked", "checked");

const labelConsentInput = document.createElement("label");
labelConsentInput.setAttribute("for", "consent-checkbox");
labelConsentInput.setAttribute("id", "consent-label")
labelConsentInput.innerText = "Concordo em receber comunicações e ofertas personalizadas de acordo com meus interesses."

const formRow = document.createElement("div");
formRow.classList.add("row");

formRow.appendChild(formInputGroup);
formInputGroup.appendChild(headerForm);
formInputGroup.appendChild(formRegister);
formRegister.appendChild(nameInput);
formRegister.appendChild(emailInput);
formRegister.appendChild(postalCodeInput);
formRegister.appendChild(postalCodeNotFound);
formInputGroup.appendChild(divConsentInput);
divConsentInput.appendChild(consentInput);
divConsentInput.appendChild(labelConsentInput);


