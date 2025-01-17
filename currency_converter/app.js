const base_URL = " https://v6.exchangerate-api.com/v6/3c578a8aa0b50d1a69f25a6c/latest";

const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

window.addEventListener("load", () =>{
    updateExchangeRate();
});


let i= 0;
for(let select of dropdown){
    for(currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText= currCode;
        newOption.value = currCode;//here what is the meaning of value
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected";
        } else if(select.name === "to" && currCode === "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change",(evt) => {
        updateFlag(evt.target);
    });
}

const updateFlag = (eleme) =>{
    let currCode = eleme.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=  eleme.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click" ,  (evt) =>{
    evt.preventDefault();
    updateExchangeRate();
});

const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if(amtVal === "" || amtVal < 1){
        amtVal =1;
        amount.value = "1";
    }
    const URL = `${base_URL}/${fromCurr.value}`;
    let response = await fetch(URL);
    
    let fromCurrData = await response.json();
    let toCurrRate = fromCurrData.conversion_rates[toCurr.value];
    let finalAmount=amtVal*toCurrRate;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}` 
}
