function validateInput(){
    const numberMen = parseInt(menInput.value);
    const numberWomen = parseInt(womenInput.value);
    const numberKid = parseInt(kidInput.value);
    const numberAlcBev = parseInt(alcoholicInput.value);
    const totalGuest = numberMen + numberWomen + numberKid;

    if (isNaN(numberMen) || isNaN(numberWomen) || isNaN(numberKid) || isNaN(numberAlcBev)){
        document.getElementById("invalid-input").style.visibility = "visible";
        throw Error ("Por favor, insira somente números!")
    }else{
        document.getElementById("invalid-input").style.visibility = "hidden";
    }

    if (totalGuest === 0){
        document.getElementById("no-input").style.visibility = "visible";
        throw Error ("Por favor, selecione a quantidade de pessoas!")
    }else{
        document.getElementById("no-input").style.visibility = "hidden";
    }
}