

console.log('Esercizio Biglietti del treno')


//chiedere km da percorrere all'utente
let km = prompt('Inserisci i km che vuoi percorrere');
console.log(km + ' km ')

//chiedere l'età all'utente
let eta = prompt('Inserisci la tua età');
console.log(eta + ' anni ');

//calcolare il prezzo base in base ai km da percorrere
let prezzoPerKm = (km * 0.21);


//calcolare il prezzo in base all'età

document.addEventListener("DOMContentLoaded", function () {

    let risultato

    if (eta < 18) {
        //calcolo per minori di 18 anni
        let calcoloSconto18 = (prezzoPerKm * 20) / 100;
        console.log('Lo sconto applicato per i minori è di ' + calcoloSconto18 + ' euro');

        let prezzoScontato18 = (prezzoPerKm - calcoloSconto18);
        risultato = prezzoScontato18;
        console.log('Il prezzo scontato del biglietto è di ' + prezzoScontato18 + ' euro');

        //calcolo per over 65
    } else if (eta > 65) {
        let calcoloSconto65 = (prezzoPerKm * 40) / 100;
        console.log('Lo sconto applicato per gli over 65 è di ' + calcoloSconto65 + ' euro');

        let prezzoScontato65 = (prezzoPerKm - calcoloSconto65);
        risultato = prezzoScontato65;
        console.log('Il prezzo scontato del biglietto è di ' + prezzoScontato65 + ' euro');

    } else {
        risultato = prezzoPerKm;
        console.log('Il prezzo è di ' + prezzoPerKm + ' euro');

    }

    function formattaPrezzo(prezzoPerKm) {
        return prezzoPerKm.toFixed(2);
    }

    function formattaPrezzo(prezzoScontato18) {
        return prezzoScontato18.toFixed(2);
    }

    function formattaPrezzo(prezzoScontato65) {
        return prezzoScontato65.toFixed(2);
    }
    //Stampa risultato
    document.getElementById("risultato").textContent = risultato;
});

