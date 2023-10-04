const resultRow = document.createElement("div");

const resultTotalGuest = document.createElement("div");
resultTotalGuest.classList.add("result-total-guest");

const resultParagraph = document.createElement("p");
resultParagraph.innerText = "Confira o resultado do seu churrasco!"

const totalGuest = document.createElement("p");
totalGuest.classList.add("total-guest");
totalGuest.innerText = "X convidados"

const guestList = document.createElement("ul");
guestList.classList.add("guest-list");

const menGuests = document.createElement("i");
menGuests.innerText = "X homens"
const womenGuests = document.createElement("i");
womenGuests.innerText = "X mulheres"
const kidGuests = document.createElement("i");
kidGuests.innerText = "X crianças"

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

const totalGuestInputGroup = document.createElement("div");
totalGuestInputGroup.classList.add("input-group-result")

resultRow.appendChild(resultTotalGuest);

resultTotalGuest.appendChild(resultParagraph);

resultTotalGuest.appendChild(totalGuest);

resultTotalGuest.appendChild(guestList);

resultTotalGuest.appendChild(menGuests);
resultTotalGuest.appendChild(womenGuests);
resultTotalGuest.appendChild(kidGuests);

resultRow.appendChild(totalGuestInputGroup);
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