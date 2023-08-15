const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const playzintoconvert = document.querySelector(".playzin-to-convert")
    const playzi= document.querySelector(".playzi")

  

    const dolarToday = 4.96
    const euroToday = 5.49

    const convertedValue = inputCurrencyValue / dolarToday




    if(currencySelect.value == "dolar"){
        playzi.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }


    
    if(currencySelect.value =="euro"){
      playzi.innerHTML = new Intl.NumberFormat("de-De",{
        style: "currency",
        currency: "EUR"
      }).format(inputCurrencyValue/euroToday)
    }

    playzintoconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    

    }


 function changeCurrency(){
  const Guedesplay = document.getElementById("Guedesplay")
  const currencyImage = document.querySelector(".currency-img")

 if(currencySelect.value == "dolar") {
    Guedesplay.innerHTML = "Dólar americano"
    currencyImage.src = ""

   }

 
 if(currencySelect.value == "euro"){
  Guedesplay.innerHTML = "Euro"
  currencyImage.src = "."
}

 
  
  }


currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click",convertValues)



