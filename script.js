// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// Il computer deve generare 16 numeri casuali tra 1 e 100.

var arrayBombe = [];
var maxBombe = 16;
// devo generare 16 numeri ma non devono esserci doppioni
while (arrayBombe.length < maxBombe) {
  var bomba = numCasualeCpu(1, 50);
  if(inArray(arrayBombe, bomba) == false) {
    arrayBombe.push(bomba);
  }
}
console.log(arrayBombe);

var arrayUtente = [];
var maxTentativi = 100 - 16;
var punti = 0;
var i = 0;

var trovato = false;
while (arrayUtente.length < maxTentativi && trovato == false) {
  var numero = parseInt(prompt('Inserisci un numero'));
  // se il numero e nel range allora controllo se e in arrayBombe
  // se non e in bombe allora lo pusho nel mio array
  if(isInRange(1, 100, numero) == true && inArray(arrayBombe, numero) == false && inArray(arrayUtente, numero) == false) {
    arrayUtente.push(numero);
    punti++;
  }

  if(inArray(arrayBombe, numero)) {
    trovato = true;
    console.log('Bomba!');
  }

  if (punti == maxTentativi) {
    console.log('hai vinto!');
  }
}

console.log('punti', punti);


// functions
//
function inArray (array, elemento) {
  var i = 0;
  var trovato = false;
  // questo ciclo si deve interompere se raggiungo la lunghezza dell'array oppure se trovo coorispondenza
  while (i < array.length && trovato == false) {
    if(array[i] == elemento) {
      trovato = true;
    }
    i++
  }

  return trovato;
}

function numCasualeCpu(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}

//l-utente non puo inserire elementi che non siano numeri e che non siano nel range giusto
function isInRange(min, max, num) {

  if(num >= min && num <= max && !isNaN(num)) {
    return true;
  }
  return false;
}
