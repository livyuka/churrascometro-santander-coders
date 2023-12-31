function calculateItems() {
    const numberMen = parseInt(menInput.value);
    const numberWomen = parseInt(womenInput.value);
    const numberKid = parseInt(kidInput.value);
    const numberAlcBev = parseInt(alcoholicInput.value);
    const numberAdult = numberMen + numberWomen;
    const numberGuest = numberAdult + numberKid;

    // Summary of guest number
    if (numberGuest === 1){
        totalGuest.innerText = numberGuest + " convidado"
    }else{
        totalGuest.innerText = numberGuest + " convidados"
    }
    if (numberMen === 1){
        menGuests.innerText = numberMen + " homem";
    }else{
        menGuests.innerText = numberMen + " homens";
    }
    if (numberWomen === 1){
        womenGuests.innerText = numberWomen+ " mulher"
    }else{
        womenGuests.innerText = numberWomen+ " mulheres"
    }
    if (numberKid === 1){
        kidGuests.innerText = numberKid + " criança"
    }else{
        kidGuests.innerText = numberKid + " crianças"
    }

    //All Factors are per person or per group as detailed

    //Calculate Meat Amount
    const meatMenFactor = 0.4;
    const meatWomemFactor = 0.32;
    const meatKidFactor = 0.2;
    const meatAmountResult = numberMen * meatMenFactor + numberWomen * meatWomemFactor + numberKid * meatKidFactor;
    meatAmount.innerText = meatAmountResult.toFixed(1) + " kg";

    //Calculate Bread Amount
    const breadAdultFactor = 2;
    const breadKidFactor = 1;
    const breadAmountResult = numberAdult * breadAdultFactor + numberKid * breadKidFactor;
    breadAmount.innerText = breadAmountResult + " unidades";

    //Calculate Soda Amount
    const sodaFactor = 0.2;
    const sodaAmountResult = numberGuest * sodaFactor;
    if (sodaAmountResult <= 1){
        sodaAmount.innerText = Math.ceil(sodaAmountResult) + " garrafa de 2 L";
    }else{
        sodaAmount.innerText = Math.ceil(sodaAmountResult) + " garrafas de 2 L";
    };

    //Calculate Water Amount
    const waterFactor = 0.2;
    const waterAmountResult = numberGuest * waterFactor;
    if (waterAmountResult <= 1){
        waterAmount.innerText = Math.ceil(waterAmountResult) + " garrafa de 1 L";
    }else{
        waterAmount.innerText = Math.ceil(waterAmountResult) + " garrafas de 1 L";
    };

    //Calculate Beer Amount
    const beerFactor = 3;
    const beerAmountResult = numberAlcBev * beerFactor;
    beerAmount.innerText = beerAmountResult + " garrafas de 600mL";

    //Calculate Charchoal Amount
    const charchoalFactor = 1;
    const charchoalAmountResult = numberGuest * charchoalFactor;
    charchoalAmount.innerText = charchoalAmountResult + " kg";

    //Calculate Salt Amount
    const saltFactor = 0.04;
    const saltAmountResult = numberGuest * saltFactor;
    saltAmount.innerText = saltAmountResult + " kg";

    //Calculate Ice Amount
    const iceFactor = 0.5;
    const iceAmountResult = numberGuest * iceFactor;
    iceAmount.innerText = iceAmountResult + " kg";
}