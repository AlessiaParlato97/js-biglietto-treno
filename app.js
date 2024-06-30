console.log('Esercizio Biglietti del treno')


//chiedere km da percorrere all'utente
let km = prompt('Inserisci i km che vuoi percorrere');
console.log(km)

//chiedere l'età all'utente
let eta = prompt('Inserisci la tua età');
console.log(eta);

//calcolare il prezzo base in base ai km da percorrere
let prezzoPerKm = (km * 0.21); 2

//calcolare il prezzo in base all'età

//calcolo per minori
if (eta < 18) {
    let calcoloSconto18 = (prezzoPerKm * 20) / 100;
    console.log('Lo sconto applicato per i minori è di ' + calcoloSconto18 + ' euro');

    let prezzoScontato18 = (prezzoPerKm - calcoloSconto18);
    console.log('Il prezzo scontato del biglietto è di ' + prezzoScontato18 + ' euro');

} else if (eta > 65) {
    let calcoloSconto65 = (prezzoPerKm * 40) / 100;
    console.log('Lo sconto applicato per gli over 65 è di ' + calcoloSconto65 + ' euro');

    let prezzoScontato65 = (prezzoPerKm - calcoloSconto65);
    console.log('Il prezzo scontato del biglietto è di ' + prezzoScontato65 + ' euro');

} else {
    console.log('Il prezzo è di ' + prezzoPerKm + ' euro');
}