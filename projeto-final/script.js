const body = document.querySelector("body");

const style = document.createElement("style");
style.textContent = `body {
    background-image: url(./background.jpg); 
}`

document.head.appendChild(style);

const app = document.querySelector("app");

const container = document.createElement("div");
container.classList.add("container");

const h1 = document.createElement("h1");
h1.innerText = "Churrascômetro";

// Append code -------------------------------------
container.appendChild(h1);
container.appendChild(calculator);

calculator.appendChild(firstRow);

firstRow.appendChild(menInputGroup);
menInputGroup.appendChild(menLabel);
menInputGroup.appendChild(menInput);
menInputGroup.appendChild(menButtonGroup);
menButtonGroup.appendChild(menButtonMinus);
menButtonGroup.appendChild(menButtonPlus);

firstRow.appendChild(womenInputGroup);
womenInputGroup.appendChild(womenLabel);
womenInputGroup.appendChild(womenInput);
womenInputGroup.appendChild(womenButtonGroup);
womenButtonGroup.appendChild(womenButtonMinus);
womenButtonGroup.appendChild(womenButtonPlus);

firstRow.appendChild(kidInputGroup);
kidInputGroup.appendChild(kidLabel);
kidInputGroup.appendChild(kidInput);
kidInputGroup.appendChild(kidButtonGroup);
kidButtonGroup.appendChild(kidButtonMinus);
kidButtonGroup.appendChild(kidButtonPlus);

firstRow.appendChild(alcoholicInputGroup);
alcoholicInputGroup.appendChild(alcoholicLabel);
alcoholicInputGroup.appendChild(alcoholicInput);
alcoholicInputGroup.appendChild(alcoholicButtonGroup);
alcoholicButtonGroup.appendChild(alcoholicButtonMinus);
alcoholicButtonGroup.appendChild(alcoholicButtonPlus);

secondRow.appendChild(secondInputGroup);
secondInputGroup.append(buttonCalculate);

calculator.appendChild(secondRow);

thirdRow.appendChild(thirdInputGroup);
thirdInputGroup.appendChild(totalPeopleTitle);
thirdInputGroup.appendChild(totalPeople);
thirdRow.appendChild(forthInputGroup);
forthInputGroup.appendChild(table);
table.appendChild(captionTable);
table.appendChild(tableHead);
tableHead.appendChild(firstTableRow);
firstTableRow.appendChild(firstTableHead);
firstTableRow.appendChild(secondTableHead);
table.appendChild(tableBody);
tableBody.appendChild(secondTableRow);
secondTableRow.appendChild(firstTableData);
secondTableRow.appendChild(secondTableData);
tableBody.appendChild(thirdTableRow);
thirdTableRow.appendChild(thirdTableData);
thirdTableRow.appendChild(forthTableData);
forthRow.appendChild(buttonRecalculate);
app.appendChild(container);