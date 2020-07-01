// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

//passo 1 - computer deve generare 16 numeri casuali tra 1 e 100
// se deve generare più numeri abbiamo bisogno di un array in cui posizionarli:
arrayBombe = [];
//generiamo i numeri casuali che però non siano mai uguali tra loro con il ciclo while.
//fintanto che arrivi a 16 genera un numero a caso da 1 a 100 e poi esci, se il numero è uguale prosegui fino alla fine:

var numBombe = 16;

while(arrayBombe.length < numBombe){
  var bombe = numeroCasualeComputer(1,100);

  if(verifica(arrayBombe, numBombe) != true){
    arrayBombe.push(bombe);
  }
}
console.log(arrayBombe);
//chiedere all'utente di inserire un numero fino a quando non ne trova uno presente nell'arrayBombe
//ci serve dove salvare i numeri dell'utente
//finchè non supera il numero di caselle del campo minato (16) o non trova un numero presente nell'array Bombe, dammi un numero che vada da 1 a 100 e che non si ripeta.
arrayUtente = [];
var maxTentativi = 10 - 5;
i = 0;

//l'utente inserisce numeri finchè può o finchè non trova il numero bomba
trovato = false;
while(arrayUtente.length < maxTentativi && trovato==false){
  var numUtente = parseInt(prompt('Dammi un numero da 1 a 100'));
arrayUtente.push(numUtente);

   if((verifica(numBombe, numUtente)) = true){
     console.log('Bomba!');
   }


}

console.log(arrayUtente);


//Funzioni
//numero randomico
function numeroCasualeComputer(min, max) {
 min = Math.ceil(min);
 max = Math.floor(max);
 var result = Math.floor(Math.random() * (max - min + 1)) + min;
 return result;
 }

// verifica che il numero non sia uguale all'altro ossia se è già presente nell'arrayBombe
//includes
function verifica(array, numero) {
  i = 0;
  trovato = false;
  while (i < array.lenght && trovato == false){
    if (numero == array[i]){
      trovato = true;
    }
  }
  return trovato;
}
