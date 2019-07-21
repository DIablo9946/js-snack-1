// Utente inserisce due numeri in successione con due prompt.
// Il software stampa quello maggiore.


// Mi preparo le var
var stampa, num1, num2;

stampa = document.getElementById('my');

// Faccio inserire ad utente due numeri

num1 = parseInt(prompt("Inserisci un numero"));

num2 = parseInt(prompt("Inserisci un altro numero"));

// Faccio stampare il numero più grande

if (num1 > num2){
  stampa.innerHTML = num1;
} else if (num1 == num2){
  stampa.innerHTML = "Numeri sono uguali";
} else {
  stampa.innerHTML = num2;
}
