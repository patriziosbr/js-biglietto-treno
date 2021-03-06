// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// prompt km da percorrere
var inputKm = prompt('chilometri da percorrere');
var chilometri = parseInt(inputKm);
document.getElementById('fare').innerHTML = chilometri;
// console.log(chilometri); ok

// prompt eta passegero
var inputEta = prompt('età passegero');
var eta = parseInt(inputEta);
document.getElementById('age').innerHTML = eta;


// prezzo km 0.21
var prezzoBase = chilometri * 0.21;
// console.log("prezzo base " + prezzoBase); ok

if ( eta < 18 ) {
    var scontoVenti = (prezzoBase * 20) / 100;
    var priceUnder = prezzoBase - scontoVenti;
    var priceKid =  " scontato del 20% " + Math.round((priceUnder + Number.EPSILON) * 100 ) / 100 + "€" ;
    document.getElementById('price').innerHTML = priceKid;
    document.getElementById('kid').style.display = 'block';
} else if  ( eta >= 65 ) {
    var scontoQuaranta = (prezzoBase * 40) / 100; 
    var priceOver = prezzoBase - scontoQuaranta;
    var priceOld = " scontato del 40% " + Math.round((priceOver + Number.EPSILON) * 100) / 100 + "€";
    document.getElementById('price').innerHTML = priceOld;
    document.getElementById('senior').style.display = 'block';
} else {
    var defultSimple = Math.round((prezzoBase + Number.EPSILON) * 100) / 100
    var priceDefault = " " + defultSimple + "€";
    document.getElementById('price').innerHTML = priceDefault
    document.getElementById('adult').style.display = 'block';
}





//sconto < 18 = 20%

//sconto > 65 = 40%

// inner html prezzo con decimali 

