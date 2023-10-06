const resultRow = document.createElement("div");

const resultTotalGuest = document.createElement("div");
resultTotalGuest.classList.add("result-total-guest");

const resultParagraph = document.createElement("p");
resultParagraph.innerText = "Confira a lista para o seu churrasco!"

const totalGuest = document.createElement("p");
totalGuest.setAttribute("id", "total-guest")

const guestList = document.createElement("ul");

const menGuests = document.createElement("span");
menGuests.classList.add("guest-list");

const womenGuests = document.createElement("span");
womenGuests.classList.add("guest-list");

const kidGuests = document.createElement("span");
kidGuests.classList.add("guest-list");

const totalGuestInputGroup = document.createElement("div");
totalGuestInputGroup.classList.add("input-group-result")

const headerResult = document.createElement("div");
headerResult.setAttribute("id","header-result")

const itemResult = document.createElement("p");
itemResult.innerText = "ITEM";

const amountResult = document.createElement("p");
amountResult.innerText = "QUANTIDADE";

const results = document.createElement("ul");
results.classList.add("results");

const resultMeat = document.createElement("li")

const meat = document.createElement("strong");
meat.innerText = "Carne";

const meatAmount = document.createElement("span");

const resultBread = document.createElement("li")

const bread = document.createElement("strong");
bread.innerText = "Pão de Alho";

const breadAmount = document.createElement("span");

const resultSoda = document.createElement("li")

const soda = document.createElement("strong");
soda.innerText = "Refrigerante";

const sodaAmount = document.createElement("span");

const resultWater = document.createElement("li")

const water = document.createElement("strong");
water.innerText = "Água";

const waterAmount = document.createElement("span");

const resultBeer = document.createElement("li")

const beer = document.createElement("strong");
beer.innerText = "Cerveja";

const beerAmount = document.createElement("span");

const resultCharcoal = document.createElement("li")

const charchoal = document.createElement("strong");
charchoal.innerText = "Carvão";

const charchoalAmount = document.createElement("span");

const resultSalt = document.createElement("li")

const salt = document.createElement("strong");
salt.innerText = "Sal";

const saltAmount = document.createElement("span");

const resultIce = document.createElement("li")

const ice = document.createElement("strong");
ice.innerText = "Gelo";

const iceAmount = document.createElement("span");

resultRow.appendChild(resultTotalGuest);

resultTotalGuest.appendChild(resultParagraph);

resultTotalGuest.appendChild(totalGuest);

resultTotalGuest.appendChild(guestList);

resultTotalGuest.appendChild(menGuests);
resultTotalGuest.appendChild(womenGuests);
resultTotalGuest.appendChild(kidGuests);

resultRow.appendChild(totalGuestInputGroup);
totalGuestInputGroup.appendChild(headerResult);
headerResult.appendChild(itemResult);
headerResult.appendChild(amountResult);
totalGuestInputGroup.appendChild(results);

results.appendChild(resultMeat);
resultMeat.appendChild(meat);
resultMeat.appendChild(meatAmount);

results.appendChild(resultBread);
resultBread.appendChild(bread);
resultBread.appendChild(breadAmount);

results.appendChild(resultSoda);
resultSoda.appendChild(soda);
resultSoda.appendChild(sodaAmount);

results.appendChild(resultWater);
resultWater.appendChild(water);
resultWater.appendChild(waterAmount);

results.appendChild(resultBeer);
resultBeer.appendChild(beer);
resultBeer.appendChild(beerAmount);

results.appendChild(resultCharcoal);
resultCharcoal.appendChild(charchoal);
resultCharcoal.appendChild(charchoalAmount);

results.appendChild(resultSalt);
resultSalt.appendChild(salt);
resultSalt.appendChild(saltAmount);

results.appendChild(resultIce);
resultIce.appendChild(ice);
resultIce.appendChild(iceAmount);