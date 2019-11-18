//chiedi al utente il cognome


var cognome = [];
cognome_utente = prompt('Inserisci il tuo cognome');
console.log(cognome);

// Creazione di un array con i cognomi
var lista_cognomi =['Fortunio', 'Torres', 'Parejo', 'Amatista'];
console.log(lista_cognomi);

// inserisco il cognome inserito dal utente nella nostra lista di cognomi

cognome.push(cognome_utente);
console.log(cognome);


// ordinare alfabeticamente


lista_cognomi = lista_cognomi.sort();
console.log(lista_cognomi);


console.log(lista_cognomi.concat(cognome));
