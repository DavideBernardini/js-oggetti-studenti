// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.

var studente = {
    'nome': 'Mario',
    'cognome': 'Rossi',
    'età': 28
};

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (var key in studente) {
    console.log(`${key} : ${studente[key]}`);
}

// Creare un array di oggetti di studenti.
var studenti = [
    {
        'nome': 'Luigi',
        'cognome' : 'Verdi',
        'età': 35
    },
    {
        'nome': 'Aldo',
        'cognome' : 'Bianchi',
        'età': 27
    },
];

studenti.push(studente);

// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var nomeUtente = prompt('Inserisci il tuo nome.');

while (isNaN(parseInt(nomeUtente)) == false || nomeUtente.length < 3 || nomeUtente == undefined) {
    nomeUtente = prompt('Inserisci un nome valido.');
}

var cognomeUtente = prompt('Inserisci il tuo cognome.');

while (isNaN(parseInt(cognomeUtente)) == false || cognomeUtente.length < 3 || cognomeUtente == undefined) {
    cognomeUtente = prompt('Inserisci un cognome valido.');
}

var etàUtente = parseInt(prompt('Inserisci la tua età.'));

while (isNaN(etàUtente)) {
    etàUtente = parseInt(prompt("Inserisci un' età valida."));
}
while (etàUtente < 18 || etàUtente > 65) {
    etàUtente = parseInt(prompt('Gli studenti devono essere maggiorenni e non possono avere più di 65 anni.'));
}

nuovoStudente = {
    'nome': nomeUtente,
    'cognome': cognomeUtente,
    'età': etàUtente
};

studenti.push(nuovoStudente);

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for ( var i = 0; i < studenti.length; i++ ) {
    console.log(`${i + 1}° studente: ${studenti[i]['nome']} ${studenti[i]['cognome']}`);
}