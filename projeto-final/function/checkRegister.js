const customer = {
    name: nameInput.value,
    email: emailInput.value,
    cep: postalCodeInput.value
};

function checkRegister() {
    const checkCustomer = localStorage.getItem("customer");
    if (checkCustomer) {
        removeRegisterPage();
        addResultPage();
    }
}

function checkName(){
    if (!nameInput.value || !isNaN(nameInput.value)) {
        console.log("Nome inválido");
        document.getElementById("invalid-name").style.visibility = "visible";
        throw Error("Nome inválido");
    }else{
        document.getElementById("invalid-name").style.visibility = "hidden";
    }
}

function checkEmail(){
    const validEmail = emailInput.value.includes("@");

    if (!validEmail){
        console.log("Email inválido");
        document.getElementById("invalid-email").style.visibility = "visible";
        throw Error("E-mail inválido");
    }else{
        document.getElementById("invalid-email").style.visibility = "hidden";
    }
}

async function checkPostalCode(){
    api.getAddressByPostalCode(postalCodeInput.value)
        .then(async (response) => {
            localStorage.setItem("customer", JSON.stringify({...customer,response}));
            document.getElementById("error-postal-code").style.visibility = "hidden";

            await checkAllFieldComplete();
            await sendPromotionalEmail();
        })
        .catch((error) => {
            console.log(error);
            document.getElementById("error-postal-code").style.visibility = "visible";
            throw Error("CEP inválido");
        });
}
async function checkAllFieldComplete() {
    const checkCustomer = localStorage.getItem("customer");
    if (checkCustomer) {
        removeRegisterPage();
        addResultPage();
    }
}
