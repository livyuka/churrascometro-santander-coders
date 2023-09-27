// const events = {
//     incrementMen: "Evento_incrementar_homem",
//     incrementWomen: "Evento_incrementar_mulher",
//     incrementKid: "Evento_incrementar_criança",
//     incrementAlcBev: "Evento_incrementar_bebida",
//     decrementMen: "Evento_decrementar_homem",
//     decrementWomen: "Evento_decrementar_mulher",
//     decrementKid: "Evento_decrementar_criança",
//     decrementAlcBev: "Evento_decrementar_bebida",
//     calculate: "Evento_calcular",
//     result: "Evento_mostrar_resultado"
// }

// const body = document.querySelector("body");

// const style = document.createElement("style");
// style.textContent = `body {
//     background-image: url(./background.jpg); 
// }`

// document.head.appendChild(style);

// const app = document.querySelector("app");

// const container = document.createElement("div");
// container.classList.add("container");

// const h1 = document.createElement("h1");
// h1.innerText = "Churrascômetro";

// const calculator = document.createElement("div");
// calculator.classList.add("calculator");

// calculator.addEventListener(events.calculate, () => {
//     const numberMen = menInput.value;
//     const numberWomen = womenInput.value;
//     const numberKid = kidInput.value;
//     const fatorPicanhaMen = 0.2
//     const fatorPicanhaWomen = 0.15
//     const fatorPicanhaKid = 0.1
//     const fatorFraldinhaMen = 0.3
//     const fatorFraldinhaWomen = 0.2
//     const fatorFraldinhaKid = 0.1
//     let picanhaQtd = numberMen * fatorPicanhaMen + numberWomen * fatorPicanhaWomen + numberKid * fatorPicanhaKid;
//     let fraldinhaQtd = numberMen * fatorFraldinhaMen + numberWomen * fatorFraldinhaWomen + numberKid * fatorFraldinhaKid;
//     totalPeople.innerHTML ="Homens: " + numberMen + "<br />" + "Mulheres: " + numberWomen + "<br />" + "Crianças: " + numberKid + "<br />" + "Adultos que bebem: " + alcoholicInput.value;
//     firstTableData.innerText = "Picanha"
//     secondTableData.innerText = picanhaQtd.toFixed(1) + " Kg";
//     thirdTableData.innerText = "Fraldinha"
//     forthTableData.innerText = fraldinhaQtd.toFixed(1) + " Kg";
//     calculator.appendChild(thirdRow);
// });

// const firstRow = document.createElement("div");
// firstRow.classList.add("row");

// // Men Input ---------------------------------------------
// const menInputGroup = document.createElement("div");
// menInputGroup.classList.add("input-group");
// menInputGroup.addEventListener(events.incrementMen, () => {
//     let men = menInput.value;
//     men++
//     menInput.value = men;
// })
// menInputGroup.addEventListener(events.decrementMen, () => {
//     let men = menInput.value;
//     if (men > 0) {
//         men--
//         menInput.value = men;
//     }
// });

// const menLabel = document.createElement("label");
// menLabel.setAttribute("for", "men");
// menLabel.innerText = "Homem";

// const menInput = document.createElement("input");
// menInput.setAttribute("type", "number");
// menInput.setAttribute("id", "men");
// menInput.setAttribute("value", "0");
// menInput.setAttribute("readonly", "readonly");
// menInput.classList.add("input-valid");

// const menButtonGroup = document.createElement("div");
// menButtonGroup.classList.add("button-group");

// const menButtonMinus = document.createElement("button");
// menButtonMinus.classList.add("input-group__button--small");
// menButtonMinus.innerText = "-";
// menButtonMinus.addEventListener("click", () => {
//     menButtonMinus.dispatchEvent(new CustomEvent(events.decrementMen, {bubbles: true}))
// });


// const menButtonPlus = document.createElement("button");
// menButtonPlus.classList.add("input-group__button--small");
// menButtonPlus.innerText = "+";
// menButtonPlus.addEventListener("click", () => {
//     menButtonPlus.dispatchEvent(new CustomEvent(events.incrementMen, {bubbles: true}))
// });

// // Women Input -------------------------------------------
// const womenInputGroup = document.createElement("div");
// womenInputGroup.classList.add("input-group");
// womenInputGroup.addEventListener(events.incrementWomen, () => {
//     let women = womenInput.value;
//     women++
//     womenInput.value = women;
// })
// womenInputGroup.addEventListener(events.decrementWomen, () => {
//     let women = womenInput.value;
//     if (women > 0) {
//         women--
//         womenInput.value = women;
//     }
// });

// const womenLabel = document.createElement("label");
// womenLabel.setAttribute("for", "women");
// womenLabel.innerText = "Mulheres";

// const womenInput = document.createElement("input");
// womenInput.setAttribute("type", "number");
// womenInput.setAttribute("id", "women");
// womenInput.setAttribute("value", "0");
// womenInput.setAttribute("readonly", "readonly");
// womenInput.classList.add("input-valid");

// const womenButtonGroup = document.createElement("div");
// womenButtonGroup.classList.add("button-group");

// const womenButtonMinus = document.createElement("button");
// womenButtonMinus.classList.add("input-group__button--small");
// womenButtonMinus.innerText = "-";
// womenButtonMinus.addEventListener("click", () => {
//     womenButtonMinus.dispatchEvent(new CustomEvent(events.decrementWomen, {bubbles: true}))
// });

// const womenButtonPlus = document.createElement("button");
// womenButtonPlus.classList.add("input-group__button--small");
// womenButtonPlus.innerText = "+";
// womenButtonPlus.addEventListener("click", () => {
//     womenButtonPlus.dispatchEvent(new CustomEvent(events.incrementWomen, {bubbles: true}))
// });

// // Kids Input -----------------------------------------------
// const kidInputGroup = document.createElement("div");
// kidInputGroup.classList.add("input-group");
// kidInputGroup.addEventListener(events.incrementKid, () => {
//     let kid = kidInput.value;
//     kid++
//     kidInput.value = kid;
// })
// kidInputGroup.addEventListener(events.decrementKid, () => {
//     let kid = kidInput.value;
//     if (kid > 0) {
//         kid--
//         kidInput.value = kid;
//     }
// });

// const kidLabel = document.createElement("label");
// kidLabel.setAttribute("for", "kid");
// kidLabel.innerText = "Crianças";

// const kidInput = document.createElement("input");
// kidInput.setAttribute("type", "number");
// kidInput.setAttribute("id", "kid");
// kidInput.setAttribute("value", "0");
// kidInput.setAttribute("readonly", "readonly");
// kidInput.classList.add("input-valid");

// const kidButtonGroup = document.createElement("div");
// kidButtonGroup.classList.add("button-group");

// const kidButtonMinus = document.createElement("button");
// kidButtonMinus.classList.add("input-group__button--small");
// kidButtonMinus.innerText = "-";
// kidButtonMinus.addEventListener("click", () => {
//     kidButtonMinus.dispatchEvent(new CustomEvent(events.decrementKid, {bubbles: true}))
// });

// const kidButtonPlus = document.createElement("button");
// kidButtonPlus.classList.add("input-group__button--small");
// kidButtonPlus.innerText = "+";
// kidButtonPlus.addEventListener("click", () => {
//     kidButtonPlus.dispatchEvent(new CustomEvent(events.incrementKid, {bubbles: true}))
// });

// // Alcoholic beverage Input ---------------------------------
// const alcoholicInputGroup = document.createElement("div");
// alcoholicInputGroup.classList.add("input-group");
// alcoholicInputGroup.addEventListener(events.incrementAlcBev, () => {
//     let alcBev = parseInt(alcoholicInput.value);
//     let menCount = parseInt(menInput.value);
//     let womenCount = parseInt(womenInput.value);
//     let totalAdult = menCount + womenCount;
//     if (alcBev < totalAdult){
//         alcBev++
//         alcoholicInput.value = alcBev;
//     }
// })
// alcoholicInputGroup.addEventListener(events.decrementAlcBev, () => {
//     let alcBev = alcoholicInput.value;
//     if (alcBev > 0) {
//         alcBev--
//         alcoholicInput.value = alcBev;
//     }
// });

// const alcoholicLabel = document.createElement("label");
// alcoholicLabel.setAttribute("for", "alcohol");
// alcoholicLabel.innerText = "Quantos bebem?";

// const alcoholicInput = document.createElement("input");
// alcoholicInput.setAttribute("type", "number");
// alcoholicInput.setAttribute("id", "kid");
// alcoholicInput.setAttribute("value", "0");
// alcoholicInput.setAttribute("readonly", "readonly");
// alcoholicInput.classList.add("input-valid");

// const alcoholicButtonGroup = document.createElement("div");
// alcoholicButtonGroup.classList.add("button-group");

// const alcoholicButtonMinus = document.createElement("button");
// alcoholicButtonMinus.classList.add("input-group__button--small");
// alcoholicButtonMinus.innerText = "-";
// alcoholicButtonMinus.addEventListener("click", () => {
//     alcoholicButtonMinus.dispatchEvent(new CustomEvent(events.decrementAlcBev, {bubbles: true}))
// });

// const alcoholicButtonPlus = document.createElement("button");
// alcoholicButtonPlus.classList.add("input-group__button--small");
// alcoholicButtonPlus.innerText = "+";
// alcoholicButtonPlus.addEventListener("click", () => {
//     alcoholicButtonPlus.dispatchEvent(new CustomEvent(events.incrementAlcBev, {bubbles: true}))
// });

// // Calculate button -----------------------------------------
// const secondRow = document.createElement("div");
// secondRow.classList.add("row");

// const secondInputGroup = document.createElement("div");
// secondInputGroup.classList.add("input-group");

// const buttonCalculate = document.createElement("button");
// buttonCalculate.classList.add("input-group__button--big");
// buttonCalculate.innerText = "Calcular";
// buttonCalculate.addEventListener("click", () => {
//     buttonCalculate.dispatchEvent(new CustomEvent(events.calculate, {bubbles: true}))
// })

// //Results Table ----------------------------------------------
// const thirdRow = document.createElement("div");
// thirdRow.classList.add("row");

// const thirdInputGroup = document.createElement("div");
// thirdInputGroup.classList.add("input-group")

// const forthInputGroup = document.createElement("div");
// forthInputGroup.classList.add("input-group")

// const totalPeopleTitle = document.createElement("h4");
// totalPeopleTitle.innerText = "Total de pessoas:"

// const totalPeople = document.createElement("p");

// const table = document.createElement("table");

// const captionTable = document.createElement("caption");
// captionTable.innerText = "Resultado";

// const tableHead = document.createElement("thead");

// const firstTableRow = document.createElement("tr");

// const firstTableHead = document.createElement("th");
// firstTableHead.innerText = "Item";

// const secondTableHead = document.createElement("th");
// secondTableHead.innerText = "Quantidade";

// const tableBody = document.createElement("tbody");

// const secondTableRow = document.createElement("tr");

// const firstTableData = document.createElement("td");

// const secondTableData = document.createElement("td");

// const thirdTableRow = document.createElement("tr");

// const thirdTableData = document.createElement("td");

// const forthTableData = document.createElement("td");

// // Append code -------------------------------------

// container.appendChild(h1);
// container.appendChild(calculator);
// calculator.appendChild(firstRow);
// firstRow.appendChild(menInputGroup);
// menInputGroup.appendChild(menLabel);
// menInputGroup.appendChild(menInput);
// menInputGroup.appendChild(menButtonGroup);
// menButtonGroup.appendChild(menButtonMinus);
// menButtonGroup.appendChild(menButtonPlus);
// firstRow.appendChild(womenInputGroup);
// womenInputGroup.appendChild(womenLabel);
// womenInputGroup.appendChild(womenInput);
// womenInputGroup.appendChild(womenButtonGroup);
// womenButtonGroup.appendChild(womenButtonMinus);
// womenButtonGroup.appendChild(womenButtonPlus);
// firstRow.appendChild(kidInputGroup);
// kidInputGroup.appendChild(kidLabel);
// kidInputGroup.appendChild(kidInput);
// kidInputGroup.appendChild(kidButtonGroup);
// kidButtonGroup.appendChild(kidButtonMinus);
// kidButtonGroup.appendChild(kidButtonPlus);
// firstRow.appendChild(alcoholicInputGroup);
// alcoholicInputGroup.appendChild(alcoholicLabel);
// alcoholicInputGroup.appendChild(alcoholicInput);
// alcoholicInputGroup.appendChild(alcoholicButtonGroup);
// alcoholicButtonGroup.appendChild(alcoholicButtonMinus);
// alcoholicButtonGroup.appendChild(alcoholicButtonPlus);
// secondRow.appendChild(secondInputGroup);
// secondInputGroup.append(buttonCalculate);
// calculator.appendChild(secondRow);
// thirdRow.appendChild(thirdInputGroup);
// thirdInputGroup.appendChild(totalPeopleTitle);
// thirdInputGroup.appendChild(totalPeople);
// thirdRow.appendChild(forthInputGroup);
// forthInputGroup.appendChild(table);
// table.appendChild(captionTable);
// table.appendChild(tableHead);
// tableHead.appendChild(firstTableRow);
// firstTableRow.appendChild(firstTableHead);
// firstTableRow.appendChild(secondTableHead);
// table.appendChild(tableBody);
// tableBody.appendChild(secondTableRow);
// secondTableRow.appendChild(firstTableData);
// secondTableRow.appendChild(secondTableData);
// tableBody.appendChild(thirdTableRow);
// thirdTableRow.appendChild(thirdTableData);
// thirdTableRow.appendChild(forthTableData);
// app.appendChild(container);










