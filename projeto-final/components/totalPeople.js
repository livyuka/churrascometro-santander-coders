const totalPeopleInputGroup = document.createElement("div");
totalPeopleInputGroup.classList.add("input-group")

const totalPeopleTitle = document.createElement("h4");
totalPeopleTitle.innerText = "Total de pessoas:"

const totalPeople = document.createElement("p");

resultRow.appendChild(totalPeopleInputGroup);
totalPeopleInputGroup.appendChild(totalPeopleTitle);
totalPeopleInputGroup.appendChild(totalPeople);