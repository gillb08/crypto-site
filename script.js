var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");
var xrp = document.getElementById("ripple");

var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cripple%2Cdogecoin&vs_currencies=USD",
    "method": "GET",
    "headers":{}
}
$.ajax(settings).done(function(response){
    btc.innerHTML = response.bitcoin.USD;
    eth.innerHTML = response.ethereum.USD;
    doge.innerHTML = response.dogecoin.USD;
    xrp.innerHTML = response.ripple.USD;
    console.log(response);
});