// creare un prompt di richiesta e-mail 

const userMail = prompt('Inserisci la tua e-mail');
console.log(userMail);

// creare un array con la lista delle e-mail abilitate 

let mailList = ['ugodeughi@example.it', 'simo.a@example.it', 'booleaners@example.it', 'array@example.it', 'itsfriday@example.it'];
console.log(mailList);

let validMail = false

// creare un ciclo for per confronto con lista e-mail nell'array 

for (let i = 0; i < mailList.length; i++){
  let mailVerified = mailList[i];

  if (userMail === mailVerified) {
    validMail = true
    console.log(validMail); 
  }
}

// stampare un messaggio appropriato in base all'esito della verifica 

if(validMail){
  alert('Benvenuto!')
}else{
  alert('E-mail non trovata!')
}


// DADI GAME //

// creare 2 const con calcolo numero random da 1 a 6 per giocatore e pc 

const userDado = Math.floor(Math.random() * 6) +1;
const pcDado = Math.floor(Math.random() * 6) +1;
console.log(userDado,pcDado); 

// creare una variabile per stabilire il risultato 
let whoWin;

// scrivere condizione if per stabilire il risultato

if (userDado === pcDado){
  whoWin = 'Parità!'
} else if (userDado > pcDado){
  whoWin = 'Hai vinto!'
} else if (userDado < pcDado){
  whoWin = 'Hai Perso!'
}

console.log(whoWin);

// stampo in pagina 
document.getElementById('user').innerHTML = `<p> Tu: ${userDado} </p>`; 
document.getElementById('pc').innerHTML = `<p> Pc: ${pcDado} </p>`;
document.getElementById('result').innerHTML = whoWin;
