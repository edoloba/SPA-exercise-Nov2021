let moneyAmount = document.querySelector(".money-amount");

moneyAmount.addEventListener("click", function () {
  let cryptoInput = document.querySelector("#inputGroupSelect01").value;
  let moneyInput = document.querySelector("#inputGroupSelect02").value;
  let number = Number(document.querySelector(".crypto-amount"));
  let result = document.getElementsByClassName("result");

  fetch(`https://api.cryptonator.com/api/ticker/${cryptoInput}-${moneyInput}`)
    .then((response) => response.json())
    .then((data) => {
        result.innerText = data.ticker.price * number;
    //   console.log(data.ticker.price);
    });
});

// let btc = document.querySelector('#btc');
// let eos = document.querySelector('#eos');
// let xrp = document.querySelector('#xrp');
// let eth = document.querySelector('#eth');
// let ltc = document.querySelector('#ltc');

// let usd = document.querySelector('#usd');
// let eur = document.querySelector('#eur');
// let gbp = document.querySelector('#gbp');
// let aud = document.querySelector('#aud');
// let hk = document.querySelector('#hk');

// function firstConvert(){
// if(cryptoSelection === btc && moneySelection === usd) {
//     return btcToUs(result)
// }
// }

// async function btcToUs() {
//     let response = await fetch('https://api.cryptonator.com/api/ticker/');
//     let dataCry1 = await response.json();
//     console.log(dataCry1);
// }
// console.log(btcToUs(firstConvert));
